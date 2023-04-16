import { ViewTemplate } from "../templates";
import { FC, media } from "../vendor";
import SimpleImageSlider from "react-simple-image-slider";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../settings/colors";
const project1 = require('../../images/cent-1.png');
const project2 = require('../../images/cent-2.png');
const project3 = require('../../images/cent-3.png');
const project4 = require('../../images/cent-4.png');
const project5 = require('../../images/cent-5.png');
const project6 = require('../../images/cent-6.png');
const project7 = require('../../images/cent-7.png');

interface IProps {

}

const ProjectDetails: FC<IProps> = (props) => {
  const { id } = useParams()
  
  const images = [
    { url: project1 },
    { url: project2 },
    { url: project3 },
    { url: project4 },
    { url: project5 },
    { url: project6 },
    { url: project7 }
  ];

  const projectDetails = {
    '1': {
      title: 'Centennial College Website',
      desc: 'A responsive website that shares information about its programs, faculty, facilities, and events with students, faculty, staff, alumni, and the general public.',
      link: '//centennialcollege.ca',
      skills: 'React, TypeScript, Umbraco, Storybook, Styled-component, Jest',
      keyPoints: 'design system(storybook), CMS(Umbraco), optimization(lazy loading using react-visibility-sensor - set images & iframes after it is visible, code splitting, defer script loading, a11y using Axe devTools), customized visual components'
    },
    '2': {
      title: 'Centennial College Website',
      desc: 'A responsive website that shares information about its programs, faculty, facilities, and events with students, faculty, staff, alumni, and the general public.',
      link: '//centennialcollege.ca',
      skills: 'React, TypeScript, Umbraco, Storybook, Styled-component, Jest',
      keyPoints: 'design system(storybook), CMS(Umbraco), optimization(lazy loading using react-visibility-sensor - set images & iframes after it is visible, code splitting, defer script loading, a11y using Axe devTools), customized visual components'
    },
  }

  return (
    <ViewTemplate>
      <ProjectDetailsWrapper>
        <SlideWrapper>
          <SimpleImageSlider
            width={800}
            height={400}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </SlideWrapper>
        <Description>
          <UpperWrapper>
            <ul>
              <li>{projectDetails[id].title}</li>
              <li>{projectDetails[id].desc}</li>
              <li>{projectDetails[id].link}</li>
            </ul>
            <Button href={projectDetails[id].link} target="_blank">View Website</Button>
          </UpperWrapper>
          <LowerWrapper>
            <ul>
              <li>{projectDetails[id].skills}</li>
              <li>{projectDetails[id].keyPoints}</li>
            </ul>
          </LowerWrapper>
        </Description>
      </ProjectDetailsWrapper>
    </ViewTemplate>
  );
};

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${colors.white};
  background: ${colors.blue};
  width: 120px;
  height: 50px;
`

const UpperWrapper = styled.div`
  height: 45%;
  background: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
`

const LowerWrapper = styled.div`
  height: 45%;
  background: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
`

const Description = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;

  ${media.screenSm} {
    width: 100%;
  }
`

const SlideWrapper = styled.div`
  width: 65%;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;

  ${media.screenSm} {
    width: 100%;
  }
`

const ProjectDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.screenSm} {
    flex-direction: column;
  }
`

export { ProjectDetails } ;
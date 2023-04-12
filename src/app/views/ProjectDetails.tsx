import { ViewTemplate } from "../templates";
import { FC } from "../vendor";
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
  const { project } = useParams()
  
  const images = [
    { url: project1 },
    { url: project2 },
    { url: project3 },
    { url: project4 },
    { url: project5 },
    { url: project6 },
    { url: project7 }
  ];

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
          {project}
          </UpperWrapper>
          <LowerWrapper>
          {project}
          </LowerWrapper>
        </Description>
      </ProjectDetailsWrapper>
    </ViewTemplate>
  );
};

const UpperWrapper = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;
`

const LowerWrapper = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;
`

const Description = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;
  margin-left: 50px;
`

const SlideWrapper = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;
`

const ProjectDetailsWrapper = styled.div`
  display: flex;
`

export { ProjectDetails } ;
import { ViewTemplate } from "../templates";
import { FC } from "../vendor";
import SimpleImageSlider from "react-simple-image-slider";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../settings/colors";
const project1 = require('../../images/cent_1.png');
const project2 = require('../../images/copay-home.png');
const project3 = require('../../images/epay-admin-home.png');
const project4 = require('../../images/epay-public-home.png');
const project5 = require('../../images/myrx-home.png');

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
  ];

  return (
    <ViewTemplate>
      <div>{project}</div>
      <SlideWrapper>
        <SimpleImageSlider
          width={800}
          height={400}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </SlideWrapper>
    </ViewTemplate>
  );
};

const SlideWrapper = styled.div`
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 3px 3px #EAE0DA;
  overflow: hidden;
  border: 3px solid #e5e5e5;

`

export { ProjectDetails } ;
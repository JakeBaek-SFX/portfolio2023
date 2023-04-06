import { ViewTemplate } from "../templates";
import { FC } from "../vendor";
import SimpleImageSlider from "react-simple-image-slider";
import { useParams } from "react-router-dom";
const project1 = require('../../images/centennial-home.png');
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
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </ViewTemplate>
  );
};

export { ProjectDetails } ;
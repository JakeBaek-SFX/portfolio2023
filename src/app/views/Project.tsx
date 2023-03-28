import { FC, Carousel, styled } from "../vendor";
import { ViewTemplate } from "../templates";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../components";
import { media } from "k2-media";

const project1 = require('../../images/centennial-home.png');
const project2 = require('../../images/copay-home.png');
const project3 = require('../../images/epay-admin-home.png');
const project4 = require('../../images/epay-public-home.png');
const project5 = require('../../images/myrx-home.png');

interface IProps {

}

const Project: FC<IProps> = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <ViewTemplate>
      <ContentWrapper>
        <Carousel responsive={responsive}>
          <Card src={project1} title="title1" description="desc1"/>
          <Card src={project2} title="title2" description="desc2"/>
          <Card src={project3} title="title3" description="desc3"/>
          <Card src={project4} title="title4" description="desc4"/>
          <Card src={project5} title="title4" description="desc4"/>
        </Carousel>
      </ContentWrapper>
    </ViewTemplate>
  );
};

const ContentWrapper = styled.div`
  width: 1200px;

  ${media.screenSm} {
    width: 500px;
  }

  ul {
    padding: 20px 0;
  }

  li {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    aligh-items: center;
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right{
    right: 0;
  }
`

export { Project } ;
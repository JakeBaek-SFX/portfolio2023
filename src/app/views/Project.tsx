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
          <Card 
            src={project1} 
            title="Centennial College Website" 
            description="A responsive website that shares information about its programs, faculty, facilities, and events with students, faculty, staff, alumni, and the general public."
            skills="React, TypeScript, Umbraco, Storybook, Styled-component, Jest"
          />
          <Card
            src={project2}             
            title="Co-Pay Web App" 
            description="A web application that helps users to save expense on prescription drug coverage that requires them to pay a portion of the cost of the drug while the insurance company covers the remainder of the cost."
            skills="React, TypeScript, Storybook, Styled-component, GraphQL, RESTful API, Jest"
          />
          <Card
            src={project3} 
            title="E-Pay admin Web App" 
            description="A responsive web application that allows administrators to manage their clients and drug programs."
            skills="C#, .NET, React, TypeScript, Storybook, Styled-component, RESTful API, Jest"
          />
          <Card 
            src={project4} 
            title="E-Pay public Web App" 
            description="A responsive web application that allows users(pharmacists and patients) to submit claims, check claim history, and download reports."
            skills="React, TypeScript, Storybook, Styled-component, RESTful API            "
          />
          <Card 
            src={project5}
            title="Patient Enrolment Web App" 
            description="A responsive web application that provides users (patients and healthcare providers) electronic pharmacy enrolment process navigation, health care resources and support."
            skills="React, TypeScript, Storybook, Styled-component, RESTful API, Jest"
          />
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
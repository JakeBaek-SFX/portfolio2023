import { FC, Carousel, styled } from "../vendor";
import { ViewTemplate } from "../templates";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../components";
import { media } from "k2-media";

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
          <Card title="title1" description="desc1"/>
          <Card title="title2" description="desc2"/>
          <Card title="title3" description="desc3"/>
          <Card title="title4" description="desc4"/>
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

  li {
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
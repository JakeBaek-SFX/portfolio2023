import { colors } from "../settings/colors";
import { ViewTemplate } from "../templates";
import { FC, styled } from "../vendor";

interface IProps {

}

const Home: FC<IProps> = (props) => {

  return (
    <ViewTemplate>
      <ContentWrapper>
        <Title>
          <p>Hello! My name is</p>
          <ColoredWrapper>Jake Baek</ColoredWrapper>
          <p>I am a front end web developer.</p>
        </Title>
        <ButtonWrapper>
          <a>View Projects</a>
        </ButtonWrapper>
      </ContentWrapper>
    </ViewTemplate>
  );
};

const ColoredWrapper = styled.p`
  color: ${colors.blue};
  font-size: 50px;
`

const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 50px;

  p {
    margin: 10px 0;
  }
`

const ButtonWrapper = styled.div`
  border: 2px solid ${colors.black};
  border-radius: 20px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export { Home } ;
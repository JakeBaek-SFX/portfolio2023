import { ViewTemplate } from "../templates";
import { FC, styled } from "../vendor";

interface IProps {

}

const Home: FC<IProps> = (props) => {

  return (
    <ViewTemplate>
      <Title>
        <p>Hi! I am Jake Baek.</p>
        <p>I am a front end web developer.</p>
      </Title>
    </ViewTemplate>
  );
};

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`

export { Home } ;
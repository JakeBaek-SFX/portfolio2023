import { colors } from "../settings/colors";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  title: string;
  description: string;
  src: string;
  skills: string;
}

const CardContainer: FC<IProps> = (props) => {
  const { className, title, description, src, skills } = props;
  return (
    <div {...{ className }}>
      <img src={src} />
      <Contents>
        <p>{title}</p>
        <p>{description}</p>
        <p>{skills}</p>
      </Contents>
    </div>
  );
};

const Contents = styled.div`  
  margin-top: 30px;


`

const Card = styled(CardContainer)`
  padding: 20px;
  transition: all .2s ease-in-out;
  
  &: hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 450px;
  background: ${colors.white};
  border-radius: 10px;

  img {
    width: 90%;
    height: 40%;
  }
`

export { Card } ;
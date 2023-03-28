import { colors } from "../settings/colors";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  title: string;
  description: string;
  src: string;
}

const CardContainer: FC<IProps> = (props) => {
  const { className, title, description, src } = props;
  return (
    <div {...{ className }}>
      <img src={src} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Card = styled(CardContainer)`
  transition: all .2s ease-in-out;
  
  &: hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 400px;
  background: ${colors.white};
  border-radius: 10px;

  img {
    width: 90%;
    height: 40%;
  }
`

export { Card } ;
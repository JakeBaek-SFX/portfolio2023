import { colors } from "../settings/colors";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  title: string;
  description: string;
}

const CardContainer: FC<IProps> = (props) => {
  const { className, title, description } = props;
  return (
    <div {...{ className }}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Card = styled(CardContainer)`
  width: 300px;
  height: 400px;
  background: ${colors.white};
`

export { Card } ;
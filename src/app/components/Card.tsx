import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
}

const CardContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      Card
    </div>
  );
};

const Card = styled(CardContainer)`

`

export { Card } ;
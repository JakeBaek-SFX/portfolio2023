import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const MainContainer: FC<IProps> = (props) => {
  const { className, children } = props;
  return (
    <div {...{ className }}>
      {children}
    </div>
  );
};

const Main = styled(MainContainer)`
  border: 1px solid yellow;
`

export { Main } ;
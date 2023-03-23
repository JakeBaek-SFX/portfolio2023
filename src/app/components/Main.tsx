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
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Main } ;
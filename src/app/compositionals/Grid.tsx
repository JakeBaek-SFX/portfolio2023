import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const GridContainer: FC<IProps> = (props) => {
  const { className, children } = props;
  return (
    <div {...{ className }}>

        {children}

    </div>
  );
};

const Grid = styled(GridContainer)`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  position: relative;
`


export { Grid } ;
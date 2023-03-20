import { Footer, Header, Main } from "../components";
import { Grid } from "../compositionals/Grid";
import { colors } from "../settings/colors";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const ViewTemplateContainer: FC<IProps> = (props) => {
  const { className, children } = props;
  return (
    <div {...{ className }}>
      <Grid>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Grid>
    </div>
  );
};

const ViewTemplate = styled(ViewTemplateContainer)`
  height: 100%;
  background: ${colors.black};
  color: ${colors.white};
`

export { ViewTemplate } ;
import { Footer, Header, Main } from "../components";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const ViewTemplateContainer: FC<IProps> = (props) => {
  const { className, children } = props;
  return (
    <div {...{ className }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

const ViewTemplate = styled(ViewTemplateContainer)`
  border: 1px solid yellow;
`

export { ViewTemplate } ;
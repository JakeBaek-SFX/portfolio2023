import { Footer, Header, Main } from "../components";
import { colors } from "../settings/colors";
import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const ViewTemplateContainer: FC<IProps> = (props) => {
  const { className, children } = props;
  console.log('children', children);
  
  return (
    <div {...{ className }}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

const ViewTemplate = styled(ViewTemplateContainer)`
  height: 100%;
  background: ${colors.pink};
  color: ${colors.black};
`

export { ViewTemplate } ;
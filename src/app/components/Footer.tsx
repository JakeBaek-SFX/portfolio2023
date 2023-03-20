import { FC, styled } from "../vendor";

interface IProps {
  className?: string;
}

const FooterContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      Footer
    </div>
  );
};

const Footer = styled(FooterContainer)`
  height: 50px;
  border: 1px solid blue;
`

export { Footer } ;
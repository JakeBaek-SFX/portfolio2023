import { FC, styled } from "../vendor";
import { Grid } from '../compositionals/Grid';
import { colors } from "../settings/colors";

interface IProps {
  className?: string;
}

const FooterContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      <Grid>
      Footer
      </Grid>
    </div>
  );
};

const Footer = styled(FooterContainer)`
  background: ${colors.grey};
  height: 50px;
  color: ${colors.white};

  ${Grid} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export { Footer } ;
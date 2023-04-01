import { styled, FC } from '../vendor';
import { Navigation } from './Navigation';
import { Grid } from '../compositionals/Grid';

interface IProps {
  className?: string;
}

const HeaderContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      <GridWrapper>
        <LogoWrapper><span>JAKE BAEK</span></LogoWrapper>
        <Navigation />
      </GridWrapper>
    </div>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
`

const GridWrapper = styled(Grid)`
  display: flex;
  justify-content: space-between;
  height: 50px;
`

const Header = styled(HeaderContainer)`

`

export { Header };
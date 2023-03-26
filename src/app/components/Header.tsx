import { styled, FC } from '../vendor';
import { Navigation } from './Navigation';

interface IProps {
  className?: string;
}

const HeaderContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      <LogoWrapper><span>JAKE BAEK</span></LogoWrapper>
      <Navigation />
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

const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  height: 50px;
`

export { Header };
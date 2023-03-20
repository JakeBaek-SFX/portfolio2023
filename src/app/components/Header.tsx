import { colors } from '../settings/colors';
import { styled, FC } from '../vendor';
import { Navigation } from './Navigation';

interface IProps {
  className?: string;
}

const HeaderContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      <div>LOGO</div>
      <Navigation />
    </div>
  );
};

const Header = styled(HeaderContainer)`
  display: flex;
  height: 50px;
  border: 1px solid red
`

export { Header };
import { styled, FC } from '../vendor';
import { Navigation } from './Navigation';

interface IProps {
  className?: string;
}

const HeaderContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      header
      <Navigation />
    </div>
  );
};

const Header = styled(HeaderContainer)`
  border: 1px solid red
`

export { Header };
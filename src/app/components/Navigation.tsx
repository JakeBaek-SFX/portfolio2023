import { FC, NavLink, styled } from "../vendor";

interface IProps {
  className?: string;
}

const NavigationContainer: FC<IProps> = (props) => {
  const { className } = props;
  return (
    <div {...{ className }}>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-me'>AboutMe</NavLink></li>
        <li><NavLink to='/project'>Project</NavLink></li>
      </ul>
    </div>
  );
};

const Navigation = styled(NavigationContainer)`
  border: 1px solid yellow;
`

export { Navigation } ;
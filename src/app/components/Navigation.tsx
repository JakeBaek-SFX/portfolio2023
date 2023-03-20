import { colors } from "../settings/colors";
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

  ul {
    display: flex;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }
`

export { Navigation } ;
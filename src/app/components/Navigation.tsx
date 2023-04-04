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
  display: flex;
  align-items: center;
  font-size: 20px;

  ul, li, a {    
    display: flex;
  }

  ul {
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
  }

  li {
    flex-grow: 1;
  }

  a {
    padding-left: 50px;
    text-decoration: none;
    color: ${colors.black};
  }
`

export { Navigation } ;
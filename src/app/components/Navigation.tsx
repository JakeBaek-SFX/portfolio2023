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
        <li><NavLink to='/'><span>Home</span></NavLink></li>
        <li><NavLink to='/about-me'><span>AboutMe</span></NavLink></li>
        <li><NavLink to='/project'><span>Project</span></NavLink></li>
      </ul>
    </div>
  );
};

const Navigation = styled(NavigationContainer)`
  display: flex;
  align-item: center;
  font-size: 20px;

  ul, li, a {    
    display: flex;
    align-item: center;
  }

  ul {
    justify-content: space-between;
    list-style-type: none;
    padding: 10px 20px;
    margin: 0;
  }

  li {
    margin-left: 50px;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`

export { Navigation } ;
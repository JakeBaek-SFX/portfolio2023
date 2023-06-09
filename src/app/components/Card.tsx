import { colors } from "../settings/colors";
import { FC, Link, styled } from "../vendor";

interface IProps {
  className?: string;
  title: string;
  description: string;
  src: string;
  skills: string;
  id: string;
}

const CardContainer: FC<IProps> = (props) => {
  const { className, title, description, src, skills, id } = props;

  return (
    <Link {...{ className }} to={`/project-details/${id}`}>
      <img src={src} alt={description}/>
      <Contents>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Skills>-{skills}</Skills>
      </Contents>
    </Link>
  );
};

const Title = styled.p`
  font-weight: 500;
  font-size: 18px;
`
const Description = styled.p`
  font-weight: 400;
  color: ${colors.grey};
`
const Skills = styled.p`
  font-weight: 500;
  font-size: 14px;
`

const Contents = styled.div`  
  margin-top: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
` 

const Card = styled(CardContainer)`
  color: ${colors.black};
  text-decoration: none;
  padding: 20px;
  transition: all .2s ease-in-out;
  box-shadow: 0 3px 3px 3px #EAE0DA;

  &: hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 330px;
  height: 475px;
  background: ${colors.white};
  border-radius: 10px;

  img {
    width: 90%;
    height: 40%;
  }
`

export { Card } ;
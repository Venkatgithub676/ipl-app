// Write your code here
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl} = each
  return (
    <li className="team-card-li-con">
      <img src={teamImageUrl} className="team-card-team-img" alt="" />
      <h1 className="team-card-team-name">{name}</h1>
    </li>
  )
}

export default TeamCard

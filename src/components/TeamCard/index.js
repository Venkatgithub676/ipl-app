// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl, id} = each
  return (
    <Link to={`/team-matches/${id}`} className="link-comp">
      <li className="team-card-li-con">
        <img src={teamImageUrl} className="team-card-team-img" alt={name} />
        <p className="team-card-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

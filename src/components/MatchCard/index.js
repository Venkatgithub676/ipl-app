// Write your code here

import './index.css'

const MatchCard = props => {
  const {each} = props
  const {result, matchStatus, competingTeam, competingTeamLogo} = each
  const res = matchStatus === 'Lost' ? 'lost-status' : 'won-status'

  return (
    <li className="match-card-con">
      <img
        className="match-card-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-competing-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`match-card-status ${res}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard

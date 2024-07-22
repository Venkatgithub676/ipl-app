// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-con">
      <div className="latest-match-img-con1">
        <div className="latest-match-details-con1">
          <p className="latest-match-details-con1-headings">{competingTeam}</p>
          <p className="latest-match-details-con1-para">{date}</p>
          <p className="latest-match-details-con1-para">{venue}</p>
          <p className="latest-match-details-con1-para">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="latest-match-details-con2">
        <h1 className="latest-match-details-con2-headings">First Innings</h1>
        <p className="latest-match-details-con2-para">{firstInnings}</p>
        <h1 className="latest-match-details-con2-headings">Second Innings</h1>
        <p className="latest-match-details-con2-para">{secondInnings}</p>
        <h1 className="latest-match-details-con2-headings">Man of The Match</h1>
        <p className="latest-match-details-con2-para">{manOfTheMatch}</p>
        <h1 className="latest-match-details-con2-headings">Umpires</h1>
        <p className="latest-match-details-con2-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch

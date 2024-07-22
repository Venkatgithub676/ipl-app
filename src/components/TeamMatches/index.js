// Write your code here

import './index.css'
import {Component} from 'react'

class TeamMatches extends Component {
  state = {data: {}}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const res = await response.json()
    let colors = ''
    switch (id) {
      case 'RCB':
        colors = 'rcb'
        break
      case 'KKR':
        colors = 'kkr'
        break
      case 'KXP':
        colors = 'kxp'
        break
      case 'CSK':
        colors = 'csk'
        break
      case 'RR':
        colors = 'rr'
        break
      case 'MI':
        colors = 'mi'
        break
      case 'SH':
        colors = 'sh'
        break
      case 'DC':
        colors = 'dc'
        break
      default:
    }
    // console.log(colors)
    const data = {
      teamBannerUrl: res.team_banner_url,
      latestMatchDetails: {
        umpires: res.latest_match_details.umpires,
        result: res.latest_match_details.result,
        manOfTheMatch: res.latest_match_details.man_of_the_match,
        id: res.latest_match_details.id,
        date: res.latest_match_details.date,
        venue: res.latest_match_details.venue,
        competingTeam: res.latest_match_details.competing_team,
        competingTeamLogo: res.latest_match_details.competing_team_logo,
        firstInnings: res.latest_match_details.first_innings,
        secondInnings: res.latest_match_details.second_innings,
        matchStatus: res.latest_match_details.match_status,
      },
      recentMatches: res.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
      colors,
    }
    console.log(data)
    this.setState({data})
  }

  render() {
    const {data} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches, colors} = data
    return (
      <div className={`bg-con ${colors}`}>
        <div className="team-matches-main-con">
          <img src={teamBannerUrl} alt="" className="team-banner-img" />
        </div>
      </div>
    )
  }
}

export default TeamMatches

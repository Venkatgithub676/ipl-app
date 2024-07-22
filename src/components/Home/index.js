// Write your code here
import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {data: []}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const res = await response.json()
    // const {...teams} = res
    // console.log(teams)
    const data = res.teams.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))

    this.setState({data})
  }

  render() {
    const {data} = this.state
    return (
      <div className="home-con">
        <div className="img-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-heading">IPL DASHBOARD</h1>
        </div>
        <ul className="home-ul-con">
          {data.map(each => (
            <TeamCard key={each.id} each={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home

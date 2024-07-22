// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {data: [], isLoading: true}

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

    this.setState({data, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    // testid="loader"
    const res = isLoading ? (
      <div className="loader">
        <Loader type="Oval" color="#ffffff" height={50} />
      </div>
    ) : (
      <>
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
      </>
    )
    return <div className="home-con">{res}</div>
  }
}
export default Home

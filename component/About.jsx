import React from 'react'
import Class from './Class'
import UserContext from './constants/UserContext'

class About extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userInfo:{
        name:'Dummy',
        location:'Default'
      }
    }
  }
  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/jhayash1')
    const json = await data.json()
    this.setState({
      userInfo:json
    })
    console.log(json)

  }
  componentDidUpdate(){
  }
  render(){
      const {name, location,login,avatar_url} = this.state.userInfo
    return (
      <div>
        <img src={avatar_url}/>
        <p>{name}</p>
        <p>{location}</p>
        <UserContext.Consumer>
          {({logginUser})=><p>{logginUser}</p>}
        </UserContext.Consumer>
      </div>
    )
  }
}
export default About

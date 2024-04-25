import React from 'react'
import Class from './Class'

class About extends React.Component{
  constructor(props){
    super(props)
    console.log('Parent constructor')
  }
  componentDidMount(){
    console.log('Parent componentDid mount')

  }
  componentDidUpdate(){
    console.log('component did update')
  }
  render(){
    console.log('Parent render')

    return (
      <div>
        <Class name="Child"/>
        <Class name="Child 2"/>
        <Class name="Child 3"/>
      </div>
    )
  }
}
export default About

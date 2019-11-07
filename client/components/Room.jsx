import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'
import Controls from './Controls'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomData: {
        up: 'hidden',
        down: 'visible',
        left: 'visible',
        right: 'visible'
      }
    }
  }

  randomiseDoor = () => {

    //randomise here
    let num = Math.floor(Math.random() * 2 )

    // if num = 0
      // return 'hidden'
    if (num == 0) return 'hidden'
    
    // if num = 1
      // return 'visible'
      else if (num == 1) return 'visible'
    
  }

  generateDoors = (selectedDoor) => {    
    if (selectedDoor == 'up') {
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: 'visible',
          left: this.randomiseDoor(),
          right: this.randomiseDoor()
        }
      })
     } else if (selectedDoor == 'down'){
      this.setState({
        roomData: {
          up: 'visible',
          down: this.randomiseDoor(),
          left: this.randomiseDoor(),
          right: this.randomiseDoor()
        }
      })
    } else if (selectedDoor == 'left'){
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: this.randomiseDoor(),
          left: this.randomiseDoor(),
          right: 'visible'
        }
      })
    } else if (selectedDoor == 'right') {
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: this.randomiseDoor(),
          left: 'visible',
          right: this.randomiseDoor()
        }
      })
    }
  }




  render() {


    return (
      <div>
        <div id='room'>
          <Door door='upDoor' canSee={this.state.roomData.up} />
          <Door door='downDoor' canSee={this.state.roomData.down} />
          <Door door='leftDoor' canSee={this.state.roomData.left} />
          <Door door='rightDoor' canSee={this.state.roomData.right} />
        </div>
        <Controls
          {... this.props}
          buttonData={this.state.roomData}
          generateDoors={this.generateDoors}
        />
      </div>
    )
  }
}

export default Room

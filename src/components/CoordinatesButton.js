// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component {
  render() {
    let that = this
    return (
      <button onClick={(event) => {
          let coords = [event.clientX, event.clientY]
          that.props.onReceiveCoordinates(coords)
        }
      } />
    )
  }
}

export default CoordinatesButton

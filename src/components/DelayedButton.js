// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component {
  render() {
    let that = this
    return (
      <button onClick={(event) => {
          let pEvent = event.persist()
          setTimeout(() => {this.props.onDelayedClick(event)}, that.props.delay)
        }
      } />
    )
  }
}

export default DelayedButton

import React from "react";
import './WithReactState.css'
class WithReactState extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isVisible: true }
  }

  handleClick() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <div className="App">
        <div
          className={`reactExample ${this.state.isVisible ? "isVisible" : ""}`}
        />
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    )
  }
}

export default WithReactState

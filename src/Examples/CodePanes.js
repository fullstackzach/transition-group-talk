export const box = 
`// CSS
.box {
  height: 100px;
  width: 100px;
  background-color: red;
  transition: height 2s, width 2s;
}
.box:hover {
  height: 300px;
  width: 300px;
}`

export const reactExampleJSX =
`class WithReactState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isVisible: true }
  }

  handleClick () {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render () {
    return (
      <div>
        <div className={'reactExample{this.state.isVisible ? ' isVisible' : ''}'} />
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    )
  }
}`
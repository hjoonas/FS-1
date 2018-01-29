import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  random = () => {
    const random = Math.floor(Math.random()*this.props.anecdotes.length)
    this.setState({
        selected: random
    })
  }
  vote = () => {
    const copy = this.state.votes
    copy[this.state.selected] += 1
    this.setState({
        votes: copy
    })
  }
  render() {
    const current = this.state.selected
    const largestVoteAmount = Math.max.apply(Math, this.state.votes)
    const indexOfLargest = this.state.votes.indexOf(largestVoteAmount)
    return (
      <div>
        <p>{this.props.anecdotes[current]}</p>
        <p>has {this.state.votes[current]} votes</p>
        <Button handleClick={this.vote} text="vote"/>
        <Button handleClick={this.random} text="next anecdote"/>
        <h2>anecdote with most votes:</h2>
        <p>{this.props.anecdotes[indexOfLargest]}</p>
        <p>has {largestVoteAmount} votes</p>
      </div>
    )
  }
}
const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
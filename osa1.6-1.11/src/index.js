import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
  }

  click = (arvo) => {
    return () => {
      this.setState({
      [arvo]: this.state[arvo] + 1
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button handleClick={this.click("hyvä")} text="hyvä"/>
        <Button handleClick={this.click("neutraali")} text="neutraali"/>
        <Button handleClick={this.click("huono")} text="huono"/>
        <h1>Statistiikka</h1>
        <Statistics kaikki={this.state}/>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const Statistics = ({kaikki}) => {
  const yhteensa = kaikki.hyvä + kaikki.neutraali + kaikki.huono
  const arvostelunPisteytys = kaikki.hyvä - kaikki.huono
  const keskiarvo = Math.round(arvostelunPisteytys/yhteensa*10)/10
  const positiivisia =  Math.round(kaikki.hyvä/yhteensa*1000)/10
  if (yhteensa === 0) {
    return (
      <table>
        <tbody>
        <Statistic text="ei yhtään palautetta annettu"/>
        </tbody>
    </table>
    )
  }
  return (
    <table>
      <tbody>
      <Statistic text="hyvä" arvo={kaikki.hyvä}/>
      <Statistic text="neutraali" arvo={kaikki.neutraali}/>
      <Statistic text="huono" arvo={kaikki.huono}/>
      <Statistic text="keskiarvo" arvo={keskiarvo}/>
      <Statistic text="positiivisia" arvo={positiivisia+"%"}/>
      </tbody>
    </table>
  )
}
const Statistic = ({text, arvo}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{arvo}</td>
    </tr>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
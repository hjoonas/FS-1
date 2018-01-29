import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => {
    return (
        <div>
            <p>{props.osat.nimi} {props.osat.tehtavia}</p>
        </div>
    )
}
const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            <Osa osat={props.osat[0]}/>
            <Osa osat={props.osat[1]}/>
            <Osa osat={props.osat[2]}/>
        </div>
    )
}
const Yhteensa = (props) => {
    let x = 0;
    props.osat.forEach((osa) => {
        x+=osa.tehtavia
    })
    return (
        <div>
            <p>yhteensä {x} tehtävää</p>
        </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]
    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto osat={osat}/>
            <Yhteensa osat={osat}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
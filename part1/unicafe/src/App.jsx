import { useState } from 'react'

export default function App() {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  const average = (countGood - countBad) / (countGood + countNeutral + countBad)
  const positive = countGood / (countGood + countNeutral + countBad) * 100

  return (
    <>
      <h1>give feedback</h1>
      <div className="card">
        <CountButton text='good' count={countGood} setCount={setCountGood}/>
        <CountButton text='neutral' count={countNeutral} setCount={setCountNeutral}/>
        <CountButton text='bad' count={countBad} setCount={setCountBad}/>
        <h1>statistics</h1>
        {countGood + countNeutral + countBad === 0 ? <p>No feedback given</p>
        : (
          <Statistics
            countGood={countGood}
            countNeutral={countNeutral}
            countBad={countBad}
            average={average}
            positive={positive}
          />
        )}
      </div>
    </>
  )
}

function CountButton({ text, setCount }) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {text}
    </button>
  )
}

function Statistics({ countGood, countNeutral, countBad, average, positive }) {
  return (
    <>
      <StatisticLine text='good' value={countGood}/>
      <StatisticLine text='neutral' value={countNeutral}/>
      <StatisticLine text='bad' value={countBad}/>
      <StatisticLine text='all' value={countGood + countNeutral + countBad}/>
      <StatisticLine text='average' value={average || 0}/>
      <StatisticLine text='positive' value={positive || 0}/>
    </>
  )
}

function StatisticLine({ text, value }) {
  return (
    <p>
      {text} {value}
    </p>
  )
}
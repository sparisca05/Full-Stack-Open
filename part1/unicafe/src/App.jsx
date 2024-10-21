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
          <>
            <Statistic text='good' value={countGood}/>
            <Statistic text='neutral' value={countNeutral}/>
            <Statistic text='bad' value={countBad}/>
            <Statistic text='all' value={countGood + countNeutral + countBad}/>
            <Statistic text='average' value={average || 0}/>
            <Statistic text='positive' value={positive || 0}/>
          </>
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

function Statistic({ text, value }) {
  return (
    <p>
      {text} {value}
    </p>
  )
}
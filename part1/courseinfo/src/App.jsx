
export default function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

function Header({course}) {
  return <h1>{course}</h1>
}

function Content({ part1, part2, part3, exercises1, exercises2, exercises3 }) {
  return (
    <>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
    </>
  )
}

function Total({ exercises1, exercises2, exercises3 }) {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}
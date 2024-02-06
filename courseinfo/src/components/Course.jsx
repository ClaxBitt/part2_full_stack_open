import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

function Course({ course }) {
  
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )

}

export default Course
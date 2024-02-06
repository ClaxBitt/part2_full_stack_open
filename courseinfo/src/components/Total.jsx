function Total({ parts }) { 
  const total = parts.reduce((acc, val) => {
    return acc + val.exercises
  }, 0)

  return (
    <>
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

export default Total
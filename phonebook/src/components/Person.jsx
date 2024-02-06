function Person({ person, removeHandle }) {
  return (
    <p>
      {person.name} {person.number}
      <button onClick={removeHandle} >delete</button>
    </p>
  )
}

export default Person
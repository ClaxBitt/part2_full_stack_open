import Person from "./Person"

function Persons({ personsToShow, removeHandle }) {
  return (
    <div>
      {
        personsToShow.map(person => (
          <Person 
            key={person.name} 
            person={person} 
            removeHandle={() => removeHandle(person.id)} 
          />
        ))
      }
    </div>
  )
}

export default Persons
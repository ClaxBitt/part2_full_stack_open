import React, { useState, useEffect } from 'react'

import personService from './services/persons'

import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredWord, setFilteredWord ] = useState('')

  const [ notificationMsg, setNotificationMsg ] = useState(null)
  const [ notificationType, setNotificationType ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(err => {
        setNotificationType('red')
        setNotificationMsg("It's not possible to get the data from server")
        console.log(err)
      })
  }, [])

  const showNotification = (message, type) => {
    setNotificationType(type)
    setNotificationMsg(message)
    setTimeout(() => setNotificationMsg(null), 5000)
  }

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .addPerson(newPerson)
      .then(addedPerson => {
        setPersons([...persons, addedPerson])
        showNotification(`${addedPerson.name} was added!`, 'green')
      })
  }

  const updateNumber = (matchedPerson) => {
    const labelMessage = `${matchedPerson.name} is already added to phonebook, replace the old number with a new one?`
    const acceptUpdate = confirm(labelMessage)

    if (acceptUpdate) {
      const newPersonWithNewNumber = {
        name: matchedPerson.name,
        number: newNumber
      }

      personService
        .updatePerson(matchedPerson.id, newPersonWithNewNumber)
        .then(updatedPerson => {
          const newPersons = persons.map(person => {
            if (person.name === updatedPerson.name) {
              person.number = updatedPerson.number
            }

            return person
          })

          setPersons(newPersons)
          showNotification(`Number of ${updatedPerson.name} was changed!`, 'green')
        })
        .catch(err => {
          showNotification(`Information of ${matchedPerson.name} has already been removed from server`, 'red')
          setPersons(persons.filter(p => p.id !== matchedPerson.id))
          console.log(err)
        })
    }

    return matchedPerson
  }

  const removePerson = (id) => {
    const confirmDelete = confirm(`Delete ${(persons.find(p => p.id === id)).name}?`)

    if (confirmDelete) {
      personService
      .deletePerson(id)
      .then(updatedPersons => {
        setPersons(updatedPersons)
      })
      .catch(err => {
        alert('The element don\'t exist in the server or don\'t has an ID')
        console.log(err)
      })
    }
  }

  const submitPerson = (event) => {
    event.preventDefault()
    
    const matchedPerson = persons.find(person => {
      return person.name === newName.trim()
    })

    if (!matchedPerson) {
      addPerson()
    }
    else {
      updateNumber(matchedPerson)
    }

    setNewName('')
    setNewNumber('')
  }

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilteredWord(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.includes(filteredWord))

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter
        filteredWord={filteredWord}
        handleFilterChange={handleFilterChange} 
      />

      <h3>Add a new</h3>

      <Notification message={notificationMsg} color={notificationType} />

      <Form 
        handleSubmit={submitPerson}
        newName={newName}
        handlePersonNameChange={handlePersonNameChange}
        newNumber={newNumber}
        handlePersonNumberChange={handlePersonNumberChange}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} removeHandle={removePerson} />

    </div>
  )
}

export default App
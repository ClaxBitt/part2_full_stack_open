function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input 
        value={props.newName} 
        onChange={props.handlePersonNameChange} 
        autoComplete="off"
        required />
      </div>
      <div>
        number: <input 
        value={props.newNumber} 
        onChange={props.handlePersonNumberChange} 
        autoComplete="off"
        required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form
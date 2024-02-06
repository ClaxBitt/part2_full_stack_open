function Notification ({ msg }) {
  const style = {
    'color': 'red',
    'fontSize': 28
  }

  return (
    <div style={style}>
      <p>{msg}</p>
    </div>
  )
}

export default Notification
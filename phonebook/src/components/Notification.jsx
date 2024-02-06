function Notification ({ message, color }) {
  const styles = {
    'color': color,
    'marginBottom': 15,
    'fontSize': 28
  }

  if (message === null) return null

  return (
    <div style={styles}>
      {message}
    </div>
  )
}

export default Notification
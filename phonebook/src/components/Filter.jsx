function Filter({filteredWord, handleFilterChange}) {
  return (
    <div>
      Filter shown with: <input value={filteredWord} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
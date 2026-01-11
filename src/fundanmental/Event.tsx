function Event() {

  // user click => () => {} => onClick()
  // function onClick(id: string, event) {
  //   console.log('onClick event', id)
  // }

  // curry function
  const onClick = (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('onClick event', id, event)
  }

  return (
    <div>
      <h1>Event</h1>
      
      <button 
        type="button" 
        onClick={onClick('123')} 
        // onClick={(event) => onClick('123', event)} 
        className="border cursor-pointer px-2"
      >
        Update Event
      </button>
    </div>
  )
}

export default Event
const listReducer = (prevState=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'AddList':
      return [...prevState, ...payload.coming]
    case 'RemoveList':
      return prevState
  }
  return prevState
}

export { listReducer }
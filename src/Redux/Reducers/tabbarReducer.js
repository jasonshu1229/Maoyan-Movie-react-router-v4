const tabbarReducer = (prevState=true, action) => {
  let { type, payload } = action; // { type: "HideTabbar", payload: false}

  switch(type) {
    case 'HideTabbar':
      return payload
    case 'ShowTabbar':
      return payload
  }

  return prevState

  // todo reducer 返回值是什么，store就被修改成了什么
} 

export { tabbarReducer }
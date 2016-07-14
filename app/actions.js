export const login = (userName, password) => {
  return {
    type: 'LOGIN'
  }
}

export const signup = (userName, password) => {
  return {
    type: 'SIGN_UP'
  }
}

export const filterByAttending = () => {
  return {
    type: 'FILTER_BY_ATTENDING'
  }
}

export const filterByHosting = () => {
  return {
    type: 'FILTER_BY_HOSTING'
  }
}

export const filterByAll = () => {
  return {
    type: 'FILTER_BY_ALL'
  }
}

export const createNewEvent = () => {
  return {
    type: 'CREATE_NEW_EVENT'
  }
}

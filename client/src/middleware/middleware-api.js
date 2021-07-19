const middlewareApi = store => next => action => {
  // put async code here?
  return next(action)
}

export default middlewareApi


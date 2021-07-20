const middlewareApi = store => next => action => {
  // put async code here?
  console.log('MIDDLEWARE API', store)
  return next(action)
}

export default middlewareApi


export default (bearerToken) => {
  function validateToken (token) { // TODO Add token validaiton??
    return true
  }
  if (window.sessionStorage && bearerToken && validateToken(bearerToken)) {
    console.log(bearerToken)
    window.sessionStorage.setItem('bearerToken', JSON.stringify(bearerToken))
  }
}

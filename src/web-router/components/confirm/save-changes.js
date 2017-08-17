export default (changes) => {
  if (window.sessionStorage && changes) {
    window.sessionStorage.setItem('saved-changes', JSON.stringify(changes))
  }
}

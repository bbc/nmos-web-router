import React, { Component, PropTypes } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import SigninRequest from '../security/signin-request'
import './main.css'

class Signin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      showForm: false,
      result: ''
    }

    console.log(this.props)
  }

  componentDidMount () {
    document.addEventListener('mousedown', this.closeForm)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.closeForm)
  }

  setRef = (node) => {
    this.Ref = node
  }

  clearForm = () => {
    this.setState({
      username: '',
      password: '',
      result: ''
    })
  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
    this.clearForm()
  }

  closeForm = (event) => {
    if (this.Ref && !this.Ref.contains(event.target)) {
      this.setState({showForm: false})
    }
  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.signIn(this.state.username, this.state.password)
      .then(response => {
        this.setState({
          result: response
        })
      })
  }

  render () {
    return (
      <div className='formDiv' ref={this.setRef} >
        <button onClick={this.toggleForm} className='button nav'>SIGNIN</button>
        {this.state.showForm &&
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId='username' bsSize='large'>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId='password' bsSize='large'>
              <ControlLabel>Password </ControlLabel>
              <FormControl
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button style={{display: 'block', margin: 'auto'}}
              block
              bsSize='large'
              disabled={!this.validateForm()}
              type='submit'
            >
              {this.state.result || 'OK'}
            </Button>
          </form>
        }
      </div>
    )
  }
}

Signin.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Signin

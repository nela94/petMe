import React from 'react'
import { connect } from 'react-redux'
import { newUser } from '../actions/allActions'

class Signup extends React.Component{

  state = {
    name: "",
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.newUser(this.state)
    this.props.history.push("/home")
  }

  handleButton = () => {
    this.props.history.push('/login')
  }

  render(){
    return(
    <div id="wrapper">
      <div id="signup">
          <form onSubmit={this.handleSubmit} action="mysuperscript.php">
              <h1> Sign up </h1>
              <p>
                <label >Name</label>
                <input required onChange={this.handleChange} value={this.state.name} name="name" type="text" placeholder="Your Name" />
              </p>
              <p>
                <label className="uname" >Username</label>
                <input required onChange={this.handleChange} value={this.state.username} name="username" type="text" placeholder="mysuperusername690" />
              </p>
              <p>
                <label className="youpasswd" >Password </label>
                <input required onChange={this.handleChange} value={this.state.password} name="password" type="password" placeholder="eg. X8df!90EO"/>
              </p>

              <p className="signin button">
								<input type="submit" value="Sign up"/>
							</p>
              <p className="change_link button">
								<strong>Already a member?</strong>
                <input type="button" onClick={this.handleButton} value="Log in!"/>
              </p>
          </form>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (user) => dispatch(newUser(user))
})

export default connect(null, mapDispatchToProps)(Signup)

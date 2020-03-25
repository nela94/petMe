import React from 'react'
import { gettingUser } from '../actions/allActions'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

class Login extends React.Component{
  state = {
    username: "",
    password: ""
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.gettingUser(this.state)
  }

  handleButton = () => {
    this.props.history.push("/")
  }

  componentDidUpdate(prevProps) {
    if(prevProps.user.user !== this.props.user.user){
        this.props.history.push("/home")
      }
    }


  render(){
      
    return(
    <div id="wrapper">
      <div id="login" className="animate form">
        <form  onSubmit={this.handleSubmit} action="mysuperscript.php">
           <h1>Log in</h1>
              <p>
                <label className="uname" > Username </label>
                <input onChange={this.handleOnChange} value={this.state.username} name="username" required="required" type="text" placeholder="myusername"/>
              </p>
              <p>
                <label className="youpasswd"> Your password </label>
                <input onChange={this.handleOnChange} value={this.state.password} name="password" required="required" type="password" placeholder="eg. X8df!90EO" />
              </p>
              <p className="button">
                <input type="submit" value="Log in"/>
              </p>

              <p className="change_link button">
                <strong>Not a member yet?</strong>
                <input type="button" onClick={this.handleButton} value="Join us!"/>
              </p>
        </form>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  gettingUser: (user) => dispatch(gettingUser(user))
})
const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

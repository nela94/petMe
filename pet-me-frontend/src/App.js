import React from 'react';
import Navbar from './components/Navbar';
import Routes from './router/Routes';
import './App.css';
import { getCurrentUser } from './actions/allActions';
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
    
        <div
          className="background-overlay"
          style={{
            position: 'fixed',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
          }}
         />
        <div className="container">
          <header>
            <Navbar />
          </header>
          <section>
            <div id="container_demo" >
              <Routes />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

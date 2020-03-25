import React from "react";
import {connect} from 'react-redux'

class Navbar extends React.Component  {
  render(){
  return (

    localStorage.token && localStorage.token !== "undefined"?
     <div>
       <h1>Pet Me<span role="img" aria-label="emoji">❤️</span></h1>
         <ul>
         <h5> __________________</h5>
           <li>
            <a href="/home">Home</a>
           </li>
           <li>
            <a href="/PetList">Pets You Have Chosen</a>
           </li>
           <li onClick={() => localStorage.removeItem("token")}>
            <a href="/">Log Out</a>
           </li>
            <h5> __________________</h5>
         </ul>
       </div>
        :
        <div>
          <h1>Pet Me<span role="img" aria-label="emoji">❤️</span></h1>
          <h2>Where A Friend Is Only A Swipe Away.</h2>
        </div>
      )
    }
  }

const mapStateToProps = ({user}) => ({ user })

export default connect(mapStateToProps)(Navbar)

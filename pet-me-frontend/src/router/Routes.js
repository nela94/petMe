import React from 'react'
import { Route, Switch } from "react-router-dom";
import Signup from '../components/Signup'
import Login from '../components/Login'
import PetContainer from '../components/PetContainer'
import Home from '../components/Home'
import MatchedPets from '../components/MatchedPets'
import AdoptedPetContainer from '../components/AdoptedPetContainer'



const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/PetList" component={MatchedPets} />
      <Route path="/login" component={Login} />
      <Route path="/ListBabies" component={PetContainer} />
      <Route path='/pets/:id' component={AdoptedPetContainer} />
    </Switch>
  )
}

export default Routes

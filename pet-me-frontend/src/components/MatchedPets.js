import React from 'react'
import { connect } from 'react-redux'
import Petcard from './Petcard'
import { addingUserIDtoPet, deletingAMatch } from '../actions/allActions'
import '../Pet.css'

class MatchedPets extends React.Component{

  handleOnClick = (pet) => {
    this.props.addingUserIDtoPet(pet, this.props.user)
    this.props.history.push(`/pets/${pet.id}`)
  }

  handleDeletePetFromList = (pet) => {
    this.props.user.matches.map(match => {
      if(pet.id === match.pet_id){
        this.props.deletingAMatch(match)
      }
    })
  }

  render(){
    const allPets = this.props.user.pets
    let gettingUserMatches = []

    if(!!allPets){
      gettingUserMatches = allPets.map(pet => {
       return <Petcard handleDeletePetFromList={this.handleDeletePetFromList} handleOnClick={this.handleOnClick} key={pet.id} pet={pet} />
     })
    }
    return(
      <div className="width-1000">
        <h4>You can only choose one!</h4>
        <div id="wrapper" className="matched-pets">
          {gettingUserMatches}
        </div>
      </div>

    )
  }
}


const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = (dispatch) => ({
  addingUserIDtoPet: (pet, user) => dispatch(addingUserIDtoPet(pet, user)),
  deletingAMatch: (match) => dispatch(deletingAMatch(match))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchedPets)

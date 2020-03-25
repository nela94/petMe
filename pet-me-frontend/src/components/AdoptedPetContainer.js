import React from 'react'
import {connect} from 'react-redux'
import AdoptedPetCard from './AdoptedPetCard'
import {gettingAdoptedPet} from '../actions/allActions'

class AdoptedPet extends React.Component {

  componentDidMount() {
    const petId = window.location.pathname.split('/').slice(-1)[0]
    this.props.gettingAdoptedPet(petId)
  }
  render() {
    return (
      <div id="wrapper">
        <h2>Congrats On Your New Babyy!!!!!</h2>
        <div>
          <AdoptedPetCard pet={this.props.pet}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({pet}) => ({pet})

const mapDispatchToProps = (dispatch) => ({
  gettingAdoptedPet: (pet) => dispatch(gettingAdoptedPet(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdoptedPet)

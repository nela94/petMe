import React from 'react'
import { Client } from "@petfinder/petfinder-js"
import Petcard from './Petcard'
import '../Pet.css'
import { connect } from 'react-redux'
import { creatingMatches } from '../actions/allActions'
import Swipeable from "react-swipy"

let direction = ''

class PetContainer extends React.Component {

  state = {
      dogs: [],
      cats: [],
      index: 0
    }


  componentDidMount() {
    const client = new Client({apiKey: "RqPmGmPGHQWIiCVG5gzphrFaw1QomsafGhyq22Q5yOz19zejel", secret: "sShiuXCl1mlIFd4p4Fq5TCwkCzf6ACDDidNipna4"});

    client.animal.search({type: "Dog"})
      .then(response => {
          return this.setState({
            dogs: response.data.animals
          })
      })
      .catch(error => {
          return error
      });

      client.animal.search({type: "Cat"})
        .then(response => {
            return this.setState({
              cats: response.data.animals
            })
        })
        .catch(error => {
            return error
        });
     }


    onAfterSwipe = (pet) => {
        if (direction === 'left'){
          this.props.creatingMatches(this.props.user, pet)
          this.setState({
            index: this.state.index + 1
          })
        }
        else if (direction === 'right'){
          if(pet.type === 'Dog'){
              const removingSelectedPet = this.state.dogs.filter(dog => dog.id !== pet.id)
            this.setState({
              dogs: removingSelectedPet
            })
          }
         else if(pet.type === 'Cat'){
             const removingSelectedPet = this.state.cats.filter(cat => cat.id !== pet.id)
           this.setState({
             cats: removingSelectedPet
           })
         }
         this.setState({
           index: this.state.index + 1
         })
        }
      }


  render(){
    const makingOneCat = this.state.cats.map((cat, idx) => {
      return (
            <Swipeable
              key={cat.id}
              onSwipe={dir => { direction = dir }}
              onAfterSwipe={() => this.onAfterSwipe(cat)}>
                <Petcard
                  hidden={idx !== this.state.index}
                  origin={'petContainer'}
                  key={cat.id}
                  pet={cat} />
              </Swipeable>
            )
          })

    const makingOneDog = this.state.dogs.map((dog, idx) => {
      return (
        <Swipeable key={dog.id}
          onSwipe={dir => { direction = dir }}
          onAfterSwipe={() => this.onAfterSwipe(dog)}>
            <Petcard
              hidden={idx !== this.state.index}
              origin={'petContainer'}
              key={dog.id}
              pet={dog}/>
        </Swipeable>
      )
    })

    if(this.props.location.search === "?type=cats") {
      return(
        <div id="wrapper" className="pet-container">
          <h2>Start Swiping<span role="img" aria-label="emoji">❤️</span></h2>
          <h3>Swipe Left To Add To Your Adoption List</h3>
          <div className="card">{makingOneCat}</div>
        </div>
      )
    }
    else if (this.props.location.search === "?type=dogs") {
      return (
        <div id="wrapper" className="pet-container">
          <h2>Start Swiping<span role="img" aria-label="emoji">❤️</span></h2>
          <h3>Swipe Left To Add To Your Adoption List</h3>
          <div className="card">{makingOneDog}</div>
        </div>
      )
    }
    else {
      return (
        <div>Sorry we don't have that type of pet available yet</div>
      )
    }
  }
}

const mapStateToProps = ({user}) => ({ user })

const mapDispatchToProps = dispatch => ({
  creatingMatches: (user, pet) => dispatch(creatingMatches(user, pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetContainer)

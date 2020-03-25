import React from 'react'
import '../Pet.css'

class AdoptedPetCard extends React.Component {

  render(){
    return(
      <div className="card" style={{'flexDirection': 'row', 'width': '741px', 'height': '440px', 'left': '-23px'}}>
       <div className="card-img embed-responsive embed-responsive-1by1">
          <div className="embed-responsive-item">
             <img src={this.props.pet.img_full} alt="card-title" />
          </div>
       </div>
       <div className="card-body">
          <h1 className="card-title">{this.props.pet.name}</h1>
          <p className="card-text" style={{'textAlign': 'center'}}>To get more information on where to adopt {this.props.pet.name} please email: {this.props.pet.contact}</p>
       </div>
      </div>
    )
  }
}


export default AdoptedPetCard

import React from 'react'


class Petcard extends React.Component {


  render(){
    let photos = []

    if(this.props.origin === "petContainer"){
      photos = this.props.pet.photos.map(photo => {
        return photo.small && photo.medium && photo.large && photo.full
      })
      if(photos.length === 0){
        photos = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
      }
    }
    return(
      !this.props.hidden &&
        <div className="card-container-master">
            {
              this.props.origin === "petContainer" ?
              <div>
                 <div className="card-img embed-responsive embed-responsive-1by1">
                    <div className="embed-responsive-item">
                       <img src={photos} alt="card-title" />
                    </div>
                 </div>
                 <div className="card-body">
                    <h1 className="card-title">{this.props.pet.name}</h1>
                    <p className="card-text">{this.props.pet.description}</p>
                 </div>
              </div>
              :
              <div className="card-flex">
                 <div className="card-img embed-responsive embed-responsive-1by1">
                    <div className="embed-responsive-item">
                      <span onClick={() => this.props.handleDeletePetFromList(this.props.pet)} className="close">&times;</span>
                       <img src={this.props.pet.img_full} alt="card-title" />
                    </div>
                 </div>
                 <div className="card-body">
                    <h1 className="card-title">{this.props.pet.name}</h1>
                    <p className="card-text">{this.props.pet.description}</p>
                    <button onClick={() => this.props.handleOnClick(this.props.pet)} className="btn btn-primary">Adopt this cutie!</button>
                 </div>
              </div>
            }
            </div>
    )
  }
}


export default Petcard

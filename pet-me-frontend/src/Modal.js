import React from 'react';

class Modal extends React.Component {

  modalOff = () => {
    document.getElementsByClassName("modal")[0].style.display = "none"
  }

  render(){
    return(

      <div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Sorry Try Again!<span role="img" aria-label="emoji">❤️</span></h2>
            </div>
            <div className="modal-body">
              <p>Your username or password is incorrect.</p>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.modalOff} className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

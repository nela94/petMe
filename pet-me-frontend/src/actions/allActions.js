const loginUser = (user) => ({type: 'LOGIN_USER', payload: user})
const usersPick = (matches) => ({type: 'USERS_PICK', payload: matches})
const chosenPet = (petUserId) => ({type:'EDITTING_PET', payload: petUserId})
const removeMatch = (match) => ({type: 'DELETE_MATCH', payload: match})

export const newUser = (userInfo) => {
  console.log("hshshs")
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {dispatch(loginUser(userData),
        localStorage.setItem("token", userData.jwt))
      });
     }
    }

const showModal = () => {
  document.getElementsByClassName("modal")[0].style.display = "flex"
}

export const gettingUser = (userInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => (resp.ok ?
        resp.json().then(userData => {dispatch(loginUser(userData),
          localStorage.setItem("token", userData.jwt))})
          :
          resp.json().then(userData => showModal())
        ))
    }
}

export const getCurrentUser = () => (dispatch) => {
    let token = localStorage.token;
    token
      && fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user =>{dispatch(loginUser(user))

          })
  }

  export const creatingMatches = (user, pet) => {
    console.log("pet created",pet)
    return (dispatch) => {
      fetch("http://localhost:3000/matches", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          user_id: user.id,
          pet: {
            name: pet.name,
            gender: pet.gender,
            img_full: pet.photos[0].full,
            description: pet.description,
            adoption_id: pet.id,
            age: pet.age,
            contact: pet.contact.email,
            user_id: null
          }
        })
      })
        .then(resp => resp.json())
        .then(data => {dispatch(usersPick(data))
      })
    }
  }

export const deletingAMatch = (match) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/matches/${match.id}`, {
      method:'DELETE',
    })
    .then(dispatch(removeMatch(match)))
  }
}

export const addingUserIDtoPet = (pet, user) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user_id: user.id
      })
    })
    .then(resp => resp.json())
    .then(data => {dispatch(chosenPet(data))
    })
  }
}

export const gettingAdoptedPet = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/pets/${id}`)
    .then(resp => resp.json())
    .then(data => {dispatch(chosenPet(data))
    })
  }
}

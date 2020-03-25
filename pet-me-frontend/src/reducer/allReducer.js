const initialState = {
   user: {},
   matches: [],
   pet: []
  }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_USER': {
      return {...state, user: action.payload}
    }
    case('USERS_PICK'): {
        return {...state, matches: action.payload}
    }
    case('EDITTING_PET'): {
        return {...state, pet: action.payload}
    }
    case('DELETE_MATCH'): {

      const changingUserMatches = state.user.matches.filter(match => match !== action.payload)
      const changingUserPets = state.user.pets.filter(pet => pet.id !== action.payload.pet_id)
      
       return {...state,
         user: {...state.user,
            matches: changingUserMatches,
            pets: changingUserPets}}
          }
    default:
    return state
  }
}

export default reducer

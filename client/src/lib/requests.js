const DOMAIN = 'localhost:4646';
//const API_PREFIX =
const BASE_URL = `http://${DOMAIN}`;
//const JWT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQxLCJmaXJzdF9uYW1lIjoiSW5leiIsImxhc3RfbmFtZSI6IkdhcmNpYSIsImV4cCI6MTUyMjYwNzk5NTA4Mn0.pLF97CePyWnjVvtccuuVotnCbWE9gZM_EUwT4bnEGhQ";

function getJWT (){
  return localStorage.getItem('jwt');
  //return JWT;
}

//HTTP REQUESTS:

const Expression = {
  one(id){
    return fetch(
      `${BASE_URL}/expressions/${id}`,
      { headers: {'Authorisation': getJWT()} }
    )
    .then(res => res.json());
  }
}

const Quiz = {
  create(params) {
    return fetch(
      `${BASE_URL}/quizes`,
      { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  all(user_id) {
    return fetch(
      `${BASE_URL}/quizes/index`,
      { headers: {'Authorization':getJWT()}}
    )
    .then(res => res.json());
  }
}

const User = {

  all(){
    return fetch(
      `${BASE_URL}/users/index`,
      { headers: {'Authorization':getJWT()}}
    )
    .then(res => res.json());
  },

  create(props){
    return fetch(
      `${BASE_URL}/users/create`,
      { method:'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(props)
      })
      .then( res => {
        if(res.status === 200){
          return res.json()
        } else {
          return {error: 'Could not create the user'};
        }
      });
  },

  one(id){
    return fetch(
      `${BASE_URL}/users/${id}`,
      { headers: {'Authorization': getJWT()} }
    )
    .then(res => res.json());
  }
};

const Token = {
  create (props) {
    return fetch(
      `${BASE_URL}/tokens/create`,
      { method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(props)
      }
    )
    .then(res => res.json());
  }
}

export { Expression, Quiz, User, Token };
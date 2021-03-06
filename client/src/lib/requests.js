const DOMAIN = 'localhost:4646';
const BASE_URL = `http://${DOMAIN}`;

function getJWT (){
  return localStorage.getItem('jwt'); //return JWT;
}

//HTTP REQUESTS:
const Answer = {
  create (params) {
    return fetch(
      `${BASE_URL}/answers/create`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  update(params) {
    return fetch(
      `${BASE_URL}/answers/update`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}

const CustomQuiz = {
  create(params) {
    return fetch(
      `${BASE_URL}/customQuizes/create`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  one(id) {
    return fetch(
      `${BASE_URL}/customQuizes/show/${id}`,
      { headers: {'Authorization': getJWT()} }
    )
    .then(res => res.json());
  }
}

const CustomExpression = {
  create(params){
    return fetch(
      `${BASE_URL}/customExpressions/create`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      })
  }
}

const CurrentQuizSetUp = {

  update(params) {
    return fetch(
      `${BASE_URL}/quizSetUp/update`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}

const Quiz = {
  createGenerate(params) {
    return fetch(
      `${BASE_URL}/quizes/create/generate`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  createFromCustomQuiz(params) {
    return fetch(
      `${BASE_URL}/quizes/create/fromCustom`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  all(child_user_id) {
    return fetch(
      `${BASE_URL}/quizes/index/${child_user_id}`,
      { headers: {'Authorization':getJWT()} }
    )
    .then(res => res.json());
  },

  one(id) {
    return fetch(
      `${BASE_URL}/quizes/show/${id}`,
      { headers: {'Authorization': getJWT()} }
    )
    .then(res => res.json());
  },

  update(params) {
    return fetch(
      `${BASE_URL}/quizes/update`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  },

  correct(quizId) {
    return fetch(
      `${BASE_URL}/quizes/correct/${quizId}`,
      { headers: {'Authorization': getJWT()} }
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

  createParentUser(params){
    return fetch(
      `${BASE_URL}/users/create/parent`,
      { method:'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(params)
      })
      .then( res => {
        if(res.status === 200){
          return res.json()
        } else {
          return {error: 'Could not create the user'};
        }
      });
  },

  createChildUser(params){
    return fetch(
      `${BASE_URL}/users/create/child`,
      {
        headers: {
          'Authorization': getJWT(),
          'Content-Type': 'application/json'
        },
        method:'POST',
        body: JSON.stringify(params)
      })
      .then( res => res.json());
  },

  oneChild(id){
    return fetch(
      `${BASE_URL}/users/child/${id}`,
      { headers: {'Authorization': getJWT()} }
    )
    .then(res => res.json());
  },

  oneParent(id){
    return fetch(
      `${BASE_URL}/users/parent/${id}`,
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

const Google = {

  verify(params){
    return fetch(
      `${BASE_URL}/signInWithGoogle/verify`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type':'application/json'
        },
        method: 'POST',
        body: JSON.stringify(params)
      })
      .then( res => res.json());
  }
}

export { CurrentQuizSetUp, CustomExpression, CustomQuiz, Quiz, Answer, User, Token, Google };

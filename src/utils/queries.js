import gql from 'graphql-tag';

export function getLoginGQL(username, password) {
  return gql`
    query {
      login(username: "${username}", password: "${password}") {
        id
      }
    }
  `;
}

export function getRegisterGQL(userObject) {
  return gql`
    mutation {
      register(
        username: "${userObject.username}",
        password: "${userObject.password}",
        email: "${userObject.email}"
      ) {
        id
        username
      }
      }
    }
  `;
}

export function getImagesGQL(count){
  return gql `
  	query wikiPicsQuery {
  		images(count: ${count}){
  			imageURL
  			wikiURL
  			title
  		}
  	}
  `;
}

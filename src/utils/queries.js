import gql from 'graphql-tag';
import { getLocalStorageItem } from './helper-functions';

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
      ) {
        id
        username
      }
    }
  `;
}

export function getImagesGQL(count) {
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

export function getUserGQL() {
  const user = getLocalStorageItem('user');
  return gql `
  	query user {
  		user(id: ${user.userId}){
  			id
        username
        score {
          numGames
          totalCorrect
          streak
        }
  		}
  	}
  `;
}

export function getUpdateScoreGQL(userId, gameStats) {
  return gql `
  mutation {
    updateScoring (
      user_id: ${userId}
      streak: ${gameStats.streak},
      totalCorrect: ${gameStats.totalCorrect},
      numGames: ${gameStats.numGames}
    ) {
      streak
      totaCorrect
      numGames
    }
  }
`;
}

import gql from 'graphql-tag';

export function getLoginGQL(username, password) {
  return gql`
    query {
      login(username: "${username}", password: "${password}") {
        id
      }
    }
  `;
};

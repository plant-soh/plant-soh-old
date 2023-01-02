/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnlage = /* GraphQL */ `
  query GetAnlage($id: ID!) {
    getAnlage(id: $id) {
      id
      firma
      standort
      anschrift
      createdAt
      updatedAt
      users {
        items {
          id
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
          user {
            email
            role
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listAnlages = /* GraphQL */ `
  query ListAnlages(
    $filter: ModelAnlageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnlages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firma
        standort
        anschrift
        createdAt
        updatedAt
        users {
          items {
            id
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAnlagenUser = /* GraphQL */ `
  query GetAnlagenUser($id: ID!) {
    getAnlagenUser(id: $id) {
      id
      anlageId
      userEmail
      createdAt
      updatedAt
      anlage {
        id
        firma
        standort
        anschrift
        createdAt
        updatedAt
        users {
          items {
            id
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      user {
        email
        role
        createdAt
        updatedAt
        anlagen {
          items {
            id
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listAnlagenUsers = /* GraphQL */ `
  query ListAnlagenUsers(
    $filter: ModelAnlagenUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnlagenUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        anlageId
        userEmail
        createdAt
        updatedAt
        anlage {
          id
          firma
          standort
          anschrift
          createdAt
          updatedAt
          users {
            items {
              id
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        user {
          email
          role
          createdAt
          updatedAt
          anlagen {
            items {
              id
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      role
      createdAt
      updatedAt
      anlagen {
        items {
          id
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
          user {
            email
            role
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        role
        createdAt
        updatedAt
        anlagen {
          items {
            id
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
            user {
              email
              role
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;

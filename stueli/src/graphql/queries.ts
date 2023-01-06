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
      users
      createdAt
      updatedAt
      anlagenUsers {
        items {
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            users
            createdAt
            updatedAt
            anlagenUsers {
              nextToken
            }
            projekte {
              nextToken
            }
            referenzStueli {
              nextToken
            }
          }
          user {
            email
            role
            currentAnlageId
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
          }
        }
        nextToken
      }
      projekte {
        items {
          id
          anlageId
          projektNummer
          users
          createdAt
          updatedAt
          anlagen {
            items {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          projektStueli {
            items {
              id
              projektId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              voschlagKurzspezifikation
              vorschlagLieferant
              vorschlagNennweite
              vorschlagFeinspezifikation
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
      referenzStueli {
        items {
          id
          anlageId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAnlages = /* GraphQL */ `
  query ListAnlages(
    $id: ID
    $filter: ModelAnlageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAnlages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firma
        standort
        anschrift
        users
        createdAt
        updatedAt
        anlagenUsers {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
            }
          }
          nextToken
        }
        referenzStueli {
          items {
            id
            anlageId
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAnlagenUser = /* GraphQL */ `
  query GetAnlagenUser($userEmail: String!, $anlageId: ID!) {
    getAnlagenUser(userEmail: $userEmail, anlageId: $anlageId) {
      anlageId
      userEmail
      createdAt
      updatedAt
      anlage {
        id
        firma
        standort
        anschrift
        users
        createdAt
        updatedAt
        anlagenUsers {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        projekte {
          items {
            id
            anlageId
            projektNummer
            users
            createdAt
            updatedAt
            anlagen {
              nextToken
            }
            projektStueli {
              nextToken
            }
          }
          nextToken
        }
        referenzStueli {
          items {
            id
            anlageId
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      user {
        email
        role
        currentAnlageId
        createdAt
        updatedAt
        anlagen {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
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
    $userEmail: String
    $anlageId: ModelIDKeyConditionInput
    $filter: ModelAnlagenUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAnlagenUsers(
      userEmail: $userEmail
      anlageId: $anlageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        anlageId
        userEmail
        createdAt
        updatedAt
        anlage {
          id
          firma
          standort
          anschrift
          users
          createdAt
          updatedAt
          anlagenUsers {
            items {
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          projekte {
            items {
              id
              anlageId
              projektNummer
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          referenzStueli {
            items {
              id
              anlageId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        user {
          email
          role
          currentAnlageId
          createdAt
          updatedAt
          anlagen {
            items {
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
export const getProjekt = /* GraphQL */ `
  query GetProjekt($id: ID!) {
    getProjekt(id: $id) {
      id
      anlageId
      projektNummer
      users
      createdAt
      updatedAt
      anlagen {
        items {
          id
          firma
          standort
          anschrift
          users
          createdAt
          updatedAt
          anlagenUsers {
            items {
              anlageId
              userEmail
              createdAt
              updatedAt
            }
            nextToken
          }
          projekte {
            items {
              id
              anlageId
              projektNummer
              users
              createdAt
              updatedAt
            }
            nextToken
          }
          referenzStueli {
            items {
              id
              anlageId
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
      projektStueli {
        items {
          id
          projektId
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          voschlagKurzspezifikation
          vorschlagLieferant
          vorschlagNennweite
          vorschlagFeinspezifikation
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listProjekts = /* GraphQL */ `
  query ListProjekts(
    $id: ID
    $filter: ModelProjektFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjekts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        anlageId
        projektNummer
        users
        createdAt
        updatedAt
        anlagen {
          items {
            id
            firma
            standort
            anschrift
            users
            createdAt
            updatedAt
            anlagenUsers {
              nextToken
            }
            projekte {
              nextToken
            }
            referenzStueli {
              nextToken
            }
          }
          nextToken
        }
        projektStueli {
          items {
            id
            projektId
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            voschlagKurzspezifikation
            vorschlagLieferant
            vorschlagNennweite
            vorschlagFeinspezifikation
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProjektStueli = /* GraphQL */ `
  query GetProjektStueli($id: ID!) {
    getProjektStueli(id: $id) {
      id
      projektId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      voschlagKurzspezifikation
      vorschlagLieferant
      vorschlagNennweite
      vorschlagFeinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const listProjektStuelis = /* GraphQL */ `
  query ListProjektStuelis(
    $id: ID
    $filter: ModelProjektStueliFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjektStuelis(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        projektId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        voschlagKurzspezifikation
        vorschlagLieferant
        vorschlagNennweite
        vorschlagFeinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projektStueliByKurzspezifikation = /* GraphQL */ `
  query ProjektStueliByKurzspezifikation(
    $projektId: ID
    $kurzspezifikation: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjektStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projektStueliByKurzspezifikation(
      projektId: $projektId
      kurzspezifikation: $kurzspezifikation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projektId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        voschlagKurzspezifikation
        vorschlagLieferant
        vorschlagNennweite
        vorschlagFeinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReferenzStueli = /* GraphQL */ `
  query GetReferenzStueli($id: ID!) {
    getReferenzStueli(id: $id) {
      id
      anlageId
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      createdAt
      updatedAt
    }
  }
`;
export const listReferenzStuelis = /* GraphQL */ `
  query ListReferenzStuelis(
    $id: ID
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReferenzStuelis(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const referenzStueliByKurzspezifikation = /* GraphQL */ `
  query ReferenzStueliByKurzspezifikation(
    $anlageId: ID
    $kurzspezifikation: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    referenzStueliByKurzspezifikation(
      anlageId: $anlageId
      kurzspezifikation: $kurzspezifikation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byAnlage = /* GraphQL */ `
  query ByAnlage(
    $anlageId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelReferenzStueliFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byAnlage(
      anlageId: $anlageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        anlageId
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        createdAt
        updatedAt
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
      currentAnlageId
      createdAt
      updatedAt
      anlagen {
        items {
          anlageId
          userEmail
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
            users
            createdAt
            updatedAt
            anlagenUsers {
              nextToken
            }
            projekte {
              nextToken
            }
            referenzStueli {
              nextToken
            }
          }
          user {
            email
            role
            currentAnlageId
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
        currentAnlageId
        createdAt
        updatedAt
        anlagen {
          items {
            anlageId
            userEmail
            createdAt
            updatedAt
            anlage {
              id
              firma
              standort
              anschrift
              users
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
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

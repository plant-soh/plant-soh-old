/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listKurzspezifikationVorschlaege = /* GraphQL */ `
  query ListKurzspezifikationVorschlaege(
    $input: ListKurzspezifikationVorschlaegeInput!
  ) {
    listKurzspezifikationVorschlaege(input: $input)
  }
`;
export const getAnlage = /* GraphQL */ `
  query GetAnlage($id: ID!) {
    getAnlage(id: $id) {
      id
      firma
      standort
      anschrift
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
            currentProjektId
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
          custom1ColumnName
          custom2ColumnName
          custom3ColumnName
          createdAt
          updatedAt
          anlage {
            id
            firma
            standort
            anschrift
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
          projektStueli {
            items {
              id
              projektId
              bmk
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              kurzspezifikationVorschlag
              lieferantVorschlag
              nennweiteVorschlag
              feinspezifikationVorschlag
              custom1
              custom2
              custom3
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
          bmk
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
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              currentProjektId
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
            custom1ColumnName
            custom2ColumnName
            custom3ColumnName
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
            bmk
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
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              currentProjektId
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
            custom1ColumnName
            custom2ColumnName
            custom3ColumnName
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
            bmk
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
        currentProjektId
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
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              currentProjektId
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
              custom1ColumnName
              custom2ColumnName
              custom3ColumnName
              createdAt
              updatedAt
            }
            nextToken
          }
          referenzStueli {
            items {
              id
              anlageId
              bmk
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
          currentProjektId
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
      custom1ColumnName
      custom2ColumnName
      custom3ColumnName
      createdAt
      updatedAt
      anlage {
        id
        firma
        standort
        anschrift
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
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              currentProjektId
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
            custom1ColumnName
            custom2ColumnName
            custom3ColumnName
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
            bmk
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
      projektStueli {
        items {
          id
          projektId
          bmk
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          kurzspezifikationVorschlag
          lieferantVorschlag
          nennweiteVorschlag
          feinspezifikationVorschlag
          custom1
          custom2
          custom3
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
        custom1ColumnName
        custom2ColumnName
        custom3ColumnName
        createdAt
        updatedAt
        anlage {
          id
          firma
          standort
          anschrift
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
              custom1ColumnName
              custom2ColumnName
              custom3ColumnName
              createdAt
              updatedAt
            }
            nextToken
          }
          referenzStueli {
            items {
              id
              anlageId
              bmk
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
        projektStueli {
          items {
            id
            projektId
            bmk
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            kurzspezifikationVorschlag
            lieferantVorschlag
            nennweiteVorschlag
            feinspezifikationVorschlag
            custom1
            custom2
            custom3
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
      bmk
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      kurzspezifikationVorschlag
      lieferantVorschlag
      nennweiteVorschlag
      feinspezifikationVorschlag
      custom1
      custom2
      custom3
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
        bmk
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        kurzspezifikationVorschlag
        lieferantVorschlag
        nennweiteVorschlag
        feinspezifikationVorschlag
        custom1
        custom2
        custom3
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
        bmk
        kurzspezifikation
        lieferant
        nennweite
        feinspezifikation
        kurzspezifikationVorschlag
        lieferantVorschlag
        nennweiteVorschlag
        feinspezifikationVorschlag
        custom1
        custom2
        custom3
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
      bmk
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
        bmk
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
        bmk
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
        bmk
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
      currentProjektId
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
            currentProjektId
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
        currentProjektId
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
              createdAt
              updatedAt
            }
            user {
              email
              role
              currentAnlageId
              currentProjektId
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

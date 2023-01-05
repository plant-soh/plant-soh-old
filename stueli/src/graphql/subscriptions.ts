/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnlage = /* GraphQL */ `
  subscription OnCreateAnlage($users: String) {
    onCreateAnlage(users: $users) {
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
export const onUpdateAnlage = /* GraphQL */ `
  subscription OnUpdateAnlage($users: String) {
    onUpdateAnlage(users: $users) {
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
export const onDeleteAnlage = /* GraphQL */ `
  subscription OnDeleteAnlage($users: String) {
    onDeleteAnlage(users: $users) {
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
export const onCreateAnlagenUser = /* GraphQL */ `
  subscription OnCreateAnlagenUser($userEmail: String) {
    onCreateAnlagenUser(userEmail: $userEmail) {
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
export const onUpdateAnlagenUser = /* GraphQL */ `
  subscription OnUpdateAnlagenUser($userEmail: String) {
    onUpdateAnlagenUser(userEmail: $userEmail) {
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
export const onDeleteAnlagenUser = /* GraphQL */ `
  subscription OnDeleteAnlagenUser($userEmail: String) {
    onDeleteAnlagenUser(userEmail: $userEmail) {
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
export const onCreateProjekt = /* GraphQL */ `
  subscription OnCreateProjekt($users: String) {
    onCreateProjekt(users: $users) {
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
export const onUpdateProjekt = /* GraphQL */ `
  subscription OnUpdateProjekt($users: String) {
    onUpdateProjekt(users: $users) {
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
export const onDeleteProjekt = /* GraphQL */ `
  subscription OnDeleteProjekt($users: String) {
    onDeleteProjekt(users: $users) {
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
export const onCreateProjektStueli = /* GraphQL */ `
  subscription OnCreateProjektStueli {
    onCreateProjektStueli {
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
export const onUpdateProjektStueli = /* GraphQL */ `
  subscription OnUpdateProjektStueli {
    onUpdateProjektStueli {
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
export const onDeleteProjektStueli = /* GraphQL */ `
  subscription OnDeleteProjektStueli {
    onDeleteProjektStueli {
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
export const onCreateReferenzStueli = /* GraphQL */ `
  subscription OnCreateReferenzStueli {
    onCreateReferenzStueli {
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
export const onUpdateReferenzStueli = /* GraphQL */ `
  subscription OnUpdateReferenzStueli {
    onUpdateReferenzStueli {
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
export const onDeleteReferenzStueli = /* GraphQL */ `
  subscription OnDeleteReferenzStueli {
    onDeleteReferenzStueli {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($email: String) {
    onCreateUser(email: $email) {
      email
      role
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($email: String) {
    onUpdateUser(email: $email) {
      email
      role
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($email: String) {
    onDeleteUser(email: $email) {
      email
      role
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

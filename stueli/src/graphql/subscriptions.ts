/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnlage = /* GraphQL */ `
  subscription OnCreateAnlage($id: String) {
    onCreateAnlage(id: $id) {
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
              bmkDouble
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              kurzspezifikationVorschlag
              lieferantVorschlag
              nennweiteVorschlag
              feinspezifikationVorschlag
              angefragt
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
        }
        nextToken
      }
    }
  }
`;
export const onUpdateAnlage = /* GraphQL */ `
  subscription OnUpdateAnlage($id: String) {
    onUpdateAnlage(id: $id) {
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
              bmkDouble
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              kurzspezifikationVorschlag
              lieferantVorschlag
              nennweiteVorschlag
              feinspezifikationVorschlag
              angefragt
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
        }
        nextToken
      }
    }
  }
`;
export const onDeleteAnlage = /* GraphQL */ `
  subscription OnDeleteAnlage($id: String) {
    onDeleteAnlage(id: $id) {
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
              bmkDouble
              kurzspezifikation
              lieferant
              nennweite
              feinspezifikation
              kurzspezifikationVorschlag
              lieferantVorschlag
              nennweiteVorschlag
              feinspezifikationVorschlag
              angefragt
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
            anlage {
              id
              firma
              standort
              anschrift
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
            anlage {
              id
              firma
              standort
              anschrift
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
            anlage {
              id
              firma
              standort
              anschrift
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
export const onCreateProjekt = /* GraphQL */ `
  subscription OnCreateProjekt($id: String) {
    onCreateProjekt(id: $id) {
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
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      projektStueli {
        items {
          id
          projektId
          bmk
          bmkDouble
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          kurzspezifikationVorschlag
          lieferantVorschlag
          nennweiteVorschlag
          feinspezifikationVorschlag
          angefragt
          custom1
          custom2
          custom3
          createdAt
          updatedAt
          projekt {
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
        }
        nextToken
      }
    }
  }
`;
export const onUpdateProjekt = /* GraphQL */ `
  subscription OnUpdateProjekt($id: String) {
    onUpdateProjekt(id: $id) {
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
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      projektStueli {
        items {
          id
          projektId
          bmk
          bmkDouble
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          kurzspezifikationVorschlag
          lieferantVorschlag
          nennweiteVorschlag
          feinspezifikationVorschlag
          angefragt
          custom1
          custom2
          custom3
          createdAt
          updatedAt
          projekt {
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
        }
        nextToken
      }
    }
  }
`;
export const onDeleteProjekt = /* GraphQL */ `
  subscription OnDeleteProjekt($id: String) {
    onDeleteProjekt(id: $id) {
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
            anlage {
              id
              firma
              standort
              anschrift
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      projektStueli {
        items {
          id
          projektId
          bmk
          bmkDouble
          kurzspezifikation
          lieferant
          nennweite
          feinspezifikation
          kurzspezifikationVorschlag
          lieferantVorschlag
          nennweiteVorschlag
          feinspezifikationVorschlag
          angefragt
          custom1
          custom2
          custom3
          createdAt
          updatedAt
          projekt {
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
      bmk
      bmkDouble
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      kurzspezifikationVorschlag
      lieferantVorschlag
      nennweiteVorschlag
      feinspezifikationVorschlag
      angefragt
      custom1
      custom2
      custom3
      createdAt
      updatedAt
      projekt {
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
            bmkDouble
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            kurzspezifikationVorschlag
            lieferantVorschlag
            nennweiteVorschlag
            feinspezifikationVorschlag
            angefragt
            custom1
            custom2
            custom3
            createdAt
            updatedAt
            projekt {
              id
              anlageId
              projektNummer
              custom1ColumnName
              custom2ColumnName
              custom3ColumnName
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
export const onUpdateProjektStueli = /* GraphQL */ `
  subscription OnUpdateProjektStueli {
    onUpdateProjektStueli {
      id
      projektId
      bmk
      bmkDouble
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      kurzspezifikationVorschlag
      lieferantVorschlag
      nennweiteVorschlag
      feinspezifikationVorschlag
      angefragt
      custom1
      custom2
      custom3
      createdAt
      updatedAt
      projekt {
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
            bmkDouble
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            kurzspezifikationVorschlag
            lieferantVorschlag
            nennweiteVorschlag
            feinspezifikationVorschlag
            angefragt
            custom1
            custom2
            custom3
            createdAt
            updatedAt
            projekt {
              id
              anlageId
              projektNummer
              custom1ColumnName
              custom2ColumnName
              custom3ColumnName
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
export const onDeleteProjektStueli = /* GraphQL */ `
  subscription OnDeleteProjektStueli {
    onDeleteProjektStueli {
      id
      projektId
      bmk
      bmkDouble
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
      kurzspezifikationVorschlag
      lieferantVorschlag
      nennweiteVorschlag
      feinspezifikationVorschlag
      angefragt
      custom1
      custom2
      custom3
      createdAt
      updatedAt
      projekt {
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
            bmkDouble
            kurzspezifikation
            lieferant
            nennweite
            feinspezifikation
            kurzspezifikationVorschlag
            lieferantVorschlag
            nennweiteVorschlag
            feinspezifikationVorschlag
            angefragt
            custom1
            custom2
            custom3
            createdAt
            updatedAt
            projekt {
              id
              anlageId
              projektNummer
              custom1ColumnName
              custom2ColumnName
              custom3ColumnName
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
export const onCreateReferenzStueli = /* GraphQL */ `
  subscription OnCreateReferenzStueli($anlageId: String) {
    onCreateReferenzStueli(anlageId: $anlageId) {
      id
      anlageId
      bmk
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
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
            anlage {
              id
              firma
              standort
              anschrift
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
export const onUpdateReferenzStueli = /* GraphQL */ `
  subscription OnUpdateReferenzStueli($anlageId: String) {
    onUpdateReferenzStueli(anlageId: $anlageId) {
      id
      anlageId
      bmk
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
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
            anlage {
              id
              firma
              standort
              anschrift
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
export const onDeleteReferenzStueli = /* GraphQL */ `
  subscription OnDeleteReferenzStueli($anlageId: String) {
    onDeleteReferenzStueli(anlageId: $anlageId) {
      id
      anlageId
      bmk
      kurzspezifikation
      lieferant
      nennweite
      feinspezifikation
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
            anlage {
              id
              firma
              standort
              anschrift
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($email: String) {
    onCreateUser(email: $email) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($email: String) {
    onUpdateUser(email: $email) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($email: String) {
    onDeleteUser(email: $email) {
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

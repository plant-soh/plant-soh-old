import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSEmail: any;
  AWSIPAddress: any;
  AWSJSON: any;
  AWSPhone: any;
  AWSTime: any;
  AWSTimestamp: any;
  AWSURL: any;
  BigInt: any;
  Double: any;
};

export type Anlage = {
  __typename?: 'Anlage';
  anlagenUsers?: Maybe<ModelAnlagenUserConnection>;
  anschrift?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  firma: Scalars['String'];
  id: Scalars['ID'];
  referenzStueli?: Maybe<ModelReferenzStueliConnection>;
  standort: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  users?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AnlageAnlagenUsersArgs = {
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userEmail?: InputMaybe<ModelStringKeyConditionInput>;
};

export type AnlageReferenzStueliArgs = {
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type AnlagenUser = {
  __typename?: 'AnlagenUser';
  anlage: Anlage;
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
  user: User;
  userEmail: Scalars['String'];
};

export type CreateAnlageInput = {
  anschrift?: InputMaybe<Scalars['String']>;
  firma: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  standort: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type CreateReferenzStueliInput = {
  anlageId: Scalars['ID'];
  feinspezifikation?: InputMaybe<Scalars['String']>;
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  role: Role;
};

export type DeleteAnlageInput = {
  anlageId: Scalars['ID'];
};

export type DeleteAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type DeleteReferenzStueliInput = {
  anlageId: Scalars['ID'];
};

export type DeleteUserInput = {
  email: Scalars['String'];
};

export type ModelAnlageConnection = {
  __typename?: 'ModelAnlageConnection';
  items?: Maybe<Array<Maybe<Anlage>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnlageFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAnlageFilterInput>>>;
  anschrift?: InputMaybe<ModelStringFilterInput>;
  firma?: InputMaybe<ModelStringFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelAnlageFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnlageFilterInput>>>;
  standort?: InputMaybe<ModelStringFilterInput>;
  users?: InputMaybe<ModelStringFilterInput>;
};

export type ModelAnlagenUserConnection = {
  __typename?: 'ModelAnlagenUserConnection';
  items?: Maybe<Array<Maybe<AnlagenUser>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnlagenUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAnlagenUserFilterInput>>>;
  anlageId?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelAnlagenUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnlagenUserFilterInput>>>;
  userEmail?: InputMaybe<ModelStringFilterInput>;
};

export type ModelBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelReferenzStueliConnection = {
  __typename?: 'ModelReferenzStueliConnection';
  items?: Maybe<Array<Maybe<ReferenzStueli>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelReferenzStueliFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelReferenzStueliFilterInput>>>;
  anlageId?: InputMaybe<ModelIdFilterInput>;
  feinspezifikation?: InputMaybe<ModelStringFilterInput>;
  kurzspezifikation?: InputMaybe<ModelStringFilterInput>;
  lieferant?: InputMaybe<ModelStringFilterInput>;
  nennweite?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelReferenzStueliFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelReferenzStueliFilterInput>>>;
};

export type ModelRoleFilterInput = {
  eq?: InputMaybe<Role>;
  ne?: InputMaybe<Role>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ModelStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
};

export type ModelStringKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  email?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  role?: InputMaybe<ModelRoleFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnlage?: Maybe<Anlage>;
  createAnlagenUser?: Maybe<AnlagenUser>;
  createAnlagenUserPrimary?: Maybe<AnlagenUser>;
  createReferenzStueli?: Maybe<ReferenzStueli>;
  createUser?: Maybe<User>;
  deleteAnlage?: Maybe<Anlage>;
  deleteAnlagePrimary?: Maybe<Anlage>;
  deleteAnlagenUser?: Maybe<AnlagenUser>;
  deleteAnlagenUserPrimary?: Maybe<AnlagenUser>;
  deleteReferenzStueli?: Maybe<ReferenzStueli>;
  deleteUser?: Maybe<User>;
  updateAnlage?: Maybe<Anlage>;
  updateAnlagenUser?: Maybe<AnlagenUser>;
  updateReferenzStueli?: Maybe<ReferenzStueli>;
  updateUser?: Maybe<User>;
};

export type MutationCreateAnlageArgs = {
  input: CreateAnlageInput;
};

export type MutationCreateAnlagenUserArgs = {
  input: CreateAnlagenUserInput;
};

export type MutationCreateAnlagenUserPrimaryArgs = {
  input: CreateAnlagenUserInput;
};

export type MutationCreateReferenzStueliArgs = {
  input: CreateReferenzStueliInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteAnlageArgs = {
  input: DeleteAnlageInput;
};

export type MutationDeleteAnlagePrimaryArgs = {
  input: DeleteAnlageInput;
};

export type MutationDeleteAnlagenUserArgs = {
  input: DeleteAnlagenUserInput;
};

export type MutationDeleteAnlagenUserPrimaryArgs = {
  input: DeleteAnlagenUserInput;
};

export type MutationDeleteReferenzStueliArgs = {
  input: DeleteReferenzStueliInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationUpdateAnlageArgs = {
  input: UpdateAnlageInput;
};

export type MutationUpdateAnlagenUserArgs = {
  input: UpdateAnlagenUserInput;
};

export type MutationUpdateReferenzStueliArgs = {
  input: UpdateReferenzStueliInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAnlage?: Maybe<Anlage>;
  getAnlagenUser?: Maybe<AnlagenUser>;
  getReferenzStueli?: Maybe<ReferenzStueli>;
  getUser?: Maybe<User>;
  listAnlagenUsers?: Maybe<ModelAnlagenUserConnection>;
  listAnlages?: Maybe<ModelAnlageConnection>;
  listReferenzStuelis?: Maybe<ModelReferenzStueliConnection>;
  listUsers?: Maybe<ModelUserConnection>;
};

export type QueryGetAnlageArgs = {
  id: Scalars['ID'];
};

export type QueryGetAnlagenUserArgs = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type QueryGetReferenzStueliArgs = {
  anlageId: Scalars['ID'];
};

export type QueryGetUserArgs = {
  email: Scalars['String'];
};

export type QueryListAnlagenUsersArgs = {
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userEmail?: InputMaybe<Scalars['String']>;
};

export type QueryListAnlagesArgs = {
  filter?: InputMaybe<ModelAnlageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};

export type QueryListReferenzStuelisArgs = {
  anlageId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ReferenzStueli = {
  __typename?: 'ReferenzStueli';
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  feinspezifikation?: Maybe<Scalars['String']>;
  kurzspezifikation?: Maybe<Scalars['String']>;
  lieferant?: Maybe<Scalars['String']>;
  nennweite?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export enum Role {
  Admin = 'Admin',
  Anlagenbauer = 'Anlagenbauer',
  Anlagenbetreiber = 'Anlagenbetreiber',
}

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAnlage?: Maybe<Anlage>;
  onCreateAnlagenUser?: Maybe<AnlagenUser>;
  onCreateReferenzStueli?: Maybe<ReferenzStueli>;
  onCreateUser?: Maybe<User>;
  onDeleteAnlage?: Maybe<Anlage>;
  onDeleteAnlagenUser?: Maybe<AnlagenUser>;
  onDeleteReferenzStueli?: Maybe<ReferenzStueli>;
  onDeleteUser?: Maybe<User>;
  onUpdateAnlage?: Maybe<Anlage>;
  onUpdateAnlagenUser?: Maybe<AnlagenUser>;
  onUpdateReferenzStueli?: Maybe<ReferenzStueli>;
  onUpdateUser?: Maybe<User>;
};

export type SubscriptionOnCreateAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlageArgs = {
  users?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type UpdateAnlageInput = {
  anschrift?: InputMaybe<Scalars['String']>;
  firma?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  standort?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type UpdateReferenzStueliInput = {
  anlageId: Scalars['ID'];
  feinspezifikation?: InputMaybe<Scalars['String']>;
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type User = {
  __typename?: 'User';
  anlagen?: Maybe<ModelAnlagenUserConnection>;
  createdAt: Scalars['AWSDateTime'];
  email: Scalars['String'];
  role: Role;
  updatedAt: Scalars['AWSDateTime'];
};

export type UserAnlagenArgs = {
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type CreateAnlagenUserPrimaryMutationVariables = Exact<{
  input: CreateAnlagenUserInput;
}>;

export type CreateAnlagenUserPrimaryMutation = {
  __typename?: 'Mutation';
  createAnlagenUserPrimary?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagenUserPrimaryMutationVariables = Exact<{
  input: DeleteAnlagenUserInput;
}>;

export type DeleteAnlagenUserPrimaryMutation = {
  __typename?: 'Mutation';
  deleteAnlagenUserPrimary?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagePrimaryMutationVariables = Exact<{
  input: DeleteAnlageInput;
}>;

export type DeleteAnlagePrimaryMutation = {
  __typename?: 'Mutation';
  deleteAnlagePrimary?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateAnlagenUserMutationVariables = Exact<{
  input: UpdateAnlagenUserInput;
}>;

export type UpdateAnlagenUserMutation = {
  __typename?: 'Mutation';
  updateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type CreateAnlageMutationVariables = Exact<{
  input: CreateAnlageInput;
}>;

export type CreateAnlageMutation = {
  __typename?: 'Mutation';
  createAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateAnlageMutationVariables = Exact<{
  input: UpdateAnlageInput;
}>;

export type UpdateAnlageMutation = {
  __typename?: 'Mutation';
  updateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DeleteAnlageMutationVariables = Exact<{
  input: DeleteAnlageInput;
}>;

export type DeleteAnlageMutation = {
  __typename?: 'Mutation';
  deleteAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type CreateAnlagenUserMutationVariables = Exact<{
  input: CreateAnlagenUserInput;
}>;

export type CreateAnlagenUserMutation = {
  __typename?: 'Mutation';
  createAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type DeleteAnlagenUserMutationVariables = Exact<{
  input: DeleteAnlagenUserInput;
}>;

export type DeleteAnlagenUserMutation = {
  __typename?: 'Mutation';
  deleteAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type CreateReferenzStueliMutationVariables = Exact<{
  input: CreateReferenzStueliInput;
}>;

export type CreateReferenzStueliMutation = {
  __typename?: 'Mutation';
  createReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type UpdateReferenzStueliMutationVariables = Exact<{
  input: UpdateReferenzStueliInput;
}>;

export type UpdateReferenzStueliMutation = {
  __typename?: 'Mutation';
  updateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type DeleteReferenzStueliMutationVariables = Exact<{
  input: DeleteReferenzStueliInput;
}>;

export type DeleteReferenzStueliMutation = {
  __typename?: 'Mutation';
  deleteReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetAnlageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetAnlageQuery = {
  __typename?: 'Query';
  getAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListAnlagesQueryVariables = Exact<{
  filter?: InputMaybe<ModelAnlageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ListAnlagesQuery = {
  __typename?: 'Query';
  listAnlages?:
    | {
        __typename?: 'ModelAnlageConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'Anlage';
                  id: string;
                  firma: string;
                  standort: string;
                  anschrift?: string | null | undefined;
                  users?: Array<string | null | undefined> | null | undefined;
                  createdAt: any;
                  updatedAt: any;
                  anlagenUsers?:
                    | {
                        __typename?: 'ModelAnlagenUserConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'AnlagenUser';
                                  anlageId: string;
                                  userEmail: string;
                                  createdAt: any;
                                  updatedAt: any;
                                  anlage: {
                                    __typename?: 'Anlage';
                                    id: string;
                                    firma: string;
                                    standort: string;
                                    anschrift?: string | null | undefined;
                                    users?:
                                      | Array<string | null | undefined>
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  referenzStueli?:
                    | {
                        __typename?: 'ModelReferenzStueliConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'ReferenzStueli';
                                  anlageId: string;
                                  kurzspezifikation?: string | null | undefined;
                                  lieferant?: string | null | undefined;
                                  nennweite?: string | null | undefined;
                                  feinspezifikation?: string | null | undefined;
                                  createdAt: any;
                                  updatedAt: any;
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetAnlagenUserQueryVariables = Exact<{
  userEmail: Scalars['String'];
  anlageId: Scalars['ID'];
}>;

export type GetAnlagenUserQuery = {
  __typename?: 'Query';
  getAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type ListAnlagenUsersQueryVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
  anlageId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListAnlagenUsersQuery = {
  __typename?: 'Query';
  listAnlagenUsers?:
    | {
        __typename?: 'ModelAnlagenUserConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'AnlagenUser';
                  anlageId: string;
                  userEmail: string;
                  createdAt: any;
                  updatedAt: any;
                  anlage: {
                    __typename?: 'Anlage';
                    id: string;
                    firma: string;
                    standort: string;
                    anschrift?: string | null | undefined;
                    users?: Array<string | null | undefined> | null | undefined;
                    createdAt: any;
                    updatedAt: any;
                    anlagenUsers?:
                      | {
                          __typename?: 'ModelAnlagenUserConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'AnlagenUser';
                                    anlageId: string;
                                    userEmail: string;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                    referenzStueli?:
                      | {
                          __typename?: 'ModelReferenzStueliConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'ReferenzStueli';
                                    anlageId: string;
                                    kurzspezifikation?:
                                      | string
                                      | null
                                      | undefined;
                                    lieferant?: string | null | undefined;
                                    nennweite?: string | null | undefined;
                                    feinspezifikation?:
                                      | string
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  };
                  user: {
                    __typename?: 'User';
                    email: string;
                    role: Role;
                    createdAt: any;
                    updatedAt: any;
                    anlagen?:
                      | {
                          __typename?: 'ModelAnlagenUserConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'AnlagenUser';
                                    anlageId: string;
                                    userEmail: string;
                                    createdAt: any;
                                    updatedAt: any;
                                  }
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  };
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetReferenzStueliQueryVariables = Exact<{
  anlageId: Scalars['ID'];
}>;

export type GetReferenzStueliQuery = {
  __typename?: 'Query';
  getReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type ListReferenzStuelisQueryVariables = Exact<{
  anlageId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListReferenzStuelisQuery = {
  __typename?: 'Query';
  listReferenzStuelis?:
    | {
        __typename?: 'ModelReferenzStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ReferenzStueli';
                  anlageId: string;
                  kurzspezifikation?: string | null | undefined;
                  lieferant?: string | null | undefined;
                  nennweite?: string | null | undefined;
                  feinspezifikation?: string | null | undefined;
                  createdAt: any;
                  updatedAt: any;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ListUsersQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListUsersQuery = {
  __typename?: 'Query';
  listUsers?:
    | {
        __typename?: 'ModelUserConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'User';
                  email: string;
                  role: Role;
                  createdAt: any;
                  updatedAt: any;
                  anlagen?:
                    | {
                        __typename?: 'ModelAnlagenUserConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'AnlagenUser';
                                  anlageId: string;
                                  userEmail: string;
                                  createdAt: any;
                                  updatedAt: any;
                                  anlage: {
                                    __typename?: 'Anlage';
                                    id: string;
                                    firma: string;
                                    standort: string;
                                    anschrift?: string | null | undefined;
                                    users?:
                                      | Array<string | null | undefined>
                                      | null
                                      | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                }
                              | null
                              | undefined
                            >
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnCreateAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateAnlageSubscription = {
  __typename?: 'Subscription';
  onCreateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnUpdateAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateAnlageSubscription = {
  __typename?: 'Subscription';
  onUpdateAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnDeleteAnlageSubscriptionVariables = Exact<{
  users?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteAnlageSubscription = {
  __typename?: 'Subscription';
  onDeleteAnlage?:
    | {
        __typename?: 'Anlage';
        id: string;
        firma: string;
        standort: string;
        anschrift?: string | null | undefined;
        users?: Array<string | null | undefined> | null | undefined;
        createdAt: any;
        updatedAt: any;
        anlagenUsers?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        referenzStueli?:
          | {
              __typename?: 'ModelReferenzStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ReferenzStueli';
                        anlageId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        createdAt: any;
                        updatedAt: any;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnCreateAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onCreateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnUpdateAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onUpdateAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnDeleteAnlagenUserSubscriptionVariables = Exact<{
  userEmail?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteAnlagenUserSubscription = {
  __typename?: 'Subscription';
  onDeleteAnlagenUser?:
    | {
        __typename?: 'AnlagenUser';
        anlageId: string;
        userEmail: string;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
          users?: Array<string | null | undefined> | null | undefined;
          createdAt: any;
          updatedAt: any;
          anlagenUsers?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          anlageId: string;
                          kurzspezifikation?: string | null | undefined;
                          lieferant?: string | null | undefined;
                          nennweite?: string | null | undefined;
                          feinspezifikation?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
        user: {
          __typename?: 'User';
          email: string;
          role: Role;
          createdAt: any;
          updatedAt: any;
          anlagen?:
            | {
                __typename?: 'ModelAnlagenUserConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'AnlagenUser';
                          anlageId: string;
                          userEmail: string;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            users?:
                              | Array<string | null | undefined>
                              | null
                              | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            createdAt: any;
                            updatedAt: any;
                          };
                        }
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }
            | null
            | undefined;
        };
      }
    | null
    | undefined;
};

export type OnCreateReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnCreateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onCreateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnUpdateReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnUpdateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onUpdateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnDeleteReferenzStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnDeleteReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onDeleteReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        anlageId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnCreateUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateUserSubscription = {
  __typename?: 'Subscription';
  onCreateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnUpdateUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateUserSubscription = {
  __typename?: 'Subscription';
  onUpdateUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type OnDeleteUserSubscriptionVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteUserSubscription = {
  __typename?: 'Subscription';
  onDeleteUser?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        createdAt: any;
        updatedAt: any;
        anlagen?:
          | {
              __typename?: 'ModelAnlagenUserConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'AnlagenUser';
                        anlageId: string;
                        userEmail: string;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          users?:
                            | Array<string | null | undefined>
                            | null
                            | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          referenzStueli?:
                            | {
                                __typename?: 'ModelReferenzStueliConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                        user: {
                          __typename?: 'User';
                          email: string;
                          role: Role;
                          createdAt: any;
                          updatedAt: any;
                          anlagen?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                        };
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const CreateAnlagenUserPrimaryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAnlagenUserPrimary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAnlagenUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAnlagenUserPrimary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateAnlagenUserPrimaryMutation,
  CreateAnlagenUserPrimaryMutationVariables
>;
export const DeleteAnlagenUserPrimaryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteAnlagenUserPrimary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteAnlagenUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteAnlagenUserPrimary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteAnlagenUserPrimaryMutation,
  DeleteAnlagenUserPrimaryMutationVariables
>;
export const DeleteAnlagePrimaryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteAnlagePrimary' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteAnlageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteAnlagePrimary' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteAnlagePrimaryMutation,
  DeleteAnlagePrimaryMutationVariables
>;
export const UpdateAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAnlagenUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAnlagenUserMutation,
  UpdateAnlagenUserMutationVariables
>;
export const CreateAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAnlageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateAnlageMutation,
  CreateAnlageMutationVariables
>;
export const UpdateAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAnlageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAnlageMutation,
  UpdateAnlageMutationVariables
>;
export const DeleteAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteAnlageInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteAnlageMutation,
  DeleteAnlageMutationVariables
>;
export const CreateAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAnlagenUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateAnlagenUserMutation,
  CreateAnlagenUserMutationVariables
>;
export const DeleteAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteAnlagenUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteAnlagenUserMutation,
  DeleteAnlagenUserMutationVariables
>;
export const CreateReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateReferenzStueli' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateReferenzStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createReferenzStueli' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateReferenzStueliMutation,
  CreateReferenzStueliMutationVariables
>;
export const UpdateReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateReferenzStueli' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateReferenzStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateReferenzStueli' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateReferenzStueliMutation,
  UpdateReferenzStueliMutationVariables
>;
export const DeleteReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteReferenzStueli' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteReferenzStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteReferenzStueli' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteReferenzStueliMutation,
  DeleteReferenzStueliMutationVariables
>;
export const CreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DeleteUserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAnlageQuery, GetAnlageQueryVariables>;
export const ListAnlagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListAnlages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelAnlageFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listAnlages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListAnlagesQuery, ListAnlagesQueryVariables>;
export const GetAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userEmail' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userEmail' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userEmail' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'anlageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'anlageId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAnlagenUserQuery, GetAnlagenUserQueryVariables>;
export const ListAnlagenUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListAnlagenUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userEmail' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelIDKeyConditionInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelAnlagenUserFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sortDirection' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelSortDirection' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listAnlagenUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userEmail' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userEmail' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'anlageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'anlageId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sortDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userEmail' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlage' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'firma' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'standort' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anschrift' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'users' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlagenUsers' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'userEmail',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nextToken' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'referenzStueli' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'kurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'lieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'feinspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nextToken' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'email' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'role' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlagen' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'userEmail',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nextToken' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListAnlagenUsersQuery,
  ListAnlagenUsersQueryVariables
>;
export const GetReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetReferenzStueli' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getReferenzStueli' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'anlageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'anlageId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetReferenzStueliQuery,
  GetReferenzStueliQueryVariables
>;
export const ListReferenzStuelisDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListReferenzStuelis' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelReferenzStueliFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sortDirection' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelSortDirection' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listReferenzStuelis' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'anlageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'anlageId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sortDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'kurzspezifikation' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lieferant' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nennweite' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'feinspezifikation' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListReferenzStuelisQuery,
  ListReferenzStuelisQueryVariables
>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const ListUsersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListUsers' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelUserFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sortDirection' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelSortDirection' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listUsers' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sortDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sortDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;
export const OnCreateAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'users' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'users' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'users' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnCreateAnlageSubscription,
  OnCreateAnlageSubscriptionVariables
>;
export const OnUpdateAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'users' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'users' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'users' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnUpdateAnlageSubscription,
  OnUpdateAnlageSubscriptionVariables
>;
export const OnDeleteAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteAnlage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'users' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteAnlage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'users' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'users' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                { kind: 'Field', name: { kind: 'Name', value: 'standort' } },
                { kind: 'Field', name: { kind: 'Name', value: 'anschrift' } },
                { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagenUsers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'referenzStueli' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'kurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lieferant' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nennweite' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'feinspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnDeleteAnlageSubscription,
  OnDeleteAnlageSubscriptionVariables
>;
export const OnCreateAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userEmail' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userEmail' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userEmail' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnCreateAnlagenUserSubscription,
  OnCreateAnlagenUserSubscriptionVariables
>;
export const OnUpdateAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userEmail' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userEmail' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userEmail' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnUpdateAnlagenUserSubscription,
  OnUpdateAnlagenUserSubscriptionVariables
>;
export const OnDeleteAnlagenUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteAnlagenUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userEmail' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteAnlagenUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userEmail' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userEmail' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userEmail' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firma' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'standort' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anschrift' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'users' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagenUsers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'referenzStueli' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'kurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lieferant' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nennweite' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'feinspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlagen' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userEmail' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlage' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'firma',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'standort',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'anschrift',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'users',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'email',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'role' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'createdAt',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'updatedAt',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nextToken' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnDeleteAnlagenUserSubscription,
  OnDeleteAnlagenUserSubscriptionVariables
>;
export const OnCreateReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateReferenzStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateReferenzStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnCreateReferenzStueliSubscription,
  OnCreateReferenzStueliSubscriptionVariables
>;
export const OnUpdateReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateReferenzStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateReferenzStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnUpdateReferenzStueliSubscription,
  OnUpdateReferenzStueliSubscriptionVariables
>;
export const OnDeleteReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteReferenzStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteReferenzStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lieferant' } },
                { kind: 'Field', name: { kind: 'Name', value: 'nennweite' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feinspezifikation' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnDeleteReferenzStueliSubscription,
  OnDeleteReferenzStueliSubscriptionVariables
>;
export const OnCreateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnCreateUserSubscription,
  OnCreateUserSubscriptionVariables
>;
export const OnUpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnUpdateUserSubscription,
  OnUpdateUserSubscriptionVariables
>;
export const OnDeleteUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'anlagen' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userEmail' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'updatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlage' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'firma' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'standort' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anschrift' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'users' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'anlagenUsers',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'referenzStueli',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'user' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'createdAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'updatedAt' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlagen' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nextToken',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nextToken' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OnDeleteUserSubscription,
  OnDeleteUserSubscriptionVariables
>;

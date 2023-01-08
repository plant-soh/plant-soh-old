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
  projekte?: Maybe<ModelProjektConnection>;
  referenzStueli?: Maybe<ModelReferenzStueliConnection>;
  standort: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type AnlageAnlagenUsersArgs = {
  filter?: InputMaybe<ModelAnlagenUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userEmail?: InputMaybe<ModelStringKeyConditionInput>;
};

export type AnlageProjekteArgs = {
  filter?: InputMaybe<ModelProjektFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
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
};

export type CreateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type CreateProjektInput = {
  anlageId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  projektNummer: Scalars['Int'];
};

export type CreateProjektStueliInput = {
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
  projektId: Scalars['ID'];
  vorschlagFeinspezifikation?: InputMaybe<Scalars['String']>;
  vorschlagLieferant?: InputMaybe<Scalars['String']>;
  vorschlagNennweite?: InputMaybe<Scalars['String']>;
  voschlagKurzspezifikation?: InputMaybe<Scalars['String']>;
};

export type CreateReferenzStueliInput = {
  anlageId: Scalars['ID'];
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  currentAnlageId?: InputMaybe<Scalars['String']>;
  currentProjektId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  role: Role;
};

export type DeleteAnlageInput = {
  id: Scalars['ID'];
};

export type DeleteAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type DeleteProjektInput = {
  id: Scalars['ID'];
};

export type DeleteProjektStueliInput = {
  id: Scalars['ID'];
};

export type DeleteReferenzStueliInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  email: Scalars['String'];
};

export type ListKurzspezifikationVorschlaegeInput = {
  anlageId: Scalars['String'];
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

export type ModelProjektConnection = {
  __typename?: 'ModelProjektConnection';
  items?: Maybe<Array<Maybe<Projekt>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelProjektFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProjektFilterInput>>>;
  anlageId?: InputMaybe<ModelIdFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  not?: InputMaybe<ModelProjektFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProjektFilterInput>>>;
  projektNummer?: InputMaybe<ModelIntFilterInput>;
};

export type ModelProjektStueliConnection = {
  __typename?: 'ModelProjektStueliConnection';
  items?: Maybe<Array<Maybe<ProjektStueli>>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelProjektStueliFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProjektStueliFilterInput>>>;
  feinspezifikation?: InputMaybe<ModelStringFilterInput>;
  id?: InputMaybe<ModelIdFilterInput>;
  kurzspezifikation?: InputMaybe<ModelStringFilterInput>;
  lieferant?: InputMaybe<ModelStringFilterInput>;
  nennweite?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelProjektStueliFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProjektStueliFilterInput>>>;
  projektId?: InputMaybe<ModelIdFilterInput>;
  vorschlagFeinspezifikation?: InputMaybe<ModelStringFilterInput>;
  vorschlagLieferant?: InputMaybe<ModelStringFilterInput>;
  vorschlagNennweite?: InputMaybe<ModelStringFilterInput>;
  voschlagKurzspezifikation?: InputMaybe<ModelStringFilterInput>;
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
  id?: InputMaybe<ModelIdFilterInput>;
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
  currentAnlageId?: InputMaybe<ModelStringFilterInput>;
  currentProjektId?: InputMaybe<ModelStringFilterInput>;
  email?: InputMaybe<ModelStringFilterInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  role?: InputMaybe<ModelRoleFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnlage?: Maybe<Anlage>;
  createAnlagenUser?: Maybe<AnlagenUser>;
  createProjekt?: Maybe<Projekt>;
  createProjektStueli?: Maybe<ProjektStueli>;
  createReferenzStueli?: Maybe<ReferenzStueli>;
  createUser?: Maybe<User>;
  deleteAnlage?: Maybe<Anlage>;
  deleteAnlagenUser?: Maybe<AnlagenUser>;
  deleteProjekt?: Maybe<Projekt>;
  deleteProjektStueli?: Maybe<ProjektStueli>;
  deleteReferenzStueli?: Maybe<ReferenzStueli>;
  deleteUser?: Maybe<User>;
  setCurrentAnlageId?: Maybe<User>;
  setCurrentProjektId?: Maybe<User>;
  updateAnlage?: Maybe<Anlage>;
  updateAnlagenUser?: Maybe<AnlagenUser>;
  updateProjekt?: Maybe<Projekt>;
  updateProjektStueli?: Maybe<ProjektStueli>;
  updateReferenzStueli?: Maybe<ReferenzStueli>;
  updateUser?: Maybe<User>;
};

export type MutationCreateAnlageArgs = {
  input: CreateAnlageInput;
};

export type MutationCreateAnlagenUserArgs = {
  input: CreateAnlagenUserInput;
};

export type MutationCreateProjektArgs = {
  input: CreateProjektInput;
};

export type MutationCreateProjektStueliArgs = {
  input: CreateProjektStueliInput;
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

export type MutationDeleteAnlagenUserArgs = {
  input: DeleteAnlagenUserInput;
};

export type MutationDeleteProjektArgs = {
  input: DeleteProjektInput;
};

export type MutationDeleteProjektStueliArgs = {
  input: DeleteProjektStueliInput;
};

export type MutationDeleteReferenzStueliArgs = {
  input: DeleteReferenzStueliInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationSetCurrentAnlageIdArgs = {
  input: SetCurrentAnlageIdInput;
};

export type MutationSetCurrentProjektIdArgs = {
  input: SetCurrentProjektIdInput;
};

export type MutationUpdateAnlageArgs = {
  input: UpdateAnlageInput;
};

export type MutationUpdateAnlagenUserArgs = {
  input: UpdateAnlagenUserInput;
};

export type MutationUpdateProjektArgs = {
  input: UpdateProjektInput;
};

export type MutationUpdateProjektStueliArgs = {
  input: UpdateProjektStueliInput;
};

export type MutationUpdateReferenzStueliArgs = {
  input: UpdateReferenzStueliInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Projekt = {
  __typename?: 'Projekt';
  anlage: Anlage;
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  projektNummer: Scalars['Int'];
  projektStueli?: Maybe<ModelProjektStueliConnection>;
  updatedAt: Scalars['AWSDateTime'];
};

export type ProjektProjektStueliArgs = {
  filter?: InputMaybe<ModelProjektStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ProjektStueli = {
  __typename?: 'ProjektStueli';
  createdAt: Scalars['AWSDateTime'];
  feinspezifikation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  kurzspezifikation?: Maybe<Scalars['String']>;
  lieferant?: Maybe<Scalars['String']>;
  nennweite?: Maybe<Scalars['String']>;
  projektId: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
  vorschlagFeinspezifikation?: Maybe<Scalars['String']>;
  vorschlagLieferant?: Maybe<Scalars['String']>;
  vorschlagNennweite?: Maybe<Scalars['String']>;
  voschlagKurzspezifikation?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  byAnlage?: Maybe<ModelReferenzStueliConnection>;
  getAnlage?: Maybe<Anlage>;
  getAnlagenUser?: Maybe<AnlagenUser>;
  getProjekt?: Maybe<Projekt>;
  getProjektStueli?: Maybe<ProjektStueli>;
  getReferenzStueli?: Maybe<ReferenzStueli>;
  getUser?: Maybe<User>;
  listAnlagenUsers?: Maybe<ModelAnlagenUserConnection>;
  listAnlages?: Maybe<ModelAnlageConnection>;
  listKurzspezifikationVorschlaege?: Maybe<Array<Maybe<Scalars['String']>>>;
  listProjektStuelis?: Maybe<ModelProjektStueliConnection>;
  listProjekts?: Maybe<ModelProjektConnection>;
  listReferenzStuelis?: Maybe<ModelReferenzStueliConnection>;
  listUsers?: Maybe<ModelUserConnection>;
  projektStueliByKurzspezifikation?: Maybe<ModelProjektStueliConnection>;
  referenzStueliByKurzspezifikation?: Maybe<ModelReferenzStueliConnection>;
};

export type QueryByAnlageArgs = {
  anlageId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryGetAnlageArgs = {
  id: Scalars['ID'];
};

export type QueryGetAnlagenUserArgs = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type QueryGetProjektArgs = {
  id: Scalars['ID'];
};

export type QueryGetProjektStueliArgs = {
  id: Scalars['ID'];
};

export type QueryGetReferenzStueliArgs = {
  id: Scalars['ID'];
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
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListKurzspezifikationVorschlaegeArgs = {
  input: ListKurzspezifikationVorschlaegeInput;
};

export type QueryListProjektStuelisArgs = {
  filter?: InputMaybe<ModelProjektStueliFilterInput>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListProjektsArgs = {
  filter?: InputMaybe<ModelProjektFilterInput>;
  id?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryListReferenzStuelisArgs = {
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  id?: InputMaybe<Scalars['ID']>;
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

export type QueryProjektStueliByKurzspezifikationArgs = {
  filter?: InputMaybe<ModelProjektStueliFilterInput>;
  kurzspezifikation?: InputMaybe<ModelStringKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  projektId?: InputMaybe<Scalars['ID']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type QueryReferenzStueliByKurzspezifikationArgs = {
  anlageId?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  kurzspezifikation?: InputMaybe<ModelStringKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ReferenzStueli = {
  __typename?: 'ReferenzStueli';
  anlageId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  feinspezifikation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
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

export type SetCurrentAnlageIdInput = {
  anlageId: Scalars['ID'];
};

export type SetCurrentProjektIdInput = {
  projektId: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAnlage?: Maybe<Anlage>;
  onCreateAnlagenUser?: Maybe<AnlagenUser>;
  onCreateProjekt?: Maybe<Projekt>;
  onCreateProjektStueli?: Maybe<ProjektStueli>;
  onCreateReferenzStueli?: Maybe<ReferenzStueli>;
  onCreateUser?: Maybe<User>;
  onDeleteAnlage?: Maybe<Anlage>;
  onDeleteAnlagenUser?: Maybe<AnlagenUser>;
  onDeleteProjekt?: Maybe<Projekt>;
  onDeleteProjektStueli?: Maybe<ProjektStueli>;
  onDeleteReferenzStueli?: Maybe<ReferenzStueli>;
  onDeleteUser?: Maybe<User>;
  onUpdateAnlage?: Maybe<Anlage>;
  onUpdateAnlagenUser?: Maybe<AnlagenUser>;
  onUpdateProjekt?: Maybe<Projekt>;
  onUpdateProjektStueli?: Maybe<ProjektStueli>;
  onUpdateReferenzStueli?: Maybe<ReferenzStueli>;
  onUpdateUser?: Maybe<User>;
};

export type SubscriptionOnCreateAnlageArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateProjektArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateReferenzStueliArgs = {
  anlageId?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlageArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteProjektArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteReferenzStueliArgs = {
  anlageId?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnDeleteUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlageArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateAnlagenUserArgs = {
  userEmail?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateProjektArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateReferenzStueliArgs = {
  anlageId?: InputMaybe<Scalars['String']>;
};

export type SubscriptionOnUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
};

export type UpdateAnlageInput = {
  anschrift?: InputMaybe<Scalars['String']>;
  firma?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  standort?: InputMaybe<Scalars['String']>;
};

export type UpdateAnlagenUserInput = {
  anlageId: Scalars['ID'];
  userEmail: Scalars['String'];
};

export type UpdateProjektInput = {
  anlageId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  projektNummer?: InputMaybe<Scalars['Int']>;
};

export type UpdateProjektStueliInput = {
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
  projektId?: InputMaybe<Scalars['ID']>;
  vorschlagFeinspezifikation?: InputMaybe<Scalars['String']>;
  vorschlagLieferant?: InputMaybe<Scalars['String']>;
  vorschlagNennweite?: InputMaybe<Scalars['String']>;
  voschlagKurzspezifikation?: InputMaybe<Scalars['String']>;
};

export type UpdateReferenzStueliInput = {
  anlageId?: InputMaybe<Scalars['ID']>;
  feinspezifikation?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  kurzspezifikation?: InputMaybe<Scalars['String']>;
  lieferant?: InputMaybe<Scalars['String']>;
  nennweite?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  currentAnlageId?: InputMaybe<Scalars['String']>;
  currentProjektId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  role?: InputMaybe<Role>;
};

export type User = {
  __typename?: 'User';
  anlagen?: Maybe<ModelAnlagenUserConnection>;
  createdAt: Scalars['AWSDateTime'];
  currentAnlageId?: Maybe<Scalars['String']>;
  currentProjektId?: Maybe<Scalars['String']>;
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

export type SetCurrentAnlageIdMutationVariables = Exact<{
  input: SetCurrentAnlageIdInput;
}>;

export type SetCurrentAnlageIdMutation = {
  __typename?: 'Mutation';
  setCurrentAnlageId?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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

export type SetCurrentProjektIdMutationVariables = Exact<{
  input: SetCurrentProjektIdInput;
}>;

export type SetCurrentProjektIdMutation = {
  __typename?: 'Mutation';
  setCurrentProjektId?:
    | {
        __typename?: 'User';
        email: string;
        role: Role;
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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

export type CreateProjektMutationVariables = Exact<{
  input: CreateProjektInput;
}>;

export type CreateProjektMutation = {
  __typename?: 'Mutation';
  createProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type UpdateProjektMutationVariables = Exact<{
  input: UpdateProjektInput;
}>;

export type UpdateProjektMutation = {
  __typename?: 'Mutation';
  updateProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type DeleteProjektMutationVariables = Exact<{
  input: DeleteProjektInput;
}>;

export type DeleteProjektMutation = {
  __typename?: 'Mutation';
  deleteProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type CreateProjektStueliMutationVariables = Exact<{
  input: CreateProjektStueliInput;
}>;

export type CreateProjektStueliMutation = {
  __typename?: 'Mutation';
  createProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type UpdateProjektStueliMutationVariables = Exact<{
  input: UpdateProjektStueliInput;
}>;

export type UpdateProjektStueliMutation = {
  __typename?: 'Mutation';
  updateProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type DeleteProjektStueliMutationVariables = Exact<{
  input: DeleteProjektStueliInput;
}>;

export type DeleteProjektStueliMutation = {
  __typename?: 'Mutation';
  deleteProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
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
        id: string;
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
        id: string;
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
        id: string;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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

export type ListKurzspezifikationVorschlaegeQueryVariables = Exact<{
  input: ListKurzspezifikationVorschlaegeInput;
}>;

export type ListKurzspezifikationVorschlaegeQuery = {
  __typename?: 'Query';
  listKurzspezifikationVorschlaege?:
    | Array<string | null | undefined>
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
  id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelAnlageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
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
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    currentAnlageId?: string | null | undefined;
                                    currentProjektId?:
                                      | string
                                      | null
                                      | undefined;
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
                  projekte?:
                    | {
                        __typename?: 'ModelProjektConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'Projekt';
                                  id: string;
                                  anlageId: string;
                                  projektNummer: number;
                                  createdAt: any;
                                  updatedAt: any;
                                  anlage: {
                                    __typename?: 'Anlage';
                                    id: string;
                                    firma: string;
                                    standort: string;
                                    anschrift?: string | null | undefined;
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  projektStueli?:
                                    | {
                                        __typename?: 'ModelProjektStueliConnection';
                                        nextToken?: string | null | undefined;
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
                  referenzStueli?:
                    | {
                        __typename?: 'ModelReferenzStueliConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'ReferenzStueli';
                                  id: string;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
                    projekte?:
                      | {
                          __typename?: 'ModelProjektConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'Projekt';
                                    id: string;
                                    anlageId: string;
                                    projektNummer: number;
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
                                    id: string;
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
                    currentAnlageId?: string | null | undefined;
                    currentProjektId?: string | null | undefined;
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

export type GetProjektQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetProjektQuery = {
  __typename?: 'Query';
  getProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type ListProjektsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelProjektFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListProjektsQuery = {
  __typename?: 'Query';
  listProjekts?:
    | {
        __typename?: 'ModelProjektConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'Projekt';
                  id: string;
                  anlageId: string;
                  projektNummer: number;
                  createdAt: any;
                  updatedAt: any;
                  anlage: {
                    __typename?: 'Anlage';
                    id: string;
                    firma: string;
                    standort: string;
                    anschrift?: string | null | undefined;
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
                    projekte?:
                      | {
                          __typename?: 'ModelProjektConnection';
                          nextToken?: string | null | undefined;
                          items?:
                            | Array<
                                | {
                                    __typename?: 'Projekt';
                                    id: string;
                                    anlageId: string;
                                    projektNummer: number;
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
                                    id: string;
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
                  projektStueli?:
                    | {
                        __typename?: 'ModelProjektStueliConnection';
                        nextToken?: string | null | undefined;
                        items?:
                          | Array<
                              | {
                                  __typename?: 'ProjektStueli';
                                  id: string;
                                  projektId: string;
                                  kurzspezifikation?: string | null | undefined;
                                  lieferant?: string | null | undefined;
                                  nennweite?: string | null | undefined;
                                  feinspezifikation?: string | null | undefined;
                                  voschlagKurzspezifikation?:
                                    | string
                                    | null
                                    | undefined;
                                  vorschlagLieferant?:
                                    | string
                                    | null
                                    | undefined;
                                  vorschlagNennweite?:
                                    | string
                                    | null
                                    | undefined;
                                  vorschlagFeinspezifikation?:
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

export type GetProjektStueliQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetProjektStueliQuery = {
  __typename?: 'Query';
  getProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type ListProjektStuelisQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ModelProjektStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
}>;

export type ListProjektStuelisQuery = {
  __typename?: 'Query';
  listProjektStuelis?:
    | {
        __typename?: 'ModelProjektStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ProjektStueli';
                  id: string;
                  projektId: string;
                  kurzspezifikation?: string | null | undefined;
                  lieferant?: string | null | undefined;
                  nennweite?: string | null | undefined;
                  feinspezifikation?: string | null | undefined;
                  voschlagKurzspezifikation?: string | null | undefined;
                  vorschlagLieferant?: string | null | undefined;
                  vorschlagNennweite?: string | null | undefined;
                  vorschlagFeinspezifikation?: string | null | undefined;
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

export type ProjektStueliByKurzspezifikationQueryVariables = Exact<{
  projektId?: InputMaybe<Scalars['ID']>;
  kurzspezifikation?: InputMaybe<ModelStringKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelProjektStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ProjektStueliByKurzspezifikationQuery = {
  __typename?: 'Query';
  projektStueliByKurzspezifikation?:
    | {
        __typename?: 'ModelProjektStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ProjektStueli';
                  id: string;
                  projektId: string;
                  kurzspezifikation?: string | null | undefined;
                  lieferant?: string | null | undefined;
                  nennweite?: string | null | undefined;
                  feinspezifikation?: string | null | undefined;
                  voschlagKurzspezifikation?: string | null | undefined;
                  vorschlagLieferant?: string | null | undefined;
                  vorschlagNennweite?: string | null | undefined;
                  vorschlagFeinspezifikation?: string | null | undefined;
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

export type GetReferenzStueliQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetReferenzStueliQuery = {
  __typename?: 'Query';
  getReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
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
  id?: InputMaybe<Scalars['ID']>;
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
                  id: string;
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

export type ReferenzStueliByKurzspezifikationQueryVariables = Exact<{
  anlageId?: InputMaybe<Scalars['ID']>;
  kurzspezifikation?: InputMaybe<ModelStringKeyConditionInput>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ReferenzStueliByKurzspezifikationQuery = {
  __typename?: 'Query';
  referenzStueliByKurzspezifikation?:
    | {
        __typename?: 'ModelReferenzStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ReferenzStueli';
                  id: string;
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

export type ByAnlageQueryVariables = Exact<{
  anlageId?: InputMaybe<Scalars['ID']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelReferenzStueliFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;

export type ByAnlageQuery = {
  __typename?: 'Query';
  byAnlage?:
    | {
        __typename?: 'ModelReferenzStueliConnection';
        nextToken?: string | null | undefined;
        items?:
          | Array<
              | {
                  __typename?: 'ReferenzStueli';
                  id: string;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
                  currentAnlageId?: string | null | undefined;
                  currentProjektId?: string | null | undefined;
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
                                    createdAt: any;
                                    updatedAt: any;
                                  };
                                  user: {
                                    __typename?: 'User';
                                    email: string;
                                    role: Role;
                                    currentAnlageId?: string | null | undefined;
                                    currentProjektId?:
                                      | string
                                      | null
                                      | undefined;
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
  id?: InputMaybe<Scalars['String']>;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
  id?: InputMaybe<Scalars['String']>;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
  id?: InputMaybe<Scalars['String']>;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        projekte?:
          | {
              __typename?: 'ModelProjektConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'Projekt';
                        id: string;
                        anlageId: string;
                        projektNummer: number;
                        createdAt: any;
                        updatedAt: any;
                        anlage: {
                          __typename?: 'Anlage';
                          id: string;
                          firma: string;
                          standort: string;
                          anschrift?: string | null | undefined;
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                        projektStueli?:
                          | {
                              __typename?: 'ModelProjektStueliConnection';
                              nextToken?: string | null | undefined;
                              items?:
                                | Array<
                                    | {
                                        __typename?: 'ProjektStueli';
                                        id: string;
                                        projektId: string;
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
                                        voschlagKurzspezifikation?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagLieferant?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagNennweite?:
                                          | string
                                          | null
                                          | undefined;
                                        vorschlagFeinspezifikation?:
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
                        id: string;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
          currentAnlageId?: string | null | undefined;
          currentProjektId?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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

export type OnCreateProjektSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateProjektSubscription = {
  __typename?: 'Subscription';
  onCreateProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type OnUpdateProjektSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateProjektSubscription = {
  __typename?: 'Subscription';
  onUpdateProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type OnDeleteProjektSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteProjektSubscription = {
  __typename?: 'Subscription';
  onDeleteProjekt?:
    | {
        __typename?: 'Projekt';
        id: string;
        anlageId: string;
        projektNummer: number;
        createdAt: any;
        updatedAt: any;
        anlage: {
          __typename?: 'Anlage';
          id: string;
          firma: string;
          standort: string;
          anschrift?: string | null | undefined;
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
                            createdAt: any;
                            updatedAt: any;
                          };
                          user: {
                            __typename?: 'User';
                            email: string;
                            role: Role;
                            currentAnlageId?: string | null | undefined;
                            currentProjektId?: string | null | undefined;
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
          projekte?:
            | {
                __typename?: 'ModelProjektConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'Projekt';
                          id: string;
                          anlageId: string;
                          projektNummer: number;
                          createdAt: any;
                          updatedAt: any;
                          anlage: {
                            __typename?: 'Anlage';
                            id: string;
                            firma: string;
                            standort: string;
                            anschrift?: string | null | undefined;
                            createdAt: any;
                            updatedAt: any;
                          };
                          projektStueli?:
                            | {
                                __typename?: 'ModelProjektStueliConnection';
                                nextToken?: string | null | undefined;
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
          referenzStueli?:
            | {
                __typename?: 'ModelReferenzStueliConnection';
                nextToken?: string | null | undefined;
                items?:
                  | Array<
                      | {
                          __typename?: 'ReferenzStueli';
                          id: string;
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
        projektStueli?:
          | {
              __typename?: 'ModelProjektStueliConnection';
              nextToken?: string | null | undefined;
              items?:
                | Array<
                    | {
                        __typename?: 'ProjektStueli';
                        id: string;
                        projektId: string;
                        kurzspezifikation?: string | null | undefined;
                        lieferant?: string | null | undefined;
                        nennweite?: string | null | undefined;
                        feinspezifikation?: string | null | undefined;
                        voschlagKurzspezifikation?: string | null | undefined;
                        vorschlagLieferant?: string | null | undefined;
                        vorschlagNennweite?: string | null | undefined;
                        vorschlagFeinspezifikation?: string | null | undefined;
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

export type OnCreateProjektStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnCreateProjektStueliSubscription = {
  __typename?: 'Subscription';
  onCreateProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnUpdateProjektStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnUpdateProjektStueliSubscription = {
  __typename?: 'Subscription';
  onUpdateProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnDeleteProjektStueliSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnDeleteProjektStueliSubscription = {
  __typename?: 'Subscription';
  onDeleteProjektStueli?:
    | {
        __typename?: 'ProjektStueli';
        id: string;
        projektId: string;
        kurzspezifikation?: string | null | undefined;
        lieferant?: string | null | undefined;
        nennweite?: string | null | undefined;
        feinspezifikation?: string | null | undefined;
        voschlagKurzspezifikation?: string | null | undefined;
        vorschlagLieferant?: string | null | undefined;
        vorschlagNennweite?: string | null | undefined;
        vorschlagFeinspezifikation?: string | null | undefined;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type OnCreateReferenzStueliSubscriptionVariables = Exact<{
  anlageId?: InputMaybe<Scalars['String']>;
}>;

export type OnCreateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onCreateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
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
  anlageId?: InputMaybe<Scalars['String']>;
}>;

export type OnUpdateReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onUpdateReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
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
  anlageId?: InputMaybe<Scalars['String']>;
}>;

export type OnDeleteReferenzStueliSubscription = {
  __typename?: 'Subscription';
  onDeleteReferenzStueli?:
    | {
        __typename?: 'ReferenzStueli';
        id: string;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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
        currentAnlageId?: string | null | undefined;
        currentProjektId?: string | null | undefined;
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
                          createdAt: any;
                          updatedAt: any;
                          anlagenUsers?:
                            | {
                                __typename?: 'ModelAnlagenUserConnection';
                                nextToken?: string | null | undefined;
                              }
                            | null
                            | undefined;
                          projekte?:
                            | {
                                __typename?: 'ModelProjektConnection';
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
                          currentAnlageId?: string | null | undefined;
                          currentProjektId?: string | null | undefined;
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

export const SetCurrentAnlageIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetCurrentAnlageId' },
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
              name: { kind: 'Name', value: 'SetCurrentAnlageIdInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setCurrentAnlageId' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
  SetCurrentAnlageIdMutation,
  SetCurrentAnlageIdMutationVariables
>;
export const SetCurrentProjektIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SetCurrentProjektId' },
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
              name: { kind: 'Name', value: 'SetCurrentProjektIdInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'setCurrentProjektId' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
  SetCurrentProjektIdMutation,
  SetCurrentProjektIdMutationVariables
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
export const CreateProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateProjekt' },
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
              name: { kind: 'Name', value: 'CreateProjektInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  CreateProjektMutation,
  CreateProjektMutationVariables
>;
export const UpdateProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProjekt' },
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
              name: { kind: 'Name', value: 'UpdateProjektInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  UpdateProjektMutation,
  UpdateProjektMutationVariables
>;
export const DeleteProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteProjekt' },
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
              name: { kind: 'Name', value: 'DeleteProjektInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  DeleteProjektMutation,
  DeleteProjektMutationVariables
>;
export const CreateProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateProjektStueli' },
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
              name: { kind: 'Name', value: 'CreateProjektStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createProjektStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  CreateProjektStueliMutation,
  CreateProjektStueliMutationVariables
>;
export const UpdateProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateProjektStueli' },
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
              name: { kind: 'Name', value: 'UpdateProjektStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateProjektStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  UpdateProjektStueliMutation,
  UpdateProjektStueliMutationVariables
>;
export const DeleteProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteProjektStueli' },
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
              name: { kind: 'Name', value: 'DeleteProjektStueliInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteProjektStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  DeleteProjektStueliMutation,
  DeleteProjektStueliMutationVariables
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
export const ListKurzspezifikationVorschlaegeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListKurzspezifikationVorschlaege' },
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
              name: {
                kind: 'Name',
                value: 'ListKurzspezifikationVorschlaegeInput',
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listKurzspezifikationVorschlaege' },
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
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListKurzspezifikationVorschlaegeQuery,
  ListKurzspezifikationVorschlaegeQueryVariables
>;
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
            name: { kind: 'Name', value: 'listAnlages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                              name: { kind: 'Name', value: 'projekte' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
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
                                            value: 'projektNummer',
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
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
                              name: { kind: 'Name', value: 'currentAnlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'currentProjektId' },
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
export const GetProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjekt' },
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
            name: { kind: 'Name', value: 'getProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
} as unknown as DocumentNode<GetProjektQuery, GetProjektQueryVariables>;
export const ListProjektsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListProjekts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
            name: { kind: 'Name', value: 'ModelProjektFilterInput' },
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
            name: { kind: 'Name', value: 'listProjekts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'anlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projektNummer' },
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
                              name: { kind: 'Name', value: 'projekte' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
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
                                            value: 'projektNummer',
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
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
                        name: { kind: 'Name', value: 'projektStueli' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'projektId' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'voschlagKurzspezifikation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'vorschlagLieferant',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'vorschlagNennweite',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'vorschlagFeinspezifikation',
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
} as unknown as DocumentNode<ListProjektsQuery, ListProjektsQueryVariables>;
export const GetProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjektStueli' },
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
            name: { kind: 'Name', value: 'getProjektStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  GetProjektStueliQuery,
  GetProjektStueliQueryVariables
>;
export const ListProjektStuelisDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListProjektStuelis' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
            name: { kind: 'Name', value: 'ModelProjektStueliFilterInput' },
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
            name: { kind: 'Name', value: 'listProjektStuelis' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projektId' },
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
                        name: {
                          kind: 'Name',
                          value: 'voschlagKurzspezifikation',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vorschlagLieferant' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vorschlagNennweite' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'vorschlagFeinspezifikation',
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
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListProjektStuelisQuery,
  ListProjektStuelisQueryVariables
>;
export const ProjektStueliByKurzspezifikationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProjektStueliByKurzspezifikation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'projektId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'kurzspezifikation' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelStringKeyConditionInput' },
          },
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
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelProjektStueliFilterInput' },
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
            name: { kind: 'Name', value: 'projektStueliByKurzspezifikation' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'projektId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'projektId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'kurzspezifikation' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projektId' },
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
                        name: {
                          kind: 'Name',
                          value: 'voschlagKurzspezifikation',
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vorschlagLieferant' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vorschlagNennweite' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'vorschlagFeinspezifikation',
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
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProjektStueliByKurzspezifikationQuery,
  ProjektStueliByKurzspezifikationQueryVariables
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
            name: { kind: 'Name', value: 'getReferenzStueli' },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
export const ReferenzStueliByKurzspezifikationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ReferenzStueliByKurzspezifikation' },
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
            name: { kind: 'Name', value: 'kurzspezifikation' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelStringKeyConditionInput' },
          },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'referenzStueliByKurzspezifikation' },
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
                name: { kind: 'Name', value: 'kurzspezifikation' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'kurzspezifikation' },
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
  ReferenzStueliByKurzspezifikationQuery,
  ReferenzStueliByKurzspezifikationQueryVariables
>;
export const ByAnlageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ByAnlage' },
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
            name: { kind: 'Name', value: 'sortDirection' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ModelSortDirection' },
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
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'byAnlage' },
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
                name: { kind: 'Name', value: 'sortDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sortDirection' },
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
} as unknown as DocumentNode<ByAnlageQuery, ByAnlageQueryVariables>;
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                  name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'anlageId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektNummer' },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                              name: { kind: 'Name', value: 'projektStueli' },
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
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'projektId',
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
                                            value: 'voschlagKurzspezifikation',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagLieferant',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagNennweite',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'vorschlagFeinspezifikation',
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                        name: { kind: 'Name', value: 'currentAnlageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currentProjektId' },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
export const OnCreateProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateProjekt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  OnCreateProjektSubscription,
  OnCreateProjektSubscriptionVariables
>;
export const OnUpdateProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateProjekt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  OnUpdateProjektSubscription,
  OnUpdateProjektSubscriptionVariables
>;
export const OnDeleteProjektDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteProjekt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteProjekt' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'anlageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'projektNummer' },
                },
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
                                            value: 'currentAnlageId',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'currentProjektId',
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
                        name: { kind: 'Name', value: 'projekte' },
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'anlageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'projektNummer',
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
                                    name: {
                                      kind: 'Name',
                                      value: 'projektStueli',
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
                                    name: { kind: 'Name', value: 'id' },
                                  },
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
                  name: { kind: 'Name', value: 'projektStueli' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projektId' },
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
                              name: {
                                kind: 'Name',
                                value: 'voschlagKurzspezifikation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagLieferant',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagNennweite',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'vorschlagFeinspezifikation',
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
  OnDeleteProjektSubscription,
  OnDeleteProjektSubscriptionVariables
>;
export const OnCreateProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateProjektStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateProjektStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  OnCreateProjektStueliSubscription,
  OnCreateProjektStueliSubscriptionVariables
>;
export const OnUpdateProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnUpdateProjektStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateProjektStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  OnUpdateProjektStueliSubscription,
  OnUpdateProjektStueliSubscriptionVariables
>;
export const OnDeleteProjektStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnDeleteProjektStueli' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteProjektStueli' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'projektId' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'voschlagKurzspezifikation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagLieferant' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagNennweite' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vorschlagFeinspezifikation' },
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
  OnDeleteProjektStueliSubscription,
  OnDeleteProjektStueliSubscriptionVariables
>;
export const OnCreateReferenzStueliDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'subscription',
      name: { kind: 'Name', value: 'OnCreateReferenzStueli' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onCreateReferenzStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onUpdateReferenzStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'anlageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'onDeleteReferenzStueli' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentAnlageId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentProjektId' },
                },
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
                                    name: { kind: 'Name', value: 'projekte' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'currentAnlageId',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentProjektId',
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

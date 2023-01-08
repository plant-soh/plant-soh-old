import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { amplifyFetcher } from '../lib/fetcher';
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

export const SetCurrentAnlageIdDocument = `
    mutation SetCurrentAnlageId($input: SetCurrentAnlageIdInput!) {
  setCurrentAnlageId(input: $input) {
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
export const useSetCurrentAnlageIdMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    SetCurrentAnlageIdMutation,
    TError,
    SetCurrentAnlageIdMutationVariables,
    TContext
  >,
) =>
  useMutation<
    SetCurrentAnlageIdMutation,
    TError,
    SetCurrentAnlageIdMutationVariables,
    TContext
  >(
    ['SetCurrentAnlageId'],
    (variables?: SetCurrentAnlageIdMutationVariables) =>
      amplifyFetcher<
        SetCurrentAnlageIdMutation,
        SetCurrentAnlageIdMutationVariables
      >(SetCurrentAnlageIdDocument, variables)(),
    options,
  );
export const SetCurrentProjektIdDocument = `
    mutation SetCurrentProjektId($input: SetCurrentProjektIdInput!) {
  setCurrentProjektId(input: $input) {
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
export const useSetCurrentProjektIdMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    SetCurrentProjektIdMutation,
    TError,
    SetCurrentProjektIdMutationVariables,
    TContext
  >,
) =>
  useMutation<
    SetCurrentProjektIdMutation,
    TError,
    SetCurrentProjektIdMutationVariables,
    TContext
  >(
    ['SetCurrentProjektId'],
    (variables?: SetCurrentProjektIdMutationVariables) =>
      amplifyFetcher<
        SetCurrentProjektIdMutation,
        SetCurrentProjektIdMutationVariables
      >(SetCurrentProjektIdDocument, variables)(),
    options,
  );
export const CreateAnlageDocument = `
    mutation CreateAnlage($input: CreateAnlageInput!) {
  createAnlage(input: $input) {
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
export const useCreateAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateAnlageMutation,
    TError,
    CreateAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateAnlageMutation,
    TError,
    CreateAnlageMutationVariables,
    TContext
  >(
    ['CreateAnlage'],
    (variables?: CreateAnlageMutationVariables) =>
      amplifyFetcher<CreateAnlageMutation, CreateAnlageMutationVariables>(
        CreateAnlageDocument,
        variables,
      )(),
    options,
  );
export const UpdateAnlageDocument = `
    mutation UpdateAnlage($input: UpdateAnlageInput!) {
  updateAnlage(input: $input) {
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
export const useUpdateAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateAnlageMutation,
    TError,
    UpdateAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateAnlageMutation,
    TError,
    UpdateAnlageMutationVariables,
    TContext
  >(
    ['UpdateAnlage'],
    (variables?: UpdateAnlageMutationVariables) =>
      amplifyFetcher<UpdateAnlageMutation, UpdateAnlageMutationVariables>(
        UpdateAnlageDocument,
        variables,
      )(),
    options,
  );
export const DeleteAnlageDocument = `
    mutation DeleteAnlage($input: DeleteAnlageInput!) {
  deleteAnlage(input: $input) {
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
export const useDeleteAnlageMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteAnlageMutation,
    TError,
    DeleteAnlageMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlageMutation,
    TError,
    DeleteAnlageMutationVariables,
    TContext
  >(
    ['DeleteAnlage'],
    (variables?: DeleteAnlageMutationVariables) =>
      amplifyFetcher<DeleteAnlageMutation, DeleteAnlageMutationVariables>(
        DeleteAnlageDocument,
        variables,
      )(),
    options,
  );
export const CreateAnlagenUserDocument = `
    mutation CreateAnlagenUser($input: CreateAnlagenUserInput!) {
  createAnlagenUser(input: $input) {
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
export const useCreateAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateAnlagenUserMutation,
    TError,
    CreateAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateAnlagenUserMutation,
    TError,
    CreateAnlagenUserMutationVariables,
    TContext
  >(
    ['CreateAnlagenUser'],
    (variables?: CreateAnlagenUserMutationVariables) =>
      amplifyFetcher<
        CreateAnlagenUserMutation,
        CreateAnlagenUserMutationVariables
      >(CreateAnlagenUserDocument, variables)(),
    options,
  );
export const UpdateAnlagenUserDocument = `
    mutation UpdateAnlagenUser($input: UpdateAnlagenUserInput!) {
  updateAnlagenUser(input: $input) {
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
export const useUpdateAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    UpdateAnlagenUserMutation,
    TError,
    UpdateAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateAnlagenUserMutation,
    TError,
    UpdateAnlagenUserMutationVariables,
    TContext
  >(
    ['UpdateAnlagenUser'],
    (variables?: UpdateAnlagenUserMutationVariables) =>
      amplifyFetcher<
        UpdateAnlagenUserMutation,
        UpdateAnlagenUserMutationVariables
      >(UpdateAnlagenUserDocument, variables)(),
    options,
  );
export const DeleteAnlagenUserDocument = `
    mutation DeleteAnlagenUser($input: DeleteAnlagenUserInput!) {
  deleteAnlagenUser(input: $input) {
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
export const useDeleteAnlagenUserMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteAnlagenUserMutation,
    TError,
    DeleteAnlagenUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteAnlagenUserMutation,
    TError,
    DeleteAnlagenUserMutationVariables,
    TContext
  >(
    ['DeleteAnlagenUser'],
    (variables?: DeleteAnlagenUserMutationVariables) =>
      amplifyFetcher<
        DeleteAnlagenUserMutation,
        DeleteAnlagenUserMutationVariables
      >(DeleteAnlagenUserDocument, variables)(),
    options,
  );
export const CreateProjektDocument = `
    mutation CreateProjekt($input: CreateProjektInput!) {
  createProjekt(input: $input) {
    id
    anlageId
    projektNummer
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
export const useCreateProjektMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateProjektMutation,
    TError,
    CreateProjektMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateProjektMutation,
    TError,
    CreateProjektMutationVariables,
    TContext
  >(
    ['CreateProjekt'],
    (variables?: CreateProjektMutationVariables) =>
      amplifyFetcher<CreateProjektMutation, CreateProjektMutationVariables>(
        CreateProjektDocument,
        variables,
      )(),
    options,
  );
export const UpdateProjektDocument = `
    mutation UpdateProjekt($input: UpdateProjektInput!) {
  updateProjekt(input: $input) {
    id
    anlageId
    projektNummer
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
export const useUpdateProjektMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateProjektMutation,
    TError,
    UpdateProjektMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateProjektMutation,
    TError,
    UpdateProjektMutationVariables,
    TContext
  >(
    ['UpdateProjekt'],
    (variables?: UpdateProjektMutationVariables) =>
      amplifyFetcher<UpdateProjektMutation, UpdateProjektMutationVariables>(
        UpdateProjektDocument,
        variables,
      )(),
    options,
  );
export const DeleteProjektDocument = `
    mutation DeleteProjekt($input: DeleteProjektInput!) {
  deleteProjekt(input: $input) {
    id
    anlageId
    projektNummer
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
export const useDeleteProjektMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteProjektMutation,
    TError,
    DeleteProjektMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteProjektMutation,
    TError,
    DeleteProjektMutationVariables,
    TContext
  >(
    ['DeleteProjekt'],
    (variables?: DeleteProjektMutationVariables) =>
      amplifyFetcher<DeleteProjektMutation, DeleteProjektMutationVariables>(
        DeleteProjektDocument,
        variables,
      )(),
    options,
  );
export const CreateProjektStueliDocument = `
    mutation CreateProjektStueli($input: CreateProjektStueliInput!) {
  createProjektStueli(input: $input) {
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
export const useCreateProjektStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateProjektStueliMutation,
    TError,
    CreateProjektStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateProjektStueliMutation,
    TError,
    CreateProjektStueliMutationVariables,
    TContext
  >(
    ['CreateProjektStueli'],
    (variables?: CreateProjektStueliMutationVariables) =>
      amplifyFetcher<
        CreateProjektStueliMutation,
        CreateProjektStueliMutationVariables
      >(CreateProjektStueliDocument, variables)(),
    options,
  );
export const UpdateProjektStueliDocument = `
    mutation UpdateProjektStueli($input: UpdateProjektStueliInput!) {
  updateProjektStueli(input: $input) {
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
export const useUpdateProjektStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    UpdateProjektStueliMutation,
    TError,
    UpdateProjektStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateProjektStueliMutation,
    TError,
    UpdateProjektStueliMutationVariables,
    TContext
  >(
    ['UpdateProjektStueli'],
    (variables?: UpdateProjektStueliMutationVariables) =>
      amplifyFetcher<
        UpdateProjektStueliMutation,
        UpdateProjektStueliMutationVariables
      >(UpdateProjektStueliDocument, variables)(),
    options,
  );
export const DeleteProjektStueliDocument = `
    mutation DeleteProjektStueli($input: DeleteProjektStueliInput!) {
  deleteProjektStueli(input: $input) {
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
export const useDeleteProjektStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteProjektStueliMutation,
    TError,
    DeleteProjektStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteProjektStueliMutation,
    TError,
    DeleteProjektStueliMutationVariables,
    TContext
  >(
    ['DeleteProjektStueli'],
    (variables?: DeleteProjektStueliMutationVariables) =>
      amplifyFetcher<
        DeleteProjektStueliMutation,
        DeleteProjektStueliMutationVariables
      >(DeleteProjektStueliDocument, variables)(),
    options,
  );
export const CreateReferenzStueliDocument = `
    mutation CreateReferenzStueli($input: CreateReferenzStueliInput!) {
  createReferenzStueli(input: $input) {
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
export const useCreateReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateReferenzStueliMutation,
    TError,
    CreateReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateReferenzStueliMutation,
    TError,
    CreateReferenzStueliMutationVariables,
    TContext
  >(
    ['CreateReferenzStueli'],
    (variables?: CreateReferenzStueliMutationVariables) =>
      amplifyFetcher<
        CreateReferenzStueliMutation,
        CreateReferenzStueliMutationVariables
      >(CreateReferenzStueliDocument, variables)(),
    options,
  );
export const UpdateReferenzStueliDocument = `
    mutation UpdateReferenzStueli($input: UpdateReferenzStueliInput!) {
  updateReferenzStueli(input: $input) {
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
export const useUpdateReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    UpdateReferenzStueliMutation,
    TError,
    UpdateReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateReferenzStueliMutation,
    TError,
    UpdateReferenzStueliMutationVariables,
    TContext
  >(
    ['UpdateReferenzStueli'],
    (variables?: UpdateReferenzStueliMutationVariables) =>
      amplifyFetcher<
        UpdateReferenzStueliMutation,
        UpdateReferenzStueliMutationVariables
      >(UpdateReferenzStueliDocument, variables)(),
    options,
  );
export const DeleteReferenzStueliDocument = `
    mutation DeleteReferenzStueli($input: DeleteReferenzStueliInput!) {
  deleteReferenzStueli(input: $input) {
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
export const useDeleteReferenzStueliMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    DeleteReferenzStueliMutation,
    TError,
    DeleteReferenzStueliMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteReferenzStueliMutation,
    TError,
    DeleteReferenzStueliMutationVariables,
    TContext
  >(
    ['DeleteReferenzStueli'],
    (variables?: DeleteReferenzStueliMutationVariables) =>
      amplifyFetcher<
        DeleteReferenzStueliMutation,
        DeleteReferenzStueliMutationVariables
      >(DeleteReferenzStueliDocument, variables)(),
    options,
  );
export const CreateUserDocument = `
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >(
    ['CreateUser'],
    (variables?: CreateUserMutationVariables) =>
      amplifyFetcher<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        variables,
      )(),
    options,
  );
export const UpdateUserDocument = `
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    ['UpdateUser'],
    (variables?: UpdateUserMutationVariables) =>
      amplifyFetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        variables,
      )(),
    options,
  );
export const DeleteUserDocument = `
    mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const useDeleteUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    DeleteUserMutation,
    TError,
    DeleteUserMutationVariables,
    TContext
  >(
    ['DeleteUser'],
    (variables?: DeleteUserMutationVariables) =>
      amplifyFetcher<DeleteUserMutation, DeleteUserMutationVariables>(
        DeleteUserDocument,
        variables,
      )(),
    options,
  );
export const ListKurzspezifikationVorschlaegeDocument = `
    query ListKurzspezifikationVorschlaege($input: ListKurzspezifikationVorschlaegeInput!) {
  listKurzspezifikationVorschlaege(input: $input)
}
    `;
export const useListKurzspezifikationVorschlaegeQuery = <
  TData = ListKurzspezifikationVorschlaegeQuery,
  TError = unknown,
>(
  variables: ListKurzspezifikationVorschlaegeQueryVariables,
  options?: UseQueryOptions<
    ListKurzspezifikationVorschlaegeQuery,
    TError,
    TData
  >,
) =>
  useQuery<ListKurzspezifikationVorschlaegeQuery, TError, TData>(
    ['ListKurzspezifikationVorschlaege', variables],
    amplifyFetcher<
      ListKurzspezifikationVorschlaegeQuery,
      ListKurzspezifikationVorschlaegeQueryVariables
    >(ListKurzspezifikationVorschlaegeDocument, variables),
    options,
  );
export const GetAnlageDocument = `
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
export const useGetAnlageQuery = <TData = GetAnlageQuery, TError = unknown>(
  variables: GetAnlageQueryVariables,
  options?: UseQueryOptions<GetAnlageQuery, TError, TData>,
) =>
  useQuery<GetAnlageQuery, TError, TData>(
    ['GetAnlage', variables],
    amplifyFetcher<GetAnlageQuery, GetAnlageQueryVariables>(
      GetAnlageDocument,
      variables,
    ),
    options,
  );
export const ListAnlagesDocument = `
    query ListAnlages($id: ID, $filter: ModelAnlageFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListAnlagesQuery = <TData = ListAnlagesQuery, TError = unknown>(
  variables?: ListAnlagesQueryVariables,
  options?: UseQueryOptions<ListAnlagesQuery, TError, TData>,
) =>
  useQuery<ListAnlagesQuery, TError, TData>(
    variables === undefined ? ['ListAnlages'] : ['ListAnlages', variables],
    amplifyFetcher<ListAnlagesQuery, ListAnlagesQueryVariables>(
      ListAnlagesDocument,
      variables,
    ),
    options,
  );
export const GetAnlagenUserDocument = `
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
export const useGetAnlagenUserQuery = <
  TData = GetAnlagenUserQuery,
  TError = unknown,
>(
  variables: GetAnlagenUserQueryVariables,
  options?: UseQueryOptions<GetAnlagenUserQuery, TError, TData>,
) =>
  useQuery<GetAnlagenUserQuery, TError, TData>(
    ['GetAnlagenUser', variables],
    amplifyFetcher<GetAnlagenUserQuery, GetAnlagenUserQueryVariables>(
      GetAnlagenUserDocument,
      variables,
    ),
    options,
  );
export const ListAnlagenUsersDocument = `
    query ListAnlagenUsers($userEmail: String, $anlageId: ModelIDKeyConditionInput, $filter: ModelAnlagenUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListAnlagenUsersQuery = <
  TData = ListAnlagenUsersQuery,
  TError = unknown,
>(
  variables?: ListAnlagenUsersQueryVariables,
  options?: UseQueryOptions<ListAnlagenUsersQuery, TError, TData>,
) =>
  useQuery<ListAnlagenUsersQuery, TError, TData>(
    variables === undefined
      ? ['ListAnlagenUsers']
      : ['ListAnlagenUsers', variables],
    amplifyFetcher<ListAnlagenUsersQuery, ListAnlagenUsersQueryVariables>(
      ListAnlagenUsersDocument,
      variables,
    ),
    options,
  );
export const GetProjektDocument = `
    query GetProjekt($id: ID!) {
  getProjekt(id: $id) {
    id
    anlageId
    projektNummer
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
export const useGetProjektQuery = <TData = GetProjektQuery, TError = unknown>(
  variables: GetProjektQueryVariables,
  options?: UseQueryOptions<GetProjektQuery, TError, TData>,
) =>
  useQuery<GetProjektQuery, TError, TData>(
    ['GetProjekt', variables],
    amplifyFetcher<GetProjektQuery, GetProjektQueryVariables>(
      GetProjektDocument,
      variables,
    ),
    options,
  );
export const ListProjektsDocument = `
    query ListProjekts($id: ID, $filter: ModelProjektFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListProjektsQuery = <
  TData = ListProjektsQuery,
  TError = unknown,
>(
  variables?: ListProjektsQueryVariables,
  options?: UseQueryOptions<ListProjektsQuery, TError, TData>,
) =>
  useQuery<ListProjektsQuery, TError, TData>(
    variables === undefined ? ['ListProjekts'] : ['ListProjekts', variables],
    amplifyFetcher<ListProjektsQuery, ListProjektsQueryVariables>(
      ListProjektsDocument,
      variables,
    ),
    options,
  );
export const GetProjektStueliDocument = `
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
export const useGetProjektStueliQuery = <
  TData = GetProjektStueliQuery,
  TError = unknown,
>(
  variables: GetProjektStueliQueryVariables,
  options?: UseQueryOptions<GetProjektStueliQuery, TError, TData>,
) =>
  useQuery<GetProjektStueliQuery, TError, TData>(
    ['GetProjektStueli', variables],
    amplifyFetcher<GetProjektStueliQuery, GetProjektStueliQueryVariables>(
      GetProjektStueliDocument,
      variables,
    ),
    options,
  );
export const ListProjektStuelisDocument = `
    query ListProjektStuelis($id: ID, $filter: ModelProjektStueliFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListProjektStuelisQuery = <
  TData = ListProjektStuelisQuery,
  TError = unknown,
>(
  variables?: ListProjektStuelisQueryVariables,
  options?: UseQueryOptions<ListProjektStuelisQuery, TError, TData>,
) =>
  useQuery<ListProjektStuelisQuery, TError, TData>(
    variables === undefined
      ? ['ListProjektStuelis']
      : ['ListProjektStuelis', variables],
    amplifyFetcher<ListProjektStuelisQuery, ListProjektStuelisQueryVariables>(
      ListProjektStuelisDocument,
      variables,
    ),
    options,
  );
export const ProjektStueliByKurzspezifikationDocument = `
    query ProjektStueliByKurzspezifikation($projektId: ID, $kurzspezifikation: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelProjektStueliFilterInput, $limit: Int, $nextToken: String) {
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
export const useProjektStueliByKurzspezifikationQuery = <
  TData = ProjektStueliByKurzspezifikationQuery,
  TError = unknown,
>(
  variables?: ProjektStueliByKurzspezifikationQueryVariables,
  options?: UseQueryOptions<
    ProjektStueliByKurzspezifikationQuery,
    TError,
    TData
  >,
) =>
  useQuery<ProjektStueliByKurzspezifikationQuery, TError, TData>(
    variables === undefined
      ? ['ProjektStueliByKurzspezifikation']
      : ['ProjektStueliByKurzspezifikation', variables],
    amplifyFetcher<
      ProjektStueliByKurzspezifikationQuery,
      ProjektStueliByKurzspezifikationQueryVariables
    >(ProjektStueliByKurzspezifikationDocument, variables),
    options,
  );
export const GetReferenzStueliDocument = `
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
export const useGetReferenzStueliQuery = <
  TData = GetReferenzStueliQuery,
  TError = unknown,
>(
  variables: GetReferenzStueliQueryVariables,
  options?: UseQueryOptions<GetReferenzStueliQuery, TError, TData>,
) =>
  useQuery<GetReferenzStueliQuery, TError, TData>(
    ['GetReferenzStueli', variables],
    amplifyFetcher<GetReferenzStueliQuery, GetReferenzStueliQueryVariables>(
      GetReferenzStueliDocument,
      variables,
    ),
    options,
  );
export const ListReferenzStuelisDocument = `
    query ListReferenzStuelis($id: ID, $filter: ModelReferenzStueliFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListReferenzStuelisQuery = <
  TData = ListReferenzStuelisQuery,
  TError = unknown,
>(
  variables?: ListReferenzStuelisQueryVariables,
  options?: UseQueryOptions<ListReferenzStuelisQuery, TError, TData>,
) =>
  useQuery<ListReferenzStuelisQuery, TError, TData>(
    variables === undefined
      ? ['ListReferenzStuelis']
      : ['ListReferenzStuelis', variables],
    amplifyFetcher<ListReferenzStuelisQuery, ListReferenzStuelisQueryVariables>(
      ListReferenzStuelisDocument,
      variables,
    ),
    options,
  );
export const ReferenzStueliByKurzspezifikationDocument = `
    query ReferenzStueliByKurzspezifikation($anlageId: ID, $kurzspezifikation: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelReferenzStueliFilterInput, $limit: Int, $nextToken: String) {
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
export const useReferenzStueliByKurzspezifikationQuery = <
  TData = ReferenzStueliByKurzspezifikationQuery,
  TError = unknown,
>(
  variables?: ReferenzStueliByKurzspezifikationQueryVariables,
  options?: UseQueryOptions<
    ReferenzStueliByKurzspezifikationQuery,
    TError,
    TData
  >,
) =>
  useQuery<ReferenzStueliByKurzspezifikationQuery, TError, TData>(
    variables === undefined
      ? ['ReferenzStueliByKurzspezifikation']
      : ['ReferenzStueliByKurzspezifikation', variables],
    amplifyFetcher<
      ReferenzStueliByKurzspezifikationQuery,
      ReferenzStueliByKurzspezifikationQueryVariables
    >(ReferenzStueliByKurzspezifikationDocument, variables),
    options,
  );
export const ByAnlageDocument = `
    query ByAnlage($anlageId: ID, $sortDirection: ModelSortDirection, $filter: ModelReferenzStueliFilterInput, $limit: Int, $nextToken: String) {
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
export const useByAnlageQuery = <TData = ByAnlageQuery, TError = unknown>(
  variables?: ByAnlageQueryVariables,
  options?: UseQueryOptions<ByAnlageQuery, TError, TData>,
) =>
  useQuery<ByAnlageQuery, TError, TData>(
    variables === undefined ? ['ByAnlage'] : ['ByAnlage', variables],
    amplifyFetcher<ByAnlageQuery, ByAnlageQueryVariables>(
      ByAnlageDocument,
      variables,
    ),
    options,
  );
export const GetUserDocument = `
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
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
  variables: GetUserQueryVariables,
  options?: UseQueryOptions<GetUserQuery, TError, TData>,
) =>
  useQuery<GetUserQuery, TError, TData>(
    ['GetUser', variables],
    amplifyFetcher<GetUserQuery, GetUserQueryVariables>(
      GetUserDocument,
      variables,
    ),
    options,
  );
export const ListUsersDocument = `
    query ListUsers($email: String, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
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
export const useListUsersQuery = <TData = ListUsersQuery, TError = unknown>(
  variables?: ListUsersQueryVariables,
  options?: UseQueryOptions<ListUsersQuery, TError, TData>,
) =>
  useQuery<ListUsersQuery, TError, TData>(
    variables === undefined ? ['ListUsers'] : ['ListUsers', variables],
    amplifyFetcher<ListUsersQuery, ListUsersQueryVariables>(
      ListUsersDocument,
      variables,
    ),
    options,
  );
export const OnCreateAnlageDocument = `
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
export const OnUpdateAnlageDocument = `
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
export const OnDeleteAnlageDocument = `
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
export const OnCreateAnlagenUserDocument = `
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
export const OnUpdateAnlagenUserDocument = `
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
export const OnDeleteAnlagenUserDocument = `
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
export const OnCreateProjektDocument = `
    subscription OnCreateProjekt($id: String) {
  onCreateProjekt(id: $id) {
    id
    anlageId
    projektNummer
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
export const OnUpdateProjektDocument = `
    subscription OnUpdateProjekt($id: String) {
  onUpdateProjekt(id: $id) {
    id
    anlageId
    projektNummer
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
export const OnDeleteProjektDocument = `
    subscription OnDeleteProjekt($id: String) {
  onDeleteProjekt(id: $id) {
    id
    anlageId
    projektNummer
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
export const OnCreateProjektStueliDocument = `
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
export const OnUpdateProjektStueliDocument = `
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
export const OnDeleteProjektStueliDocument = `
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
export const OnCreateReferenzStueliDocument = `
    subscription OnCreateReferenzStueli($anlageId: String) {
  onCreateReferenzStueli(anlageId: $anlageId) {
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
export const OnUpdateReferenzStueliDocument = `
    subscription OnUpdateReferenzStueli($anlageId: String) {
  onUpdateReferenzStueli(anlageId: $anlageId) {
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
export const OnDeleteReferenzStueliDocument = `
    subscription OnDeleteReferenzStueli($anlageId: String) {
  onDeleteReferenzStueli(anlageId: $anlageId) {
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
export const OnCreateUserDocument = `
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
export const OnUpdateUserDocument = `
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
export const OnDeleteUserDocument = `
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

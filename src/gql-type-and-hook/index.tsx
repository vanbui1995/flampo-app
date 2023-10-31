import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useFetchData } from '../utils/customFetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  EmailAddress: { input: any; output: any };
  Timestamp: { input: any; output: any };
  UUID: { input: any; output: any };
};

/** Request actions */
export enum ActionEnum {
  /** User can create the resource */
  Create = 'CREATE',
  /** User can delete the resource */
  Delete = 'DELETE',
  /** User can invite the users to join or use the resource */
  Invite = 'INVITE',
  /** User can read the resources */
  Read = 'READ',
  /** User can restore the deleted resource */
  Restore = 'RESTORE',
  /** User can update the resource */
  Update = 'UPDATE',
}

export type CreatePermissionDto = {
  action: ActionEnum;
  description?: InputMaybe<Scalars['String']['input']>;
  entity: EntityEnum;
  name: Scalars['String']['input'];
};

export type CreateRoleDto = {
  name: Scalars['String']['input'];
  permissions: Array<Scalars['Int']['input']>;
};

export type CreateUserDto = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  salt: Scalars['String']['input'];
};

/** Entities set permissions */
export enum EntityEnum {
  Auth = 'AUTH',
  /** Permissions resource */
  Permissions = 'PERMISSIONS',
  /** Posts resource */
  Posts = 'POSTS',
  /** Profiles resource */
  Profiles = 'PROFILES',
  /** Roles resource */
  Roles = 'ROLES',
  /** Users resource */
  Users = 'USERS',
}

export type LoginDto = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPermission: Scalars['Int']['output'];
  createRole: Scalars['Int']['output'];
  createUser: Scalars['Int']['output'];
  login: RegisterResponseDto;
  register: RegisterResponseDto;
};

export type MutationCreatePermissionArgs = {
  payload: CreatePermissionDto;
};

export type MutationCreateRoleArgs = {
  payload: CreateRoleDto;
};

export type MutationCreateUserArgs = {
  payload: CreateUserDto;
};

export type MutationLoginArgs = {
  payload: LoginDto;
};

export type MutationRegisterArgs = {
  payload: RegisterDto;
};

export type PermissionEntity = {
  __typename?: 'PermissionEntity';
  action?: Maybe<ActionEnum>;
  createdAt: Scalars['Timestamp']['output'];
  deletedAt?: Maybe<Scalars['Timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  entity?: Maybe<EntityEnum>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type Query = {
  __typename?: 'Query';
  getUsers: Array<UserEntity>;
};

export type RegisterDto = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type RegisterResponseDto = {
  __typename?: 'RegisterResponseDto';
  accessToken: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastName: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  createdAt: Scalars['Timestamp']['output'];
  deletedAt?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rolePermissions?: Maybe<Array<RolePermissionEntity>>;
  updatedAt: Scalars['Timestamp']['output'];
};

export type RolePermissionEntity = {
  __typename?: 'RolePermissionEntity';
  createdAt: Scalars['Timestamp']['output'];
  deletedAt?: Maybe<Scalars['Timestamp']['output']>;
  permission: PermissionEntity;
  permissionId: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['Timestamp']['output'];
  deletedAt?: Maybe<Scalars['Timestamp']['output']>;
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  passwordHash: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  salt: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  userRole: UserRoleEntity;
};

export type UserRoleEntity = {
  __typename?: 'UserRoleEntity';
  role: RoleEntity;
  roleId: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  payload: LoginDto;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'RegisterResponseDto';
    accessToken: string;
    email: any;
    firstName: string;
    id: any;
    lastName: string;
    refreshToken: string;
  };
};

export const LoginDocument = `
    mutation Login($payload: LoginDto!) {
  login(payload: $payload) {
    accessToken
    email
    firstName
    id
    lastName
    refreshToken
  }
}
    `;


    

export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
) => {
  return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ['Login'],
    useFetchData<LoginMutation, LoginMutationVariables>(LoginDocument),
    options,
  );
};

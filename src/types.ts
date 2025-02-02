export enum UserType {
  Admin = 'admin',
  User = 'user',
  Trial = 'trial',
  Guest = 'guest'
}

export type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
};

export type UserList = User[];

export type UserQuery = {
  name?: string;
  email?: string;
};

export type CreateUserRequest = {
  name: string;
  email: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  content: string;
};

export type ErrorResponse = {
  code: number;
  message: string;
};

export type ResponseDefinition = {
  statusCode: number;
  description: string;
  type?: string;
};

export type PathParameterDefinition = {
  description?: string;
};

export type SecurityScheme = {
  type: 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';
  description?: string;
  name?: string;
  in?: 'query' | 'header' | 'cookie';
  scheme?: string;
  bearerFormat?: string;
  flows?: any; // OAuth2 flows
  openIdConnectUrl?: string;
};

export type QueryParameter = {
  name: string;
  required: boolean;
  schema: {
    type: string;
    minimum?: number;
    maximum?: number;
    format?: string;
    pattern?: string;
  };
  description?: string;
};

export type HeaderDefinition = {
  name: string;
  required?: boolean;
  schema: {
    type: string;
    format?: string;
  };
  description?: string;
};

export type ServerVariable = {
  default: string;
  enum?: string[];
  description?: string;
};

export type ServerConfiguration = {
  url: string;
  description?: string;
  variables?: {
    [key: string]: ServerVariable;
  };
};

export type RouteDefinition = {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  description?: string;
  requestType?: string;
  parameters?: {
    [key: string]: PathParameterDefinition;
  };
  queryParameters?: QueryParameter[];
  headers?: {
    request?: HeaderDefinition[];
    response?: HeaderDefinition[];
  };
  security?: string[];
  responses: ResponseDefinition[];
};
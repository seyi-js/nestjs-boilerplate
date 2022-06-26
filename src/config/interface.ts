export interface IDatabaseConfig {
  postgres: IPostgresAttributes;
}

export interface IPostgresAttributes {
  development: object;
  test: object;
  production: object;
}

export interface IAppConfig {
  port: number;
  environment: Environment;
}

export enum Environment {
  DEVELOPMENT = 'development',
  staging = 'staging',
  PRODUCTION = 'production',
  TEST = 'test',
}

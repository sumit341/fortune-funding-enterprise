export type NodeEnvironment = 'development' | 'test' | 'production';

export interface JwtConfig {
  secret: string;
  refreshSecret: string;
  expiresIn: string;
  refreshExpiresIn: string;
}

export interface MongoConfig {
  uri: string;
}

export interface RedisConfig {
  url: string;
}

export interface LoggerConfig {
  level: string;
}

export interface AppConfig {
  nodeEnv: NodeEnvironment;
  port: number;

  jwt: JwtConfig;
  mongo: MongoConfig;
  redis: RedisConfig;
  logger: LoggerConfig;
}
import { DataSource, DataSourceOptions, EntitySchema } from 'typeorm';

import * as models from './models';

export const getOptions = (): DataSourceOptions => ({
  type: 'postgres',
  host: 'test_host',
  port: 5432,
  username: 'username',
  password: 'password',
  database:  'account',
  synchronize: false,
  logging: false,
  entities: [...Object.values(models)] as unknown as EntitySchema[],
  subscribers: [],
  uuidExtension: 'uuid-ossp',
  extra: {
    connectionLimit: 1,
  },
});

const AppDataSource = new DataSource(getOptions());

export default AppDataSource;

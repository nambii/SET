import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { getOptions } from './data.source';

let appDataSource: DataSource;

export const initPostgresql = async () => {
  if (!appDataSource) {
    //TODO: figure out why it does not work on the top of the file and then move to the top of the file
    appDataSource = new DataSource(getOptions());
  }
  if (!appDataSource.isInitialized) {
    await appDataSource.initialize();
  }

  return appDataSource.manager;
};

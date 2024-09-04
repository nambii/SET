import { randomUUID } from 'crypto';
import { AccountEntity } from '../../../database/models';

export const createAccount = async () => {
  const id = randomUUID();

  const account = new AccountEntity();

  account.id = id;
  account.name = "Test Name";

  const accountCreated = await account.save();

  return accountCreated;
};

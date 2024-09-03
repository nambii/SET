import 'reflect-metadata';

import { createAccount } from 'business/account/create/account';

export const handler = async (event: { body: any; }) => {
  const response = await createAccount();

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  }
};


import { config } from 'dotenv';

config();

export const environment = {
  production: false,
  apiKey: process.env['API_KEY']
};

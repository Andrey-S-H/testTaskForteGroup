import dotenv from 'dotenv';

dotenv.config();

//filter of env keys. check if them not "", null, undefind
const requiredEnvVars = ['SITE_URL'];
const missing = requiredEnvVars.filter((key) => !process.env[key]);

if (missing.length > 0) {
  throw new Error(`Missing required env variables: ${missing.join(', ')}`);
}

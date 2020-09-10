import * as dotenv from 'dotenv';
import IConfig from './IConfig';

dotenv.config();

const envs: IConfig = {
  port: Number(process.env.PORT),
};
export default envs;

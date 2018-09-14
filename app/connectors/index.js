import { MONGO_URI } from '../config';
import mongooseConnector from './mongoose-connector';
import server from '../server';

async function connectorsInit() {
  mongooseConnector(MONGO_URI);
}

export {
  mongooseConnector,
};

export default connectorsInit;
import * as models from '../models';

import makeUsersDb from './users.db';

const usersDb = makeUsersDb(models);

export { usersDb };

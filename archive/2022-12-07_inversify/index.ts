import 'reflect-metadata';

import container from '../inversify.config';
import CanadianUserService from './services/CanadianUserService';
import UserService from './services/UserService';

async function main() {
  const userService = container.get(UserService);
  console.log(9, `userService.id: ${userService.id}`);
  const canadianUserService = container.get(CanadianUserService);

  const nonCanadianUserId = '418394bb-aec7-4a23-a81b-d7dfd1ed0601';

  const user = await userService.getUserByGUID(nonCanadianUserId);
  const canadianUser = await canadianUserService.getUserByGUID(
    nonCanadianUserId
  );

  // console.log({ user, canadianUser });

  process.exit(0);
}

main();

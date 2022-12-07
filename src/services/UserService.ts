import { injectable } from 'inversify';

import csvtojson from 'csvtojson';
import TUser from '../types/User';
import container from '../../inversify.config';

@injectable()
class UserService {
  private cachedUsers: TUser[] | undefined;
  id: number;

  constructor() {
    this.id = Math.floor(Math.random() * 1000);
  }

  private async users(): Promise<TUser[]> {
    if (this.cachedUsers) {
      return this.cachedUsers;
    }
    return new Promise((resolve) => {
      csvtojson()
        .fromFile('users.csv')
        .then((users) => {
          this.cachedUsers = users;
          resolve(users);
        });
    });
  }

  public async getUserByGUID(guid: string): Promise<TUser> | undefined {
    const users = await this.users();
    return users.find((u) => u.guid === guid);
  }

  public async getUsersByCountry(country: string): Promise<TUser[]> {
    const users = await this.users();
    return users.filter((u) => u.country === country);
  }

  // public async listUserCountries(): Promise<string[]> {
  //   const users = await this.users();
  //   const countriesSet = users.reduce((acc, u) => {
  //     acc.add(u.country);
  //     return acc;
  //   }, new Set<string>());
  //   return [...countriesSet];
  // }
}

container.bind<UserService>(UserService).toSelf().inSingletonScope();

export default UserService;

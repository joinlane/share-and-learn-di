import { injectable } from 'inversify';
import container from '../../inversify.config';
import TUser from '../types/User';
import UserService from './UserService';

interface IUserService {
  getUserByGUID: (guid: string) => Promise<TUser | undefined>;
}

@injectable()
class CanadianUserService implements IUserService {
  private cachedUsers: TUser[] | undefined;

  constructor(private _userService: UserService) {
    console.log(11, `_userService.id: ${_userService.id}`);
  }

  private async users(): Promise<TUser[]> {
    if (this.cachedUsers !== undefined) {
      return this.cachedUsers;
    }
    const canadianUsers = await this._userService.getUsersByCountry('CA');
    this.cachedUsers = canadianUsers;
    return canadianUsers;
  }

  public async getUserByGUID(guid: string): Promise<TUser | undefined> {
    const users = await this.users();
    return users.find((u) => u.guid === guid);
  }
}

container
  .bind<CanadianUserService>(CanadianUserService)
  .toSelf()
  .inSingletonScope();

export default CanadianUserService;

import UserService from '../UserService';
import csvtojson from 'csvtojson';

const userService = new UserService();

jest.mock('csvtojson');

const USER_THAT_EXISTS = { guid: 'mockUserId', country: 'mockCountry' };
const USER_WITH_COMMON_COUNTRY = {
  guid: 'mockUserWithCommonCountryId',
  country: 'mockCountry',
};

const MOCK_USERS = [USER_THAT_EXISTS, USER_WITH_COMMON_COUNTRY];

describe('UserService', () => {
  beforeAll(() => {
    (csvtojson as jest.Mock).mockImplementation(() => ({
      fromFile: jest.fn().mockImplementationOnce(() => ({
        then: jest.fn().mockImplementationOnce((cb) => {
          cb(MOCK_USERS);
        }),
      })),
    }));
  });

  describe('getUserByGUID', () => {
    it('can find an existing user by GUID', async () => {
      const result = await userService.getUserByGUID(USER_THAT_EXISTS.guid);
      expect(result).not.toBeUndefined();
    });

    it('can fail to find a user by GUID', async () => {
      const result = await userService.getUserByGUID('mockNotUserId');
      expect(result).toBeUndefined();
    });
  });

  describe('getUsersByCountry', () => {
    it('can find users of a common country', async () => {
      const result = await userService.getUsersByCountry(
        USER_THAT_EXISTS.country
      );
      expect(result).toHaveLength(2);
    });

    it("can find no users if country doesn't exist", async () => {
      const result = await userService.getUsersByCountry('fakeCountry');
      expect(result).toHaveLength(0);
    });
  });
});

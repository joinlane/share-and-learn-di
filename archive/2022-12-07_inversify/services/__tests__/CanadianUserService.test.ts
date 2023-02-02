import CanadianUserService from '../CanadianUserService';
import UserService from '../UserService';

const MOCK_CANADIAN_USER = { guid: 'mockCanadianUserId' };

const mockUserService = {
  getUsersByCountry: jest.fn(),
} as any as UserService;

const canadianUserService = new CanadianUserService(mockUserService);

describe('CanadianUserService', () => {
  beforeEach(() => {
    (mockUserService.getUsersByCountry as jest.Mock)
      .mockReset()
      .mockResolvedValue([MOCK_CANADIAN_USER]);
  });

  describe('getUserByGUID', () => {
    it('can find Canadian user', async () => {
      const result = await canadianUserService.getUserByGUID(
        'mockCanadianUserId'
      );
      expect(result).not.toBeUndefined();
    });

    it('cannot find non-Canadian user', async () => {
      const result = await canadianUserService.getUserByGUID(
        'mockNonCanadianUserId'
      );
      expect(result).toBeUndefined();
    });

    it('caches users for subsequent calls', async () => {
      await canadianUserService.getUserByGUID('mockNonCanadianUserId');
      const result = await canadianUserService.getUserByGUID(
        'mockNonCanadianUserId'
      );

      expect(result).toBeUndefined();
      expect(mockUserService.getUsersByCountry).not.toHaveBeenCalledTimes(2);
    });
  });
});

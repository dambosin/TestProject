import { PlayersPage } from "./models";
import { PlayersAPI } from './playersAPI';

describe('PlayersAPI tests', () => {
  it('getPlayers should fetch players correctly', async () => {
    const mockPlayersPage = {
      players: [
        { id: 'id_1' },
        { id: 'id_2' }
      ],
      total: 2
    };

    const clientMock = {
      query: jest.fn().mockResolvedValueOnce({ data: { players: mockPlayersPage } })
    };

    const playersApi = new PlayersAPI();

    const result = await playersApi.getPlayers();

    expect(result).toEqual(mockPlayersPage);
    expect(clientMock.query).toHaveBeenCalledTimes(1);
    expect(clientMock.query).toHaveBeenCalledWith({ query: expect.any(Object), variables: undefined });
  });
});

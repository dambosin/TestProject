import { ApolloClient, gql, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { PlayersArgs, PlayersPage, Player, Query } from "./models";

const mock: PlayersPage = {
  players: [...Array(15).keys()].map(i => ({
    id: 'id_' + i,
  } as Player)),
  total: 15,
};

export class PlayersAPI {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor() {

    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            players: {
              read(): PlayersPage {
                return mock;
              }
            }
          }
        }
      }
    });
    console.log('PlayerAPI ');

    this.client = null;
    // new ApolloClient({
    //   uri: 'http://localhost:8080/',
    //   cache,
    // });
  }

  async getPlayers(args?: PlayersArgs): Promise<PlayersPage> {
    const query = gql`
    query Players($filter: String) {
      players(filter: $filter) @client {
        id
        name

      }
      total
    }    
    `;
    const players = (await this.client.query<Query>({
      query,
      variables: args
    })).data.players;

    return players;
  }
}

// generate test
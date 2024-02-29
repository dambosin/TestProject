import { ApolloClient, gql, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { PlayersArgs, PlayersPage, Query } from "./models";

export class PlayersAPI {
  private client: ApolloClient<NormalizedCacheObject>;
  
  constructor() {
    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            players: {
              read() : PlayersPage{
                return {
                  players: [],
                  total: 0
                };
              }
            }
          }
        }
      }
    });
    
    this.client = new ApolloClient({
      uri: 'http://localhost/',
      cache,      
    });
  }

  async getPlayers(args?: PlayersArgs): Promise<PlayersPage> {
    const query = gql`
    query Players($filter: String) {
      players(filter: $filter){
        id
        name

      }
    }    
    `;

    const players = (await this.client.query<Query>({
      query,
      variables: args
    })).data.players;    
    
    return players;
  }
}
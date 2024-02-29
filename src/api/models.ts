export type Query = {
  players: PlayersPage;
}

export type PlayersArgs = {}

export type Player = {
  id: string;
  username?: string;
  account_status?: 'active' | 'locked';
  withdarwal_status?: 'unlocked' | 'locked';
}

export type PlayersPage = {
  players: Player[];
  total: number;
}
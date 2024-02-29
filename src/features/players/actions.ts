import { createAsyncAction } from "typesafe-actions";
import { PlayersArgs } from "../../api/models";

export const actionFetch = createAsyncAction('players/fetch', 'players/fetchSuccess', 'players/fetchFailure')<PlayersArgs, void, void>();

export type ActionType = typeof actionFetch.request | typeof actionFetch.success | typeof actionFetch.failure;
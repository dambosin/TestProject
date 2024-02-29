import { PayloadAction } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware, Epic, ofType } from 'redux-observable';
import { of, map, from, merge, mergeMap, concat } from 'rxjs';
import { PlayersPage, Player } from './api/models';
import { PlayersAPI } from './api/playersAPI';
import { error, fetchRequest, fetchStatus, playerReducer, ResponsePayload } from './common/actions/playerSlice';

interface IPlayerEpic {
  fetchPlayerEpic: Epic;
  fetchRequestEpic: Epic;
}


class PlayerEpic implements IPlayerEpic {
  private _api: PlayersAPI;
  constructor(playersApi: PlayersAPI) {
    
    this._api = playersApi;
  }

  fetchPlayerEpic: Epic = action$ => action$.pipe(
    ofType('fetchPlayer'),
    mergeMap(_ => {
      console.log('fetchPlayerEpic');
      return from(this._api.getPlayers()).pipe(
        map(responce =>
          of(
            fetchRequest({ page: responce })
          )
        )
      );
    }
    )
  );

  fetchRequestEpic: Epic = action$ => action$.pipe(
    ofType('fetchRequest'),
    map((action: PayloadAction<ResponsePayload>) => {
      return of(fetchStatus('success'));
    })
  )
}

const playerEpic = new PlayerEpic(new PlayersAPI());

export const rootEpic = combineEpics(playerEpic.fetchPlayerEpic, playerEpic.fetchRequestEpic);
const rootReducer = combineReducers(playerReducer)

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export const store = configureStore();

export type RootType = ReturnType<typeof rootReducer>


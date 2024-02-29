import { isAction, Observable } from "redux";
import { Epic } from "redux-observable";
import { filter, from, map, mergeMap } from "rxjs";
import { isActionOf } from "typesafe-actions";
import { PlayersAPI } from "../../api/playersAPI";
import { ActionType, actionFetch } from "./actions";

export class PlayersEpicCreator {
  private playersAPI: PlayersAPI;

  constructor(playersAPI: PlayersAPI) {
    this.playersAPI = playersAPI;
  }

  createEpic() : Epic {
    const epic: Epic = (action$) => {
      return action$.pipe(
        filter(isActionOf(actionFetch.request)),        
        mergeMap(() => {
          return from(this.playersAPI.getPlayers()).pipe(map(players => actionFetch.success(players)));
        })
      );
    }
    
    return epic;
  }
}
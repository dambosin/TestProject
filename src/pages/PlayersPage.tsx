import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayersPage } from '../api/models';
import { fetchPlayer } from '../common/actions/playerSlice';
import { RootType } from '../store';

export function PlayerPage() {
  const page: PlayersPage = useSelector((state: RootType) => state.page);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPlayer(true));

  }, []);
  const columns: GridColDef[] = [{
    field: 'id',
    headerName: 'ID',
    width: 100,
  }];
  return (
    <>
      <h1>Player Page</h1>
      <DataGrid rows={page.players} columns={columns} />
    </>
  );
}
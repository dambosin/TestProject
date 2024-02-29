import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmptyPage } from './pages/EmptyPage';
import { PlayerPage } from './pages/PlayersPage';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer/Drawer';
import Link from '@mui/material/Link/Link';
import { Button } from '@mui/material';

export default function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Link href="/">Home</Link>
        <Link href="/player">Player page</Link>
        <Link href="/empty">emptyPage</Link>
      </Drawer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<main>test</main>} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/player" element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

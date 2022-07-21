
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../src/assets/css/main.scss'
import Layout from './layouts/Layout';
import {
  Dashboard,
  ECM,
  BOS,
  LOS,
  BMS,
  TMS,
  Login,
  NotFound
} from './pages'
import { ACCEPT_TOKEN } from './utils/appSettings';
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!ACCEPT_TOKEN())
    navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route ext path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='ecm' element={<ECM />} />
        <Route path='bos' element={<BOS />} />
        <Route path='los' element={<LOS />} />
        <Route path='bms' element={<BMS />} />
        <Route path='tms' element={<TMS />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='ecm' element={<ECM />} />
        <Route path='bos' element={<BOS />} />
        <Route path='los' element={<LOS />} />
        <Route path='bms' element={<BMS />} />
        <Route path='tms' element={<TMS />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

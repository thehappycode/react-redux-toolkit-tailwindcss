
import { Route, Routes } from 'react-router-dom';
import '../src/assets/css/main.scss'
import Layout from './layouts/Layout';
import {Login, Dashboard, Inbox, Sendbox, Discuss, NotFound} from './pages'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='inbox' element={<Inbox />}/>
          <Route path='sendbox' element={<Sendbox />}/>
          <Route path='discuss' element={<Discuss />}/>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

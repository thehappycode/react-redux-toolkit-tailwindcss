
import { Route, Routes } from 'react-router-dom';
import '../src/assets/css/main.scss'
// import './App.css'
import Layout from './layouts/Layout';
import { Login, Dashboard, Inbox, Sendbox, Discuss, NotFound } from './pages'
import Dashboard1 from './pages/Dashboard1';
import NewDashboard from './pages/NewDashboard';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard1' element={<Dashboard1 />} />
        <Route path='new-dashboard' element={<NewDashboard />} />
        <Route path='inbox' element={<Inbox />} />
        <Route path='sendbox' element={<Sendbox />} />
        <Route path='discuss' element={<Discuss />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

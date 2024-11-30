import Header from './components/Header';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

function App() 
{
  return (
    <div>
    <Header/>
    <main>
        <Outlet/>
      </main>
      <ToastContainer />
    </div>
)};

export default App;

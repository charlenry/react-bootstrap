import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Accueil from './components/Accueil';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menus';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename="/react-bootstrap/build">
        <Menu />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
        

    </div>
  );
}

export default App;

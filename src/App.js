import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import SearchStud from './components/SearchStud';
import DeleteStud from './components/DeleteStud';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStud/>}/>
        <Route path='/DeleteStud' element={<DeleteStud/>}/>
        <Route path='/SearchStud' element={<SearchStud/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

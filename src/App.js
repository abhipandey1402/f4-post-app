import './App.css';
import HomePage from './components/HomePage';
import PostDetail from './components/PostDetail';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/item/:id' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;

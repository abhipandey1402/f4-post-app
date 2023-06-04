import './App.css';
import HomePage from './components/HomePage';
import PostDetail from './components/PostDetail';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div>
        <p style={{ paddingLeft: '25px' }}>Social Media App</p>
        <hr />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/item/:id' element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

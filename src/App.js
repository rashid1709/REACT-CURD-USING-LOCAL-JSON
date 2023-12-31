import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import View from './components/user/View';

function App() {
  return (
    <Router>
    <div className="container">
      
     
      
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/users/add' element={<AddUser />} />
          <Route exact path='/users/edit/:id' element={ <EditUser />} />
          <Route exact path='/users/view/:id' element={ <View /> } />
          
        </Routes>
      
    
    </div>
    </Router>
  ); 
}

export default App;

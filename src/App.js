import './App.css';
import Header from './Components/Header/Header';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import LoginPage from './Components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className='app-content'>
          <Routes>
            <Route index element={<ProfileContainer/>} />
            <Route path='/messages' element={<DialogsContainer/>} />
            <Route path='/users/:userId' element={<ProfileContainer/>} />
            <Route path='/users' element = {<UsersContainer/>}/>
            <Route path='/login' element = {<LoginPage/>}/>
            <Route path='/profile' element={<ProfileContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

import './App.css';
import Header from './Components/Header/Header';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import {Routes, Route, HashRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import LoginPage from './Components/Login/Login';
import { connect } from 'react-redux';
import { initial } from './redux/app_reducer';
import { useEffect } from 'react';
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import { getInit } from './redux/selectors';

const App = (props) => {
  useEffect(() => {
    props.initial()
  },[])
  if (!props.init) return <Preloader/>
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

const mapStateToProps = (state) => {
  return({
    init : getInit(state)
  })
}

export default compose(
  connect(mapStateToProps, {initial})
) (App);

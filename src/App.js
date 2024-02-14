import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css';
import './assets/css/templatemo-topic-listing.css';
import './App.css';

import { Outlet } from 'react-router-dom';
import { HeaderNav, Footer } from './components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userService from './services/user.service';
import { login } from './store/authSlice';

function App() {
  // const userData = useSelector((state) => state.auth.userData);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // set userData in store.
  //   if (userData === null) {
  //     userService.getCurrentUser().then((response) => {
  //       dispatch(login(response));
  //     });
  //   }
  // });

  return (
    <>
      <main>
        <HeaderNav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

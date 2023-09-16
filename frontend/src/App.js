import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />}></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="*" element={<Navigate replace to="/"></Navigate>} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />}></Route>
        <Route path="/:userId/places" element={<UserPlaces />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate replace to="/auth"></Navigate>} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            {/* <Route path="/" element={<Users />}></Route>
            <Route path="/:userId/places" element={<UserPlaces />}></Route>
            <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
            <Route path="/places/new" element={<NewPlace />}></Route>
            <Route path="/auth" element={<Auth />}></Route> */}
            {routes}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

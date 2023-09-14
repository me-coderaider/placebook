import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
// import SingleProblem from './singleProblem/pages/SingleProblem';
// import AddNewProblem from './singleProblem/pages/AddNewProblem';

const App = () =>{
    return (
        <Router>
            <MainNavigation />
            <main>
                <Routes>
                    <Route path="/" element={<Users />}></Route>
                    <Route path="/places/new" element={<NewPlace />}></Route>
                    <Route path="/:userId/places" element={<UserPlaces />}></Route>
                    {/* <Route path="/problems/:probId" element={<SingleProblem />}></Route> */}
                    {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                </Routes>
            </main>
        </Router>
    );
}

export default App;
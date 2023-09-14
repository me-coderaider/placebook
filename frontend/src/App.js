import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
// import MainNavigation from './shared/components/Navigation/MainNavigation';
// import SingleProblem from './singleProblem/pages/SingleProblem';
// import AddNewProblem from './singleProblem/pages/AddNewProblem';

const App = () =>{
    return (
        <Router>
            {/* <MainNavigation /> */}
            <main>
                <Routes>
                    <Route path="/" element={<Users />}></Route>
                    <Route path="/places/new" element={<NewPlace />}></Route>
                    {/* <Route path="/new_problem" element={<AddNewProblem />}></Route> */}
                    {/* <Route path="/problems/:probId" element={<SingleProblem />}></Route> */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
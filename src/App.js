import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EventPage from "./Components/EventPage";
import EventForm from "./Components/EventForm";
import StudentRegistration from "./students/studentRegistration";
import { getUser } from "./user";
import SuccessPage from "./students/success";
import Buttons from "./Navigation/Buttons";

import MiddleEnd from "./Navigation/Middle";
import BackEnd from "./Navigation/Backend";
import FrontEnd from "./Navigation/Front";
import RealTimeComponent from "./HooksExample/RealTimeComponent";
import ReactTraine from "./Navigation/ReactTraine";
import Counter from "./Navigation/Counter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Love from "./CompConn/Love";
import NewUser from "./CompConn/NewUser";
import ComnucationBar from "./CompConn/ComnucationBar";
import MoreData from "./CompConn/MoreData";

function App() {
    return (
        <Provider store={Store}> 
        <BrowserRouter>
            <Routes>
                <Route path="/moredata" element={<MoreData/>}/> 
                <Route path="/comunicate" element={<ComnucationBar/>}/>
                <Route path="/newuser" element={<NewUser/>}/>
                <Route path="/love" element={<Love/>}/>
                <Route path="/co" element={<Counter/>}/>
                <Route path="/traine" element={<ReactTraine/>}/>
                <Route path="/realtime" element={<RealTimeComponent/>}/>
                <Route path="/backend" element={<BackEnd/>}/>
                <Route path="/middleend" element={<MiddleEnd/>}/>
                <Route path="/frontend" element={<FrontEnd/>}/>
                <Route path="/allbuttons/:id" element={<Buttons/>}/>
                <Route path="/studentRegister" element={<StudentRegistration />}>

                </Route>
                <Route path="/success" element={<SuccessPage />} />

                <Route path="/" element={<Login />}>
                </Route>
                <Route path="/register" element={<Register />}>
                </Route>
                <Route path="/events" element={
                    <PrivateRoute>
                        <EventPage />
                    </PrivateRoute>
                }>
                </Route>
                <Route path="/events/new" element={
                    <PrivateRoute>
                        <EventForm />
                    </PrivateRoute>
                }>
                </Route>
                <Route path="/events/:id" element={
                    <PrivateRoute>
                        <EventForm />
                    </PrivateRoute>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    );
}

function PrivateRoute({ children }) {
    const user = getUser();
    return user ? children : <Navigate to="/" />;
}

export default App;
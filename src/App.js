import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitation from "./pages/Invitation";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Guests from "./pages/Guests";
import { createContext } from "react";
import Nav from "./components/Nav";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  const setUserOnLogin = (user) => {
    console.log(user);
    setUser((curr) => ({ ...user, logged: true }));
  };
  const setUserOnLogout = () => {
    setUser({ logged: false });
  };

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Nav setUserOnLogout={setUserOnLogout} />
          <Routes>
            <Route path="/invitation">
              <Route path=":key" element={<Invitation />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/login"
              element={<Login setUserOnLogin={setUserOnLogin} />}
            />
            <Route path="/guests" element={<Guests />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

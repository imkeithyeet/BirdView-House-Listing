import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Login from "../pages/Login";
import HomeList from "../pages/HomeList";
import About from "../pages/About";
import Contact from "../pages/Contact";
import HomeLoggedIn from "../pages/HomeLoggedIn";
import Dashboard from "../pages/Dashboard";
import Listing from "../pages/Listing";
import UserListing from "../pages/UserListing";
import "../styles/DarkMode.css";
import Footer from "./Footer";


function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
    };
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  useEffect(() => {
  document.body.className = theme;
    }, [theme]);

  if (!user)
    return (
      <>
      <div className="page-container">
      <div className="content-wrap">
        <NavBar />     
        <main>
        <button  className="contactDark"onClick={toggleTheme}>🔆/🌙</button>
          <Switch>
            <Route path="/about">
              <About />
              <button  className="toggle"onClick={toggleTheme}>🔆/🌙</button>
            </Route>
            <Route path="/login">
              <Login onLogin={setUser} />
              <button  className="LogLight"onClick={toggleTheme}>🔆/🌙</button>
            </Route>
            <Route path="/contact">
              <Contact />
              <button  className="Button"onClick={toggleTheme}>🔆/🌙</button>
            </Route>
            <Route path="/homes">
              <Listing />
            </Route>
            <Route path="/">
              <HomeList />
            </Route>
          </Switch>
        </main>
        </div>
        <Footer />
      </div>
      </>
    );

  return (
    <>
      <NavBarLoggedIn user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/dashboard">
            <Dashboard user={user} setUser={setUser} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/homes">
            <Listing user={user} onOffer={setUser} />
          </Route>
          <Route path="/user">
            <UserListing user={user} onOffer={setUser} />
          </Route>
          <Route path="/">
            <HomeLoggedIn user={user} setUser={setUser} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

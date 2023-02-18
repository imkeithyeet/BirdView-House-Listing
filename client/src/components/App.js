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
import UserListing from "../pages/UserListing.js";
import "../styles/DarkMode.css";
import Footer from "./Footer";
import { Button } from "../styles";


function App() {
  const [user, setUser] = useState(null);
  const [showSun, setShowSun] = useState(true);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setShowSun(showSun)
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
        <Button variant="outline" className="contactDark" onClick={toggleTheme}>{theme === 'dark' ? '𖤓' : '☽'}</Button>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route path="/contact">
              <Contact />
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
      <Button variant="outline" className="contactDark2" onClick={toggleTheme}>{theme == 'dark' ? '𖤓' : '☽'}</Button>
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
          <Route path="/listing">
            <UserListing user={user} setUser={setUser} />
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

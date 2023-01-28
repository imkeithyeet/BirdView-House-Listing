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
import "../styles/DarkMode.css";


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
        <NavBar />
        <main>
          <Switch>
            <Route path="/about">
              <About />
              <button  className="toggle"onClick={toggleTheme}>Toggle Theme</button>
            </Route>
            <Route path="/login">
              <Login onLogin={setUser} />
              <button  className="toggle"onClick={toggleTheme}>Toggle Theme</button>

            </Route>
            <Route path="/contact">
              <Contact />
              <button  className="Button"onClick={toggleTheme}>Toggle Theme</button>
            </Route>
            <Route path="/homes">
              <Listing />
            </Route>
            <Route path="/">
              <HomeList />
            </Route>
          </Switch>
        </main>
      </>
    );

  return (
    <>
      <NavBarLoggedIn user={user} setUser={setUser} />
      <main>
    {/* <div className={`App ${theme}`}> */}
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
          <Route path="/">
            <HomeLoggedIn user={user} setUser={setUser} />
          </Route>
        </Switch>
        {/* </div> */}
      </main>
    </>
  );
}

export default App;

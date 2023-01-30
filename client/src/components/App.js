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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user)
    return (
      <>
        <NavBar />
        <main>
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

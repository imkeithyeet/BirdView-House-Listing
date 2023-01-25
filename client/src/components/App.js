import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Login from "../pages/Login";
import HomeList from "../pages/HomeList";
import NewHome from "../pages/NewHome";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewHome user={user} />
          </Route>
          <Route path="/login">
            <Login onLogin={setUser} />
          </Route>
          <Route path="/">
            <HomeList />
          </Route>
        </Switch>
      </main>
    </>
  // <Login onLogin={setUser} />
  );

  return (
    <>
      <NavBarLoggedIn user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewHome user={user} />
          </Route>
          <Route path="/">
            <HomeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

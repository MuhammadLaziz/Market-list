import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Note from "./pages/Note";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="container">
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Notes} />
          <Route path="/note/:id" component={Note} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

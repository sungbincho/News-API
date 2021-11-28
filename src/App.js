import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsApiPage from "./pages/NewsApiPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NewsApiPage></NewsApiPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

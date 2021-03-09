import "./App.scss";
import { Route, Switch } from "react-router";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/nav/Navbar";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/blog/:articleId" component={ArticlePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home Section/Home';
import SinglePost from './Components/Single Post/SinglePost';
import GetStarted from './Components/Get-Started/Get-Started';
import WriterProfile from './Components/Get-Started/Writer';
import multiUse from './Components/CategoryPage/CategoryPage';
import NotFound from './NotFound';
import InstallPrompt from './InstallPrompt';



function App() {
  return (
    <div className="App">
      <InstallPrompt />
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/category/:category" component={multiUse} />
          <Route exact path="/:category/:id" component={SinglePost} />
          <Route exact path="/:category/:id/:author" component={WriterProfile} />
          <Route exact path="/GetStarted/" component={GetStarted} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;

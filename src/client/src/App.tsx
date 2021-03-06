import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Room from './pages/Room';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/room/:id" exact component={Room} />
          {/* <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" exact component={Room} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

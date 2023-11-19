import './app.scss';
import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import GlobalHeader from './components/GlobalHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import SQLEditor from './content/SQLEditor';

class App extends Component {
  render() {
    return (
      <>
        <GlobalHeader isSideNavExpanded="true" />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sqlEditor" component={SQLEditor} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;

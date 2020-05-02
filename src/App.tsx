import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/home/Home';
import { BaseLayout } from './components/shared/BaseLayout';
import { Profile } from './components/profile/Profile';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <BaseLayout>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
      </BaseLayout>
    </Router>
  );
}

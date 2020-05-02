import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/home/Home';
import { BaseLayout } from './components/shared/BaseLayout';
import { Profile } from './components/profile/Profile';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { CourseDetails } from './components/courses/details/CourseDetails';

export default function BasicExample() {
  return (
    <Router>
      <ThemeProvider>
        <BaseLayout>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile}/>
              <Route path="/course/:id" component={CourseDetails} />
            </Switch>
          </div>
        </BaseLayout>
      </ThemeProvider>
    </Router>
  );
}
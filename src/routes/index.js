import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Student from '~/pages/Student';
import Plan from '~/pages/Plan';
import Registration from '~/pages/Registration';
import Questions from '~/pages/Questions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/registration" exact component={Registration} isPrivate />
      <Route path="/questions" exact component={Questions} isPrivate />
    </Switch>
  );
}

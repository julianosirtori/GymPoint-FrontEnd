import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';

import Student from '~/pages/Student';
import NewStudent from '~/pages/Student/New';
import UpdateStudent from '~/pages/Student/Update';

import Plan from '~/pages/Plan';
import NewPlan from '~/pages/Plan/New';
import UpdatePlan from '~/pages/Plan/Update';

import Registration from '~/pages/Registration';
import NewRegistration from '~/pages/Registration/New';
import UpdateRegistration from '~/pages/Registration/Update';

import Questions from '~/pages/Questions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/student/new" component={NewStudent} isPrivate />
      <Route path="/student/update" component={UpdateStudent} isPrivate />

      <Route path="/plan" exact component={Plan} isPrivate />
      <Route path="/plan/new" exact component={NewPlan} isPrivate />
      <Route path="/plan/update" exact component={UpdatePlan} isPrivate />

      <Route path="/registration" exact component={Registration} isPrivate />
      <Route
        path="/registration/new"
        exact
        component={NewRegistration}
        isPrivate
      />
      <Route
        path="/registration/update"
        exact
        component={UpdateRegistration}
        isPrivate
      />

      <Route path="/questions" exact component={Questions} isPrivate />
    </Switch>
  );
}

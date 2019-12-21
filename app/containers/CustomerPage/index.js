/**
 *
 * CustomerPage
 *
 */

import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListPage from './ListPage';
import ActionPage from './ActionPage';

export function CustomerPage({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={ListPage} />
      <Route exact path={`${match.url}/create`} component={ActionPage} />
      <Route exact path={`${match.url}/edit/:id`} component={ActionPage} />
      <Redirect to="/404" />
    </Switch>
  );
}

CustomerPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CustomerPage;

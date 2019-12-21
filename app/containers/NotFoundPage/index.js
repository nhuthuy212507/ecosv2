/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Result, Button } from 'antd';
import { FormattedMessage } from 'react-intl';

import history from 'utils/history';

import messages from './messages';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle={<FormattedMessage {...messages.subTitle} />}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          <FormattedMessage {...messages.goHome} />
        </Button>
      }
    />
  );
}

/**
 *
 * CustomerPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Collapse } from 'antd';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { PageTitle } from 'components/Layout';

import messages from './messages';
import MasterData from './MasterData';
import WarehouseAddress from './WarehouseAddress';
import BillingAddress from './BillingAddress';
import ReturnAddress from './ReturnAddress';
import CustomerReference from './CustomerReference';

const { Panel } = Collapse;

export function ActionPage({ match }) {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (match.params.id) {
      setDisabled(false);
    }
  }, [match]);

  const title = match.params.id
    ? messages.titleUpdatePage
    : messages.titleCreatePage;

  return (
    <>
      <FormattedMessage {...title}>
        {msg => (
          <Helmet>
            <title>{msg}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <PageTitle>
        <span>
          <FormattedMessage {...messages.customerRef} />
          {': '}
          <Link to="/customer/test">Test</Link>
        </span>
      </PageTitle>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Master Data" key="1">
          <MasterData customerId={match.params.id} />
        </Panel>
        <Panel header="Warehouse Address" key="2" disabled={disabled}>
          <WarehouseAddress customerId={match.params.id} />
        </Panel>
        <Panel header="Billing Address" key="3" disabled={disabled}>
          <BillingAddress customerId={match.params.id} />
        </Panel>
        <Panel header="Return Address" key="4" disabled={disabled}>
          <ReturnAddress customerId={match.params.id} />
        </Panel>
        <Panel header="Customer Reference" key="5" disabled={disabled}>
          <CustomerReference customerId={match.params.id} />
        </Panel>
      </Collapse>
    </>
  );
}

ActionPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default compose(memo)(ActionPage);

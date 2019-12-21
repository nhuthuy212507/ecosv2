/**
 *
 * CustomerPage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Icon, Col, Row } from 'antd';
import { Formik } from 'formik';
import {
  Input,
  Form,
  FormItem,
  Select,
  SubmitButton,
  ResetButton,
} from 'formik-antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { KEY } from './constants';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectCustomerReferenceItems,
  makeSelectCreatedByItems,
} from './selectors';
import {
  getListCustomer,
  getOptionsCustomerReference,
  getOptionsCreatedBy,
} from './actions';
import messages from './messages';

import {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  PAYMENT_METHOD_CASH,
  PAYMENT_METHOD_NETOFF,
  PAYMENT_METHOD_BANK_TRANSFER,
} from '../../configValue';

const { Option } = Select;

export function Search({
  onGetCustomerList,
  onGetOptionsCustomerReference,
  onGetOptionsCreatedBy,
  createdByItems,
  customerReferenceItems,
}) {
  useInjectReducer({ key: KEY, reducer });
  useInjectSaga({ key: KEY, saga });

  useEffect(() => {
    onGetOptionsCustomerReference({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
    });
    onGetOptionsCreatedBy({
      order: { limit: 0 },
      field: JSON.stringify(['username']),
    });
  }, []);

  const [expand, setExpand] = useState(false);

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        onGetCustomerList({ query: values }, actions);
      }}
    >
      {() => (
        <Form layout="vertical">
          <Row gutter={24}>
            <Col span={6}>
              <FormItem
                name="name"
                label={<FormattedMessage {...messages.name} />}
              >
                <Input name="name" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="phone"
                label={<FormattedMessage {...messages.phone} />}
              >
                <Input name="phone" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="parent"
                label={<FormattedMessage {...messages.customerRef} />}
              >
                <Select name="parent">
                  {customerReferenceItems.map(item => (
                    <Option value={item._id} key={item.key}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="status"
                label={<FormattedMessage {...messages.status} />}
              >
                <Select name="status">
                  <Option value={STATUS_ACTIVE}>Active</Option>
                  <Option value={STATUS_INACTIVE}>Inactive</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="customer_no"
                label={<FormattedMessage {...messages.customerNo} />}
              >
                <Input name="customer_no" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="email"
                label={<FormattedMessage {...messages.email} />}
              >
                <Input name="email" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="type"
                label={<FormattedMessage {...messages.typeCustomer} />}
              >
                <Select name="type">
                  <Option value={0}>
                    <FormattedMessage {...messages.personal} />
                  </Option>
                  <Option value={1}>
                    <FormattedMessage {...messages.business} />
                  </Option>
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="payment_method"
                label={<FormattedMessage {...messages.paymentMethod} />}
              >
                <Select name="payment_method">
                  <Option value={PAYMENT_METHOD_CASH}>
                    <FormattedMessage {...messages.cash} />
                  </Option>
                  <Option value={PAYMENT_METHOD_NETOFF}>
                    <FormattedMessage {...messages.netOff} />
                  </Option>
                  <Option value={PAYMENT_METHOD_BANK_TRANSFER}>
                    <FormattedMessage {...messages.bankTransfer} />
                  </Option>
                </Select>
              </FormItem>
            </Col>

            {expand && (
              <>
                <Col span={6}>
                  <FormItem
                    name="tax_code"
                    label={<FormattedMessage {...messages.taxNo} />}
                  >
                    <Input name="tax_code" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem
                    name="fax"
                    label={<FormattedMessage {...messages.fax} />}
                  >
                    <Input name="fax" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem
                    name="website"
                    label={<FormattedMessage {...messages.website} />}
                  >
                    <Input name="website" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem
                    name="description"
                    label={<FormattedMessage {...messages.description} />}
                  >
                    <Input name="description" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem
                    name="created_by"
                    label={<FormattedMessage {...messages.createdBy} />}
                  >
                    <Select name="created_by">
                      {createdByItems.map(item => (
                        <Option value={item._id} key={item.key}>
                          {item.username}
                        </Option>
                      ))}
                    </Select>
                  </FormItem>
                </Col>
              </>
            )}
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <SubmitButton type="primary">
                <FormattedMessage {...messages.search} />
              </SubmitButton>
              <ResetButton style={{ marginLeft: 8 }}>
                <FormattedMessage {...messages.clear} />
              </ResetButton>
              {/* eslint-disable-next-line */}
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={() => setExpand(!expand)}>
                <FormattedMessage {...messages.collapse} />{' '}
                <Icon type={expand ? 'up' : 'down'} />
              </a>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

Search.propTypes = {
  onGetCustomerList: PropTypes.func.isRequired,
  onGetOptionsCreatedBy: PropTypes.func.isRequired,
  onGetOptionsCustomerReference: PropTypes.func.isRequired,
  createdByItems: PropTypes.array.isRequired,
  customerReferenceItems: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  customerReferenceItems: makeSelectCustomerReferenceItems(),
  createdByItems: makeSelectCreatedByItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetCustomerList: (params, actions) =>
      dispatch(getListCustomer(params, actions)),
    onGetOptionsCreatedBy: params => dispatch(getOptionsCreatedBy(params)),
    onGetOptionsCustomerReference: params =>
      dispatch(getOptionsCustomerReference(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Search);

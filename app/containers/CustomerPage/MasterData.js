/**
 *
 * CustomerPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Col, Row } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Formik } from 'formik';
import { Input, Form, FormItem, Select, SubmitButton } from 'formik-antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectCurrentUser } from 'containers/AuthProvider/selectors';

import { KEY } from './constants';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  getOptionsCreatedBy,
  addCustomer,
  editCustomer,
  getCustomerEditting,
} from './actions';
import {
  makeSelectCreatedByItems,
  makeSelectCustomerEditting,
} from './selectors';
import validationSchema from './validateMasterData';

import {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  PAYMENT_METHOD_CASH,
  PAYMENT_METHOD_NETOFF,
  PAYMENT_METHOD_BANK_TRANSFER,
} from '../../configValue';

const { Option } = Select;

export function MasterData({
  customerId,
  onGetOptionsCreatedBy,
  onAddCustomer,
  onGetCustomerEditting,
  onEditCustomer,
  createdByItems,
  currentUser,
  itemEditting,
}) {
  useInjectReducer({ key: KEY, reducer });
  useInjectSaga({ key: KEY, saga });

  useEffect(() => {
    onGetOptionsCreatedBy({
      order: { limit: 0 },
      field: JSON.stringify(['username']),
    });
  }, []);

  useEffect(() => {
    if (customerId) {
      onGetCustomerEditting(customerId);
    }
  }, [customerId]);

  const handleSubmit = (values, actions) => {
    if (customerId) {
      onEditCustomer(customerId, values, actions);
    } else {
      onAddCustomer(values, actions);
    }
  };

  let initialValues = {
    name: '',
    phone: '',
    type: '',
    status: STATUS_ACTIVE,
    customer_no: '',
    email: '',
    website: '',
    created_by: currentUser._id,
    tax_code: '',
    notification_email: '',
    fax: '',
    payment_method: PAYMENT_METHOD_CASH,
    description: '',
  };

  if (customerId) {
    initialValues = {
      name: itemEditting.name,
      phone: itemEditting.phone,
      type: itemEditting.type,
      status: itemEditting.status,
      customer_no: itemEditting.customer_no,
      email: itemEditting.email,
      website: itemEditting.website,
      created_by: itemEditting.created_by,
      tax_code: itemEditting.tax_code,
      notification_email: itemEditting.notification_email,
      fax: itemEditting.fax,
      payment_method: itemEditting.payment_method,
      description: itemEditting.description,
    };
  }

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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
                name="status"
                label={<FormattedMessage {...messages.status} />}
              >
                <Select name="status">
                  <Option value={STATUS_ACTIVE}>Active</Option>
                  <Option value={STATUS_INACTIVE}>Inactive</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
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
                name="website"
                label={<FormattedMessage {...messages.website} />}
              >
                <Input name="website" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                name="created_by"
                label={<FormattedMessage {...messages.createdBy} />}
              >
                <Select name="created_by" disabled>
                  {createdByItems.map(item => (
                    <Option value={item._id} key={item.key}>
                      {item.username}
                    </Option>
                  ))}
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}>
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
                name="notification_email"
                label={<FormattedMessage {...messages.notificationEmail} />}
              >
                <Input name="notification_email" />
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
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <FormItem
                name="description"
                label={<FormattedMessage {...messages.description} />}
              >
                <Input.TextArea name="description" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <SubmitButton type="primary">
                <FormattedMessage {...messages.save} />
              </SubmitButton>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

MasterData.propTypes = {
  customerId: PropTypes.string,
  onGetOptionsCreatedBy: PropTypes.func.isRequired,
  onAddCustomer: PropTypes.func.isRequired,
  onGetCustomerEditting: PropTypes.func.isRequired,
  onEditCustomer: PropTypes.func.isRequired,
  createdByItems: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  itemEditting: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createdByItems: makeSelectCreatedByItems(),
  currentUser: makeSelectCurrentUser(),
  itemEditting: makeSelectCustomerEditting(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetOptionsCreatedBy: params => dispatch(getOptionsCreatedBy(params)),
    onGetCustomerEditting: id => dispatch(getCustomerEditting(id)),
    onAddCustomer: (data, actions) => dispatch(addCustomer(data, actions)),
    onEditCustomer: (id, data, actions) =>
      dispatch(editCustomer(id, data, actions)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MasterData);

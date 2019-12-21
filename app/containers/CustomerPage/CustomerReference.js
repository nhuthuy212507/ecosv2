/**
 *
 * CustomerPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import { Table, Divider, Tag, Button, Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';

import { EditButton, DeleteButton } from 'components/Layout';
import { optionPageSize } from '../../configValue';
import messages from './messages';

export function CustomerReference() {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const ids = selectedRows.map(row => row._id);
      console.log(ids);
    },
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: <FormattedMessage {...messages.name} />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage {...messages.customerNo} />,
      dataIndex: 'customer_no',
    },
    {
      title: <FormattedMessage {...messages.typeCustomer} />,
      dataIndex: 'type',
      render: value =>
        value === 0 ? (
          <FormattedMessage {...messages.personal} />
        ) : (
          <FormattedMessage {...messages.business} />
        ),
    },
    {
      title: <FormattedMessage {...messages.billingAddress} />,
      dataIndex: 'billing_address',
    },
    {
      title: <FormattedMessage {...messages.phone} />,
      dataIndex: 'phone',
    },
    {
      title: <FormattedMessage {...messages.email} />,
      dataIndex: 'email',
    },
    {
      title: <FormattedMessage {...messages.taxNo} />,
      dataIndex: 'tax_code',
    },
    {
      title: <FormattedMessage {...messages.status} />,
      render: value =>
        value === 'active' ? (
          <Tag color="green">
            <FormattedMessage {...messages.active} />
          </Tag>
        ) : (
          <Tag color="#787985">
            <FormattedMessage {...messages.inActive} />
          </Tag>
        ),
    },
    {
      title: <FormattedMessage {...messages.customerRef} />,
      dataIndex: 'parent',
      render: parent => (parent ? parent.name : ''),
    },
    {
      title: <FormattedMessage {...messages.action} />,
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <span>
          <EditButton
            type="edit"
            theme="filled"
            onClick={() => console.log('edit with id: ', record._id)}
          />
          <Divider type="vertical" />
          <DeleteButton
            type="delete"
            theme="filled"
            onClick={() => console.log('delete with id: ', record._id)}
          />
        </span>
      ),
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Button type="primary" style={{ float: 'right' }}>
            <FormattedMessage {...messages.create} />
          </Button>
          <Button type="danger" style={{ float: 'left' }}>
            <FormattedMessage {...messages.delete} />
          </Button>
        </Col>
      </Row>
      <Table
        scroll={{ x: 'max-content' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={[]}
        bordered
        size="small"
        style={{ marginTop: 10 }}
        pagination={false}
      />
    </>
  );
}

export default compose(memo)(CustomerReference);

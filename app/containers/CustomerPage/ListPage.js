/**
 *
 * CustomerPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table, Divider, Button, Row, Col, Tag } from 'antd';

import { Line, AddButton, EditButton, DeleteButton } from 'components/Layout';
import history from 'utils/history';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { KEY } from './constants';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectCustomerPagination,
  makeSelectCustomerGetting,
  makeSelectCustomerItems,
  makeSelectCustomerQuery,
} from './selectors';
import messages from './messages';
import Search from './Search';
import { getListCustomer } from './actions';
import { optionPageSize } from '../../configValue';

export function ListPage({
  getting,
  items,
  pagination,
  query,
  onGetCustomerList,
}) {
  useInjectReducer({ key: KEY, reducer });
  useInjectSaga({ key: KEY, saga });

  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    onGetCustomerList({});
  }, []);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const ids = selectedRows.map(row => row._id);
      setSelectedIds(ids);
    },
  };

  const onChangePage = (page, size) => {
    onGetCustomerList({
      order: {
        page,
        limit: size,
      },
      query,
    });
  };

  const onChangeSize = (current, size) => {
    onGetCustomerList({
      order: {
        page: current,
        limit: size,
        query,
      },
    });
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 40,
      fixed: 'left',
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
      dataIndex: 'status',
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
      width: 80,
      fixed: 'right',
      render: (text, record) => (
        <span>
          <EditButton
            type="edit"
            theme="filled"
            onClick={() => history.push(`/customer/edit/${record._id}`)}
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
      <FormattedMessage {...messages.titleListPage}>
        {msg => (
          <Helmet>
            <title>{msg}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <Search />
      <Line />
      <Row style={{ marginBottom: '10px' }}>
        <Col span={24}>
          <AddButton
            type="primary"
            icon="plus-circle"
            onClick={() => history.push('/customer/create')}
          >
            <FormattedMessage {...messages.create} />
          </AddButton>
          {selectedIds.length > 0 && (
            <Button
              type="danger"
              icon="delete"
              onClick={() => console.log(selectedIds)}
            >
              <FormattedMessage {...messages.delete} />
            </Button>
          )}
        </Col>
      </Row>
      <Table
        scroll={{ x: 'max-content' }}
        rowSelection={rowSelection}
        loading={getting}
        columns={columns}
        dataSource={items}
        bordered
        size="small"
        pagination={{
          size: 'normal',
          onChange: onChangePage,
          onShowSizeChange: onChangeSize,
          showSizeChanger: true,
          pageSizeOptions: optionPageSize,
          locale: { items_per_page: '' },
          defaultPageSize: pagination.pageSize,
          defaultCurrent: pagination.currentPage,
          total: pagination.total,
        }}
      />
    </>
  );
}

ListPage.propTypes = {
  onGetCustomerList: PropTypes.func.isRequired,
  getting: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  query: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  getting: makeSelectCustomerGetting(),
  items: makeSelectCustomerItems(),
  pagination: makeSelectCustomerPagination(),
  query: makeSelectCustomerQuery(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetCustomerList: params => dispatch(getListCustomer(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ListPage);

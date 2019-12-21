/**
 *
 * CustomerPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Col, Row, Button, Table, Divider, Checkbox } from 'antd';
import { Formik } from 'formik';
import { Input, Form, FormItem, Select, SubmitButton } from 'formik-antd';
import { FormattedMessage } from 'react-intl';

import { EditButton, DeleteButton } from 'components/Layout';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { ID_COUNTRY_VN } from '../../configValue';

import { KEY } from './constants';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  getOptionsCityWarehouseAddress,
  getOptionsDistrictWarehouseAddress,
  getOptionsWardWarehouseAddress,
  addWarehouseAddress,
  editWarehouseAddress,
  getListWarehouseAddress,
} from './actions';
import {
  makeSelectCityWarehouseItems,
  makeSelectCityWarehouseGetting,
  makeSelectDistrictWarehouseItems,
  makeSelectDistrictWarehouseGetting,
  makeSelectWardWarehouseItems,
  makeSelectWardWarehouseGetting,
  makeSelectWarehouseAddressSubmitSuccess,
  makeSelectWarehouseAddressItems,
} from './selectors';
import validationSchema from './validateAddress';

const { Option } = Select;

export function WarehouseAddress({
  customerId,
  onGetOptionsCity,
  cities,
  gettingCity,
  onGetOptionsDistrict,
  districts,
  gettingDistrict,
  onGetOptionsWard,
  wards,
  gettingWard,
  onAddWarehouseAddress,
  onEditWarehouseAddress,
  submitSuccess,
  onGetListWarehouseAddress,
  listWarehouse,
}) {
  useInjectReducer({ key: KEY, reducer });
  useInjectSaga({ key: KEY, saga });

  const [disableDistrict, setDisableDistrict] = useState(true);
  const [disableWard, setDisableWard] = useState(true);
  const [editting, setEditting] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [initialValues, setInitialValues] = useState({
    city: '',
    district: '',
    ward: '',
    address: '',
  });

  useEffect(() => {
    onGetOptionsCity({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
      query: { country: ID_COUNTRY_VN },
    });
    onGetListWarehouseAddress({
      order: { limit: 0 },
      query: { customer: customerId },
    });
  }, []);

  useEffect(() => {
    if (submitSuccess) {
      setDisableDistrict(true);
      setDisableWard(true);
      onGetListWarehouseAddress({
        order: { limit: 0 },
        query: { customer: customerId },
      });
    }
  }, [submitSuccess]);

  const onChangeCity = (value, setFieldValue) => {
    setDisableDistrict(false);
    setDisableWard(true);
    setFieldValue('district', '', false);
    setFieldValue('ward', '', false);
    onGetOptionsDistrict({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
      query: { city: value },
    });
  };

  const onChangeDistrict = (value, setFieldValue) => {
    setDisableWard(false);
    setFieldValue('ward', '', false);
    onGetOptionsWard({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
      query: { district: value },
    });
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const ids = selectedRows.map(row => row._id);
      setSelectedIds(ids);
    },
  };

  const onLoadDataEdit = record => {
    onGetOptionsDistrict({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
      query: { city: record.city._id },
    });
    onGetOptionsWard({
      order: { limit: 0 },
      field: JSON.stringify(['name']),
      query: { district: record.district._id },
    });
    setDisableDistrict(false);
    setDisableWard(false);
    setEditting(true);
    setTimeout(() => {
      setInitialValues({
        id: record._id,
        city: record.city._id,
        district: record.district._id,
        ward: record.ward._id,
        address: record.address,
      });
    }, 100);
  };

  const handleCancel = () => {
    setEditting(false);
    setInitialValues({
      city: '',
      district: '',
      ward: '',
      address: '',
    });
    setDisableDistrict(true);
    setDisableWard(true);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'City',
      dataIndex: 'city',
      render: city => (city ? city.name : ''),
    },
    {
      title: 'District',
      dataIndex: 'district',
      render: district => (district ? district.name : ''),
    },
    {
      title: 'Ward',
      dataIndex: 'ward',
      render: ward => (ward ? ward.name : ''),
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Default',
      dataIndex: 'default',
      align: 'center',
      render: (text, record) => (
        <Checkbox
          checked={!!text}
          onChange={() => console.log('default with id: ', record._id)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      width: 80,
      fixed: 'right',
      render: (text, record) => (
        <span>
          <EditButton
            type="edit"
            theme="filled"
            onClick={() => onLoadDataEdit(record)}
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
      <Formik
        enableReinitialize
        initialValues={{
          customer: customerId,
          country: ID_COUNTRY_VN,
          ...initialValues,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          if (editting) {
            onEditWarehouseAddress(values, actions);
          } else {
            onAddWarehouseAddress(values, actions);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form layout="vertical">
            <Row gutter={24}>
              <Col span={6}>
                <FormItem
                  name="city"
                  label={<FormattedMessage {...messages.city} />}
                >
                  <Select
                    name="city"
                    onChange={value => onChangeCity(value, setFieldValue)}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    loading={gettingCity}
                    disabled={gettingCity}
                  >
                    {cities.map(city => (
                      <Option value={city._id} key={city.key}>
                        {city.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="district"
                  label={<FormattedMessage {...messages.district} />}
                >
                  <Select
                    name="district"
                    onChange={value => onChangeDistrict(value, setFieldValue)}
                    loading={gettingDistrict}
                    disabled={disableDistrict || gettingDistrict}
                  >
                    {districts.map(district => (
                      <Option value={district._id} key={district.key}>
                        {district.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="ward"
                  label={<FormattedMessage {...messages.ward} />}
                >
                  <Select
                    name="ward"
                    loading={gettingWard}
                    disabled={disableWard || gettingWard}
                  >
                    {wards.map(ward => (
                      <Option value={ward._id} key={ward.key}>
                        {ward.name}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="address"
                  label={<FormattedMessage {...messages.address} />}
                >
                  <Input name="address" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <SubmitButton type="primary" style={{ float: 'right' }}>
                  {editting ? (
                    <FormattedMessage {...messages.save} />
                  ) : (
                    <FormattedMessage {...messages.add} />
                  )}
                </SubmitButton>
                {editting && (
                  <Button
                    style={{ float: 'right', marginRight: '10px' }}
                    onClick={handleCancel}
                  >
                    <FormattedMessage {...messages.cancel} />
                  </Button>
                )}
                {selectedIds.length > 0 && (
                  <Button type="danger" style={{ float: 'left' }}>
                    <FormattedMessage {...messages.delete} />
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <Table
        scroll={{ x: 'max-content' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listWarehouse}
        bordered
        size="small"
        style={{ marginTop: 10 }}
        pagination={false}
      />
    </>
  );
}

WarehouseAddress.propTypes = {
  customerId: PropTypes.string,
  onGetOptionsCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  gettingCity: PropTypes.bool.isRequired,
  onGetOptionsDistrict: PropTypes.func.isRequired,
  districts: PropTypes.array.isRequired,
  gettingDistrict: PropTypes.bool.isRequired,
  onGetOptionsWard: PropTypes.func.isRequired,
  wards: PropTypes.array.isRequired,
  gettingWard: PropTypes.bool.isRequired,
  onAddWarehouseAddress: PropTypes.func.isRequired,
  onEditWarehouseAddress: PropTypes.func.isRequired,
  submitSuccess: PropTypes.bool.isRequired,
  onGetListWarehouseAddress: PropTypes.func.isRequired,
  listWarehouse: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cities: makeSelectCityWarehouseItems(),
  gettingCity: makeSelectCityWarehouseGetting(),
  districts: makeSelectDistrictWarehouseItems(),
  gettingDistrict: makeSelectDistrictWarehouseGetting(),
  wards: makeSelectWardWarehouseItems(),
  gettingWard: makeSelectWardWarehouseGetting(),
  submitSuccess: makeSelectWarehouseAddressSubmitSuccess(),
  listWarehouse: makeSelectWarehouseAddressItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetOptionsCity: params =>
      dispatch(getOptionsCityWarehouseAddress(params)),
    onGetOptionsDistrict: params =>
      dispatch(getOptionsDistrictWarehouseAddress(params)),
    onGetOptionsWard: params =>
      dispatch(getOptionsWardWarehouseAddress(params)),
    onAddWarehouseAddress: (data, actions) =>
      dispatch(addWarehouseAddress(data, actions)),
    onEditWarehouseAddress: (data, actions) =>
      dispatch(editWarehouseAddress(data, actions)),
    onGetListWarehouseAddress: (params, actions) =>
      dispatch(getListWarehouseAddress(params, actions)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WarehouseAddress);

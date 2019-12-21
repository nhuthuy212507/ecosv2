/*
 *
 * CustomerPage reducer
 *
 */
import produce from 'immer';
import {
  GET_LIST_CUSTOMER,
  GET_LIST_CUSTOMER_SUCCESS,
  GET_LIST_CUSTOMER_ERROR,
  GET_OPTIONS_CUSTOMER_REFERENCE,
  GET_OPTIONS_CUSTOMER_REFERENCE_SUCCESS,
  GET_OPTIONS_CUSTOMER_REFERENCE_ERROR,
  GET_OPTIONS_CREATED_BY,
  GET_OPTIONS_CREATED_BY_SUCCESS,
  GET_OPTIONS_CREATED_BY_ERROR,
  ADD_CUSTOMER,
  ADD_CUSTOMER_ERROR,
  ADD_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_ERROR,
  GET_CUSTOMER_EDITTING,
  GET_CUSTOMER_EDITTING_SUCCESS,
  GET_CUSTOMER_EDITTING_ERROR,
  GET_OPTIONS_CITY_WAREHOUSE_ADDRESS,
  GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_SUCCESS,
  GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_ERROR,
  GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS,
  GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_SUCCESS,
  GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_ERROR,
  GET_OPTIONS_WARD_WAREHOUSE_ADDRESS,
  GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_SUCCESS,
  GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_ERROR,
  ADD_WAREHOUSE_ADDRESS,
  ADD_WAREHOUSE_ADDRESS_SUCCESS,
  ADD_WAREHOUSE_ADDRESS_ERROR,
  GET_LIST_WAREHOUSE_ADDRESS,
  GET_LIST_WAREHOUSE_ADDRESS_SUCCESS,
  GET_LIST_WAREHOUSE_ADDRESS_ERROR,
  EDIT_WAREHOUSE_ADDRESS,
  EDIT_WAREHOUSE_ADDRESS_SUCCESS,
  EDIT_WAREHOUSE_ADDRESS_ERROR,
} from './constants';
import { defaultPageSize } from '../../configValue';

export const initialState = {
  customer: {
    getting: false,
    gettingItem: false,
    adding: false,
    editing: false,
    items: [],
    itemEditting: {},
    query: {},
    pagination: {
      total: 0,
      pageSize: defaultPageSize,
      currentPage: 1,
    },
    errorGetList: false,
    errorGetItem: false,
    errorAdd: false,
    errorEdit: false,
  },
  customerReference: {
    items: [],
    getting: false,
    error: false,
  },
  createdBy: {
    items: [],
    getting: false,
    error: false,
  },
  warehouseAddress: {
    adding: false,
    editting: false,
    submitSuccess: false,
    getting: false,
    items: [],
    errorAdd: false,
    errorEdit: false,
    errorGetList: false,
    city: {
      items: [],
      getting: false,
      error: false,
    },
    district: {
      items: [],
      getting: false,
      error: false,
    },
    ward: {
      items: [],
      getting: false,
      error: false,
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const customerPageReducer = (state = initialState, action) =>
  produce(
    state,
    ({ customer, customerReference, createdBy, warehouseAddress }) => {
      switch (action.type) {
        case GET_LIST_CUSTOMER:
          customer.getting = true;
          if (action.params && action.params.query) {
            customer.query = action.params.query;
          }
          break;
        case GET_LIST_CUSTOMER_SUCCESS:
          customer.getting = false;
          customer.items = action.response.data;
          customer.pagination = action.response.pagination;
          break;
        case GET_LIST_CUSTOMER_ERROR:
          customer.getting = false;
          customer.errorGetList = action.error;
          break;

        case GET_OPTIONS_CUSTOMER_REFERENCE:
          customerReference.getting = true;
          break;
        case GET_OPTIONS_CUSTOMER_REFERENCE_SUCCESS:
          customerReference.getting = false;
          customerReference.items = action.response.data;
          break;
        case GET_OPTIONS_CUSTOMER_REFERENCE_ERROR:
          customerReference.getting = false;
          customerReference.error = action.error;
          break;

        case GET_OPTIONS_CREATED_BY:
          createdBy.getting = true;
          break;
        case GET_OPTIONS_CREATED_BY_SUCCESS:
          createdBy.getting = false;
          createdBy.items = action.response.data;
          break;
        case GET_OPTIONS_CREATED_BY_ERROR:
          createdBy.getting = false;
          createdBy.error = action.error;
          break;

        case ADD_CUSTOMER:
          customer.adding = true;
          break;
        case ADD_CUSTOMER_SUCCESS:
          customer.adding = false;
          break;
        case ADD_CUSTOMER_ERROR:
          customer.adding = false;
          customer.errorAdd = action.error;
          break;

        case GET_CUSTOMER_EDITTING:
          customer.gettingItem = true;
          break;
        case GET_CUSTOMER_EDITTING_SUCCESS:
          customer.gettingItem = false;
          customer.itemEditting = action.response;
          break;
        case GET_CUSTOMER_EDITTING_ERROR:
          customer.gettingItem = false;
          customer.errorGetItem = action.error;
          break;

        case EDIT_CUSTOMER:
          customer.editing = true;
          break;
        case EDIT_CUSTOMER_SUCCESS:
          customer.editing = false;
          break;
        case EDIT_CUSTOMER_ERROR:
          customer.editing = false;
          customer.errorEdit = action.error;
          break;

        case GET_OPTIONS_CITY_WAREHOUSE_ADDRESS:
          warehouseAddress.city.getting = true;
          break;
        case GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.city.getting = false;
          warehouseAddress.city.items = action.response.data;
          break;
        case GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.city.getting = false;
          warehouseAddress.city.error = action.error;
          break;

        case GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS:
          warehouseAddress.district.getting = true;
          break;
        case GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.district.getting = false;
          warehouseAddress.district.items = action.response.data;
          break;
        case GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.district.getting = false;
          warehouseAddress.district.error = action.error;
          break;

        case GET_OPTIONS_WARD_WAREHOUSE_ADDRESS:
          warehouseAddress.ward.getting = true;
          break;
        case GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.ward.getting = false;
          warehouseAddress.ward.items = action.response.data;
          break;
        case GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.ward.getting = false;
          warehouseAddress.ward.error = action.error;
          break;

        case ADD_WAREHOUSE_ADDRESS:
          warehouseAddress.adding = true;
          warehouseAddress.submitSuccess = false;
          break;
        case ADD_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.adding = false;
          warehouseAddress.submitSuccess = true;
          break;
        case ADD_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.adding = false;
          warehouseAddress.errorAdd = action.error;
          break;

        case GET_LIST_WAREHOUSE_ADDRESS:
          warehouseAddress.getting = true;
          break;
        case GET_LIST_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.getting = false;
          warehouseAddress.items = action.response.data;
          break;
        case GET_LIST_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.getting = false;
          warehouseAddress.errorGetList = action.error;
          break;

        case EDIT_WAREHOUSE_ADDRESS:
          warehouseAddress.editting = true;
          warehouseAddress.submitSuccess = false;
          break;
        case EDIT_WAREHOUSE_ADDRESS_SUCCESS:
          warehouseAddress.editting = false;
          warehouseAddress.submitSuccess = true;
          break;
        case EDIT_WAREHOUSE_ADDRESS_ERROR:
          warehouseAddress.editting = false;
          warehouseAddress.errorEdit = action.error;
          break;
      }
    },
  );

export default customerPageReducer;

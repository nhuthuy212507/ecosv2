/*
 *
 * CustomerPage actions
 *
 */

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
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_ERROR,
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

export function getListCustomer(params, actions = false) {
  return {
    type: GET_LIST_CUSTOMER,
    params,
    actions,
  };
}

export function getListCustomerSuccess(response) {
  return {
    type: GET_LIST_CUSTOMER_SUCCESS,
    response,
  };
}

export function getListCustomerError(error) {
  return {
    type: GET_LIST_CUSTOMER_ERROR,
    error,
  };
}

export function getOptionsCustomerReference(params) {
  return {
    type: GET_OPTIONS_CUSTOMER_REFERENCE,
    params,
  };
}

export function getOptionsCustomerReferenceSuccess(response) {
  return {
    type: GET_OPTIONS_CUSTOMER_REFERENCE_SUCCESS,
    response,
  };
}

export function getOptionsCustomerReferenceError(error) {
  return {
    type: GET_OPTIONS_CUSTOMER_REFERENCE_ERROR,
    error,
  };
}

export function getOptionsCreatedBy(params) {
  return {
    type: GET_OPTIONS_CREATED_BY,
    params,
  };
}

export function getOptionsCreatedBySuccess(response) {
  return {
    type: GET_OPTIONS_CREATED_BY_SUCCESS,
    response,
  };
}

export function getOptionsCreatedByError(error) {
  return {
    type: GET_OPTIONS_CREATED_BY_ERROR,
    error,
  };
}

export function addCustomer(data, actions = false) {
  return {
    type: ADD_CUSTOMER,
    data,
    actions,
  };
}

export function addCustomerSuccess() {
  return {
    type: ADD_CUSTOMER_SUCCESS,
  };
}

export function addCustomerError(error) {
  return {
    type: ADD_CUSTOMER_ERROR,
    error,
  };
}

export function getCustomerEditting(id) {
  return {
    type: GET_CUSTOMER_EDITTING,
    id,
  };
}

export function getCustomerEdittingSuccess(response) {
  return {
    type: GET_CUSTOMER_EDITTING_SUCCESS,
    response,
  };
}

export function getCustomerEdittingError(error) {
  return {
    type: GET_CUSTOMER_EDITTING_ERROR,
    error,
  };
}

export function editCustomer(id, data, actions = false) {
  return {
    type: EDIT_CUSTOMER,
    id,
    data,
    actions,
  };
}

export function editCustomerSuccess() {
  return {
    type: EDIT_CUSTOMER_SUCCESS,
  };
}

export function editCustomerError(error) {
  return {
    type: EDIT_CUSTOMER_ERROR,
    error,
  };
}

export function getOptionsCityWarehouseAddress(params) {
  return {
    type: GET_OPTIONS_CITY_WAREHOUSE_ADDRESS,
    params,
  };
}

export function getOptionsCityWarehouseAddressSuccess(response) {
  return {
    type: GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_SUCCESS,
    response,
  };
}

export function getOptionsCityWarehouseAddressError(error) {
  return {
    type: GET_OPTIONS_CITY_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function getOptionsDistrictWarehouseAddress(params) {
  return {
    type: GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS,
    params,
  };
}

export function getOptionsDistrictWarehouseAddressSuccess(response) {
  return {
    type: GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_SUCCESS,
    response,
  };
}

export function getOptionsDistrictWarehouseAddressError(error) {
  return {
    type: GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function getOptionsWardWarehouseAddress(params) {
  return {
    type: GET_OPTIONS_WARD_WAREHOUSE_ADDRESS,
    params,
  };
}

export function getOptionsWardWarehouseAddressSuccess(response) {
  return {
    type: GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_SUCCESS,
    response,
  };
}

export function getOptionsWardWarehouseAddressError(error) {
  return {
    type: GET_OPTIONS_WARD_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function addWarehouseAddress(data, actions = false) {
  return {
    type: ADD_WAREHOUSE_ADDRESS,
    data,
    actions,
  };
}

export function addWarehouseAddressSuccess() {
  return {
    type: ADD_WAREHOUSE_ADDRESS_SUCCESS,
  };
}

export function addWarehouseAddressError(error) {
  return {
    type: ADD_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function getListWarehouseAddress(params, actions = false) {
  return {
    type: GET_LIST_WAREHOUSE_ADDRESS,
    params,
    actions,
  };
}

export function getListWarehouseAddressSuccess(response) {
  return {
    type: GET_LIST_WAREHOUSE_ADDRESS_SUCCESS,
    response,
  };
}

export function getListWarehouseAddressError(error) {
  return {
    type: GET_LIST_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function editWarehouseAddress(data, actions = false) {
  return {
    type: EDIT_WAREHOUSE_ADDRESS,
    data,
    actions,
  };
}

export function editWarehouseAddressSuccess() {
  return {
    type: EDIT_WAREHOUSE_ADDRESS_SUCCESS,
  };
}

export function editWarehouseAddressError(error) {
  return {
    type: EDIT_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

export function deleteWarehouseAddress(data, actions = false) {
  return {
    type: EDIT_WAREHOUSE_ADDRESS,
    data,
    actions,
  };
}

export function deleteWarehouseAddressSuccess() {
  return {
    type: EDIT_WAREHOUSE_ADDRESS_SUCCESS,
  };
}

export function deleteWarehouseAddressError(error) {
  return {
    type: EDIT_WAREHOUSE_ADDRESS_ERROR,
    error,
  };
}

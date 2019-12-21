import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customerPage state
 */

const selectCustomerPage = state => state.customerPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CustomerPage
 */

const makeSelectCustomer = () =>
  createSelector(
    selectCustomerPage,
    customerPageState => customerPageState.customer,
  );

const makeSelectCustomerGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.getting,
  );

const makeSelectCustomerItems = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.items,
  );

const makeSelectCustomerQuery = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.query,
  );

const makeSelectCustomerPagination = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.pagination,
  );

const makeSelectCustomerEditting = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.itemEditting,
  );

const makeSelectCustomerErrorGetList = () =>
  createSelector(
    selectCustomerPage,
    ({ customer }) => customer.errorGetList,
  );

const makeSelectCustomerReference = () =>
  createSelector(
    selectCustomerPage,
    customerPageState => customerPageState.customerReference,
  );

const makeSelectCustomerReferenceGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ customerReference }) => customerReference.getting,
  );

const makeSelectCustomerReferenceItems = () =>
  createSelector(
    selectCustomerPage,
    ({ customerReference }) => customerReference.items,
  );

const makeSelectCustomerReferenceError = () =>
  createSelector(
    selectCustomerPage,
    ({ customerReference }) => customerReference.error,
  );

const makeSelectCreatedBy = () =>
  createSelector(
    selectCustomerPage,
    customerPageState => customerPageState.createdBy,
  );

const makeSelectCreatedByGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ createdBy }) => createdBy.getting,
  );

const makeSelectCreatedByItems = () =>
  createSelector(
    selectCustomerPage,
    ({ createdBy }) => createdBy.items,
  );

const makeSelectCreatedByError = () =>
  createSelector(
    selectCustomerPage,
    ({ createdBy }) => createdBy.error,
  );

const makeSelectWarehouseAddress = () =>
  createSelector(
    selectCustomerPage,
    customerPageState => customerPageState.warehouseAddress,
  );

const makeSelectWarehouseAddressSubmitSuccess = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.submitSuccess,
  );

const makeSelectWarehouseAddressItems = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.items,
  );

const makeSelectCityWarehouse = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.city,
  );

const makeSelectCityWarehouseGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.city.getting,
  );

const makeSelectCityWarehouseItems = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.city.items,
  );

const makeSelectCityWarehouseError = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.city.error,
  );

const makeSelectDistrictWarehouse = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.district,
  );

const makeSelectDistrictWarehouseGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.district.getting,
  );

const makeSelectDistrictWarehouseItems = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.district.items,
  );

const makeSelectDistrictWarehouseError = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.district.error,
  );

const makeSelectWardWarehouse = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.ward,
  );

const makeSelectWardWarehouseGetting = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.ward.getting,
  );

const makeSelectWardWarehouseItems = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.ward.items,
  );

const makeSelectWardWarehouseError = () =>
  createSelector(
    selectCustomerPage,
    ({ warehouseAddress }) => warehouseAddress.ward.error,
  );

export {
  selectCustomerPage,
  makeSelectCustomer,
  makeSelectCustomerGetting,
  makeSelectCustomerItems,
  makeSelectCustomerQuery,
  makeSelectCustomerPagination,
  makeSelectCustomerEditting,
  makeSelectCustomerErrorGetList,
  makeSelectCustomerReference,
  makeSelectCustomerReferenceGetting,
  makeSelectCustomerReferenceItems,
  makeSelectCustomerReferenceError,
  makeSelectCreatedBy,
  makeSelectCreatedByGetting,
  makeSelectCreatedByItems,
  makeSelectCreatedByError,
  makeSelectWarehouseAddress,
  makeSelectWarehouseAddressSubmitSuccess,
  makeSelectWarehouseAddressItems,
  makeSelectCityWarehouse,
  makeSelectCityWarehouseGetting,
  makeSelectCityWarehouseItems,
  makeSelectCityWarehouseError,
  makeSelectDistrictWarehouse,
  makeSelectDistrictWarehouseGetting,
  makeSelectDistrictWarehouseItems,
  makeSelectDistrictWarehouseError,
  makeSelectWardWarehouse,
  makeSelectWardWarehouseGetting,
  makeSelectWardWarehouseItems,
  makeSelectWardWarehouseError,
};

import React from 'react';
import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import request from 'utils/request';
import history from 'utils/history';
import {
  API_CUSTOMER,
  API_CUSTOMER_WAREHOUSE,
  API_USER,
  API_CITY,
  API_DISTRICT,
  API_WARD,
} from 'utils/listAPI';

import { ALREADY_EXISTS } from '../../configValue';
import {
  GET_LIST_CUSTOMER,
  GET_OPTIONS_CUSTOMER_REFERENCE,
  GET_OPTIONS_CREATED_BY,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  GET_CUSTOMER_EDITTING,
  GET_OPTIONS_CITY_WAREHOUSE_ADDRESS,
  GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS,
  GET_OPTIONS_WARD_WAREHOUSE_ADDRESS,
  ADD_WAREHOUSE_ADDRESS,
  GET_LIST_WAREHOUSE_ADDRESS,
  EDIT_WAREHOUSE_ADDRESS,
} from './constants';
import {
  getListCustomerSuccess,
  getListCustomerError,
  getOptionsCustomerReferenceSuccess,
  getOptionsCustomerReferenceError,
  getOptionsCreatedBySuccess,
  getOptionsCreatedByError,
  addCustomerSuccess,
  addCustomerError,
  editCustomerSuccess,
  editCustomerError,
  getCustomerEdittingSuccess,
  getCustomerEdittingError,
  getOptionsCityWarehouseAddressSuccess,
  getOptionsCityWarehouseAddressError,
  getOptionsDistrictWarehouseAddressSuccess,
  getOptionsDistrictWarehouseAddressError,
  getOptionsWardWarehouseAddressSuccess,
  getOptionsWardWarehouseAddressError,
  addWarehouseAddressSuccess,
  addWarehouseAddressError,
  getListWarehouseAddressSuccess,
  getListWarehouseAddressError,
  editWarehouseAddressSuccess,
  editWarehouseAddressError,
} from './actions';
import messages from './messages';

function* getListCustomerSaga({ params, actions }) {
  const { setSubmitting } = actions;

  try {
    const options = {
      url: API_CUSTOMER,
      method: 'get',
      params,
    };
    const response = yield call(request, options);
    if (response) {
      yield put(getListCustomerSuccess(response));
      if (setSubmitting) yield call(setSubmitting, false);
    }
  } catch (error) {
    yield put(getListCustomerError(error.message));
    if (setSubmitting) yield call(setSubmitting, false);
  }
}
export function* watchGetListCustomer() {
  yield takeEvery(GET_LIST_CUSTOMER, getListCustomerSaga);
}

function* getOptionsCustomerReferenceSaga({ params }) {
  try {
    const options = {
      url: API_CUSTOMER,
      method: 'get',
      params,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getOptionsCustomerReferenceSuccess(response));
    }
  } catch (error) {
    yield put(getOptionsCustomerReferenceError(error.message));
  }
}
export function* watchGetOptionsCustomerReference() {
  yield takeEvery(
    GET_OPTIONS_CUSTOMER_REFERENCE,
    getOptionsCustomerReferenceSaga,
  );
}

function* getOptionsCreatedBySaga({ params }) {
  try {
    const options = {
      url: API_USER,
      method: 'get',
      params,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getOptionsCreatedBySuccess(response));
    }
  } catch (error) {
    yield put(getOptionsCreatedByError(error.message));
  }
}
export function* watchGetOptionsCreatedBy() {
  yield takeEvery(GET_OPTIONS_CREATED_BY, getOptionsCreatedBySaga);
}

function* addCustomerSaga({ data, actions }) {
  const { setSubmitting, setFieldError } = actions;
  try {
    const options = {
      url: API_CUSTOMER,
      method: 'post',
      data,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(addCustomerSuccess());
      yield call(setSubmitting, false);
      yield call(history.push, `/customer/edit/${response.id}`);
      yield call(
        toast.success,
        <FormattedMessage {...messages.addCustomerSuccess} />,
      );
    }
  } catch (error) {
    const { response, message } = error;
    if (response) {
      const { status, data: dataError } = response;
      if (status === 400) {
        if (dataError && dataError.name === ALREADY_EXISTS) {
          yield call(
            setFieldError,
            'name',
            <FormattedMessage {...messages.nameExists} />,
          );
        } else {
          yield call(
            toast.error,
            <FormattedMessage {...messages.badRequest} />,
          );
        }
      }
      yield put(addCustomerError(message));
      yield call(setSubmitting, false);
    }
  }
}
export function* watchAddCustomer() {
  yield takeEvery(ADD_CUSTOMER, addCustomerSaga);
}

function* getCustomerEdittingSaga({ id }) {
  try {
    const options = {
      url: `${API_CUSTOMER}/${id}`,
      method: 'get',
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getCustomerEdittingSuccess(response));
    }
  } catch (error) {
    yield put(getCustomerEdittingError(error.message));
  }
}
export function* watchGetCustomerEditting() {
  yield takeEvery(GET_CUSTOMER_EDITTING, getCustomerEdittingSaga);
}

function* editCustomerSaga({ id, data, actions }) {
  const { setSubmitting, setFieldError } = actions;
  try {
    const options = {
      url: `${API_CUSTOMER}/${id}`,
      method: 'put',
      data,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(editCustomerSuccess());
      yield call(setSubmitting, false);
      yield call(
        toast.success,
        <FormattedMessage {...messages.editCustomerSuccess} />,
      );
    }
  } catch (error) {
    const { response, message } = error;
    if (response) {
      const { status, data: dataError } = response;
      if (status === 400) {
        if (dataError && dataError.name === ALREADY_EXISTS) {
          yield call(
            setFieldError,
            'name',
            <FormattedMessage {...messages.nameExists} />,
          );
        } else {
          yield call(
            toast.error,
            <FormattedMessage {...messages.badRequest} />,
          );
        }
      }
      yield put(editCustomerError(message));
      yield call(setSubmitting, false);
    }
  }
}
export function* watchEditCustomer() {
  yield takeEvery(EDIT_CUSTOMER, editCustomerSaga);
}

function* getOptionsCityWarehouseAddressSaga({ params }) {
  try {
    const options = {
      url: API_CITY,
      method: 'get',
      params,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getOptionsCityWarehouseAddressSuccess(response));
    }
  } catch (error) {
    yield put(getOptionsCityWarehouseAddressError(error.message));
  }
}
export function* watchGetOptionsCityWarehouseAddress() {
  yield takeEvery(
    GET_OPTIONS_CITY_WAREHOUSE_ADDRESS,
    getOptionsCityWarehouseAddressSaga,
  );
}

function* getOptionsDistrictWarehouseAddressSaga({ params }) {
  try {
    const options = {
      url: API_DISTRICT,
      method: 'get',
      params,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getOptionsDistrictWarehouseAddressSuccess(response));
    }
  } catch (error) {
    yield put(getOptionsDistrictWarehouseAddressError(error.message));
  }
}
export function* watchGetOptionsDistrictWarehouseAddress() {
  yield takeEvery(
    GET_OPTIONS_DISTRICT_WAREHOUSE_ADDRESS,
    getOptionsDistrictWarehouseAddressSaga,
  );
}

function* getOptionsWardWarehouseAddressSaga({ params }) {
  try {
    const options = {
      url: API_WARD,
      method: 'get',
      params,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(getOptionsWardWarehouseAddressSuccess(response));
    }
  } catch (error) {
    yield put(getOptionsWardWarehouseAddressError(error.message));
  }
}
export function* watchGetOptionsWardWarehouseAddress() {
  yield takeEvery(
    GET_OPTIONS_WARD_WAREHOUSE_ADDRESS,
    getOptionsWardWarehouseAddressSaga,
  );
}

function* addWarehouseAddressSaga({ data, actions }) {
  const { setSubmitting, resetForm } = actions;
  try {
    const options = {
      url: API_CUSTOMER_WAREHOUSE,
      method: 'post',
      data,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(addWarehouseAddressSuccess());
      yield call(setSubmitting, false);
      yield call(resetForm);
      yield call(
        toast.success,
        <FormattedMessage {...messages.addWarehouseAddressSuccess} />,
      );
    }
  } catch (error) {
    const { response, message } = error;
    if (response) {
      const { status, data: dataError } = response;
      if (status === 400) {
        if (dataError && dataError.error === ALREADY_EXISTS) {
          yield call(
            toast.error,
            <FormattedMessage {...messages.warehouseAddressExists} />,
          );
        } else {
          yield call(
            toast.error,
            <FormattedMessage {...messages.badRequest} />,
          );
        }
      }
      yield put(addWarehouseAddressError(message));
      yield call(setSubmitting, false);
    }
  }
}
export function* watchAddWarehouseAddress() {
  yield takeEvery(ADD_WAREHOUSE_ADDRESS, addWarehouseAddressSaga);
}

function* getListWarehouseAddressSaga({ params, actions }) {
  const { setSubmitting } = actions;

  try {
    const options = {
      url: API_CUSTOMER_WAREHOUSE,
      method: 'get',
      params,
    };
    const response = yield call(request, options);
    if (response) {
      yield put(getListWarehouseAddressSuccess(response));
      if (setSubmitting) yield call(setSubmitting, false);
    }
  } catch (error) {
    yield put(getListWarehouseAddressError(error.message));
    if (setSubmitting) yield call(setSubmitting, false);
  }
}
export function* watchGetListWarehouseAddress() {
  yield takeEvery(GET_LIST_WAREHOUSE_ADDRESS, getListWarehouseAddressSaga);
}

function* editWarehouseAddressSaga({ data, actions }) {
  const { setSubmitting, resetForm } = actions;
  try {
    const options = {
      url: `${API_CUSTOMER_WAREHOUSE}/${data.id}`,
      method: 'put',
      data,
    };

    const response = yield call(request, options);
    if (response) {
      yield put(editWarehouseAddressSuccess());
      if (setSubmitting) yield call(setSubmitting, false);
      if (resetForm) yield call(resetForm);
      if (data.default) {
        yield call(
          toast.success,
          <FormattedMessage {...messages.setDefaulAddresstSuccess} />,
        );
      } else {
        yield call(
          toast.success,
          <FormattedMessage {...messages.editWarehouseAddressSuccess} />,
        );
      }
    }
  } catch (error) {
    const { response, message } = error;
    if (response) {
      const { status, data: dataError } = response;
      if (status === 400) {
        if (dataError && dataError.error === ALREADY_EXISTS) {
          yield call(
            toast.error,
            <FormattedMessage {...messages.warehouseAddressExists} />,
          );
        } else {
          yield call(
            toast.error,
            <FormattedMessage {...messages.badRequest} />,
          );
        }
      }
      yield put(editWarehouseAddressError(message));
      yield call(setSubmitting, false);
    }
  }
}
export function* watchEditWarehouseAddress() {
  yield takeEvery(EDIT_WAREHOUSE_ADDRESS, editWarehouseAddressSaga);
}

export default function* customerPageSaga() {
  yield all([
    fork(watchGetListCustomer),
    fork(watchGetOptionsCustomerReference),
    fork(watchGetOptionsCreatedBy),
    fork(watchAddCustomer),
    fork(watchGetCustomerEditting),
    fork(watchEditCustomer),
    fork(watchGetOptionsCityWarehouseAddress),
    fork(watchGetOptionsDistrictWarehouseAddress),
    fork(watchGetOptionsWardWarehouseAddress),
    fork(watchAddWarehouseAddress),
    fork(watchGetListWarehouseAddress),
    fork(watchEditWarehouseAddress),
  ]);
}

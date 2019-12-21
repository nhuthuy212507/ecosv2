import React from 'react';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validationSchema = yup.object().shape({
  city: yup.string().required(<FormattedMessage {...messages.cityRequired} />),
  district: yup
    .string()
    .required(<FormattedMessage {...messages.districtRequired} />),
  ward: yup.string().required(<FormattedMessage {...messages.wardRequired} />),
  address: yup
    .string()
    .required(<FormattedMessage {...messages.addressRequired} />),
});

export default validationSchema;

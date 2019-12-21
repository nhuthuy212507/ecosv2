import React from 'react';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validationSchema = yup.object().shape({
  name: yup.string().required(<FormattedMessage {...messages.nameRequired} />),
  phone: yup
    .string()
    .required(<FormattedMessage {...messages.phoneRequired} />),
  type: yup.number().required(<FormattedMessage {...messages.typeRequied} />),
  customer_no: yup
    .string()
    .required(<FormattedMessage {...messages.customerNoRequired} />),
  email: yup
    .string()
    .required(<FormattedMessage {...messages.emailRequired} />)
    .email(<FormattedMessage {...messages.emailInvalid} />),
  tax_code: yup
    .string()
    .required(<FormattedMessage {...messages.taxCodeRequired} />),
  notification_email: yup
    .string()
    .required(<FormattedMessage {...messages.notiEmailRequired} />)
    .email(<FormattedMessage {...messages.emailInvalid} />),
});

export default validationSchema;

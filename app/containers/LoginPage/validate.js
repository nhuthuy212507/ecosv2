import React from 'react';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(<FormattedMessage {...messages.usernameRequired} />),
  password: yup
    .string()
    .required(<FormattedMessage {...messages.passwordRequired} />),
});

export default validationSchema;

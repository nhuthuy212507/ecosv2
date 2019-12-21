/**
 *
 * LoginPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Icon } from 'antd';
import { Formik } from 'formik';
import { Input, Form, FormItem } from 'formik-antd';

import {
  Wrapper,
  Card,
  Container,
  Head,
  Title,
  TitleLogo,
  SubHead,
  ButtonLogin,
} from 'components/Account';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { toast } from 'react-toastify';
import { login } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import validationSchema from './validate';

export function LoginPage({ history, onLogin }) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  useEffect(() => {
    const { action, location } = history;
    if (action === 'PUSH' && location.state && location.state.redirect) {
      toast.warn(<FormattedMessage {...messages.error401} />);
    }
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.helmet}>
        {title => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <Wrapper>
        <Container>
          <Card>
            <Head>
              <Title>
                <FormattedMessage {...messages.welcome} />{' '}
                <TitleLogo>SPEEDLINK</TitleLogo>
              </Title>
              <SubHead>
                <FormattedMessage {...messages.subHead} />
              </SubHead>
            </Head>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                onLogin(values);
              }}
            >
              {() => (
                <Form>
                  <FormItem name="username">
                    <Input
                      name="username"
                      prefix={<Icon type="user" />}
                      placeholder="Username"
                    />
                  </FormItem>
                  <FormItem name="password">
                    <Input
                      name="password"
                      type="password"
                      prefix={<Icon type="lock" />}
                      placeholder="Password"
                    />
                  </FormItem>
                  <ButtonLogin type="primary">
                    <FormattedMessage {...messages.login} />
                  </ButtonLogin>
                </Form>
              )}
            </Formik>
          </Card>
        </Container>
      </Wrapper>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLogin: values => dispatch(login(values)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);

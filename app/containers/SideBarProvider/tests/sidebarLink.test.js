/**
 * Test the HomePage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';
import { FormattedMessage, IntlProvider } from 'react-intl';

import messages from '../messages';
import SideBarLink from '../sidebarLink';
import configureStore from '../../../configureStore';

describe('<sidebarLink />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <BrowserRouter>
            <SideBarLink
              collapse={false}
              title={<FormattedMessage {...messages.dashboard} />}
              route="/test"
            />
          </BrowserRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

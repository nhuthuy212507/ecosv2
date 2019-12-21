import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter as Router } from 'react-router-dom';

import App from '../index';
import configureStore from '../../../configureStore';

describe('<App />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });
  it('should render and match the snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Router>
            <App />
          </Router>
        </IntlProvider>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

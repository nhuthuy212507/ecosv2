import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';

import CustomizerProvider from 'containers/CustomizerProvider';
import TopbarProvider from 'containers/TopBarProvider';
import SideBarProvider from 'containers/SideBarProvider';
import configureStore from '../../../configureStore';

describe('<Router />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });
  it('should render and match the snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <IntlProvider locale="en">
          <BrowserRouter>
            <CustomizerProvider />
            <TopbarProvider />
            <SideBarProvider />
          </BrowserRouter>
        </IntlProvider>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

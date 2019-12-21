import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'antd';

import { SideBarContent, SideBarBlock } from 'components/SideBar';
import SideBarLink from './sidebarLink';
import messages from './messages';

export default function sidebarContent({ collapse }) {
  return (
    <SideBarContent collapse={collapse}>
      <SideBarBlock>
        <SideBarLink
          title={<FormattedMessage {...messages.dashboard} />}
          route="/"
          icon={<Icon type="area-chart" />}
        />
        <SideBarLink
          title={<FormattedMessage {...messages.customer} />}
          route="/customer"
          icon={<Icon type="team" />}
        />
      </SideBarBlock>
    </SideBarContent>
  );
}

sidebarContent.propTypes = {
  collapse: PropTypes.bool.isRequired,
};

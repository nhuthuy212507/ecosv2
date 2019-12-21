/**
 *
 * sidebarLink
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import {
  SideBarLink,
  SideBarLinkIcon,
  SideBarLinkTitle,
} from 'components/SideBar';
import { makeSelectCollapse } from './selectors';

const StyledLink = styled(NavLink)`
  &.${'active'} {
    color: aliceblue;
  }
`;

export function sidebarLink({ collapse, title, icon, route, onClick }) {
  return (
    <StyledLink to={route} onClick={onClick} activeClassName="active">
      <SideBarLink collapse={collapse}>
        {icon ? <SideBarLinkIcon>{icon}</SideBarLinkIcon> : ''}
        <SideBarLinkTitle collapse={collapse}>{title}</SideBarLinkTitle>
      </SideBarLink>
    </StyledLink>
  );
}

sidebarLink.propTypes = {
  collapse: PropTypes.bool.isRequired,
  title: PropTypes.element.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  collapse: makeSelectCollapse(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(sidebarLink);

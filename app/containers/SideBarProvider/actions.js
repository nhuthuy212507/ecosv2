/*
 *
 * SideBarProvider actions
 *
 */

import {
  CHANGE_DESKTOP_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY,
} from './constants';

export function changeDesktopSidebarVisibility() {
  return {
    type: CHANGE_DESKTOP_SIDEBAR_VISIBILITY,
  };
}

export function changeMobileSidebarVisibility() {
  return {
    type: CHANGE_MOBILE_SIDEBAR_VISIBILITY,
  };
}

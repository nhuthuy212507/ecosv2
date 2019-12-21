import {
  changeDesktopSidebarVisibility,
  changeMobileSidebarVisibility,
} from '../actions';
import {
  CHANGE_DESKTOP_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY,
} from '../constants';

describe('SideBarProvider actions', () => {
  describe('Change Desktop Sidebar Visibility', () => {
    it('has a type of CHANGE_DESKTOP_SIDEBAR_VISIBILITY', () => {
      const expected = {
        type: CHANGE_DESKTOP_SIDEBAR_VISIBILITY,
      };
      expect(changeDesktopSidebarVisibility()).toEqual(expected);
    });
  });

  describe('Change Mobile Sidebar Visibility', () => {
    it('has a type of CHANGE_MOBILE_SIDEBAR_VISIBILITY', () => {
      const expected = {
        type: CHANGE_MOBILE_SIDEBAR_VISIBILITY,
      };
      expect(changeMobileSidebarVisibility()).toEqual(expected);
    });
  });
});

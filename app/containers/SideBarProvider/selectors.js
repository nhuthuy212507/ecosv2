import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sideBarProvider state domain
 */

const selectSideBar = state => state.sidebar || initialState;

const makeSelectCollapse = () =>
  createSelector(
    selectSideBar,
    sidebarState => sidebarState.collapse,
  );

const makeSelectShow = () =>
  createSelector(
    selectSideBar,
    sidebarState => sidebarState.show,
  );

export { selectSideBar, makeSelectCollapse, makeSelectShow };

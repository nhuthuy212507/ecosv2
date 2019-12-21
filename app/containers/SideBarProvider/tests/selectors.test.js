import {
  selectSideBar,
  makeSelectCollapse,
  makeSelectShow,
} from '../selectors';

describe('selectSideBar', () => {
  it('should select the sidebar state', () => {
    const sidebarState = {
      collapse: false,
      show: false,
    };
    const mockedState = {
      sidebar: sidebarState,
    };
    expect(selectSideBar(mockedState)).toEqual(sidebarState);
  });
});

describe('makeSelectCollapse', () => {
  const collapseSelector = makeSelectCollapse();
  it('should select the is collapse', () => {
    const mockedState = {
      sidebar: {
        collapse: true,
      },
    };
    expect(collapseSelector(mockedState)).toEqual(true);
  });
});

describe('makeSelectShow', () => {
  const showSelector = makeSelectShow();
  it('should select the is show', () => {
    const mockedState = {
      sidebar: {
        show: true,
      },
    };
    expect(showSelector(mockedState)).toEqual(true);
  });
});

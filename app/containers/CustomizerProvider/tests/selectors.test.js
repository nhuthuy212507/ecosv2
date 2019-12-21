import { selectCustomizer, makeSelectTheme } from '../selectors';

describe('selectCustomizer', () => {
  it('should select the customizer state', () => {
    const customizerState = {
      isDarkTheme: false,
    };
    const mockedState = {
      customizer: customizerState,
    };
    expect(selectCustomizer(mockedState)).toEqual(customizerState);
  });
});

describe('makeSelectTheme', () => {
  const themeSelector = makeSelectTheme();
  it('should select the is dark theme', () => {
    const mockedState = {
      customizer: {
        isDarkTheme: true,
      },
    };
    expect(themeSelector(mockedState)).toEqual(true);
  });
});

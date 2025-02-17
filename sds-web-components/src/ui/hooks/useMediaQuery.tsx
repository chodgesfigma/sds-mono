const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
};

export function useMediaQuery() {
  const mediaQueryList = {
    isMobile: window.matchMedia(`(max-width: ${breakpoints.tablet - 1}px)`),
    isTablet: window.matchMedia(`(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`),
    isDesktop: window.matchMedia(`(min-width: ${breakpoints.desktop}px)`),
    isTabletUp: window.matchMedia(`(min-width: ${breakpoints.tablet}px)`),
    isTabletDown: window.matchMedia(`(max-width: ${breakpoints.desktop - 1}px)`),
  };

  return {
    isMobile: mediaQueryList.isMobile.matches,
    isTablet: mediaQueryList.isTablet.matches,
    isDesktop: mediaQueryList.isDesktop.matches,
    isTabletUp: mediaQueryList.isTabletUp.matches,
    isTabletDown: mediaQueryList.isTabletDown.matches,
  };
}

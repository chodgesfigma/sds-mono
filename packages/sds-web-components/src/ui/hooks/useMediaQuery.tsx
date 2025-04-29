type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'tabletDown';

const breakpoints = {
  tablet: 768,
  desktop: 1200,
};

const breakpointMapping: Record<Breakpoint, MediaQueryList> = {
  mobile: window.matchMedia(`(max-width: ${breakpoints.tablet - 1}px)`),
  tablet: window.matchMedia(`(min-width: ${breakpoints.tablet}px)`),
  desktop: window.matchMedia(`(min-width: ${breakpoints.desktop}px)`),
  tabletDown: window.matchMedia(`(max-width: ${breakpoints.desktop - 1}px)`),
};

export const useMediaQuery = (breakpoint: Breakpoint) => {
  return breakpointMapping[breakpoint];
};

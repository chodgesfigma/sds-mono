type Breakpoint = 'mobile' | 'tablet' | 'desktop';

const breakpointMapping: Record<Breakpoint, MediaQueryList> = {
  mobile: window.matchMedia(`max-width: 767px`),
  tablet: window.matchMedia(`min-width: 768px`),
  desktop: window.matchMedia(`min-width: 1200px`),
};

export const useMediaQuery = (breakpoint: Breakpoint) => {
  return breakpointMapping[breakpoint];
};

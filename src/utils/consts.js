export const MINIMUM_TIME_LIMIT = 0;
export const MAXIMUM_TIME_LIMIT = 359999;

export const COUNTDOWN_SIZES = ["small", "medium", "large"];

export const COUNTDOWN_PROPERTIES = {
  small: {
    circle: { cx: 80, cy: 80, r: 70, dasharray: 450 },
    wrapper: { width: 160, height: 160 },
  },
  medium: {
    circle: { cx: 90, cy: 90, r: 80, dasharray: 510 },
    wrapper: { width: 180, height: 180 },
  },
  large: {
    circle: { cx: 100, cy: 100, r: 90, dasharray: 570 },
    wrapper: { width: 200, height: 200 },
  },
};

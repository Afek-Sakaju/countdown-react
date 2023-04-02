import { COUNTDOWN_SIZES } from "./consts";

// eslint-disable-next-line import/prefer-default-export
export function isCompatibleSize(size) {
  return COUNTDOWN_SIZES.some((compatibleSize) => {
    return compatibleSize.toLowerCase() === size.toLowerCase();
  });
}


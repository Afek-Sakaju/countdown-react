import { COUNTDOWN_SIZES } from "./consts";

export function isCompatibleSize(size) {
  return COUNTDOWN_SIZES.some((compatibleSize) => {
    return compatibleSize.toLowerCase() === size.toLowerCase();
  });
}


import { COUNTDOWN_SIZES } from "./consts";

export function isCompatibleSize(size) {
  return Object.values(COUNTDOWN_SIZES).some((compatibleSize) => {
    return compatibleSize === size;
  });
}

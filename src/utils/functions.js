/**
 * Determines if the provided size is compatible with the given sizes object.
 * @param {string} size - The size to check compatibility for.
 * @param {object} sizesObject - The object containing the compatible sizes.
 * @returns {boolean} - True if the size is compatible, false otherwise.
 */
export function assertCompatibleSize(size, sizesObject) {
  return Object.values(sizesObject).some((compatibleSize) => {
    return compatibleSize === size;
  });
}

/*  assertCompatibleSize function accepts the string "size" and 
object "sizesObject" then returns true if its compatible, which means exists
in the sizesObject's values, if it doesn't, the function returns false */
export function assertCompatibleSize(size, sizesObject) {
  return Object.values(sizesObject).some((compatibleSize) => {
    return compatibleSize === size;
  });
}

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x > 0) {
        if (x === 1) return 1;

        let low = 0, high = x, res = 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (mid * mid === x) {
                return mid
            } else if (mid * mid > x) {
                high = mid - 1
            } else if (mid * mid < x) {
                low = mid + 1;
                res = mid
            }
        }
        return res
    }
    return 0
};
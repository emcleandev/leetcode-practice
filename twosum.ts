//* dynamic programming esq
/**
 * 
 * its about acknolwdgmenet of data already found out.
 */
function twoSum(nums: number[], target: number): number[] {
    var values = {}
    for (let index1 = 0; index1 < nums.length; index1++) {
        const element1 = nums[index1];
        const remainder = target - element1
        if (remainder in values) {
            return [values[remainder], index1]
        }
        else {
            values[element1] = index1
        }
    }
    return []

}

function twoSum0(nums: number[], target: number): number[] {
    for (let index1 = 0; index1 < nums.length; index1++) {
        const element1 = nums[index1];

        for (let index = index1 + 1; index < nums.length; index++) {
            const element2 = nums[index];

            if (element1 + element2 == target) {
                return [index1, index]
            }
        }
    }
    return []
}


twoSum([2, 7, 11, 15]
    , 9);
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let uniqueArray = [], map={};
        for(let i=0; i<nums.length; i++){
            if(!uniqueArray.includes(nums[i])){
                uniqueArray.push(nums[i])
            }
        }
        for(let i=0; i<uniqueArray.length; i++){
            map[uniqueArray[i]] = 0
        }
        for(let i=0; i<uniqueArray.length; i++){
            for(let j=0; j<nums.length; j++){
                if(uniqueArray[i] == nums[j]){
                    map[uniqueArray[i]] += 1
                }
            }
        }
        let tempCount = []
        for(let i=0; i<uniqueArray.length; i++){
            tempCount.push(map[uniqueArray[i]])
        }
        tempCount.sort((a,b)=>(b-a))
        let hightestCount = tempCount[0]
        for(let i=0; i<uniqueArray.length; i++){
            if(map[uniqueArray[i]] == hightestCount){
                return uniqueArray[i]
            }
        }
    }
}

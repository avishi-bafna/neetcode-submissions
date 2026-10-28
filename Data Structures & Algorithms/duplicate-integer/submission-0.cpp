class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        map<int, int> countMap;
        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            countMap[num]++;
            if (countMap[num] > 1) {
                return true;  
            }
        }
        return false;
    }
    // bool hasDuplicate(int nums[]){
    //     int n = nums.length();
    //     int test[n];
    //     for(int i=0; i<nums.size(); i++){
    //         if(test.includes(nums[i])){
    //             return true;
    //         } else {
    //             test.push(nums[i]);
    //         }
    //     }
    //     return false;
    // }
};
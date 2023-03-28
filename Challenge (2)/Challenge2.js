var missingNumber = function(nums) {

	if (nums[0] == 0 && nums.length == 1) {
	    return 1;
        }

	if(nums.length == 1) {
	    return nums[0]-1;
        }

	for (let n = 1; n <= nums.length + 1; n++) {
		if (nums.includes(0)) {
            		if (nums.indexOf(n) == -1) { 
                		return n;
            		}
        	}
		else
		    return 0;
    	}
};

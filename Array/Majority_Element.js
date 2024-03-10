

const MajorityElement= (arr) => {
    let n=ele.length;
    // let max=0;
    // let ind=-1
    // console.log(ele)
    // for(var i=0; i<ele.length; i++){
        // let c=0;
        // for( var j=0; j<ele.length; j++){
            // if(ele[i] == ele[j]){
                // c++;
            // }
            // console.log(c)
        // }
        // if(c>max){
            // max=c;
            // ind=i;
        // };
    // }
    // if(max>n/2){
        // console.log(ind[i]);
    //  
    // }else{
        // console.log("no")
    // }


    let maxCount = 0;
    let index = -1; // sentinels
     
    for(let i = 0; i < n; i++) 
    {
        let count = 0;
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        // Update maxCount if count of
        // current element is greater
        if (count > maxCount) 
        {
            maxCount = count;
            index = i;
        }
    }
 
    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}

let ele=[2,2,1,1,1,2,2]
// let ele=[1, 2, 3, 2, 2, 3, 2, 2, 2]

MajorityElement(ele)
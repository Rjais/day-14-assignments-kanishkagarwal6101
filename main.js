// Exercise 1 - Given code. Please modify it to get desired output
function fibStr(n, arr) {
    let first=arr[0]
    let second=arr[1]
    let newArr=[first,second]
    let tempStr=""
    while(n>2){
        tempStr = second+first
        newArr.push(tempStr)
        first=second;
        second=tempStr;
        n = n-2;
    }
    return newArr.toString();
}

// Exercise 2
function twoProduct(arr,n){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]*arr[j]==n){
                return [arr[i],arr[j]]
            }
        }
    }
    return undefined;
}


// Exercise 3
function multiplicativePersistence(num){
    let tempM = num;
    let mult = 1;
    let count =1;
    while(num>0||mult>9){
        if(num==0){
            num=mult;
            mult=1;
            count++;
        }
        mult*=parseInt(num%10)
        num = parseInt(num/10)
    }
    if(tempM>0&&tempM<10){
        return count-1;
    }else return count;
}
// Exercise 4
function additivePersistence(num){
    let temp = num;
    let sum=0;
    let count=1;
    while(num>0 || sum>9){
        if(num==0){
            num=sum;
            sum=0;
            count++;
        }
        sum+=parseInt(num%10);
        num = parseInt(num/10);
    }
    if(temp>0&&temp<10){
        return count-1;
    }else return count;
}

// Do not change the line below
module.exports = { fibStr, twoProduct, additivePersistence, multiplicativePersistence };

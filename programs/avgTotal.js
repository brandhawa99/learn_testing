
const values = (() =>{

    const getAvg = (arr) =>{
        const total = arr.reduce((total,val) =>{
            return total+val
        },0)
        return total/arr.length;
    }
    const getMin = (arr) =>{
        let min = arr[0]; 
        for(let i =1 ; i<arr.length;i++){
            if(arr[i] < min ){
                min = arr[i];
            }
        }
        return min;
    }

    const getMax = (arr) =>{
        let max = arr[0]; 
        for(let i =1 ; i<arr.length;i++){
            if(arr[i] > max ){
                max = arr[i];
            }
        }
        return max;
    }
    const getLen = (arr) =>{
        return arr.length;
    }

    const getValues = (arr) =>{
        const values = {
          average:null,
          min : null,
          max : null,
          length : null  
        }; 
        values.average = getAvg(arr);
        values.min = getMin(arr);
        values.max = getMax(arr);
        values.length = getLen(arr);
        
        return values;

    }

    return {
        getValues
    }

})()

module.exports = values;
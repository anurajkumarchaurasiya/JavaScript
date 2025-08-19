let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
     document.querySelector("#model").style.opacity = 1;
     document.querySelector("#model").style.top = "20%"; 

})


//we have an array countaining N number of element and we want to keep all positives ans remove the negetives.

let arr = [1,2,-2,-45,-6,4,6,2,6,-65,-67, 32,23,-1,-9,3,8,3];

let count=0;

for(let i=0;i<arr.length; i++){
    if(arr[i] < 0){
        count++;
    }
}

for(let j=1;j<=count;j++){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr.splice(i,1);
            break;
        }
    }
}

console.log(arr);



let arr1 = [
    {name: "Anuraj" , age: 21 , gender: "Male"},
    {name: "Raj" , age: 12 , gender: "Male"},
    {name: "Anurag" , age: 10 , gender: "Male"},
    {name: "Prince" , age: 30 , gender: "Male"},
    {name: "Rohit" , age: 9 , gender: "Male"},
    {name: "Raman" , age: 11 , gender: "Male"},
    {name: "Kamal takur" , age: 79 , gender: "Male"}
];

let arr2 = arr1.filter(function(val){
    return val.age>12;
});

console.log(arr2);

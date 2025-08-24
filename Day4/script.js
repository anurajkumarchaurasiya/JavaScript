let arr = [
    {dps:"https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://plus.unsplash.com/premium_photo-1703711334620-263078f1292f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1753701718038-93e51d416a4f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://images.unsplash.com/photo-1610358808300-29911abdd0d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img:"https://images.unsplash.com/photo-1741802856123-04d9f001270f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://images.unsplash.com/photo-1602083116190-cf95c848924a?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , img:"https://images.unsplash.com/photo-1591653979055-93eccb789bc2?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://plus.unsplash.com/premium_photo-1682582583283-93523bc5f91f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , img:"https://plus.unsplash.com/premium_photo-1670444332762-00cd6b51fe34?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://images.unsplash.com/photo-1753513290538-4ce2e3071fc0?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , img:"https://images.unsplash.com/photo-1660316478325-f16d1141f4a0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dps:"https://plus.unsplash.com/premium_photo-1755590247916-acad24e01d87?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , img:"https://plus.unsplash.com/premium_photo-1683121706204-a51f041b9cb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]

let clutter ="";

let grow = 0;

arr.forEach(function(elam,idx){
    clutter += `<div class="story">
        <img id="${idx}" src ="${elam.dps}" alt="">
    </div>` 
})
document.querySelector("#storiya").innerHTML = clutter;
document.querySelector("#storiya").addEventListener("click" , function(dets){
    // console.log(arr[dets.target.id])
        document.querySelector("#full-scr").style.display = "block";
        document.querySelector("#full-scr").style.backgroundImage= `url(${arr[dets.target.id].img})`
    
    setTimeout(function(){
    document.querySelector("#full-scr").style.display = " none";
    },2000);

    if(grow< 160){
        setInterval(function(){
            document.querySelector("#grow").style.width = `${grow}%`
            grow++
        },30)
    }else{
        grow = 0;
    }
})



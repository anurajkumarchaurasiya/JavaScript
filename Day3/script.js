let arr = [
    {name: "Anuraj Kumar" , img: "https://images.unsplash.com/photo-1617718860170-dd5d9f2ed43d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"},
    {name: "Rahul Kumar" , img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"},
    {name: "deepak Kumar" , img: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"},
    {name: "Anu Kumari" , img: "https://plus.unsplash.com/premium_photo-1670006626907-83c7d89e320f?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status:"Stranger"}
]

function print(){
    let clutter = "";
arr.forEach(function(val , index){
    clutter +=  `<div id="card">
            <div id="img">
            <img src = "${val.img}">
            </div>
            <h3>${val.name}</h3>
            <h5 id = "${val.status}">${val.status}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ratione!</p>
            <button class ="${val.status === "Stranger" ? "blue" : "red"}" id="${index}">${val.status === "Stranger" ? "Add Friend" : "Remove Friend"}</button>
        </div>`
})
 document.querySelector("#main").innerHTML = clutter;
}
print();
 document.querySelector("#main")
  .addEventListener("click", function(details){
        arr[details.target.id].status = "Friend";
        print();
  });
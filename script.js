let count = 0;
function call(){
    // Fetch not working so I am using data locally. Will update with API fetch once completed.
    const request = d3.json("data.json").then((response)=>{
        console.log(response);
        return response;
    }).then((data)=>{
        console.log(data);
        document.getElementById("itemName").textContent = `${data[count].name}`;
        document.getElementById("itemPic").src = `${data[count].image}`
        document.getElementById("itemInfo").textContent = `${data[count].description}`
        document.getElementById("itemPrice").textContent = `${data[count].price}`
    }).catch((error)=>{
        console.log("There was an error loading the data. Make sure you have a server set up to fetch the API.")
    }).finally(()=>{
        console.log("Request loaded successfully.")
    })
}
call()
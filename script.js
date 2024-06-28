// U14123683
let count = 0;
function call(count){ // Fetching data from API
    const request = fetch("https://course-api.com/react-store-products").then((response)=>{
        console.log(response);
        return response;
    }).then((data)=>{
        console.log(data);
        document.getElementById("itemName").textContent = `${data[count].name}`;
        document.getElementById("itemPic").src = `${data[count].image}`
        document.getElementById("itemPic").width = "500"
        document.getElementById("itemInfo").textContent = `${data[count].description}`
        document.getElementById("itemPrice").textContent = ("$" + `${data[count].price}`)
    }).catch((error)=>{ // Error Handling
        console.log("There was an error loading the data. Make sure you have a server set up to fetch the API.")
        // Loading State
        document.getElementById("loadState").textContent = "There was an error loading the data. Make sure you have a server set up to fetch the API."
    }).finally(()=>{
        console.log("Request loaded successfully.")
        // Loading State
        document.getElementById("loadState").textContent = ""
    })
}
// Next Button Functionality
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function(){
    count = (count < 21) ? ++count : 0; // Dynamic handling for data
    call(count);
})
// Back Button Functionality
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function(){
    count = (count > 0) ? --count : 21; // Dynamic handling for data
    call(count);
})
call(0)

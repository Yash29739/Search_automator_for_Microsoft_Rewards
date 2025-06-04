const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const countInput = document.getElementById("count")

startBtn.addEventListener("click",()=>{
    const count = parseInt(countInput.value,10);
    if(isNaN(count) || count < 1 || count > 50){
        alert("Please Enter a number between 1 to 50")
        return
    }
    alert("Search has Started! 😄")  

    chrome.runtime.sendMessage({action:"startSearch",count})
});


stopBtn.addEventListener("click",()=>{
    chrome.runtime.sendMessage({action:"stopSearch"})
    alert("Search has been stopped! 🥺")
})
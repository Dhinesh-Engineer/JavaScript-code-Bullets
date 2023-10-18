const inputBox = document.getElementById("input-box");
const container = document.querySelector(".list-container"); // Updated the selector

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        
        li.appendChild(span);
        container.appendChild(li);
    }
    inputBox.value = '';
    saveData()
}

container.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}

function show() {
    container.innerHTML = localStorage.getItem("data");
}

show();
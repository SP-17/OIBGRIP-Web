const inputBox = document.querySelector(".inputTask input");
const addButton = document.querySelector(".inputTask button");
const todoList = document.querySelector(".todoList");
const clearButton = document.querySelector(".totalTask button");

inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; 
    if(userEnteredValue.trim() != 0)
    { 
        addButton.classList.add("task");
    }else{
        addButton.classList.remove("task"); 
    }
}

showTasks(); 

addButton.onclick = ()=>
{ 
    let userEnteredValue = inputBox.value; 
    let getLocalStorageData = localStorage.getItem("New Task"); 
    if(getLocalStorageData == null)
    { 
        listArray = []; 
    }
    else
    {
        listArray = JSON.parse(getLocalStorageData);  
    }
    listArray.push(userEnteredValue); 
    localStorage.setItem("New Task", JSON.stringify(listArray)); 
    showTasks(); 
    addButton.classList.remove("task"); 
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Task");
    if(getLocalStorageData == null)
    {
        listArray = [];
    }
    else
    {
        listArray = JSON.parse(getLocalStorageData); 
    }
    const incompleteNumb = document.querySelector(".incomplete");
    incompleteNumb.textContent = listArray.length; 
    if(listArray.length > 0)
    { 
        clearButton.classList.add("task"); 
    }
    else
    {
        clearButton.classList.remove("task"); 
    }
    let newLiTag = "";
    listArray.forEach((element, index) => 
    {
        newLiTag += `<li>${element}<span class="del" onclick="deleteTask(${index})"><p>DELETE</p></span></li>`;
    });
    todoList.innerHTML = newLiTag; 
    inputBox.value = "";
}

function deleteTask(index)
{
    let getLocalStorageData = localStorage.getItem("New Task");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); 
    localStorage.setItem("New Task", JSON.stringify(listArray));
    showTasks(); 
}

clearButton.onclick = ()=>
{
    listArray = []; 
    localStorage.setItem("New Task", JSON.stringify(listArray)); 
    showTasks(); 
}

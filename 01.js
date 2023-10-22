const todoContainer = document.getElementById('todo-ul')

function submit() {
  
  const close = document.getElementsByClassName("close");
  const inputText = document.getElementById('input')
  if (inputText.value) {
    const todoContent = document.createElement('li')
    todoContent.innerText = inputText.value
    inputText.value = '';
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todoContent.append(span);
    todoContainer.append(todoContent)
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const li = this.parentElement;
        todoContainer.removeChild(li)
      }
    }
  } else {
    alert('Please fill the input area')
  }
}

function deleteItem() {
  const getItem = document.querySelectorAll('li')
  if(getItem.length > 0) {
    todoContainer.removeChild(getItem[getItem.length - 1])
  } else {
    alert('There is nothing to delete')
  }
} 


document.addEventListener("DOMContentLoaded", () => {
  // your code here
//get the text submitted in the form
const form = document.querySelector('form')
form.addEventListener('submit', (e) => addNewTask(e))

//add new task to todo list
function addNewTask(e) {
    e.preventDefault()
    //get text from form field
    let newTaskDescription = e.target.description.value
    //console.log(newTaskDescription)
    //get the ul from the DOM
    const ul = document.querySelector('#tasks')
    //create new <li>
    const li = document.createElement('li')
    //create <p>, fill with text from form
    const p = document.createElement('p')
    p.textContent = newTaskDescription 
    p.style.margin = '0px'

    //append to dom
    li.appendChild(p)
    ul.append(li)
}
});



// ask why the dashes dont work in e.target 
//let newTaskDescription = e.target.new-target-description.value
    
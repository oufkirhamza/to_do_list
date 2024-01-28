let addB = document.querySelector('.addC')
let main = document.querySelector('.main')
let columnD = document.createElement('div')
let index = 1
addB.addEventListener('click', () => {
    columnD = document.createElement('div')
    columnD.classList.add('column')
    columnD.innerHTML = '<div class="CoHead"><input class="pe-none titleCol" type="text"><div><i class="editCol fa-solid fa-pen"></i><i class="check d-none fa-solid fa-circle-check"></i><i class="addTask fa-solid fa-plus"></i><i class="deleteCol fa-solid fa-trash"></i></div></div>'
    let addTask = columnD.querySelector('.addTask')
    let checkCol = columnD.querySelector('.check')
    let editCol = columnD.querySelector('.editCol')
    let deleteCol = columnD.querySelector('.deleteCol')
    let titleCol = columnD.querySelector('.titleCol')

    main.appendChild(columnD)
    
    addTask.addEventListener('click', (e) => {
        let taskD = document.createElement('div')
        taskD.classList.add('contentD')
        taskD.setAttribute('draggable', "true")
        taskD.setAttribute('id', index)
        taskD.innerHTML = '<input class="taskToDo pe-none"  type="text"><i class="editTask fa-solid fa-pen"></i><i class="checkTask d-none d-none fa-solid fa-circle-check"></i><i class="deleteTask fa-solid fa-trash"></i><label for="colorTask"><i class="fa-solid fa-palette"></i></label><input class="d-none" type="color" class="colors" id="colorTask" value="#FFFFFF" />'
        let taskTodo = taskD.querySelector('.taskToDo')
        let ediTask = taskD.querySelector('.editTask')
        let checkTask = taskD.querySelector('.checkTask')
        let deleteTask = taskD.querySelector('.deleteTask')
        let iconColor = taskD.querySelector("#colorTask")
        let theColor = iconColor.value;
        ediTask.addEventListener('click', (e) => {
            ediTask.classList.add('d-none')
            checkTask.classList.remove('d-none')
            taskTodo.classList.remove('pe-none')
        })
        checkTask.addEventListener('click', () => {
            ediTask.classList.remove('d-none')
            checkTask.classList.add('d-none')
            taskTodo.classList.add('pe-none')
        })
        deleteTask.addEventListener('click', (e) => {
            e.target.parentElement.remove()
        })
        iconColor.addEventListener('click', (e) => {
            // console.log(e.target.previousSibling.previousSibling.previousSibling.previousSibling);
            e.target.previousSibling.previousSibling.previousSibling.previousSibling.style.background = theColor
        })
        e.target.parentElement.parentElement.parentElement.appendChild(taskD)
        index++
        taskD.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', e.target.id);
        })
    })
    //************************* */
    columnD.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    columnD.addEventListener('drop', (e) => {
        let data = e.dataTransfer.getData('text');
        let draggable = document.getElementById(data);
        // let destination = e.currentTarget
        // console.log(destination);
        console.log(draggable);
        e.currentTarget.appendChild(draggable);

        
    })
    //******************************* */
    deleteCol.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
    })
    editCol.addEventListener('click', (e) => {
        editCol.classList.add('d-none')
        checkCol.classList.remove('d-none')
        titleCol.classList.remove('pe-none')
        titleCol.click()


    })
    checkCol.addEventListener('click', () => {
        editCol.classList.remove('d-none')
        checkCol.classList.add('d-none')
        titleCol.classList.add('pe-none')

    })
})



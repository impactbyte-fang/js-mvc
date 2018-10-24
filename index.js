// VIEW
const todoListView = $("#todo-list")

// MODEL
const TODO_DATA = []

// CONTROLLER
class App {
  constructor(name) {
    this.name = name || ""
  }

  showTodos(data) {
    data.forEach((item, index) => {
      console.log(`${index + 1}: ${item.title}`)
    })
  }

  showTodosToView(data) {
    data.forEach((item, index) => {
      todoListView.append(`<li>${index + 1}: ${item.title}</li>`)
    })
  }

  addItem(data, item) {
    data.push(item)
  }
}

const app = new App("MyTodo")

app.addItem(TODO_DATA, {
  title: "Code a new app",
  completed: false
})
app.addItem(TODO_DATA, {
  title: "Design a car",
  completed: false
})

app.showTodos(TODO_DATA)
app.showTodosToView(TODO_DATA)

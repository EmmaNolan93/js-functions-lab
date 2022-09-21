fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json// Complete this code
     var todoTitles = [];
     const myobject = {
        userId:'Blank'
     }
     completed.forEach( (todo, index) => {
      if (todo.completed != true){
     const myobjects = {
        userId: todo.userId,
        titles: todo.title
     }
     todoTitles.push(myobjects)
      }
    })
    console.log(todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });
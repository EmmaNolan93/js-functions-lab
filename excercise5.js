fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json// Complete this code
     var todoTitles = [];
    /* completed.forEach( (todo, index) => {
      if (todo.completed != true){
     const myobject = {
        userId: todo.userId,
        titles: todo.title
     }
     todoTitles.push(myobject)
      }
    })*/
 todoTitles.push(completed.reduce((userId, titles, index, array)=> {
    if(titles.completed = true){
    return userId + "Title" + titles.titles + "UserId"+  titles.userId;
    }
}))
    console.log(todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });
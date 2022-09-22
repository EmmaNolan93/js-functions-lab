fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json// Complete this code
     const array1 = [];
     const initialValue = 0;
     completed.forEach( (todo, index) => {
      if (todo.completed = true){
      array1.push(1)
      }
    })
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
      console.log(sumWithInitial)
  })
  .catch(function(err) { 
    console.log(err);
  });
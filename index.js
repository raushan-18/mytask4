var todos = [];
var input = prompt("What would you like to add in your Todos list");
while(input !== "quit")
{
    if(input === "list"){
        console.log("!********!");
        todos.forEach(function(todo){
            console.log(todo);
        });
        console.log("!*********!");
        input = prompt("What would you like to add in your Todos list");
    }
    else if(input === "new"){
        var newTodo = prompt("Enter your New To do");
        todos.push(newTodo);
        console.log("Added todos !!");
        input = prompt("What would you like to add in your Todos list");
    }
    else{
        input = prompt("Please follow the instructions. What would you like to add in your Todos list");
    }
}
console.log("Ok, you quit the application !!")
    
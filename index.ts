#! /usr/bin/env node

import inquirer from "inquirer";


const todos = [];
let condition = true
while(condition){
const listtodo = await inquirer.prompt(
[
{
    message:"what add in your todos list",
    name:"todo",
    type:"input",

},
  {
    name:"addmore",
    type:"confirm",
    message:"do you want to add more in todo list ?",
    default:"false",
  },

]

);
todos.push(listtodo.todo);
condition  = listtodo.addmore;
console.log(todos);
};
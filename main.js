#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t WELL COME IN FAR6-TODO-LIST \n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.greenBright("Enter your new task :"),
        }
    ]);
    todolist.push(addTask.task);
    console.log(chalk.red(`${addTask.task} Task added  in Todo-list successfuly`));
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blueBright("Do you want to more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("you updated Todo-list :", todolist);

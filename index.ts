#! /usr/bin/env node

import inquirer from "inquirer";

const answers: {
    numberone: number,
    numbertwo: number,
    Operator: string,
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        massage: "kndly enter first no:"
    },
    {
        type: "number",
        name: "numbertwo",
        massage: "kndly enter  second no:"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["*", "+", "-", "/",],
        massage: "Select Operator:"
    }
]);

const {numberone, numbertwo, Operator} = answers;
if(numberone && numbertwo && Operator) {
    let result: number = 0;
    if(Operator === "+"){
        result= numberone + numbertwo
    } else   if(Operator === "-"){
        result= numberone - numbertwo
    }   if(Operator === "/"){
        result= numberone / numbertwo
    }   if(Operator === "*"){
        result= numberone * numbertwo
    }

    console.log("your result is:", result)
} else{
    console.log("kindly enter valid input")
}

console.log("the end");

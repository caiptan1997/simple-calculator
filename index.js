#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        massage: "kndly enter your first no:"
    },
    {
        type: "number",
        name: "numbertwo",
        massage: "kndly enter your second no:"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["*", "+", "-", "/",],
        massage: "Select Operator:"
    }
]);
const { numberone, numbertwo, Operator } = answers;
if (numberone && numbertwo && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = numberone + numbertwo;
    }
    else if (Operator === "-") {
        result = numberone - numbertwo;
    }
    if (Operator === "/") {
        result = numberone / numbertwo;
    }
    if (Operator === "*") {
        result = numberone * numbertwo;
    }
    console.log("your result is:", result);
}
else {
    console.log("kindly enter valid input");
}

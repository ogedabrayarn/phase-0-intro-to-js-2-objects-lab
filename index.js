// Write your solution in this file!
const employee = {
    name: "Chris",
    streetAddress: 239
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    newEmployee[key] = 'name';
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key] = 'name'
    delete employee.name;
    return employee;
}
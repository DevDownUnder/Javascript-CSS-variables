
//Select all '.controls' classes and 'input' elements from the DOM (HTML / linked CSS )
const inputs = document.querySelectorAll('.controls input');


function handleUpdate(){
    console.log(this.value)
}

//Add 'change' and 'mousemove' event listener functions to the inputs data
//variable.prototype (parameter => function)
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
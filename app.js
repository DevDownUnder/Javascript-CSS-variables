
//Select all '.controls' classes and 'input' elements from the DOM (HTML / linked CSS )
const inputs = document.querySelectorAll('.controls input');


function handleUpdate() {
    //suffix variable = (data-sizing element)
    //dataset will refer to any custom 'data-' elements created in the DOM (the .sizing specifies which one)
    //The || " " = Or nothing. Remove to see what happens when function is init
    const suffix = this.dataset.sizing || " ";
    //DOM.DOM element.Change Style.se property.input element + name class + value class + suffix variable
    //Select the name and value of the element and change sizing to the variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//Add 'change' and 'mousemove' event listener functions to the inputs data
//variable.prototype (parameter => function)
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//Select all '.controls' classes and 'input' elements from the DOM (HTML / linked CSS )
const inputs = document.querySelectorAll('.controls input');



function handleUpdate() {
    debugger;
    //dataset will refer to any custom 'data-' elements created in the DOM (the .sizing specifies which one)
    //The || " " = Or nothing. We only want the data-sizing "px" etc - no null or NaN
    const suffix = this.dataset.sizing || " ";

    //style.setProperty sets a new value for the CSS property
    //Parameters (name of property to be changed, to what value, + the value of suffix "px" for example)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//Add 'change' and 'mousemove' event listener on the input elements
//variable.for each (parameter => function ('action/event' , initialize this function))
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
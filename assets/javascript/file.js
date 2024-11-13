// Calculator
function calculation() {
    let screen = document.getElementById('screen');

    function AddScreen (val) {screen.value += val;} // Pushes selected values to the screen

    function AllClear() {screen.value = '';} // Clears screen

    function Clear() {screen.value = screen.value.slice(0, -1);} // Clears a value

    function Calculate() {screen.value = eval(screen.value)} // Calculate values on the screen

    return {
        AddScreen: AddScreen,
        AllClear: AllClear,
        Clear: Clear,
        Calculate: Calculate
    };
}

let cal = calculation(); // Module Pattern

// BUDGET CONTROLLER
var budgetController = (() => {
    //  Some code
    // this function is declared and immediately called ()
})();

// UI CONTROLLER
var UIController = (() => {
    // Some code
});

// GLOBAL APP CONTROLLER
var controller = ((budgetCtrl, UICtrl) => {

    var crtlAddItem = () => {
        // 1. Get the field input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the IU
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        console.log('inside');

    };

    // Add event to button press
    document.querySelector('.add__btn').addEventListener('click', crtlAddItem);

    // Event for enter keypress
    document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            console.log('Entar was pressed');
            crtlAddItem();
        }
    });

})(budgetController, UIController);

// BUDGET CONTROLLER
var budgetController = (() => {

    // this function is declared and immediately called ()
})();

// UI CONTROLLER
var UIController = (() => {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };

    return {
        getinput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: () => {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = ((budgetCtrl, UICtrl) => {

    var setupEventListeners = () => {
        var DOM = UIController.getDOMstrings();
        // Add event to button press
        document.querySelector(DOM.inputButton).addEventListener('click', crtlAddItem);

        // Event for enter keypress
        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                console.log('Entar was pressed');
                crtlAddItem();
            }
        });
    };

    var crtlAddItem = () => {
        // 1. Get the field input data
        var input = UIController.getinput();
        console.log(input);
        // 2. Add the item to the budget controller
        // 3. Add the item to the IU
        // 4. Calculate the budget
        // 5. Display the budget on the UI
    };

    return {
        init: () => {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
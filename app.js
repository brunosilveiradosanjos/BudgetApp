// var budgetController = (function () {
//     var x = 23;
//     var add = function (a) {
//         return x + a;
//     }

//     return {
//         publicTest: function (b) {
//             console.log(add(b));
//         }
//     }
// })();

var budgetController = (() => {
    var x = 23;

    var add = ((a) => {
        return x + a;
    });

    return {
        publicTest: (b) => {
            return add(b);
        }
    }
    // this function is declared and immediately called ()
})();

var UIController = (() => {
    // Some code
});

var controller = ((budgetCtrl, UICtrl) => {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: () => {
            console.log(z);
        }
    };
})(budgetController, UIController);
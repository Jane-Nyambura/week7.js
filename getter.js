class kioskCalc {
    constructor(fruit, quantity) {

        this.fruit = "Mango";
        this.quantity = 3;
        this.price = 15;

        this.fruit1 = "orange";
        this.quantity = 2;
        this.price = 30;

        // this.fruit2 = "banana";
        // this.quantity = 4;
        // this.price = 40;
    }
    getTotalCost() {
        return `${this.fruit}${this.quantity} for KES ${15*this.quantity}`;
    }
    getTotalCost() {
            return `${this.fruit1} ${this.quantity} for KES ${30*this.quantity}`;
        }
        // getTotalCost() {
        //     return `${this.fruit2} ${this.quantity} for KES ${40*this.quantity}`;
        // }
}
var fruit = new kioskCalc("Mango", 3);
console.log(fruit.getTotalCost());

var fruit = new kioskCalc("orange", 2);
console.log(fruit1.getTotalCost());

// var fruit = new kioskCalc("banana", 4);
// console.log(fruit2.getTotalCost());
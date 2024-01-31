class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = 0;
    }

    logDetails() {
        console.log(`${this.name} - Price: $${this.price}, Stock: ${this.stock}, Sold: ${this.sold}`);
    }

    buy() {
        if (this.stock > 0) {
            console.log("Buying... " + this.name);
            this.sold++;
            this.stock--;
            console.log(`${this.name} : Sold: ${this.sold} : Stock left: ${this.stock} \n`);
        } else {
            console.log("Out of stock");
        }
    }

    return() {
        if (this.sold > 0) {
            console.log("==Returning item: " + this.name);
            this.sold--;
            this.stock++;
            console.log(`${this.name} : Stock left: ${this.stock} :  Sold: ${this.sold} \n`);
        } else {
            console.log("No items to return");
        }
    }
    salesSummary() {
        return `${this.name} - Total sold: ${this.sold}`;
    }
}


const item1 = new Product('Palmolive', 10, 5);
const item2 = new Product('Choco Mucho', 20, 8);
const item3 = new Product('Wafer', 15, 3);

console.log(item1);
console.log(item2);
console.log(item3);
console.log('\n');
console.log('=============Buying 1st item============');
item1.buy();
item1.buy();
item1.buy();
item1.return();


console.log('=============Buying 2nd item============');
item2.buy();
item2.buy();
item2.return();
item2.return();


console.log('=============Buying 3rd item============');
item3.return();
item3.return();
item3.return();



console.log('\nSales Summary:');
console.log(item1.salesSummary());
console.log(item2.salesSummary());
console.log(item3.salesSummary());

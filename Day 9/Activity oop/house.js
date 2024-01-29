class House {
    constructor(location, price, lot, type) {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.discount = (type === 'Pre-selling') ? 0.2 : 0.05;
        this.totalPrice = this.totalPrice();
        this.show_all();
    }

    totalPrice() {
        return this.price * (1 - this.discount);
    }

    show_all() {
        console.log(`Location: ${this.location}`);
        console.log(`Price: ${this.price}`);
        console.log(`Lot: ${this.lot}`);
        console.log(`Type: ${this.type}`);
        console.log(`Discount: ${this.discount}`);
        console.log(`Total Price: ${this.totalPrice}\n`);
    }
}


const house1 = new House('Pangasinan', 1500000, '100sqm', 'Pre-selling');
const house2 = new House('Cavite', 1000000, '150sqm', 'Ready for Occupancy');
const house3 = new House('BGC Taguig', 1200000, '120sqm', 'Pre-selling');
const house4 = new House('Davao', 800000, '80sqm', 'Ready for Occupancy');
const house5 = new House('Baguio', 2000000, '200sqm', 'Pre-selling');

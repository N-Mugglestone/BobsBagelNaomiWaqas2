class Basket {
    constructor(maxCapacity = 10) {
        this.items = []
        this.max = maxCapacity;
        this.counter = 0;
        this.maxSales = 4;
    }
    checkBasketEmpty() {
        if (this.items.length === 0) {
            return true;
        } else {
            return false;
        }

    }

    addItems(str) {
        if (this.items.length === this.max) {
            return new Error('Basket full');
        }
        this.items.push(str)
        this.counter++
    }

    removeItems(item) {
        //this.items.pop()
        try {
            if (!this.items.includes(item)) throw new Error('Item not in basket')
            this.items = this.items.filter(thing => thing != item)
        }
        catch (err) {
            console.log(err.message);
            return err
        }
    }

    isBasketFull() {
        return this.items.length === this.max ? true : false;
    }

    isSalesReached() {
        if (this.counter >= this.maxSales)
            return new Basket(this.max + 1)
    }

}


module.exports = Basket;


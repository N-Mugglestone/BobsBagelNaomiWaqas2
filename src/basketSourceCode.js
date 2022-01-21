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
        try {
            if (this.items.length === this.max) throw new Error('Baske0t full')
            if (this.item.includes(str)) throw new Error('Item already in basket')
            this.items.push(str)
            this.counter++
        }
        catch (err) {
            console.log(err.message)
            return err
        }


    }

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


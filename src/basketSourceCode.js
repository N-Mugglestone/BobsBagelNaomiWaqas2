class Basket {
    constructor(){
        this.items = []
    }
    checkBasketEmpty(){
        if(this.items.length === 0){
            console.log(this.items, `Items is in line 7`);
            return true; 
        } else {
            return false;
        }

    }

    addItems(str){
        this.items.push(str)
    }

    removeItems(){


    }

}


module.exports = Basket;

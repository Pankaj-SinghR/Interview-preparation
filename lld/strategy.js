
class Payment {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    processPayment() {
        console.log("process payment", this.strategy.name)
        this.strategy.pay() // so, each payment will mantain their own pay function
        // this is strategy pattern, which mean code should be open for extensions and close for 
        // modification
    }
}


// solid principle says, 
//1: S - single responsibility (each class should be seperate on it's own)
//2: O - open/closed resp (classed should be open for extension but close for modification)

class UPIPayment {
    name = "UPIPayment"
    pay() {
        console.log("This is UPI payment")
    }
}

class CardPayment {
    name = "CardPayment"
    pay() {
        console.log("This is card payment");
    }
}

// paypal option

payment = new Payment(new UPIPayment)
payment.processPayment()

payment.setStrategy(new CardPayment)
payment.processPayment()

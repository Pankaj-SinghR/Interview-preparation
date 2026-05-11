// observer pattern 
// if one thing changes, all the other things that depend 
// on it will be notified and updated automatically

class EmailNotify {
    update(order) {
        console.log("Email sent for order", order.id)
    }
}

class SMSNotify {
    update(order) {
        console.log("SMS sent for order", order.id)
    }
}

class Order {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    // private function
    sentNotification(order) {
        for (let ob of this.observers) {
            ob.update(order)
        }
    }

    placeOrder(order) {
        console.log("Order has been placed: ", order.id)
        this.sentNotification(order)
    }
}

const orderVal = {
    id: "12313"
}

const or = new Order()
or.subscribe(new EmailNotify())
or.subscribe(new SMSNotify())
or.placeOrder(orderVal)

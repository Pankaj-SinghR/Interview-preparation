// factory method is for creating objects without specifying the exact class of object
// idea is to seperate the object creation from the object usage


class Car {
    constructor() {
        this.type = 'car';
    }
    printType() {
        console.log(this.type);
    }
}

class Truck {
    constructor() {
        this.type = 'truck';
    }
    printType() {
        console.log(this.type);
    }
}

class Client {
    constructor(id) {
        if (id === 'car') {
            this.vehicle = new Car();
        } else if (id === 'truck') {
            this.vehicle = new Truck();
        } else {
            throw new Error('Invalid vehicle type');
        }
    }
    printVehicleType() {
        this.vehicle.printType();
    }
}

const client1 = new Client('car');
client1.printVehicleType(); // Output: car

const client2 = new Client('truck');
client2.printVehicleType(); // Output: truck

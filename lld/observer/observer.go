package main

// observer pattern

type Ord struct {
	id string
}

type Order struct {
	listOfObserver []Observer
}

func (o *Order) Place(order Ord) {
	println("Order has been placed", order.id)
	for i := 0; i < len(o.listOfObserver); i++ {
		service := o.listOfObserver[i]
		service.Update(order)
	}
}

func (o *Order) Subscribe(observer Observer) {
	println("subscriber added")
	o.listOfObserver = append(o.listOfObserver, observer)
}

type Observer interface {
	Update(Ord)
}

type EmailObserver struct {
}

func NewEmailObserver() *EmailObserver {
	return &EmailObserver{}
}

func (e *EmailObserver) Update(order Ord) {
	println("Email notification for ", order.id)
}

type SMSObserver struct {
}

func (s *SMSObserver) Update(order Ord) {
	println("SMS notification for ", order.id)
}

func NewSMSObserver() *SMSObserver {
	return &SMSObserver{}
}

func main() {
	newOrder := Order{}
	ordDetail := Ord{id: "xyz"}
	newOrder.Subscribe(NewEmailObserver())
	newOrder.Subscribe(NewSMSObserver())
	newOrder.Place(ordDetail)
}

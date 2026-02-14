package main

type PaymentMethod interface {
	Pay()
}

type PaymentProcessor struct {
	method PaymentMethod
}

func (pp PaymentProcessor) ProcessPayment() {
	pp.method.Pay()
}

func NewProcessPayment(pm PaymentMethod) PaymentProcessor {
	return PaymentProcessor{
		method: pm,
	}
}

type UPIPayment struct {
	name string
}

func NewUPIPayment(name string) UPIPayment {
	return UPIPayment{
		name: name,
	}
}

func (upi UPIPayment) Pay() {
	println(upi.name)
	println("This is UPI Payment")
}

type CardPayment struct {
	name string
}

func NewCardPayment(name string) CardPayment {
	return CardPayment{
		name: name,
	}
}

func (cc CardPayment) Pay() {
	println(cc.name)
	println("This is Card Payment")
}

func main() {
	pp := NewProcessPayment(NewUPIPayment("UPI"))
	pp.ProcessPayment()
	pp.method = NewCardPayment("Card")
	pp.ProcessPayment()
}

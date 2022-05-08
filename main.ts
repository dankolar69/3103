radio.setGroup(33)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
control.deviceSerialNumber()
let start = false
// pokud je zahájeno hlasování a stisknete např. tlačítko A microbit ukáže string "A", v tuto chvíli můžete ještě změnit hlas, pro potvrzení musíte zmáčknout tlačítko ještě jednou,bez změny hlasu to fungovalo líp:(
// pokud přijme number 3, server zaznamenal hlas
// stisknutím tlačítka A hlasuji pro A
// stisknutím tlačítka B hlasuji pro B
// stisknutím tlačítka AB hlasuji pro C
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let start: boolean;
    if (receivedNumber == 1) {
        basic.showString("S", 1500)
        start = true
    }
    
    if (receivedNumber == 2) {
        basic.showString("X", 1500)
        start = false
    }
    
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Yes, 1500)
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let start: boolean;
    if (start == true) {
        basic.showString("A")
        if (input.buttonIsPressed(Button.A)) {
            radio.sendValue("answer", 1)
            start = false
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let start: boolean;
    if (start == true) {
        basic.showString("B")
        if (input.buttonIsPressed(Button.B)) {
            radio.sendValue("answer", 2)
            start = false
        }
        
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    let start: boolean;
    if (start == true) {
        basic.showString("C")
        if (input.buttonIsPressed(Button.AB)) {
            radio.sendValue("answer", 1)
            start = false
        }
        
    }
    
})

radio.setGroup(33)
let start = false
function answer(odpoved: number) {
    
    radio.sendValue("answer", odpoved)
    if (input.buttonIsPressed(Button.A)) {
        answer(65)
        RadioPacketProperty.SerialNumber
        start = false
    }
    
    if (input.buttonIsPressed(Button.B)) {
        answer(66)
        RadioPacketProperty.SerialNumber
        start = false
    }
    
    if (input.pinIsPressed(TouchPin.P0)) {
        answer(67)
        RadioPacketProperty.SerialNumber
        start = false
    }
    
}

radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let start: boolean;
    if (receivedNumber == 1) {
        basic.showString("S")
        start = true
    }
    
    if (receivedNumber == 2) {
        basic.showString("X")
        start = false
    }
    
})

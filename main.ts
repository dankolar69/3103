radio.setGroup(33)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1) {
        basic.showString("S")
    }
    
})
function answer(odpoved: number) {
    radio.sendValue("answer", odpoved)
}

if (input.buttonIsPressed(Button.A)) {
    answer(65)
}

if (input.buttonIsPressed(Button.B)) {
    answer(66)
}

if (input.pinIsPressed(TouchPin.P0)) {
    answer(67)
}


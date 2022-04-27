radio.set_group(33)
start = False

def answer(odpoved):
    global start
    radio.send_value("answer", odpoved)

    if input.button_is_pressed(Button.A):
        answer(65)
        RadioPacketProperty.SERIAL_NUMBER
        start = False

    if input.button_is_pressed(Button.B):
        answer(66)
        RadioPacketProperty.SERIAL_NUMBER
        start = False

    if input.pin_is_pressed(TouchPin.P0):
        answer(67)
        RadioPacketProperty.SERIAL_NUMBER
        start = False
    

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.show_string("S")
        start = True

    if receivedNumber == 2:
        basic.show_string("X")
        start = False
radio.on_received_number(on_received_number)



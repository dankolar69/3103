radio.set_group(33)


def answer(odpoved):
    radio.send_value("answer", odpoved)
    answer = False

    if input.button_is_pressed(Button.A):
        answer(65)
        

    if input.button_is_pressed(Button.B):
        answer(66)

    if input.pin_is_pressed(TouchPin.P0):
        answer(67)

def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.show_string("S")
        answer == True
    if receivedNumber == 2:
        basic.show_string("X")
        anwer == False
    radio.on_received_number(on_received_number)




radio.set_group(33)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)
control.device_serial_number()
start = False

#pokud je zahájeno hlasování a stisknete např. tlačítko A microbit ukáže string "A", v tuto chvíli můžete ještě změnit hlas, pro potvrzení musíte zmáčknout tlačítko ještě jednou
#pokud přijme number 3, server zaznamenal hlas
#stisknutím tlačítka A hlasuji pro A
#stisknutím tlačítka B hlasuji pro B
#stisknutím tlačítka AB hlasuji pro C


def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.show_string("S",1500)
        start = True

    if receivedNumber == 2:
        basic.show_string("X",1500)
        start = False

    if receivedNumber == 3:
        basic.show_icon(IconNames.YES,1500)
radio.on_received_number(on_received_number)




def on_button_pressed_a():
    if start == True:
        basic.show_string("A")
        if input.button_is_pressed(Button.A):
            radio.send_value("answer", 1)
            start = False
            
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if start == True:
        basic.show_string("B")
        if input.button_is_pressed(Button.B):
            radio.send_value("answer", 2)
            start = False
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    if start == True:
        basic.show_string("C")
        if input.button_is_pressed(Button.AB):
            radio.send_value("answer", 1)
            start = False
input.on_button_pressed(Button.AB, on_button_pressed_ab)






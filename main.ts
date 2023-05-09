input.onButtonPressed(Button.A, function () {
    code += 1
    start += 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    code += 0
    start += 0
})
input.onButtonPressed(Button.B, function () {
    code += 1
    start += 0
})
let start = 1
let code = 0
basic.forever(function () {
    if (code == 1 || start == 1) {
        basic.showString("c")
    } else if (code == 0 || start == 0) {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        code += 1
    }
})

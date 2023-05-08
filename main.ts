input.onButtonPressed(Button.A, function () {
    code += 0
    start += 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    code += 0
    start += 0
})
input.onButtonPressed(Button.B, function () {
    code += 0
    start += 0
})
let start = 1
let code = 1
basic.forever(function () {
    if (code == 1 || start == 1) {
        basic.showString("c")
    } else if (code == 0 || start == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

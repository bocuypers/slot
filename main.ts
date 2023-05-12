input.onButtonPressed(Button.A, function () {
    code += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        code += 1
    }
})
basic.forever(function () {
    if (code >= 1) {
        basic.clearScreen()
    } else {
        basic.showString("c")
    }
})
basic.forever(function () {
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (code == 0) {
        basic.showString("c")
    }
})

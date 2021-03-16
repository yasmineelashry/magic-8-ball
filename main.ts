let NUMBER = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    NUMBER = randint(1, 3)
    if (NUMBER == 3) {
        basic.showIcon(IconNames.Heart)
    } else if (NUMBER == 2) {
        basic.showIcon(IconNames.Duck)
    }
})
basic.forever(function () {
	
})

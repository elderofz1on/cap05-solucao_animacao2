input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let índiceY = 0; índiceY <= 4; índiceY++) {
            for (let índiceX = 0; índiceX <= 4; índiceX++) {
                led.plotBrightness(índiceX, índiceY, 255)
                basic.pause(30)
            }
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})

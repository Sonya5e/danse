basic.forever(function () {
    led.toggle(0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.toggle(0, 0)
})

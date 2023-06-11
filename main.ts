input.onButtonPressed(Button.A, function () {
    angle = Math.max(0, angle - 5)
    hackbitmotors.Servo(hackbitmotors.Servos.S1, angle)
    led.stopAnimation()
})
input.onButtonPressed(Button.AB, function () {
    strip.showBarGraph(0, 255)
})
input.onButtonPressed(Button.B, function () {
    angle = Math.min(180, angle + 5)
    hackbitmotors.Servo(hackbitmotors.Servos.S1, angle)
    led.stopAnimation()
})
let strip: neopixel.Strip = null
let angle = 0
angle = 90
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
hackbitmotors.Servo(hackbitmotors.Servos.S1, angle)
basic.forever(function () {
    basic.showNumber(angle)
})

basic.forever(function () {
    if (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14) < 10) {
        led.toggle(0, 0)
    }
})

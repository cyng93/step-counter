input.onGesture(Gesture.Shake, function () {
    步數 += 1
    led.stopAnimation()
})
let 步數 = 0
basic.forever(function () {
    basic.showNumber(步數)
})

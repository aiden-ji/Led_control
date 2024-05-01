let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x += -1
    led.unplot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.plot(x, y)
    x += 1
    if (x == 5) {
        x = 0
        y += 1
    }
})

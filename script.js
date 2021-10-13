function game() {
    let randNumber = parseInt(Math.random() * (100 - 1) + 1)
    let attemp = 10
    tryingWin()

    function tryingWin() {
        let userNumber = prompt('введите число')

        function checkNumber() {
            if (parseFloat(userNumber)) {
                return Number(userNumber)
            } else {
                userNumber = prompt('Ошибка введите число заново ')
                checkNumber()
            }
        }
        userNumber = checkNumber()
        if (userNumber > randNumber) {
            alert('ваше число больше загадонного ')
        } else if (userNumber < randNumber) {
            alert('ваше число меньше загадонного ')
        } else {
            alert('ты победил  ')
            return
        }
        if (attemp == 1) {
            alert("вы проиграли")
            if (confirm('хотите ли играть заново?')) {
                game()
            } else {
                return
            }
        }
        alert('у вас осталось ' + (--attemp) + " попыток")
        tryingWin()
    }
}
game()
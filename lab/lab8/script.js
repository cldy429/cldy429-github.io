// 1-р бодлогоны javascript
function main1() {
    // Step 1: Хэрэглэгчээс оруулсан тоог оруулна.
    const number = parseInt(document.getElementById('numberInput').value);
    
    // Step 2: Цифрүүдийн нийлбэрийг олно.
    const sum = sumOfDigits(number);
    
    // Step 3: Нийлбэрийг палиндром эсэхийг шалгана.
    if (isPalindrome(sum)) {
        resultMessage = "Цифрүүдийн нийлбэр бол палиндром!";
    } else {
        resultMessage = "Цифрүүдийн нийлбэр палиндром биш.";
    }

    // Step 4: Үр дүнг хэвлэнэ
    document.getElementById('result1').textContent = resultMessage;
}

// Цифрүүдийн нийлбэрийг олно.
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Тоог палиндром эсэхийг шалгана.
function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

// 2-р бодлогоны javascript
function main2() {
    // Step 1: Хэрэглэгчээс өгсөн тоог аваад Float болгоно
    const distance = parseFloat(document.getElementById('distanceInput').value);

    // Step 2: Хугацааг олно
    const speeddiff = 7;
    let hour = distance / speeddiff;

    // Step 3: Хугацаагаа минут болон секунд руу хөрвүүлнэ
    let tminutes = hour * 60; // Минут руу хөрвүүлэх
    let minutes = Math.floor(tminutes); // Бүхэл минутыг авах
    let seconds = Math.floor((tminutes - minutes) * 60); // Бүхэл минутыг хасаад секунд руу шилжүүлэх

    // Step 4: Үр дүнг хэвлэх
    document.getElementById('result2').textContent = 
        `Чоно туулайг ${minutes} минут ${seconds} секундэд барина.`;
}

// 3-р бодлогоны javascript
function main3() {
    const doorNumber = parseInt(document.getElementById('doorInput').value);

    // Орцыг тооцоолох (1-3)
    const orts = Math.floor(doorNumber / 36) + 1;
    
    // Давхрыг тооцоолох (1-9)
    const davhar = Math.ceil((doorNumber - (orts - 1) * 36) / 4);
    
    // Хаалгыг олох (1-4)
    const door = doorNumber - (orts - 1) * 36 - (davhar - 1) * 4;

    // Үр дүнг хэвлэх
    document.getElementById('result3').textContent = `${orts}-р орц, ${davhar}-р давхар, ${door}-р хаалга`;
}

// 4-р бодлогоны javascript

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findLCM() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    const num5 = parseInt(document.getElementById('num5').value);

    let rlcm = lcm(num1, num2);
    rlcm = lcm(rlcm, num3);
    rlcm = lcm(rlcm, num4);
    rlcm = lcm(rlcm, num5);

    document.getElementById('result4').textContent = rlcm;
}


// 5-р бодлогоны javascript
function exerciseFive() {
    const number = parseFloat(document.getElementById('numInput').value);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let result;

    if (hours >= 6 && hours < 18) {
        result = number * number;
    } else {
        result = Math.sqrt(number);
    }

    document.getElementById('result5').textContent = result;
}
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

// Цифрүүдийн нийлбэрийг олно.
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Main функц, button дарахад ажиллана.
function checkSumOfDigits() {
    // Step 1: Хэрэглэгчээс оруулсан тоог оруулна.
    const number = parseInt(document.getElementById('numberInput').value);
    
    // Step 2: Цифрүүдийн нийлбэрийг олно.
    const sum = sumOfDigits(number);
    
    // Step 3: Нийлбэрийг палиндром эсэхийг шалгана.
    const resultMessage = isPalindrome(sum)
        ? `Цифрүүдийн нийлбэр (${sum}) бол палиндром!`
        : `Цифрүүдийн нийлбэр (${sum}) бол палиндром биш.`;

    // Step 4: Үр дүнг хэвлэнэ
    document.getElementById('result1').textContent = resultMessage;
}


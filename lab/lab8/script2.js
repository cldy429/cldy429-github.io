function main2() {
    // Step 1: Хэрэглэгчээс өгсөн тоог аваад Float болгоно
    const distance = parseFloat(document.getElementById('distanceInput').value);

    // Step 2: Хугацааг олно
    const speeddiff = 7;
    let timeInHours = distance / speeddiff;

    // Step 3: Хугацаагаа минут болон секунд руу хөрвүүлнэ
    let timeInMinutes = timeInHours * 60; // Минут руу хөрвүүлэх
    let minutes = Math.floor(timeInMinutes); // Бүхэл минутыг авах
    let seconds = Math.round((timeInMinutes - minutes) * 60); // Бүхэл минутыг хасаад секунд руу шилжүүлэх

    // Step 4: Үр дүнг хэвлэх
    document.getElementById('result2').textContent = 
        `Чоно туулайг ${minutes} минут ${seconds} секундэд барина.`;
}

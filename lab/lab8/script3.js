function findDoor() {
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

// Обновление значений ползунков
document.getElementById('cpu-slider').addEventListener('input', function() {
    const cpuValue = this.value;
    document.getElementById('cpu-value').textContent = `${cpuValue} ядра`;
    updateTotalPrice();
});

document.getElementById('ram-slider').addEventListener('input', function() {
    const ramValue = this.value;
    document.getElementById('ram-value').textContent = `${ramValue} ГБ`;
    updateTotalPrice();
});

document.getElementById('disk-slider').addEventListener('input', function() {
    const diskOptions = [
        '15 ГБ',  
        '35 ГБ',
        '50 ГБ',  
        '80 ГБ',  
        '100 ГБ',  

    ];
    document.getElementById('disk-value').textContent = diskOptions[this.value - 1];
    updateTotalPrice();
});

document.getElementById('network-slider').addEventListener('input', function() {
    const networkOptions = [
            '50 Мбит/с',
            '100 Мбит/с',
            '150 Мбит/с'
        ];
    document.getElementById('network-value').textContent = networkOptions[this.value - 1];
    updateTotalPrice();
});

// Расчет итоговой ценыыы
function updateTotalPrice() {
    const cpuPrice = parseInt(document.getElementById('cpu-slider').value) * 2.5;
    const ramPrice = parseInt(document.getElementById('ram-slider').value) * 0.75;
    const diskPrice = parseInt(document.getElementById('disk-slider').value) * 5;
    const networkPrice = parseInt(document.getElementById('network-slider').value) * 3;
    
    const total = cpuPrice + ramPrice + diskPrice + networkPrice;
    document.getElementById('total-price').textContent = `$${total}/час`;
}


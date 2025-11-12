function readPassportData() {
    // 1. Считываем данные с помощью ID
    const lastName = document.getElementById('p-lastName').innerText;
    const firstName = document.getElementById('p-firstName').innerText;
    
    // 2. Считываем данные, как требовалось в задании (через TagName и ChildNodes)
    // * Предполагая, что <p> с годом рождения - это третий элемент <p> на странице (индекс 2) *
    const birthYearFull = document.getElementsByTagName('p')[2].childNodes[1].innerText;
    const birthYear = birthYearFull.substring(0, 4); // Получаем только год

    // 3. Выводим результат в DIV с id="read-result"
    const resultDiv = document.getElementById('read-result');
    if (resultDiv) {
        resultDiv.innerHTML = `
            Считанные данные:<br>
            Фамилия (ID): **${lastName}**<br>
            Имя (ID): **${firstName}**<br>
            Год рождения (TagName/ChildNodes): **${birthYear}**
        `;
    }
}

function changeToLatin() {
    // Находим элементы по ID и меняем их внутренний текст
    const lastNameElement = document.getElementById('p-lastName');
    const firstNameElement = document.getElementById('p-firstName');
    const birthYearElement = document.getElementById('p-birthYear');
    
    // Проверяем, что элементы существуют (на случай, если функция вызвана на другой странице)
    if (lastNameElement && firstNameElement && birthYearElement) {
        lastNameElement.innerText = 'Kushmanova';
        firstNameElement.innerText = 'Viktoriia';
        // Год рождения меняем на другое число (латинские символы)
        birthYearElement.innerText = '2006';
        alert('Данные успешно изменены на латиницу!');
    }
}

function solveAlgorithm() {
    // 1. Получаем значения из полей ввода и преобразуем их в числа
    const numA = parseFloat(document.getElementById('val1').value);
    const numB = parseFloat(document.getElementById('val2').value);
    const numC = parseFloat(document.getElementById('val3').value);
    const resultElement = document.getElementById('algorithm-result');

    // Проверка на корректность ввода
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        resultElement.textContent = 'Пожалуйста, введите корректные числа.';
        return;
    }

    // 2. Логика решения задачи (Вам нужно заменить ее на свою!)
    const maxNumber = Math.max(numA, numB, numC);

    // 3. Выводим результат
    resultElement.textContent = maxNumber;
}

function solveAlgorithm() {
    const inputX = parseFloat(document.getElementById('input_x').value);
    const inputY = parseFloat(document.getElementById('input_y').value);
    const resultElement = document.getElementById('algorithm-result');
    resultElement.textContent = '';
    resultElement.style.color = '#cc0000';
    if (isNaN(inputX) || isNaN(inputY)) {
        resultElement.textContent = 'Ошибка ввода: Пожалуйста, введите корректные числа.';
        return;
    }
    const product = inputX * inputY;

    if (product === 0) {
        // Деление на ноль: функция не определена
        resultElement.textContent = 'Ошибка: Функция не определена, так как X*Y = 0.';
        return;
    }
    const Z = 1 / product;
    resultElement.textContent = Z.toFixed(6);
    resultElement.style.color = '#007bff';
    }
    
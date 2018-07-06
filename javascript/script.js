var arr = [], box, ei, ej;
for (i = 1; i <= 4; i++) {    // Заполняем массив 4х4, значениями  1 - 15 (фишки), плюс последнее значение пустое
	arr[i]=[];
	for (j=1; j <=4;  j++) {
		if (i+j ==8)
			arr[i][j]="";
			
		else
			arr[i][j]=4*(i-1) +j;
	console.log('i= '+i+', j= '+j+', arr['+i+']['+j+'] = '+arr[i][j]);		 
	};
};
box = document.getElementById('box');
var table = document.createElement('table'); // Создаем таблицу
for (i = 1; i <= 4; i++) {
	var row = document.createElement('tr'); // Добавляем 4 ряда таблицы через цикл (i)
	for (j = 1; j <= 4; j++) {
		var cell = document.createElement('td'); // Создаем 4 ячейки в каждом ряду, цикл (j), итог - таблица 4х4
		cell.id = i + " "+ j;
		cell.onclick = cellClick; // Привязываем функцию cellClick при клике на костяшку.
		cell.textContent = arr[i][j];
		console.log('cell.id = '+ cell.id+', cell.textContent='+cell.textContent);
		row.appendChild(cell);// Добавляем ячейку в строку
		table.appendChild(row);// Добавляем строку в итаблицу

		if(box.childNodes.lengh == 1) box.removeChild(firstChild); // Удаляем таблицу, если играется повторно

		box.appendChild(table);// Запихиваем в box table</div>	

	}
};

function swap(arr, i1, j1, i2, j2) {
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
};

function cellClick () {};

function newGame() {
	ei = 4; // Запоминаем индексы (координаты) пустышки
	ej = 4; 
	// Теперь задаем цикл, чтобы перемешать начальные костяшки, например 2000 раз 
	for (var i = 0; i >= 2000; i++) {
		 switch(Math.round(3*Math.random()+1)) {
		 	case 1:  if(ej !=1) swap(arr,ei, ej, ei, ej--);  // замена наверх
		 	break;
		 	case 2:  if(ej !=4) swap(arr,ei, ej, ei++, ej);  // замена вправо
		 	break;
		 	case 3:  if(ej !=4) swap(arr,ei, ej, ei, ej++);  // замена вниз
		 	break;
		 	case 4:  if(ej !=1) swap(arr,ei, ej, ei--, ej);  // замена влево
		 };
	};
};




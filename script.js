function createTable() {
    //Write your code here
	let myTable = document.getElementById('myTable');
	const row = parseInt(prompt('Input number of rows'));
	let col = parseInt(prompt('Input number of columns'));

	for (let i = 0; i < row; i++){
		let tr = document.createElement('tr');
		for (let j = 0; j < col; j++) {
			let td = document.createElement('td');
			td.innerText = `Row-${i} Column-${j}`;
			tr.append(td);
		}
		myTable.append(tr);
	}
}

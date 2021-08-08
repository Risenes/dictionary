function randomRis() {
	document.getElementById('ris').innerHTML = arrRis[Math.floor(Math.random() * arrRis.length)];
}

const mQuery = window.matchMedia('(min-width: 1024px)');

function getKanzi() {
	let text = document.kanzi__form.selectKanzi.value.toLowerCase();
	let kanzi = text.split('');
	while (document.getElementById("found__kanzi").firstChild) {
		document.getElementById("found__kanzi").removeChild(document.getElementById("found__kanzi").firstChild);
	}
	for (i = 0; i < kanzi.length; ++i) {
		let pic = document.createElement('img');
		let notFoundKandzi = document.createElement('div');

		notFoundKandzi.innerHTML = kanzi[i] + ' Не найден';
		notFoundKandzi.className = "not__found";
		pic.src = './img/Dictionary/' + kanzi[i] + '.jpg';
		pic.className = "kanzi";
		pic.id = "myImg";
		notFoundKandzi.className = "kanzi__notFound";


		pic.onload = function () { document.getElementById("found__kanzi").appendChild(pic); }
		pic.onerror = function () { document.getElementById("found__kanzi").appendChild(notFoundKandzi); }

		let modal = document.getElementById('myModal');
		let imgModal = document.getElementById('modal__image');
		
		// pic.onclick = function () {
		// 	modal.style.display = "block";
		// 	imgModal.src = this.src;

		// }

		// let span = document.getElementsByClassName("close")[0];
		// span.onclick = function () {
		// 	modal.style.display = "none";
		// }
		

	}
}



// function changeModal(e) {
// 	if (e.matches) {
		
// 	}
// }

// mQuery.addEventListener('change', changeModal);
// changeModal(mQuery);
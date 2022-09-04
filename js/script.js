const search_form = document.querySelector(".wrap-search-form");
const btn_search = document.querySelector(".search-btn");

// Search window show

btn_search.addEventListener("click", function() {
	if (search_form.classList.contains("visually-hidden")) {
		search_form.classList.remove("visually-hidden");
	} else {
		search_form.classList.add("visually-hidden");
	}
});

// Plus-minus buttons

document.getElementById("search-adults").value = 2;
document.getElementById("search-children").value = 0;

// Adults

document.querySelector(".btn-plus-adults").addEventListener("click", function() {

	valueCount = document.getElementById("search-adults").value;

	valueCount++;

	document.getElementById("search-adults").value = valueCount;
});

document.querySelector(".btn-minus-adults").addEventListener("click", function() {

	valueCount = document.getElementById("search-adults").value;

	valueCount--;

	if (valueCount < 0) {
		valueCount = 0;
	}

	document.getElementById("search-adults").value = valueCount;
});

// Children

document.querySelector(".btn-plus-children").addEventListener("click", function() {

	valueCount = document.getElementById("search-children").value;

	valueCount++;

	document.getElementById("search-children").value = valueCount;
});

document.querySelector(".btn-minus-children").addEventListener("click", function() {

	valueCount = document.getElementById("search-children").value;

	valueCount--;

	if (valueCount < 0) {
		valueCount = 0;
	}
	
	document.getElementById("search-children").value = valueCount;
});

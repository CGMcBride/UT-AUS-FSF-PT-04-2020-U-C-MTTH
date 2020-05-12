var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = 0;
counter.textContent = count;
if (localStorage.getItem("count")) {
  count = localStorage.getItem("count");
  counter.textContent = count;
}

addButton.addEventListener("click", function () {
<<<<<<< HEAD
	count++;
	counter.textContent = count;
=======
  count++;
  counter.textContent = count;
>>>>>>> b96255aa7df350c7309b299d2b63b21b91e74df3

	localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function () {
<<<<<<< HEAD
	count--;
	counter.textContent = count;
=======
  count--;
  counter.textContent = count;
>>>>>>> b96255aa7df350c7309b299d2b63b21b91e74df3

	localStorage.setItem("count", count);
});

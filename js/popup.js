var writeUs = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var modalOverlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");

writeUs.addEventListener("click", function(e) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	modalOverlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(e) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	modalOverlay.classList.remove("modal-overlay-show");
});

document.getElementById("clicca").addEventListener("click", function() {
	var gif = document.createElement("img");
	gif.src = "https://media1.giphy.com/media/LTcau7EnQLhHkxxG2u/giphy.gif";
	gif.style.position = "fixed";
	gif.style.top = "50%";
	gif.style.left = "50%";
	gif.style.transform = "translate(-50%, -50%)";
	gif.style.width = "100%";
	gif.style.height = "100%";
	document.body.appendChild(gif);
});

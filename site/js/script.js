"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const sidebar = document.querySelector(".sidebar");

	if (sidebar) {
		console.log( sidebar );
		const toggle = sidebar.querySelector('.sidebar_mobile-toggle');

		toggle.addEventListener('click', function () {
			sidebar.classList.toggle("open");
			toggle.classList.toggle("open");
		})
	}
});

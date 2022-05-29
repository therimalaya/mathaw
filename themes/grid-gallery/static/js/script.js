const lbox_option = {
	keyboard: true,
	size: 'md'
};

document.querySelectorAll('.lightbox').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
    const opt = {...lbox_option, ...el.dataset}
	const lightbox = new Lightbox(el, opt);
	lightbox.show();
}));

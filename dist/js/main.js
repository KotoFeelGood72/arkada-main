


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	// allDefautAnim();
	burgerMobile();
	changeTabImg();
	if(windowWidth > mediaPoint1) {
		popupForms('14px');
	} else {
		popupForms('0px');
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



const btnSubmit = document.querySelectorAll('button[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', () => {
		succes('.succes')
	})
})


function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				ease: 'none',
			})
			tl.fromTo(item, {
				y: 100, 
				duration: .4,
				autoAlpha: 0,
			}, {
				y: 0,
				autoAlpha: 1,
				delay: 0.1 + (0.1 * index),
			});
		});
	});
}

function popupForms(pr) {

	let popupForms = document.querySelector('.callback')
	let popupFormsTrigger = document.querySelectorAll('.btn_popup')
	let popupFormsClose = document.querySelectorAll('.remove_popup')
	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
	const burgerPopup = document.querySelector('.burger')
	
	Array.from(popupFormsTrigger).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.add('active');
			win.style.overflow = "hidden";
			win.style.paddingRight = pr; 
			burgerPopup.classList.remove('active')
		})
	})


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	popupFormsSubmit.addEventListener('click', () => {
		popupForms.classList.remove('active')
		win.style.overflow = "";
		win.style.paddingRight = ""; 
		succes('.succes')
	})
}

function burgerMobile() {
	const triggerBurger = document.querySelector('.burger_trigger')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.remove_popup')
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		win.style.overflow = "hidden";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			win.style.overflow = "";
		})
	})

}

$(document).ready(function() {

	$(".forms_action input").on("blur input focus", function() {
		var $field = $(this).closest("li");
		if (this.value) {
			$field.addClass("filled");
		} else {
			$field.removeClass("filled");
		}
	});
	
	$(".forms_action input").on("focus", function() {
		var $field = $(this).closest("li");
		if (this) {
			$field.addClass("filled");
		} else {
			$field.removeClass("filled");
		}
	});
})


function changeTabImg() {
	let img = document.querySelector('#company_img')
	let itemLink = document.querySelectorAll('.company_item')

	itemLink.forEach((el) => {
		el.addEventListener('click', function(e) {
			itemLink.forEach(item => {
				item.classList.remove('active')
			})
			el.classList.add('active')
			img.src = e.currentTarget.dataset.src
		})
	})

}

const sliderDocuments = new Swiper('.document_slider', {
	// loop: true,
	speed: 600,
	watchOverflow : true,
	breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
			freeMode: false,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 25
    }
	},
	navigation: {
		nextEl: '.document_slider_nav .right_btn',
		prevEl: '.document_slider_nav .left_btn'
	}
});

const reviewsSlider = new Swiper('.reviews_slider', {
	centeredSlides: true,
	centeredSlidesBounds: true,
	allowTouchMove: true,
	speed: 700,
	autoHeight: true,
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    }
	},
	navigation: {
		nextEl: '.reviews_slider_nav .right_btn',
		prevEl: '.reviews_slider_nav .left_btn'
	}
});




$(document).ready(function() {
	const items = document.querySelectorAll(".reviews_slide");
	const state = "active";
	
	
	items.forEach(function (item, index) {
		const eCta = item.querySelector('.reviews_txt_more')
		eCta.onclick = function () {
			this.classList.toggle(state);
			this.previousElementSibling.classList.toggle(state);
			this.innerHTML = 'Скрыть весь отзыв';
			if (this.classList.contains('active')) {
				this.innerHTML = 'Скрыть весь отзыв';	
			}
			else  {
				this.innerHTML = 'Показать весь отзыв';	
			}
			
		};
	});
})

















































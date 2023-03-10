


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

	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['archive']);
		pageWidget(['contacts']);
		pageWidget(['policy']);
		pageWidget(['education']);
		pageWidget(['material']);
		pageWidget(['page-about']);
		pageWidget(['page-services']);
		pageWidget(['portfolio']);
		pageWidget(['single-news']);
		pageWidget(['single-portfolio']);
		pageWidget(['single-service']);
		pageWidget(['tours']);
		pageWidget(['404']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	modal();
	animatedCard();
	showMoreText();
	// updateSizes();
	// loadFunc();
});

// $(window).on('resize', function () {
// 	resizeFunc();
// });

// $(window).on('scroll', function () {
	// scrollFunc();
// });

// function loadFunc() {
	// calcViewportHeight();
// }

// function resizeFunc() {
// 	updateSizes();

// 	calcViewportHeight();
// }

// function scrollFunc() {}

// function calcViewportHeight() {
// 	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
// 		var vh = window.innerHeight * 0.01;
// 		document.documentElement.style.setProperty('--vh', vh + 'px');
// 	}
// }

// function updateSizes() {
// 	windowWidth = window.innerWidth;
// 	windowHeight = window.innerHeight;
// }

// if ('objectFit' in document.documentElement.style === false) {
// 	document.addEventListener('DOMContentLoaded', function () {
// 		Array.prototype.forEach.call(
// 			document.querySelectorAll('img[data-object-fit]'),
// 			function (image) {
// 				(image.runtimeStyle || image.style).background =
// 					'url("' +
// 					image.src +
// 					'") no-repeat 50%/' +
// 					(image.currentStyle
// 						? image.currentStyle['object-fit']
// 						: image.getAttribute('data-object-fit'));

// 				image.src =
// 					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
// 					image.width +
// 					"' height='" +
// 					image.height +
// 					"'%3E%3C/svg%3E";
// 			}
// 		);
// 	});
// }

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandom(min, max) {
// 	return Math.random() * (max - min) + min;
// }

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
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



// const btnSubmit = document.querySelectorAll('button[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		succes('.succes')
// 	})
// })


// function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
// 	const paralaxWrapper = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {
// 		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
// 			const tl = gsap.timeline();
// 			ScrollTrigger.create({
// 				animation: tl,
// 				trigger: el,
// 				start: start,
// 				end: end,
// 				ease: 'none',
// 			})
// 			tl.fromTo(item, {
// 				y: 100, 
// 				duration: .4,
// 				autoAlpha: 0,
// 			}, {
// 				y: 0,
// 				autoAlpha: 1,
// 				delay: 0.1 + (0.1 * index),
// 			});
// 		});
// 	});
// }

// function popupForms(pr) {

// 	let popupForms = document.querySelector('.callback')
// 	let popupFormsTrigger = document.querySelectorAll('.btn_popup')
// 	let popupFormsClose = document.querySelectorAll('.remove_popup')
// 	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
// 	const burgerPopup = document.querySelector('.burger')
	
// 	Array.from(popupFormsTrigger).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.add('active');
// 			win.style.overflow = "hidden";
// 			win.style.paddingRight = pr; 
// 			burgerPopup.classList.remove('active')
// 		})
// 	})


// 	Array.from(popupFormsClose).map((item) => {
// 		item.addEventListener('click', () => {
// 			popupForms.classList.remove('active')
// 			win.style.overflow = "";
// 			win.style.paddingRight = ""; 
// 		})
// 	})

// 	popupFormsSubmit.addEventListener('click', () => {
// 		popupForms.classList.remove('active')
// 		win.style.overflow = "";
// 		win.style.paddingRight = ""; 
// 		succes('.succes')
// 	})
// }








$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}

const brandSlider = new Swiper('.brand_slider', {
	grid: {
    rows: 2,
    fill: 'row',
  },
	navigation: {
		nextEl: '.slider_brand_next',
		prevEl: '.slider_brand_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		}
	}
})



const sliders = document.querySelectorAll('.double_slider');
sliders.forEach(function(slider) {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: slider.querySelector('.slider_double_next'),
      prevEl: slider.querySelector('.slider_double_prev'),
    },
  });
});


const slideCard = new Swiper('.sliderCard_slider', {
	loop: true,
	spaceBetween: 25,
	navigation: {
		nextEl: '.slider_slideCard_next',
		prevEl: '.slider_slideCard_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 25,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 25,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 25,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 25,
		}
	}
})

const gallerySlider = new Swiper('.gallery_slider', {
	loop: true,
	// slidesPerView: 4,
	spaceBetween: 25,
	navigation: {
		nextEl: '.slider_gallery_next',
		prevEl: '.slider_gallery_prev',
	},
	scrollbar: {
		el: '.gallery_scrollbar',
		draggable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 25,	
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 25,	
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 25,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 25,
		}
	}
})


// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');

	});
}

tabs('.workTab_list--link>li', '.workTab_content_item');

const smartSlider = new Swiper('.hero_slider', {
  speed: 1000,
	loop: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  effect: 'fade',
  navigation: {
    nextEl: '.slider_hero_next',
    prevEl: '.slider_hero_prev',
  },
});

const reviewsSlider = new Swiper('.reviews_slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 500,
	// loop: true,
	navigation: {
		nextEl: '.slider_reviews_next',
		prevEl: '.slider_reviews_prev',
	},
	scrollbar: {
		el: '.reviews_scrollbar ',
	}
})



// });

window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if(window.pageYOffset > 100){
			header.classList.add('fixed');
	} else{
			header.classList.remove('fixed');
	}
}



function animatedCard() {

	const cards = document.querySelectorAll('.animated-blur');
	
	cards.forEach(card => {
		card.addEventListener('mouseover', () => {
			cards.forEach(c => c.classList.add('blur'));
			card.classList.remove('blur');
		});
	
		card.addEventListener('mouseout', () => {
			cards.forEach(c => c.classList.remove('blur'));
		});
	});
}



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	popup.classList.add('active')
	document.body.style.overflow = 'hidden'
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.style.overflow = ''
}


function showMoreText() {
	let showMoreBlock = document.querySelectorAll('.showMoreBlock')
	Array.from(showMoreBlock).map((item) => {
		let showMoreBtn = item.querySelector('.showMoreBtn')
		let showMoreTxt = item.querySelector('.showMoreTxt')

		showMoreBtn.addEventListener('click', function() {
			showMoreTxt.classList.toggle('visible')
			if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = 'Скрыть';
      } else {
        this.innerHTML = 'Показать больше';
      }
		})
	})
}














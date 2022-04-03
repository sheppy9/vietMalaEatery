/** @format */

// configurations
let metadata = [
	{ name: "shopName", content: "Tê Tê" },
	{ name: "<metaName>", content: "<metaContent>" },
];

let cards = [
	{
		activated: true,
		type: "header",
		classes: "bg-light bg-gradient",
		img: "assets/img/header/TeTe_logo.png",
		text: "Tê Tê - Vịt lắc Mala",
	},
	{
		activated: true,
		type: "introduction",
		classes: "container bg-light.bg-gradient text-center col-lg-6 col-md-12 p-3 my-3",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\
		 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
		 sunt in culpa qui officia deserunt mollit anim id est laborum",
	},
	{
		activated: true,
		type: "overview",
		classes: "bg-success bg-gradient",
	},
	{
		activated: true,
		type: "updates",
		classes: "bg-light bg-gradient",
		text: "<h3 class='text-center pb-4 pt-4'>Latest Updates</h3>",
		html: '<div class="container">\
		<div class="row">\
			<div\
				class="fb-page pb-5"\
				data-href="https://www.facebook.com/tetevitlacmala"\
				data-tabs="timeline,events,messages"\
				data-width=""\
				data-height=""\
				data-small-header="false"\
				data-adapt-container-width="true"\
				data-hide-cover="false"\
				data-show-facepile="true"\
			>\
				<blockquote cite="https://www.facebook.com/tetevitlacmala/" class="fb-xfbml-parse-ignore">\
					<a href="https://www.facebook.com/tetevitlacmala/">tete vit lac mala</a>\
				</blockquote>\
			</div>\
		</div>\
	</div>',
	},
	{
		activated: true,
		type: "menu",
		classes: "bg-warning bg-gradient",
	},
	{
		activated: true,
		type: "reviews",
		classes: "bg-info bg-gradient",
	},
	{
		activated: true,
		type: "gallery",
		classes: "bg-light bg-gradient",
	},
	{
		activated: true,
		type: "map",
		classes: "bg-dark bg-gradient",
	},
	{
		activated: true,
		type: "contact",
		classes: "bg-primary bg-gradient",
	},
	{
		activated: true,
		type: "footer",
		classes: "bg-primary bg-gradient",
	},
];
// END configurations

// On page loaded
$(function () {
	// initialize the meta tags
	metadata.forEach((meta) => {
		$("head").append(`<meta name="${meta.name}" content="${meta.content}">`);
	});
	// END initialize the meta tags

	// creating Vue instance
	Vue.createApp({
		data() {
			return {
				cards: cards,
			};
		},
		mounted() {
			let self = this;
		},
	}).mount("#main");
	// END creating Vue instance
});
// END On page loaded

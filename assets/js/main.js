/** @format */

// configurations
const profile = "dev";
const version = "0.0.1";

const metadata = [
	{ name: "shopName", content: "Tê Tê - Vịt lắc Mala" },
	{ name: "version", content: version },
	{ name: "<metaName>", content: "<metaContent>" },
];

const languages = [
	{ code: "vi", name: "Tiếng Việt" },
	{ code: "en", name: "English" },
];
const defaultLanguage = languages[0].code;
const fallbackLanguage = languages[1].code;
const i18nMessages = {
	en: {
		shopName: "Tê Tê - Vịt lắc Mala",
		introduction1: "Các món được om kĩ trong nước soup có hơn 11 vị thảo mộc nên khi ăn có vị vừa tê nhẹ của hoa tiêu, vị cay vừa phải của ớt khô tứ xuyên.",
		introduction2: "Ăn kèm với sốt mala đặc biệt của quán sẽ đậm đà hơn, khách có thể chọn vị cay và tê phù hợp với khẩu vị.",
		introduction3: "Ngoài ra, quán còn có bột ớt mala để chấm cùng, bột ớt ngoài vị tê và cay thì vị béo nhẹ của đậu phộng, ăn kèm ngon hết sẩy.",
		introduction4: "Các món được nấu thủ công, không hoá chất, và đóng gói mới hằng ngày.",
		introduction5: "Quy trình đóng gói sạch sẽ, được hút chân không nên an tâm sử dụng nhé.",
		introduction6: "Có thể trữ ngăn đông và làm nóng 3p có thể sử dụng được ngay.",
		menu: "Menu",
		gallery: "Gallery",
		contact: "Contact",
		address: "Address",
		operatingHours: "Operating Hours",
	},
	vi: {
		shopName: "Tê Tê - Vịt lắc Mala",
		introduction1: "Các món được om kĩ trong nước soup có hơn 11 vị thảo mộc nên khi ăn có vị vừa tê nhẹ của hoa tiêu, vị cay vừa phải của ớt khô tứ xuyên.",
		introduction2: "Ăn kèm với sốt mala đặc biệt của quán sẽ đậm đà hơn, khách có thể chọn vị cay và tê phù hợp với khẩu vị.",
		introduction3: "Ngoài ra, quán còn có bột ớt mala để chấm cùng, bột ớt ngoài vị tê và cay thì vị béo nhẹ của đậu phộng, ăn kèm ngon hết sẩy.",
		introduction4: "Các món được nấu thủ công, không hoá chất, và đóng gói mới hằng ngày.",
		introduction5: "Quy trình đóng gói sạch sẽ, được hút chân không nên an tâm sử dụng nhé.",
		introduction6: "Có thể trữ ngăn đông và làm nóng 3p có thể sử dụng được ngay.",
		menu: "Menu",
		gallery: "Thư viện ảnh",
		contact: "gần gủi",
		address: "địa chỉ",
		operatingHours: "Giờ hoạt động",
	},
};

const cards = [
	{
		activated: true,
		type: "language",
		classes: "navbar fixed-top justify-content-end opacity-75",
		languages: languages,
		socialMedias: [
			{
				link: "https://www.facebook.com/tetevitlacmala",
				target: "_blank",
				classes: "p-3 fs-1",
				icon: "fab fa-facebook",
			},
			{
				link: "https://vt.tiktok.com/ZSdYd44ds/",
				target: "_blank",
				classes: "p-3 fs-1",
				icon: "fab fa-tiktok",
			},
		],
	},
	{
		activated: true,
		type: "header",
		classes: "bg-light bg-gradient",
		image: "assets/images/header/LandingPage.jpg",
		text: "Tê Tê - Vịt lắc Mala",
	},
	{
		activated: true,
		type: "introduction",
		classes: "container bg-light bg-gradient text-center",
		texting: [{ text: "introduction1" }, { text: "introduction2" }, { text: "introduction3" }, { text: "introduction4" }, { text: "introduction5" }, { text: "introduction6" }],
	},
	{
		activated: false,
		type: "overview",
		classes: "bg-success bg-gradient",
	},
	{
		activated: true,
		type: "updates",
		classes: "bg-light bg-gradient",
		title: "Latest Updates",
		titleClasses: "h3 text-decoration-underline text-center pb-4 pt-4",
		text: "<h3 class='text-center pb-4 pt-4'>Latest Updates</h3>",
		activated: true,
		imageClasses: "col-lg-3 col-md-6 rounded mx-auto d-block m-1",
		imageActive: "assets/images/gallery/1.jpg",
		images: [
			{
				src: "assets/images/gallery/2.jpg",
				alt: "Image 2",
			},
			{
				src: "assets/images/gallery/3.jpg",
				alt: "Image 3",
			},
			{
				src: "assets/images/gallery/4.jpg",
				alt: "Image 4",
			},
		],
	},
	{
		activated: true,
		type: "menu",
		classes: "bg-light bg-gradient container text-center p-3 my-3",
		titleClasses: "h3 text-decoration-underline",
		title: "menu",
		image1: "assets/images/menu/malaMenu1.jpg",
		image2: "assets/images/menu/malaMenu2.jpg",
	},
	{
		activated: true,
		type: "reviews",
		classes: "container text-center p-3 my-3",
		title: "Testimonial",
		titleClasses: "h3 text-decoration-underline",
		footerClasses: "container text-center",
		linkClasses: "mx-2 text-uppercase",
		testimonialClasses: "col-lg-3 col-md-5 my-3",
		testimonialContentClasses: "text-start text-break",
		testimonialCommentByClasses: "text-start text-secondary",
		testimonialMaxStar: 5,
		testimonials: [
			{
				noOfStar: 4,
				commentedBy: "Suju",
				content: ` Suspendisse finibus aliquet neque vel tincidunt. Curabitur porttitor et risus quis ultrices. Suspendisse sed quam nunc. Aliquam aliquam metus et magna ultrices rhoncus. In nec egestas felis. Duis rutrum quam quis accumsan consequat. Quisque imperdiet mi turpis, eget blandit lectus pretium eget. Nulla facilisi. Nullam non est suscipit, cursus dui ac, laoreet ipsum. Praesent vestibulum libero et leo aliquam, sed dictum urna vehicula. `,
			},
			{
				noOfStar: 5,
				commentedBy: "Randy",
				content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
			},
			{
				noOfStar: 3,
				commentedBy: "Sheppy",
				content: ` Nunc venenatis arcu id maximus condimentum. Aliquam erat volutpat. Ut consequat odio et libero commodo, at molestie risus pellentesque. Phasellus aliquet ante vel odio ornare, sit amet varius urna venenatis. Donec luctus viverra sapien, eget tincidunt lectus iaculis a. Nulla purus odio, facilisis id turpis a, aliquam tempus magna. In pharetra metus tellus, at tempus orci pulvinar nec. Sed consectetur dolor risus, sit amet eleifend sapien molestie in. Etiam ac quam lacus. Sed aliquet mauris tortor, eget lacinia nisi rutrum a. `,
			},
		],
		links: [
			{
				href: "https://search.google.com/local/writereview?placeid=ChIJR7Q5jYUvdTERSgJFW1QFTgE",
				text: "Write a review",
				target: "_blank",
			},
			{
				href: "https://search.google.com/local/reviews?placeid=ChIJR7Q5jYUvdTERSgJFW1QFTgE",
				text: "Read more",
				target: "_blank",
			},
		],
	},
	{
		activated: true,
		type: "history",
		classes: "container bg-light text-center col-lg-6 col-md-12 p-3 my-3",
		title: "## History ##",
		titleClasses: "h3 text-decoration-underline",
		content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		contentClasses: "container my-5",
	},
	{
		activated: true,
		type: "gallery",
		classes: "container text-center p-3 my-3",
		title: "gallery",
		titleClasses: "text-uppercase",
		imageClasses: "col-lg-3 col-md-6 rounded mx-auto d-block m-1",
		images: [
			{
				src: "assets/images/gallery/1.jpg",
				alt: "Image 1",
			},
			{
				src: "assets/images/gallery/2.jpg",
				alt: "Image 2",
			},
			{
				src: "assets/images/gallery/3.jpg",
				alt: "Image 3",
			},
			{
				src: "assets/images/gallery/4.jpg",
				alt: "Image 4",
			},
		],
	},
	{
		activated: true,
		type: "map",
		classes: "container text-center p-3 my-3",
		title: "",
		titleClasses: "",
		image: "assets/images/map/map.png",
		imageClasses: "rounded mx-auto d-block img-thumbnail",
		imageLink:
			"https://www.google.com/maps/place/T%C3%AA+T%C3%AA+-+V%E1%BB%8Bt+l%E1%BA%AFc+Mala/@10.7734903,106.6757353,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f858d39b447:0x14e05545b45024a!8m2!3d10.773485!4d106.677924",
	},
	{
		activated: true,
		type: "contact",
		classes: "container text-center p-3 my-3",
		contents: [
			{
				icon: "me-1 fas fa-phone-alt",
				classes: "p-0 m-1 col-lg-3 col-md-10 text-center",
				header: "contact",
				openInNewTab: false,
				link: "tel:+840941336161",
				linkDisplay: "+84 094 133 6161",
			},
			{
				icon: "me-1 fas fa-map",
				classes: "p-0 m-1 col-lg-3 col-md-10 text-center",
				header: "address",
				openInNewTab: true,
				link: "https://www.google.com/maps/dir//161+%C4%90.+Cao+Th%E1%BA%AFng,+Ph%C6%B0%E1%BB%9Dng+11,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.7734749,106.6757492,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752f20c9128077:0xf59871ecd4cd4925!2m2!1d106.6779379!2d10.7734696",
				linkDisplay: "161 Cao Thắng Phường 11 Quận 10, TPHCM.",
			},
			{
				icon: "me-1 fas fa-clock",
				classes: "p-0 m-1 col-lg-3 col-md-10 text-center",
				header: "operatingHours",
				contents: ["Monday - Friday: 7:00 AM - 9:00 PM", "Saturday: 7:00 AM - 9:00 PM", "Sunday: 7:00 AM - 9:00 PM"],
			},
		],
	},
	{
		activated: true,
		type: "footer",
		classes: "m-5",
		divider: true,
		footerClasses: "fs-6 fst-italic d-flex justify-content-between align-items-baseline",
		copyrightYear: "2022 ",
		shop: "shopName",
		copyrightMessage: " . All Rights Reserved.",
		socialMedias: [
			{
				link: "https://www.facebook.com/tetevitlacmala",
				target: "_blank",
				classes: "m-1 fs-1",
				icon: "fab fa-facebook",
			},
			{
				link: "https://vt.tiktok.com/ZSdYd44ds/",
				target: "_blank",
				classes: "m-1 fs-1",
				icon: "fab fa-tiktok",
			},
		],
	},
];
// END configurations

// On page loaded
$(function () {
	$("#myCarousel").carousel({
		interval: 2000,
		pause: "hover",
	});

	metadata.forEach((meta) => $("head").append(`<meta name="${meta.name}" content="${meta.content}">`));
	// END initialize the meta tags

	// Creating i18n
	const i18n = VueI18n.createI18n({
		locale: defaultLanguage,
		fallbackLocale: fallbackLanguage,
		messages: i18nMessages,
	});
	// END Creating i18n

	// creating Vue instance
	var main = Vue.createApp({
		data() {
			return {
				locale: languages.filter((language) => language.code === defaultLanguage)[0].code,
				isDev: profile === "dev",
				isProd: profile === "prod",
				cards: cards,
			};
		},
		methods: {
			changeLocale() {
				i18n.global.locale = this.locale;
			},
		},
	});

	main.use(i18n);
	main.mount("#main");
	// END creating Vue instance
});
// END On page loaded

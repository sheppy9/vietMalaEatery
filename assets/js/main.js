// configurations
const profile = 'dev';
const version = '0.0.1';

const metadata = [
    { name: 'shopName', content: 'Tê Tê - Vịt lắc Mala' },
    { name: 'version', content: version },
    { name: '<metaName>', content: '<metaContent>' },
];

const languages = [{ code: 'vi', name: 'Tiếng Việt' }, { code: 'en', name: 'English' }];
const defaultLanguage = languages[0].code;
const fallbackLanguage = languages[1].code;
const i18nMessages = {
    en: {
        shopName: 'Tê Tê - Vịt lắc Mala (en)',
        contact: 'Contact',
        address: 'Address',
        operatingHours: 'Operating Hours',
    },
    vi: {
        shopName: 'Tê Tê - Vịt lắc Mala',
        contact: 'gần gủi',
        address: 'địa chỉ',
        operatingHours: 'Giờ hoạt động',
    }
};

const cards = [
    {
        activated: true,
        type: 'language',
        classes: 'my-3',
        languages: languages
    },
    {
        activated: true,
        type: 'header',
        classes: 'bg-primary bg-gradient',
    },
    {
        activated: true,
        type: 'introduction',
        classes: 'bg-secondary bg-gradient',
    },
    {
        activated: true,
        type: 'overview',
        classes: 'bg-success bg-gradient',
    },
    {
        activated: true,
        type: 'updates',
        classes: 'bg-danger bg-gradient',
    },
    {
        activated: true,
        type: 'menu',
        classes: 'bg-warning bg-gradient',
    },
    {
        activated: true,
        type: 'reviews',
        classes: 'bg-info bg-gradient',
    },
    {
        activated: true,
        type: 'gallery',
        classes: 'bg-light bg-gradient',
    },
    {
        activated: true,
        type: 'map',
        classes: 'bg-dark bg-gradient',
    },
    {
        activated: true,
        type: 'contact',
        classes: 'm-3',
        contents: [
            {
                icon: 'me-1 fas fa-phone-alt',
                header: 'contact',
                openInNewTab: false,
                link: 'tel:+840941336161',
                linkDisplay: '+84 094 133 6161',
            },
            {
                icon: 'me-1 fas fa-map',
                header: 'address',
                openInNewTab: true,
                link: 'https://www.google.com/maps/dir//161+%C4%90.+Cao+Th%E1%BA%AFng,+Ph%C6%B0%E1%BB%9Dng+11,+Qu%E1%BA%ADn+10,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.7734749,106.6757492,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31752f20c9128077:0xf59871ecd4cd4925!2m2!1d106.6779379!2d10.7734696',
                linkDisplay: '161 Cao Thắng Phường 11 Quận 10, TPHCM.',
            },
            {
                icon: 'me-1 fas fa-clock',
                header: 'operatingHours',
                contents: [
                    'Monday - Friday: 7:00 AM - 9:00 PM',
                    'Saturday: 7:00 AM - 9:00 PM',
                    'Sunday: 7:00 AM - 9:00 PM',
                ],
            }
        ]
    },
    {
        activated: true,
        type: 'footer',
        classes: '',
        divider: true,
        footerClasses: 'fs-6 fst-italic d-flex justify-content-between align-items-baseline',
        copyrightYear: '2022 ',
        shop: 'shopName',
        copyrightMessage: ' . All Rights Reserved.',
        socialMedias: [
            {
                link: 'https://www.facebook.com/tetevitlacmala',
                classes: 'm-1 fs-1',
                icon: 'fab fa-facebook'
            },
            {
                link: '#',
                classes: 'm-1 fs-1',
                icon: 'fab fa-instagram'
            }
        ]

    },
];
// END configurations

// On page loaded
$(function () {

    // initialize the meta tags
    metadata.forEach(meta => $("head").append(`<meta name="${meta.name}" content="${meta.content}">`));
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
        data () {
            return {
                locale: languages.filter(language => language.code === defaultLanguage)[0].code,
                isDev: profile === 'dev',
                isProd: profile === 'prod',
                cards: cards
            };
        },
        methods: {
            changeLocale () {
                i18n.global.locale = this.locale;
            }
        }
    });

    main.use(i18n);
    main.mount("#main");
    // END creating Vue instance

});
// END On page loaded
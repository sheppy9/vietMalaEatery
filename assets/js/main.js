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
        shopName: 'Tê Tê - Vịt lắc Mala',
    },
    vi: {
        shopName: 'Tê Tê - Vịt lắc Mala',
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
        classes: 'bg-primary bg-gradient',
    },
    {
        activated: true,
        type: 'footer',
        classes: '',
        divider: true,
        footerClasses: 'fs-6 fst-italic d-flex justify-content-between align-items-baseline',
        copyrightYear: '2022 ',
        copyrightMessage: '. All Rights Reserved.',
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
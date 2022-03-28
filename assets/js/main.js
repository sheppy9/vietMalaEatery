// configurations
const metadata = [
    { name: 'shopName', content: 'Tê Tê' },
    { name: '<metaName>', content: '<metaContent>' },
];

const languages = [{ code: 'en', name: 'English' }, { code: 'vi', name: 'Tiếng Việt' }];
const defaultLanguage = languages[0].code;
const fallbackLanguage = languages[1].code;
const i18nMessages = {
    en: {
        helloWorld: 'Hello World'
    },
    vi: {
        helloWorld: 'Chào thế giới'
    }
};

const cards = [
    {
        activated: true,
        type: 'language',
        classes: 'bg-primary bg-gradient',
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
        classes: 'bg-primary bg-gradient',
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
                locale: languages[0].code,
                cards: cards
            };
        },
        methods: {
            changeLocale () {
                i18n.global.locale = this.locale;
            }
        },
        mounted () {
            this.locale = languages.filter(language => language.code === defaultLanguage)[0].code;
        }
    });

    main.use(i18n);
    main.mount("#main");
    // END creating Vue instance

});
// END On page loaded
// configurations
let metadata = [
    { name: 'shopName', content: 'Tete' },
    { name: '<metaName>', content: '<metaContent>' },
];

let cards = [
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
    metadata.forEach(meta => {
        $("head").append(`<meta name="${meta.name}" content="${meta.content}">`);
    });
    // END initialize the meta tags

    // creating Vue instance
    Vue.createApp({
        data () {
            return {
                cards: cards
            };
        },
        mounted () {
            let self = this;
        }
    }).mount("#main");
    // END creating Vue instance

});
// END On page loaded
import User from "../models/User.model";
import Article from "../models/Article.model";
import Monit from "../models/Monit.model";
import Page from "../models/Page.model";
import Section from "../models/Section.model";
import bcrypt from "bcrypt";

console.log('Script DB starter ...')

function run() {

    // Create User
    User.find({}, async (err, data) => {
        if (data.length <= 0) {
            await User.create({
                name: 'davroot',
                // Password is hashed in models | UserSchema.pre('save', ...)
                password: 'davroot$',
                mail: 'davroot@hsuk.ml',
                isAdmin: true,
                isProp: false,
                isRoot: true,
            }, (err, data) => {
                if (err) console.log('Error', err)
                console.log('Create User isRoot OK !!!', data)
            })
            await User.create({
                name: 'user',
                nameCompany: 'Davroot Team',
                // Password is hashed in models | UserSchema.pre('save', ...)
                password: 'user$',
                mail: 'user@hsuk.ml',
                address: "7 rue de joinville, 42 000, France",
                phone: '01.01.01.01.01',
                isProp: true,
                isAdmin: true,
                description: "Skevent dleout danvez biz-yod rumm goz gar tabut bazh mil skrijañ, Menez Du dec'h ehan kreisteiz neud tad eil huanadiñ bed lizherenn. Lies gwinegr c'hoar-gaer. Houlenn Menez Mikael anv koumoul, broust brumenn daoust ha. Ret ki lazhañ dianav gwenn hor beg-douar arabat skubañ ken truez tre kar hon leue droug-mor, chom hennezh hag Bro-saoz. Ma fazi geot kein gwechall, rak mil c'hwezhañ e fri hor kae diwar-benn",
                social: {
                    telegram: "https://hsuk.ml/telegram",
                    twitter: "https://hsuk.ml/twitter",
                    mastodon: "https://hsuk.ml/mastodon",
                    bitcoin: "https://hsuk.ml/bitcoin",
                    discord: "https://hsuk.ml/discord",
                    github: "https://hsuk.ml/github"
                }
            }, (err, data) => {
                if (err) console.log('Error', err)
                console.log('Create User isProp OK !!!', data)
            })
        }
    })

    // Create Themes / Module
    User.find({}, (err, data) => {
        if (data.length <= 0) Monit.create({
            actived : true,
            limited : true,
            landing : true,
            theme : {
                navbar : {
                    label : "Navbar Third",
                    title : "Navbar Third",
                    value : "navbarThird",
                    type : "navbarThird"
                },
                footer : {
                    label : "Footer Second",
                    title : "Footer Seconds",
                    value : "footerSecond",
                    type : "footerSecond"
                },
                sidebar : {
                    label : "Sidebar Second",
                    title : "Sidebar Second",
                    value : "sidebarSecond",
                    type : "sidebarSecond"
                },
                color : {
                    primary : "#5b9950",
                    secondary : "#228f5e",
                    accent : "#631fa3",
                    dark : "#1e2420",
                    light : "#c2caed",
                    positive : "#49cc68",
                    negative : "#ad3947",
                    info : "#189fba",
                    warning : "#ba9223",
                    custom : "#0074e8"
                },
                modules : {
                    ButtonSocialFixedTop : {
                        label : "Button Social Fixed Top",
                        title : "Button Social Fixed Top",
                        value : "ButtonSocialFixedTop",
                        type : "ButtonSocialFixedTop",
                        actived : true,
                        align : "right"
                    },
                    BannerMessage : {
                        label : "Button Banner Message Top",
                        title : "Button Banner Message Top",
                        value : "BannerMessage",
                        icon: "map",
                        message: "Site en construction, merci de nous contactez, si vous constatez une anomalie ;)",
                        type : "BannerMessage",
                        actived : true,
                        align : "top"
                    },
                    ButtonBackToTop : {
                        label : "Button Back to Top",
                        title : "Button Back to Top",
                        value : "ButtonBackToTop",
                        type : "ButtonBackToTop",
                        actived : true,
                        align : "bottom"
                    }
                }
            },
        }, (err, data) => {
            if (err) console.log(err)
            else console.log('create landing', data)
        })
    })

    // Create Page (Home, Contact)
    Page.find({}, async (err, data) => {
        if (data.length <= 0) {
            // Create Section
            const headerSection = new Section({
                ...require('./model').modelSection,
                page: 'home',
                type: 'headerSlider',
                name: 'header-' + Date.now(),
                title: 'Header default script',
                subtitle: "default Subtitle",
                description: 'Description section header Slider script',
                // image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                arch: {
                    ...require('./model').modelSection.arch,
                    title: "Super Titre Default",
                }
            })

            // Create Page
            const homePage = new Page({
                name: 'home',
                icon: 'home',
                title: 'Home',
                isDefault: true,
                description: 'Description page home',
                sections: [headerSection._id]
            })
            const services = new Page({
                name: 'services',
                icon: 'phone',
                title: 'Services',
                isDefault: true,
                description: 'Description page services',
                sections: []
            })
            const aPropos = new Page({
                name: 'apropos',
                icon: 'phone',
                title: 'À Propos',
                isDefault: true,
                description: 'Description page contact',
                sections: []
            })
            const contactPage = new Page({
                name: 'contact',
                icon: 'phone',
                title: 'Contact',
                isDefault: true,
                description: 'Description page contact',
                sections: []
            })
            const legal = new Page({
                name: 'legals',
                icon: 'phone',
                title: 'Mentions Légales',
                isDefault: true,
                description: 'Description page mentions légales',
                sections: []
            })

            headerSection.page_id = homePage._id;
            headerSection.save()

            homePage.save()
            services.save()
            aPropos.save()
            contactPage.save()
            legal.save()

            console.log('CREATE MONGODB SUCCESS')

        }
    })

}

run()
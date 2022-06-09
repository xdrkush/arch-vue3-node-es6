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
                name: 'user',
                nameCompany: 'Davroot Team',
                // Password is hashed in models | UserSchema.pre('save', ...
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
                console.log('Create User isProp OK !!!', data)
            })
            await User.create({
                name: 'davroot',
                // Password is hashed in models | UserSchema.pre('save', ...
                password: 'davroot$',
                mail: 'davroot@hsuk.ml',
                isAdmin: true,
                isRoot: true,
            }, (err, data) => {
                console.log('Create User isRoot OK !!!', data)
            })
        }
    })

    // Create Landing
    User.find({}, (err, data) => {
        if (data.length <= 0) Monit.create({
            landing: true,
            theme: {
                color: {
                    primary : "#461075",
                    secondary : "#228f5e",
                    accent : "#93b827",
                    dark : "#39434a",
                    light : "#0ec9b4",
                    positive : "#49cc68",
                    negative : "#ad3947",
                    info : "#189fba",
                    warning : "#ba9223",
                    custom : "#1976D2"
                },
            }
        }, (err, data) => {
            if (err) console.log(err)
            else console.log('create landing', data)
        })
    })

    // Create Page (Home, Contact)
    Page.find({}, async (err, data) => {
        if (data.length <= 0) {
            // Create Section
            const header = await Section.create({
                page: 'home',
                type: 'header',
                name: 'header-' + Date.now(),
                title: 'Header default script',
                description: 'Description section header Default script',
                arch: {
                    array: [
                        {
                            placement: "1",
                            name: "montagne",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle",
                            image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                        },
                        {
                            placement: "2",
                            name: "block",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle",
                            image: "https://cdn.pixabay.com/photo/2016/05/09/17/26/background-texture-1382002_960_720.jpg",
                        },
                        {
                            placement: "3",
                            name: "architecture",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle",
                            image: "https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_960_720.jpg",
                        },
                        {
                            placement: "4",
                            name: "canna",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle",
                            image: "https://i1.wp.com/greenacresgroupca.com/wp-content/uploads/2018/05/istock-835508564.jpg?fit=724%2C483&ssl=1",
                        },
                    ]

                }
            })

            const list = await Section.create({
                page: 'home',
                type: 'list',
                name: 'list-' + Date.now(),
                title: 'List default script',
                description: 'Description section list Default script',
                arch: {
                    array: [
                        {
                            placement: "1",
                            name: "default1",
                            title: "Titre default 1",
                            subtitle: "Subtitle default 1",
                            description: "description Hello Quasar js c'est de la balle default 1",
                            image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                        },
                        {
                            placement: "2",
                            name: "default2",
                            title: "Titre default 2",
                            subtitle: "Subtitle default 2",
                            description: "description Hello Quasar js c'est de la balle default 2",
                            image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                        },
                        {
                            placement: "3",
                            name: "default3",
                            title: "Titre default 3",
                            subtitle: "Subtitle default 3",
                            description: "description Hello Quasar js c'est de la balle default 3",
                            image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                        }
                    ]
                }
            })

            const contact = await Section.create({
                page: 'contact',
                type: 'contact',
                name: 'contact-' + Date.now(),
                title: 'Contactez-nous',
                description: 'Nous vous répondrons dès que possible,',
                arch: {
                    array: []
                }
            })

            console.log('CREATE MONGODB', header, list, contact)

            await Page.create({
                name: 'home',
                icon: 'home',
                title: 'home',
                description: 'Description page home',
                sections: [header._id, list._id]
            }, (err, data) => {
                if (err) console.log(err)
                else {
                    console.log('create page home', data)
                }
            })

            await Page.create({
                name: 'contact',
                icon: 'phone',
                title: 'contact',
                description: 'Description page contact',
                sections: [contact._id]
            }, (err, data) => {
                if (err) console.log(err)
                else {
                    console.log('create page contact', data)
                }
            })
        }
    })

    // edit User
    // const hash = bcrypt.hashSync("user$", 10)
    // User.findByIdAndUpdate('626d3ca8145d430a06b403e9', { password: hash }, (err, data) => {
    //     if (err) console.log(err)
    //     else console.log('Edit user', data)
    // })

}

run()
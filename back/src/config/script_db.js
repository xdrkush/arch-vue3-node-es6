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
                    facebook: "https://hsuk.ml/facebook",
                    twitter: "https://hsuk.ml/twitter",
                    linkedin: "https://hsuk.ml/linkedin",
                    youtube: "https://hsuk.ml/youtube",
                    instagram: "https://hsuk.ml/instagram"
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
                    primary: "#5f1b85",
                    secondary: "#ebe6f2",
                    accent: "#93b827",
                    dark: "#150429",
                    light: "#206b62",
                    positive: "#1e8f38",
                    negative: "#8a0a19",
                    info: "#5b868f",
                    warning: "#b39952",
                    custom: "#1976D2"
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
                title: 'header default script',
                description: 'Description section header Default script',
                arch: {
                    array: [
                        {
                            placement: "1",
                            name: "montagne",
                            image: "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle"
                        },
                        {
                            placement: "2",
                            name: "block",
                            image: "https://cdn.pixabay.com/photo/2016/05/09/17/26/background-texture-1382002_960_720.jpg",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle"
                        },
                        {
                            placement: "3",
                            name: "architecture",
                            image: "https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_960_720.jpg",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle"
                        },
                        {
                            placement: "4",
                            name: "canna",
                            image: "https://i1.wp.com/greenacresgroupca.com/wp-content/uploads/2018/05/istock-835508564.jpg?fit=724%2C483&ssl=1",
                            title: "Super Titre Default",
                            subtitle: "Super subtitle"
                        },
                    ]

                }
            })

            const list = await Section.create({
                page: 'home',
                type: 'list',
                name: 'list-' + Date.now(),
                title: 'list default script',
                description: 'Description section list Default script',
                arch: {
                    array: []
                }
            })

            const contact = await Section.create({
                page: 'contact',
                type: 'contact',
                name: 'contact-' + Date.now(),
                title: 'contact default script',
                description: 'Description section contact Default script',
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
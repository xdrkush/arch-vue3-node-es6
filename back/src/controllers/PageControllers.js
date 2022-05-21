import Connection from "../config/ConnectionDB";
import Page from "../models/Page.model.js";

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class PageControllers extends Connection {
    constructor() {
        super();
        privateProps.set(this.databaseConnection());
    }

    async get(req, res) {
        const dbPages = await Page.find({}, ['-_id', '-__v', 'created', 'updated', 'isArchived'])

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Get Monit Controller",
                dbPages
            });
        } catch (error) {
            throw error;
        }
    }

    async post(req, res) {
        const { page } = req.body
        const newPage = new Page({
            name: page.name,
            title: page.title,
            icon: page.icon,
            description: page.description,
        })
        newPage.save()

        console.log('create page', page, newPage)

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Post Page Controller",
                dbPages: Page.find({}, ['-_id', '-__v', 'created', 'updated', 'isArchived'])
            });
        } catch (error) {
            throw error;
        }
    }

    async put(req, res) {
        try {
            console.log('edit page', req.body)
            const { page } = req.body;
            await Page.update({ name: page.oldName }, { ...page })
            return res.send({
                status: "success",
                message: "Method Put Page Controller",
                dbPages: Page.find({}, ['-_id', '-__v', 'created', 'updated', 'isArchived'])
            });
        } catch {
            throw error;
        }
    }

}
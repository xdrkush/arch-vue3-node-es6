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
        console.log('get Pagesss')
        const dbPages = await Page.find({}, ['-_id', '-__v']).populate({
            path: 'sections',
            select: '-created -updated -_id -__v',
        })

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Get Pages Controller",
                dbPages
            });
        } catch (error) {
            throw error;
        }
    }

    async getByName(req, res) {
        console.log('get Page bye name', req.params)
        if (req.params.name.length <= 0) req.params.name = 'home'
        const dbPage = await Page.findOne({ name: req.params.name }, ['-_id', '-__v']).populate({
            path: 'sections',
            select: 'type name arch page page_id placement isArchived title description -_id __v',
        })

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Get Page By Name Controller",
                dbPage
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

        // console.log('create page', page, " || ", newPage)

        const dbPages = await Page.find({}, ['-_id', '-__v']).populate({
            path: 'sections',
            select: '-created -updated -_id -__v',
        })

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Post Page Controller",
                dbPages
            });
        } catch (error) {
            throw error;
        }
    }

    async put(req, res) {
        try {
            const { page } = req.body;
            delete page.sections
            await Page.updateOne({ name: page.oldName }, { ...page })
            const dbPages = await Page.find({}, ['-_id', '-__v']).populate({
                path: 'sections',
                select: '-created -updated -_id -__v',
            })

            return res.send({
                status: "success",
                message: "Method Put Page Controller",
                dbPages
            });
        } catch (error) {
            throw error;
        }
    }

    async delete(req, res) {
        try {
            // console.log('delete page', req.params)
            await Page.deleteOne({ name: req.params.name })

            const dbPages = await Page.find({}, ['-_id', '-__v']).populate({
                path: 'sections',
                select: '-created -updated -_id -__v',
            })

            return res.send({
                status: "success",
                message: "Method Delete Page Controller",
                dbPages
            });
        } catch (error) {
            throw error;
        }
    }
}
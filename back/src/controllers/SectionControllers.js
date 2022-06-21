import Connection from "../config/ConnectionDB";
import Section from "../models/Section.model.js";
import Page from "../models/Page.model.js";

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class SectionControllers extends Connection {
    constructor() {
        super();
        privateProps.set(this.databaseConnection());
    }

    async get(req, res) {
        const dbSections = await Section.find({}, ['-_id', '-__v', 'created', 'updated', 'isArchived'])

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Get Sections Controller",
                dbSections
            });
        } catch (error) {
            throw error;
        }
    }

    async post(req, res) {
        const { section } = req.body
        const newSection = new Section({
            type: section.type,
            page: section.page,
            page_id: section.page_id,
            title: section.title,
            description: section.description
        })
        newSection.save()

        console.log('create page', section, newSection)

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Post section Controller",
                dbSections: await Section.find({}, ['-_id', '-__v', 'created', 'updated'])
            });
        } catch (error) {
            throw error;
        }
    }

    async addSectionToPage(req, res) {
        const { section, page } = req.body
        console.log('add section to page', section, page)
        const toPage = await Page.findOne({ name: page.name });
        const newSection = new Section({
            name: section.value + '-' + Date.now(),
            type: section.type,
            page: page.name,
            page_id: page._id,
            arch: section.arch,
            title: section.title,
            description: section.description
        });
        newSection.save();
        toPage.sections.push(newSection._id);
        toPage.save();

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Post section Controller",
                dbSections: await Section.find({}),
                dbPages: await Page.find({}).populate('sections')
            });
        } catch (error) {
            throw error;
        }
    }

    async put(req, res) {
        try {
            console.log('edit page', req.body)
            const { section } = req.body;
            let sectionExist

            if (section.name !== section.oldName) {
                sectionExist = await Section.findOne({ name: section.name })
                if (sectionExist) return res.status(204).json({
                    status: "error",
                    message: "name déja utiliser, veuillez un choisir un nouveau !"
                })
            }

            await Section.updateOne({ name: section.oldName }, { ...section })

            return res.send({
                status: "success",
                message: "Method Put Section Controller",
                dbSections: await Section.find({}),
                dbPages: await Page.find({}).populate('sections')
            });
        } catch (error) {
            throw error;
        }
    }

    async deleteSectionToPage(req, res) {
        const { section, page } = req.body
        console.log('delete section to page', section, page)
        const toPage = await Page.findOne({ name: page.name });
        const oldSection = await Section.findOne({ name: section.name })

        // update page (delete id section in array page)
        toPage.sections.splice(toPage.sections.indexOf(oldSection._id), 1);
        toPage.save();

        await Section.findByIdAndRemove(oldSection._id)

        try {
            return res.status(200).json({
                status: "success",
                message: "Method Delete section to page Controller",
                dbSections: await Section.find({}),
                dbPages: await Page.find({}).populate('sections')
            });
        } catch (error) {
            throw error;
        }
    }

    async orderSectionsToPage(req, res) {
        const { page } = req.body;

        // Make newArray with new order sections
        const newOrder = (await Promise.all([...page.sections.map(async (item) => {
            let obj = await Section.findOne({ name: item.name })
            return obj._id.toString()
        })]))

        const page_db = await Page.findOne({ name: page.name });
        // console.log('OrderSectionToPage', page, page_db, newOrder)

        try {
            // Save
            if (newOrder.length === page_db.sections.length) {
                page_db.sections = newOrder;
                page_db.save()

                return res.status(200).json({
                    status: "success",
                    message: "Method Order sections to page Controller",
                    dbSections: await Section.find({}),
                    dbPages: await Page.find({}).populate('sections')
                });
            }
            else return res.status(203).json({
                status: "success",
                message: "Method Order sections to page Controller",
                dbSections: await Section.find({}),
                dbPages: await Page.find({}).populate('sections')
            })

        } catch (error) {
            throw error;
        }
    }

}
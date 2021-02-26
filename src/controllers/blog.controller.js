import Blogs from "../models/Blogs"
import { v4 as uuid } from 'uuid'

/**
 * getBlogs()
 * @param {*} req 
 * @param {*} res 
 * @return get All blog
 */
export  const getBlogs = async (req, res) => {
    const data = await Blogs.find()
    res.json({
        data
    })
}

export const getByIDBlog =async (req, res) => {
    const id = req.params.id
    try {
        const data = await Blogs.findById(id)
        res.json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: 'Ese blog no existe'
        })
    }
}
export const createBlog = async (req, res, next)=>{
    const image = req.file.filename
    const { title, description, content} = req.body
    const data = new Blogs()
    data.slug = `${uuid()}${title}`
    data.title = title
    data.description = description
    data.content = content
    data.image = image
    await data.save()
    res.json({
        data
    })
}
export const updatedBlog = (req, res) => {
    res.json({
        message: `El blog con el id ${id} ha sido actualizado`
    })
}
import { Router } from "express";
import { createBlog, getBlogs, getByIDBlog, updatedBlog } from "../controllers/blog.controller";
import { upload } from "../libs/stotage";

const blogRouter = Router()

blogRouter.get('', getBlogs) // get all blogs
blogRouter.get('/:id', getByIDBlog) //get one blog by id
blogRouter.post('/', upload.single('image'), createBlog) //create new blog
blogRouter.put('/:id', updatedBlog)

export default blogRouter
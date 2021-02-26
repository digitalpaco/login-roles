import { Router } from "express";
import authRouter from "./auth.routes";
import blogRouter from "./blog.routes";

const api = Router()

api.use('/auth', authRouter)
api.use('/blogs', blogRouter)

export default api
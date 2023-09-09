import { Router } from "express";

const orgsRouter = Router();

orgsRouter.get('/', (req, res) => {
    res.json({data: []})
})

export { orgsRouter }

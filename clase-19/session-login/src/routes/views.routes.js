import { Router } from "express";


const router = Router();

router.get("/", (req, res) => {
    res.render("home");
})

//registro
router.get("/signUp", (req, res) => {
    res.render("signUpViews");

})


router.get("/login", (req, res) => {
    res.render("loginViews");
})


router.get("/profile", (req, res) => {
    res.render("profileViews");
})

export { router as viewsRouter };
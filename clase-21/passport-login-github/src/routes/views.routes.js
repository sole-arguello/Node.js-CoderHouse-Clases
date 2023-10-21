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
    if(req.session.email){
        const userEmail = req.session.email
        res.render("profileViews", {userEmail});
    }else{
        res.render("loginViews", {errorSession: "Para ir al perfil, Debe iniciar sesion"});
    }


})

export { router as viewsRouter };
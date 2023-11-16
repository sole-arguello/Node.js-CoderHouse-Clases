

export class UsersController{
    static getUser = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'getUser'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    
}


export class BusinessController{
    static getAllBusiness = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'getAllBusiness'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    static getOneBusiness = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'getOneBusiness'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    static createBusiness = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'createBusiness'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    static addProducts = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'addProducts'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
}
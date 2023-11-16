

export class OrdersControllers{
    static getOrder = async (req, res) =>{
        try {
            res.json({status: 'success', message: 'getOrder'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    static createOrder = async (req, res) =>{
        try {
            res.joson({status: 'success', message: 'createOrder'})
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
    static modifyStatusOrder = async (req, res) =>{
        try {
            
        } catch (error) {
            console.log(error);
            res.json({status: 'error', message: 'Hubo un error en esta solucitud'})
        }
    }
}
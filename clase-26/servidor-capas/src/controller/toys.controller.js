import { ToysService } from '../service/toys.service.js';

//capa que controla las rutas
export class ToysController {
    static getToys = (req, res) => {
        const result = ToysService.getToys();
        res.json({ status: 'success', data:result });
    }

    static saveToy = (req, res) => {
        const toyInfo = ToysService.saveToy(req.body);
        res.json({ status: 'success', data:toyInfo });
    }
}
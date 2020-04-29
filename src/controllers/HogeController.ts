import {Response, Request} from "express";
import * as DataProcService from "../services/DataProcService";

export class HogeController {
    async getHoge (req: Request, res: Response) {
        DataProcService.waitAndExec();
        res.json({text: "get Hoge"});
    };
    async postHoge (req: Request, res: Response) {
        res.json({text: "post Hoge"});
    };
}

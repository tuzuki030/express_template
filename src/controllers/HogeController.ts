import {Response, Request} from "express";

export class HogeController {
    async getHoge (req: Request, res: Response) {
        res.json({text: "get Hoge"});
    };
    async postHoge (req: Request, res: Response) {
        res.json({text: "post Hoge"});
    };
}

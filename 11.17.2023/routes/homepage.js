"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const prismaClient = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/html/homepage.html'));
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, selectStarter } = req.body;
    try {
        const starterId = yield prismaClient.starters.findFirst({
            where: { name: selectStarter },
            select: { id: true }
        });
        if (starterId != null) {
            const trainerData = {
                name: name,
                surname: surname,
                StarterId: starterId.id
            };
            try {
                yield prismaClient.trainer.create({
                    data: trainerData
                });
            }
            catch (error) {
                console.error('Error creating new Trainer: ', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        else {
            console.error('starterId not found');
            res.status(500).json({ error: 'Internal sever error' });
        }
    }
    catch (error) {
        console.error('Error selecting starterId: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    res.redirect('/');
}));
exports.default = router;

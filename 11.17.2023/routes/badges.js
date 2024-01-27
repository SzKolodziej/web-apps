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
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/html/badges.html'));
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { trainerId, badges } = req.body;
    try {
        const tid = yield prismaClient.trainer.findFirst({
            where: { id: Number(trainerId) }
        });
        if (tid != null) {
            try {
                const trainerbadge = yield prismaClient.trainersBadges.findFirst({
                    where: {
                        BadgeId: Number(badges),
                        TrainerId: Number(trainerId)
                    }
                });
                if (trainerbadge == null) {
                    yield prismaClient.trainersBadges.create({
                        data: {
                            TrainerId: Number(trainerId),
                            BadgeId: Number(badges)
                        }
                    });
                }
            }
            catch (error) {
                console.error('Error selecting in trainersBadges: ', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
        else {
            res.status(404).json({ error: 'TrainerId not found' });
            return;
        }
    }
    catch (error) {
        console.error('Error selecting trainerId: ', error);
        res.status(500).json({ error: 'TrainerId not found' });
        return;
    }
    res.redirect('/badges');
}));
exports.default = router;

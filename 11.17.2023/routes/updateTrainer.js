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
const path_1 = __importDefault(require("path"));
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const selectTrainerId = (trainerId) => __awaiter(void 0, void 0, void 0, function* () {
    return prismaClient.trainer.findFirst({
        where: { id: Number(trainerId) },
        select: { id: true }
    });
});
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/html/updateTrainer.html'));
});
router.post('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { trainerId, newName, newSurname } = req.body;
    if (isNaN(trainerId) || !Number.isInteger(Number(trainerId))) {
        res.status(500).json({ error: 'Id is not a number or integer' });
        return;
    }
    try {
        const id = yield selectTrainerId(trainerId);
        if (id != null) {
            if (newName.trim().length > 0) {
                try {
                    yield prismaClient.trainer.update({
                        where: { id: id.id },
                        data: { name: newName }
                    });
                }
                catch (error) {
                    console.error('Error updating trainer name: ', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            }
            if (newSurname.trim().length > 0) {
                try {
                    yield prismaClient.trainer.update({
                        where: { id: id.id },
                        data: { surname: newSurname }
                    });
                }
                catch (error) {
                    console.error('Error updating trainer surname: ', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            }
        }
        else {
            res.status(404).json({ error: 'Id not found' });
            return;
        }
    }
    catch (error) {
        console.error('Error selecting trainerId: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    res.redirect('/updateTrainer');
}));
router.post('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { trainerId } = req.body;
    if (isNaN(trainerId) || !Number.isInteger(Number(trainerId))) {
        res.status(500).json({ error: 'Id is not a number or integer' });
        return;
    }
    try {
        const id = yield selectTrainerId(trainerId);
        if (id != null) {
            const fptid = yield prismaClient.favouritePokemon.findFirst({
                where: { TrainerId: id.id }
            });
            if (fptid != null) {
                yield prismaClient.favouritePokemon.delete({
                    where: { TrainerId: id.id }
                });
            }
            const tbid = yield prismaClient.trainersBadges.findFirst({
                where: { TrainerId: id.id }
            });
            if (tbid != null) {
                yield prismaClient.trainersBadges.deleteMany({
                    where: { TrainerId: id.id }
                });
            }
            yield prismaClient.trainer.delete({
                where: { id: id.id }
            });
        }
        else {
            res.status(404).json({ error: 'Id not found' });
            return;
        }
    }
    catch (error) {
        console.error('Error selecting trainerId: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    res.redirect('/updateTrainer');
}));
exports.default = router;

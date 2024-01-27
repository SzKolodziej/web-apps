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
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/html/favourites.html'));
});
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { trainerId, pokemonName, type } = req.body;
    if (isNaN(trainerId) || !Number.isInteger(Number(trainerId))) {
        res.status(500).json({ error: 'Id is not a number or integer' });
        return;
    }
    try {
        const tid = yield prismaClient.trainer.findFirst({
            where: { id: Number(trainerId) },
            select: { id: true }
        });
        if (tid != null) {
            const fpid = yield prismaClient.favouritePokemon.findFirst({
                where: { TrainerId: tid.id },
                select: { TrainerId: true }
            });
            const favouritePokemonData = {
                TrainerId: Number(trainerId),
                name: pokemonName,
                type: type
            };
            if (fpid == null) {
                yield prismaClient.favouritePokemon.create({
                    data: favouritePokemonData
                });
            }
            else {
                yield prismaClient.favouritePokemon.update({
                    where: { TrainerId: Number(trainerId) },
                    data: favouritePokemonData
                });
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
    res.redirect('/favourites');
}));
exports.default = router;

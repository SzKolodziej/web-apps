"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const selectTrainers_1 = __importDefault(require("./api/selectTrainers"));
const selectFavouritePokemons_1 = __importDefault(require("./api/selectFavouritePokemons"));
const selectTrainersBadges_1 = __importDefault(require("./api/selectTrainersBadges"));
const prismaClient = new client_1.PrismaClient();
const router = (0, express_1.Router)();
const json = {
    './api/trainers': 'see trainers list',
    './api/favouritePokemons': 'see trainers and their favourite Pokemon',
    './api/badges': 'see trainer\'s badges',
};
router.get('/', (req, res) => {
    res.json(json);
});
router.use('/trainers', selectTrainers_1.default);
router.use('/favouritePokemons', selectFavouritePokemons_1.default);
router.use('/badges', selectTrainersBadges_1.default);
exports.default = router;

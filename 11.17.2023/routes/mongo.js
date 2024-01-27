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
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
const URL = process.env.URL;
if (URL != undefined) {
    const client = new mongodb_1.MongoClient(URL, {
        serverApi: {
            version: mongodb_1.ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });
    const addFormData = (formData) => __awaiter(void 0, void 0, void 0, function* () {
        yield client.connect();
        const database = client.db('crud');
        const collection = database.collection('Cluster0');
        yield collection.insertOne(formData);
    });
    router.get('/', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, '../public/html/mongo.html'));
    });
    router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, surname, age } = req.body;
        const formData = {
            name: name,
            surname: surname,
            age: age
        };
        yield addFormData(formData);
        res.redirect('/mongo');
    }));
}
else {
    router.get('/', (req, res) => {
        res.status(500).json({ error: 'Internal server error' });
    });
}
exports.default = router;

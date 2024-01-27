"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const homepage_1 = __importDefault(require("./routes/homepage"));
const updateTrainer_1 = __importDefault(require("./routes/updateTrainer"));
const favourites_1 = __importDefault(require("./routes/favourites"));
const api_1 = __importDefault(require("./routes/api"));
const badges_1 = __importDefault(require("./routes/badges"));
const mongo_1 = __importDefault(require("./routes/mongo"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', homepage_1.default);
app.use('/updateTrainer', updateTrainer_1.default);
app.use('/favourites', favourites_1.default);
app.use('/api', api_1.default);
app.use('/badges', badges_1.default);
app.use('/mongo', mongo_1.default);
app.listen(PORT, () => {
    console.log('Working... I think... I don\'t promise anything...');
});

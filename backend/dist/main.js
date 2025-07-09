"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)());
    app.enableCors({ origin: '*' });
    await app.listen(5000, '0.0.0.0');
    console.log('🚀 Backend running on http://localhost:5000');
}
bootstrap();
//# sourceMappingURL=main.js.map
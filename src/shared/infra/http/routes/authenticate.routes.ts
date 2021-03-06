import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

// rotas da aplicação
authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };

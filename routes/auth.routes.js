import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => { res.send({"message" : "Signup route"}); });

authRouter.post("/sign-in", (req, res) => { res.send({"message" : "Signin route"}); });

authRouter.post("/sign-out", (req, res) => { res.send({"message" : "Signout route"}); });

export default authRouter;
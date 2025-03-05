import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => { res.send({"message" : "GET all subscriptions"}); });

subscriptionRouter.get("/:id", (req, res) => { res.send({"message" : "GET subscription details"}); });

subscriptionRouter.post("/", (req, res) => { res.send({"message" : "CREATE new subscription"}); });

subscriptionRouter.put("/:id", (req, res) => { res.send({"message" : "UPDATE subscription"}); });

subscriptionRouter.delete("/:id", (req, res) => { res.send({"message" : "DELETE subscription"}); });

subscriptionRouter.get("/user/:id", (req, res) => { res.send({"message" : "GET user subscriptions"}); });

subscriptionRouter.put("/:id/cancel", (req, res) => { res.send({"message" : "CANCEL subscription"}); });

subscriptionRouter.get("/upcoming-renewals", (req, res) => { res.send({"message" : "GET upcoming renewals"}); });

export default subscriptionRouter;
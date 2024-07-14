import { Express, Request, Response } from "express";
import { createUser } from "./controllers/user";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      msg: "API IS WORKING",
    });
  });

  app.post('/register', async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      if (!firstName || !lastName || !email || !password) {
         res.status(503).json({
          isSuccess: false,
          msg: "Please fill in all details"
        });
      } else {
        const user = await createUser(firstName, lastName, email, password, '');
        if (user) {
          res.status(201).json({
            isSuccess: true,
            msg: "User Created Successfully"
          })
        }
      }
    } catch (error) {
      res.status(500).json({
        isSucces: false,
        msg: "Internal Server Error"
      })
    }
  })
};

export default routes;

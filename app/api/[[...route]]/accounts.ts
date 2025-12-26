import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { db } from "@/db/drizzle";
import {accounts, insertAccountsSchema} from "@/db/schema"
import {zValidator} from "@hono/zod-validator"
import { eq } from "drizzle-orm";

import { v4 as uuidv4 } from 'uuid';

const app = new Hono()
  .get("/", 
    clerkMiddleware(),
    async (c) => {
      const auth = getAuth(c)

      if(!auth?.userId){
        return c.json({error: "Dont have permision"}, 401)
      }

      const data = await db.select({
        id: accounts.id,
        name: accounts.name
      }).from(accounts)
      .where(eq(accounts.userId, auth.userId))

      return c.json({ data });
    })
    .post("/",
      clerkMiddleware(),
      zValidator("json", insertAccountsSchema.pick({
        name: true
      })),
      async (c) => {
        const auth = getAuth(c)
        const values = c.req.valid("json")

        if(!auth?.userId){
          return c.json({error: "Unauthorized"}, 401)
        }

        const [data] = await db.insert(accounts).values({
          id: uuidv4(),
          userId: auth.userId,
          ...values
        }).returning()

        return c.json({data})
    })

export default app;
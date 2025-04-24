import express, { type Express } from "express";
import type { Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = express.Router();
  
  // Contact form submission
  apiRouter.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Add timestamp
      const messageData = {
        ...validatedData,
        createdAt: new Date().toISOString(),
      };
      
      // Store the message
      const message = await storage.createMessage(messageData);
      
      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  });

  app.use(apiRouter);

  const httpServer = createServer(app);
  
  return httpServer;
}

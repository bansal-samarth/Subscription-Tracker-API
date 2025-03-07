import { config } from "dotenv";

// Load environment variables from .env.[NODE_ENV].local
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Export variables with defaults
export const PORT = process.env.PORT; 
export const NODE_ENV = process.env.NODE_ENV;
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
export const ARCJET_KEY = process.env.ARCJET_KEY;
export const ARCJET_ENV = process.env.ARCJET_ENV;
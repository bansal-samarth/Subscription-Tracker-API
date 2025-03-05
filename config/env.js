import { config } from "dotenv";

// Load environment variables from .env.[NODE_ENV].local
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Export variables with defaults
export const PORT = process.env.PORT; 
export const NODE_ENV = process.env.NODE_ENV;
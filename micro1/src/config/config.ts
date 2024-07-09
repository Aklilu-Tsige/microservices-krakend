import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

class Config {
    public readonly PORT: number;
    public readonly HOSTNAME: string;

    constructor() {
        this.PORT = parseInt(process.env.PORT || '8081', 10);
        this.HOSTNAME = process.env.HOSTNAME || 'localhost';
    }
}

const config = new Config();
export default config;

import { UserAccount } from '../models/userAccount';
import winston from 'winston';

// Logger configuration
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

class UserAccountService {
    private users: UserAccount[] = [];
    private currentId = 1;
    private logger: winston.Logger;

    constructor(logger: winston.Logger) {
        this.logger = logger;
    }

    /**
     * Find all user accounts.
     * @returns {{ data: UserAccount[], message: string }} Object containing array of user accounts.
     */
    findAll(): { data: UserAccount[], message: string } {
        this.logger.info('Finding all user accounts');
        return { data: this.users, message: 'User accounts retrieved successfully' };
    }

    /**
     * Find a user account by ID.
     * @param {number} id - The ID of the user account.
     * @returns {{ data?: UserAccount, message: string }} Object containing the user account, or a message if not found.
     */
    findById(id: number): { data?: UserAccount, message: string } {
        this.logger.info(`Finding user account with ID: ${id}`);
        const user = this.users.find(user => user.id === id);
        return user ? { data: user, message: 'User account retrieved successfully' } : { message: 'User account not found' };
    }

    /**
     * Create a new user account.
     * @param {Omit<UserAccount, 'id'>} user - The user account data without ID.
     * @returns {{ data: UserAccount, message: string }} The created user account.
     */
    create(user: Omit<UserAccount, 'id'>): { data: UserAccount, message: string } {
        this.logger.info('Creating new user account');
        const newUser = { ...user, id: this.currentId++ };
        this.users.push(newUser);
        return { data: newUser, message: 'User account created successfully' };
    }

    /**
     * Update a user account.
     * @param {number} id - The ID of the user account.
     * @param {Partial<Omit<UserAccount, 'id'>>} user - The updated user account data.
     * @returns {{ data?: UserAccount, message: string }} The updated user account, or a message if not found.
     */
    update(id: number, user: Partial<Omit<UserAccount, 'id'>>): { data?: UserAccount, message: string } {
        this.logger.info(`Updating user account with ID: ${id}`);
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...user };
            return { data: this.users[index], message: 'User account updated successfully' };
        }
        this.logger.warn(`User account with ID: ${id} not found`);
        return { message: 'User account not found' };
    }

    /**
     * Delete a user account.
     * @param {number} id - The ID of the user account.
     * @returns {{ success: boolean, message: string }} True if the user account was deleted, false if not found, along with a message.
     */
    delete(id: number): { success: boolean, message: string } {
        this.logger.info(`Deleting user account with ID: ${id}`);
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return { success: true, message: 'User account deleted successfully' };
        }
        this.logger.warn(`User account with ID: ${id} not found`);
        return { success: false, message: 'User account not found' };
    }
}

// Export an instance of the service
export const userAccountService = new UserAccountService(logger);

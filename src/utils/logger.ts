import * as fs from 'fs';

export function setupLogger() {
const logStream = fs.createWriteStream('scraper.log', { flags: 'a' });
logStream.write(`Log started at ${new Date().toISOString()}\n`);
}

export function logInfo(message: string, data?: any) {
const logMessage = `[INFO] ${new Date().toISOString()} - ${message} ${data ? JSON.stringify(data) : ''}\n`;
fs.appendFileSync('scraper.log', logMessage);
}

export function logError(message: string, error?: any) {
const logMessage = `[ERROR] ${new Date().toISOString()} - ${message} ${error ? error.stack || error.message : ''}\n`;
fs.appendFileSync('scraper.log', logMessage);
}
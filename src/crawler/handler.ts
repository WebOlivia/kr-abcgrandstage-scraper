import { fetchData } from './parser';
import { logError, logInfo } from '../utils/logger';

export async function startCrawler(config: any) {
try {
logInfo('Starting the crawler with config:', config);

// Simulate fetching data from provided URLs
for (let url of config.urls) {
const data = await fetchData(url);
logInfo(`Fetched data from ${url}:`, data);
}

logInfo('Crawler finished successfully.');
} catch (error) {
logError('Crawler failed:', error);
}
}
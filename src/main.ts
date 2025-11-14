import { startCrawler } from './crawler/handler';
import { setupLogger } from './utils/logger';
import * as config from './config/input-schema.json';

// Initialize logger
setupLogger();

// Start the crawler with configuration
startCrawler(config);
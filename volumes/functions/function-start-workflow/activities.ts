import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function activity(): Promise<string> {
  try {
    const { stdout, stderr } = await execAsync('scrapy crawl news');

    // Log stderr as a warning instead of treating it as an error
    if (stderr) {
      console.warn(`Warning: ${stderr}`);
    }

    console.log(`Scrapy Output: ${stdout}`);
    return `Scrapy command executed successfully.`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to execute Scrapy command: ${error.message}`);
      return `Failed to execute Scrapy command.`;
    } else {
      // Handle unexpected error types here
      console.error(`Unexpected error: ${error}`);
      return `Unexpected error occurred.`;
    }
  }
}

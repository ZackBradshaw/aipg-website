import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    // Define the path to the file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'chat.html');

    try {
        // Read the HTML file content asynchronously
        const rawHtmlContent = await fs.readFile(filePath, 'utf8');

        // Return the content as a response with the appropriate header
        return new Response(rawHtmlContent, {
            headers: {
                'Content-Type': 'text/html'
            }
        });
    } catch (error) {
        // Handle errors (e.g., file not found) and return a server error response
        console.error('Failed to read HTML file:', error);
        return new Response('Internal Server Error', {
            status: 500
        });
    }
}

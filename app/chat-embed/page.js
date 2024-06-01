export default function handler() {
	// Define your raw HTML content
	const rawHtmlContent = `
	  <!DOCTYPE html>
	  <html lang="en">
	  <head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Raw HTML Page</title>
	  </head>
	  <body>
		<h1>Hello, this is a raw HTML response!</h1>
	  </body>
	  </html>
	`;
  
	// Return a new Response object with your HTML content, setting the content-type header to text/html
	return new Response(rawHtmlContent, {
	  headers: {
		'Content-Type': 'text/html'
	  }
	});
  }
  
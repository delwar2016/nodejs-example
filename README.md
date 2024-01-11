
# Node.js Static Website Example

This is a simple Node.js example project for serving static content using Express. The project includes a basic server setup with an `app.js` file that serves static HTML files from a `public` folder.

## Project Structure

```plaintext
├── public/               # Static HTML files
│   ├── index.html        # Main HTML file
│   ├── styles/           # CSS stylesheets
│   └── ...
├── app.js                # Express application configuration
├── .gitignore            # Git ignore file
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```

## Prerequisites

Ensure you have Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
    git clone https://github.com/delwar2016/nodejs-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-example
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   node src/app.js
   ```

   The server will be running at http://localhost:3011.

## Usage

Open a web browser and visit http://localhost:3011 to view the static HTML content served by the Express server.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are welcome.

## License

This project is licensed under the [MIT License](LICENSE).


# Image Compression Tool

The Image Compression Tool is a JavaScript-based application designed to compress images efficiently. This tool allows users to upload images and compress them to reduce file size while maintaining quality.

## Prerequisites

Before you can use this application, ensure you have the following:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Technologies Used

- **Multer**: Middleware for handling `multipart/form-data`, used for uploading images.
- **Imagemin**: Image compression library for optimizing image file sizes.
- **MVC Architecture**: Model-View-Controller architecture for organizing the application’s code.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/usfsam7/image-compression-tool.git
   ```
2. Navigate to the project directory:

   ```bash
   cd image-compression-tool
   ```
  
3. Install the dependencies:

   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm start
   ```
## Usage
- Upload an image file through the provided interface.
- Adjust the compression settings (e.g., quality, format) if applicable.
- Click the compress button to process the image.
- save the compressed image.

## Features
- Supports various image formats (e.g., JPEG, PNG).
- Adjustable compression settings to balance between quality and file size.
- User-friendly interface for easy image upload and download.

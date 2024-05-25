const multer = require('multer');
const uploading = require('../multer_config');


const path = require('path');
const fs = require('fs');





const compress = async (req, res) => { uploading(req, res, async (err) => {
    if (err) return res.json({ msg: err.message });  
    if (!req.file)  return res.json({ msg: "No file has been uploaded" }); 

    if (err instanceof multer.MulterError) return res.json({ msg: err.message });
     

            
            
    if (req.file.size > 50000)     
      try {
        const imagemin = (await import('imagemin')).default;
        const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
        const imageminPngquant = (await import('imagemin-pngquant')).default;

  
        const image_path = `D:/Compress images/images/${req.file.originalname}`

        const inputFilePath = path.resolve(image_path);
        const outputDir = path.resolve(__dirname, '../compressed_images');

        // Ensure the output directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Log paths for debugging
        console.log('Input file path:', inputFilePath);
        console.log('Output directory:', outputDir);

        // Check if the file exists
        if (!fs.existsSync(inputFilePath)) {
          console.error('Input file does not exist:', inputFilePath);
          return res.json({ msg: "Input file does not exist." });
        }

        const compressedFiles = await imagemin([inputFilePath], {
          destination: outputDir,
          plugins: [
            imageminMozjpeg({ quality: 75 }),
            imageminPngquant({ quality: [0.6, 0.8] }),
          ]
        });

        // Debug output from imagemin
        console.log('Compressed files:', compressedFiles);

        if (compressedFiles.length > 0) {
          const compressedImage = compressedFiles[0];
          const compressedImagePath = path.join(outputDir, path.basename(compressedImage.sourcePath));

          res.json({
            msg: "Image compressed successfully.",
            original_size: req.file.size,
            compressed_size: fs.statSync(compressedImagePath).size,
            compressed_image_path: compressedImagePath
          });
        } else {
          res.json({ msg: "Image compression failed. No files were processed." });
        }
      } catch (compressionError) {
        console.error('Compression error:', compressionError);
        res.json({ msg: "Image compression failed.", error: compressionError.message });
      }

                  
            
    }) 
  };









module.exports = { compress };
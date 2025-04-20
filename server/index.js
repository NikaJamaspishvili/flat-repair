import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
// Initialize Express app
const app = express();

app.use(cors());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route to fetch images from Cloudinary
app.get('/get-cloudinary-images', async (req, res) => {
    console.log('env:',process.env.CLOUDINARY_CLOUD_NAME)
  try {
    const result = await cloudinary.search
      .expression("folder:repair")  // Adjust folder name
      .sort_by('public_id', 'desc')
      .max_results(20)
      .execute();

    // Send back the image URLs
    res.status(200).json(result.resources.map((img) => img.secure_url));
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

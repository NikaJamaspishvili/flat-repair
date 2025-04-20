import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Netlify function
export async function handler(event, context) {
  try {
    const result = await cloudinary.search
      .expression('folder:repair') // Adjust your folder name if needed
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // CORS header
      },
      body: JSON.stringify(result.resources.map((img) => img.secure_url)),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}

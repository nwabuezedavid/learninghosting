"use server"
import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';
import { promisify } from 'util';

import fs from 'fs';
import { db } from '@/lib/prisma';

export async function saveImage(formData) {
  try {
    // Extract the file from FormData
    const file = formData.get('file'); // 'file' should match the field name in the FormData

    if (!file) {
      throw new Error('No file found in the form data.');
    }

    // Set the upload path (you can adjust the path as needed)
    const uploadPath = path.join(process.cwd(), 'public', 'uploads');

    // Ensure the directory exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    // Create a unique filename (optional, but good for avoiding overwrites)
    const uniqueFilename = `${Date.now()}-${file.name}`;

    // File path where the image will be saved
    const filePath = path.join(uploadPath, uniqueFilename);

    // Convert file to a buffer for saving
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Write the file to the directory
    fs.writeFileSync(filePath, fileBuffer);

    console.log(`File saved successfully to: ${filePath}`);

    return { success: true, filePath };
  } catch (error) {
    console.error('Error saving file:', error.message);
    return { success: false, error: error.message };
  }
}

const dbdeposit=async (data)=>{
  const dbdposi = await db.user.update({
    where:{
      uuid:data.uuid
    },
    data:{
      Doposite:{
        create:{
          
        }
      }
    }
  })
}
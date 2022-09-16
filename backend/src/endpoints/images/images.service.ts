import { Injectable } from '@nestjs/common';
import { ImagesRepository } from './images.repository';

const streamToBase64 = (stream): Promise<string> =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
  });

@Injectable({})
export class ImagesService {
  constructor(private repository: ImagesRepository) {}

  async getImage(id: string): Promise<string> {
    const imageStream = await this.repository.getImage(id);
    return await streamToBase64(imageStream);
  }

  uploadImage(image: Express.Multer.File): Promise<string> {
    return this.repository.uploadImage(image);
  }

  deleteImage(id: string, userId: string) {
    this.repository.deleteImage(id, userId);
  }
}

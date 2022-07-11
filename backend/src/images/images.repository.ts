import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { s3Client } from 'src/aws';

const createBucketParams = (objectKey: string) => {
  return {
    Bucket: process.env.S3_BUCKET,
    Key: objectKey,
  };
};

@Injectable()
export class ImagesRepository {
  async getImage(id: string) {
    const data = await s3Client.send(
      new GetObjectCommand(createBucketParams(id)),
    );
    return data.Body;
  }

  async uploadImage(image: Express.Multer.File): Promise<string> {
    await s3Client.send(
      new PutObjectCommand({
        ...createBucketParams(uuid()),
        Body: image.buffer,
        ContentType: image.mimetype,
      }),
    );
    return 'OK';
  }

  async deleteImage(id: string): Promise<string> {
    await s3Client.send(new DeleteObjectCommand(createBucketParams(id)));
    return 'OK';
  }
}

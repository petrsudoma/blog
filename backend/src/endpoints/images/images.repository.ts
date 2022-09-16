import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { s3Client } from 'src/aws';
import { PrismaService } from 'src/prisma.service';

const createBucketParams = (objectKey: string) => {
  return {
    Bucket: process.env.S3_BUCKET,
    Key: objectKey,
  };
};

@Injectable()
export class ImagesRepository {
  constructor(private prisma: PrismaService) {}

  async getImage(id: string) {
    try {
      const data = await s3Client.send(
        new GetObjectCommand(createBucketParams(id)),
      );
      return data.Body;
    } catch (err) {
      if (err.name === 'NoSuchKey')
        throw new NotFoundException('Invalid Image ID');
    }
  }

  async uploadImage(image: Express.Multer.File): Promise<string> {
    const imageId = uuid();

    await s3Client.send(
      new PutObjectCommand({
        ...createBucketParams(imageId),
        Body: image.buffer,
        ContentType: image.mimetype,
      }),
    );
    return imageId;
  }

  async deleteImage(id: string, userId: string) {
    const article = await this.prisma.articles.findFirst({
      where: { image_id: id },
    });

    if (article.user_id === userId) {
      await s3Client.send(new DeleteObjectCommand(createBucketParams(id)));
    } else {
      throw new UnauthorizedException('Not authorized');
    }
  }
}

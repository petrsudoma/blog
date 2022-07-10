import { Controller, Delete, Get, Header, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

type ImageId = {
  id: string;
};

@Controller('images')
export class ImagesController {
  constructor(private service: ImagesService) {}

  @Get(':id')
  @Header('Content-Type', 'text/plain')
  getImage(@Param() params: ImageId): Promise<string> {
    return this.service.getImage(params.id);
  }

  @Delete(':id')
  @Header('Content-Type', 'text/plain')
  deleteImage(@Param() params: ImageId): Promise<string> {
    return this.service.deleteImage(params.id);
  }
}

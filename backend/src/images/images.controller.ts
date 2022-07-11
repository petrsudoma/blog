import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Header,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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

  @Post()
  @Header('Content-Type', 'text/plain')
  @UseInterceptors(FileInterceptor('image'))
  uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 4000000 }),
          new FileTypeValidator({ fileType: /jpeg|png/ }),
        ],
      }),
    )
    image: Express.Multer.File,
  ): Promise<string> {
    return this.service.uploadImage(image);
  }

  @Delete(':id')
  @Header('Content-Type', 'text/plain')
  deleteImage(@Param() params: ImageId): Promise<string> {
    return this.service.deleteImage(params.id);
  }
}

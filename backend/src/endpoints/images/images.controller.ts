import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Header,
  Headers,
  HttpCode,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/endpoints/auth/guard/jwt.guard';
import { ImagesService } from './images.service';

type ImageId = {
  id: string;
};

@Controller('images')
export class ImagesController {
  constructor(
    private imagesService: ImagesService,
    private jwtService: JwtService,
  ) {}

  @Get(':id')
  @Header('Content-Type', 'text/plain')
  getImage(@Param() params: ImageId): Promise<string> {
    return this.imagesService.getImage(params.id);
  }

  @Post()
  @Header('Content-Type', 'text/plain')
  @UseInterceptors(FileInterceptor('image'))
  @UseGuards(JwtGuard)
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
    return this.imagesService.uploadImage(image);
  }

  @Delete(':id')
  @Header('Content-Type', 'text/plain')
  @UseGuards(JwtGuard)
  @HttpCode(204)
  deleteImage(@Param() params: ImageId, @Headers() headers) {
    const userId = this.jwtService.decode(
      headers.authorization.split(' ')[1],
    ).sub;

    this.imagesService.deleteImage(params.id, userId);
  }
}

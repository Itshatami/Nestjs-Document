import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Ip,
  Param,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { error } from "console";
import { UnkownException } from "src/exceptions/unkown.exception";

@Controller("cats")
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll(@Res() res: Response) {
    // const cats = await this.catService.findAll();
    // return res.status(HttpStatus.OK).json(cats);

    throw new UnkownException();
  }

  @Get("/:id")
  findOne(@Param() params: any) {
    return `this action returns cat with id ${params.id}`;
  }

  @Post()
  async create(@Res() res: Response, @Body() body: CreateCatDto) {
    const cat = await this.catService.create(body);
    return res.status(HttpStatus.OK).json(["done", cat]);
  }

  @Delete("/:id")
  async delete(@Param() params: any, @Res() res: Response) {
    res.status(HttpStatus.OK).send(params.id);
  }
}

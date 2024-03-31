import { HttpException } from "@nestjs/common";

export class UnkownException extends HttpException {
  constructor() {
    super("Unkown", 400);
  }
}

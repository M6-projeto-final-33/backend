import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterUser } from "./dto/create.user.dto";
import { IUpdateUser } from "./dto/update.user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  create(registerData: IRegisterUser) {
    return this.prisma.user.create({ data: registerData });
  }

  update(id: string, updateUser: IUpdateUser) {
    return this.prisma.user.update({ where: { id: id }, data: updateUser });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}

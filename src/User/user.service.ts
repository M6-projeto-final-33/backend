import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { IRegisterAddress, IRegisterUser, IRegisterUserData } from "./dto/create.user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(registerData: IRegisterUserData) {
    const { address, ...rest } = registerData
    const { birthDate, ...registerUserParams } = rest

    const userData = new IRegisterUser({ ...registerUserParams, birthDate: new Date(birthDate) })
    const userInstance = await this.prisma.user.create({ data: userData })

    address.userId = userInstance.id;
    const addressData = new IRegisterAddress(address)
    const addressInstance = await this.prisma.address.create({ data: addressData })

    const user = this.prisma.user.findUnique({
      where: {
        id: userInstance.id
      },
      include: {
        address: true
      }
    })

    return user
  }

  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id
      },
      include: {
        address: true
      }
    })
  }
}

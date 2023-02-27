// import { ApiProperty } from "nestjs/swagger";

export class IUpdateUser {
  name?: string;
  email?: string;
  userImage?: string;
  cpf?: string;
  contact?: string;
  birthDate?: string;
  description?: string;
  userType?: "buyer" | "advertiser";
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  complement?: string;
}

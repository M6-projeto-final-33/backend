export interface IRegisterUserData {
  name: string;
  email: string;
  cpf: string;
  contact: string;
  birthDate: string;
  description: string;
  userType: "buyer" | "advertiser";
  password: string;
  userImage?: string;
  isAdmin?: string;
  address: IRegisterAddressProps;
}

export interface IRegisterUserProps {
  name: string;
  email: string;
  cpf: string;
  contact: string;
  birthDate: Date;
  description: string;
  userType: "buyer" | "advertiser";
  password: string;
  userImage?: string;
  isAdmin?: string;
}

export class IRegisterUser {

  constructor(obj: IRegisterUserProps) {
    Object.assign(this, obj)
  }

  name: string;
  email: string;
  cpf: string;
  contact: string;
  birthDate: Date;
  description: string;
  userType: "buyer" | "advertiser";
  password: string;
  userImage?: string;
  isAdmin?: string;
}

export interface IRegisterAddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  complement?: string;
  userId: string;
}

export class IRegisterAddress {

  constructor(obj: IRegisterAddressProps) {
    Object.assign(this, obj)
  }

  cep: string;
  state: string;
  city: string;
  street: string;
  complement?: string;
  userId: string;
}


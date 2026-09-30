export interface CompanyData {
  name: string;
  legalName: string;
  nit: string;
  matricula: string;
  camaraComercio: string;
  city: string;
  department: string;
  country: string;
  fullLocation: string;
  address: string;
  phone: string;
  phoneFormatted: string;
  phoneRaw: string;
  whatsappUrl: string;
  email: string;
  domain: string;
  domainClean: string;
}

export const COMPANY: CompanyData = {
  name: "FLIKK",
  legalName: "Flikk",
  nit: "900380598-6",
  matricula: "505019-55",
  camaraComercio: "Cámara de Comercio de Cali",
  city: "Cali",
  department: "Valle del Cauca",
  country: "Colombia",
  fullLocation: "Cali, Valle del Cauca, Colombia",
  address: "CL 70 NORTE #17-374 CS 94",
  phone: "+57 3044028376",
  phoneFormatted: "+57 304 402 8376",
  phoneRaw: "3044028376",
  whatsappUrl: "https://wa.me/573044028376?text=Hola%20FLIKK,%20estoy%20interesado%20en%20sus%20soluciones%20tecnol%C3%B3gicas",
  email: "soporte@flikk.online",
  domain: "https://flikk.online/",
  domainClean: "flikk.online",
};

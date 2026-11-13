
import { z } from "zod";

export const nameSchema = z.string().trim().min(2, "Nombre inválido. Debe contener al menos 2 caracteres.").max(80);
export const companyNameSchema = z.string().trim().min(3, "Nome do estabelecimento inválido.").max(100);
export const phoneSchema = z.string().trim().min(10, "Telefone inválido.").max(20);
export const emailSchema = z.string().trim().toLowerCase().email("E-mail inválido.");
export const passwordSchema = z.string().min(6, "Senha muito curta.").max(15, "Senha muito longa.");


export const registerCompanySchema = z.object({
  companyName: companyNameSchema,
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  password: passwordSchema,
});


export type RegisterCompanyInput = z.infer<typeof registerCompanySchema>;

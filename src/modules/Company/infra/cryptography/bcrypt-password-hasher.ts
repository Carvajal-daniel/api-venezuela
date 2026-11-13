import { hash } from "bcrypt";
import type { PasswordHasher } from "../../application/ports/password-hasher.js";
import { number } from "zod";

const BCRYPT_COST = Number(process.env.BCRYPT_COST);
if (!BCRYPT_COST) {
  throw new Error("BCRYPT_COST is not set");
}

export class BcryptPasswordHasher implements PasswordHasher {
  async hash(plainText: string): Promise<string> {
    return hash(plainText, BCRYPT_COST);
  }
}

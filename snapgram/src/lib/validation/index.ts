import * as z from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2, { message: "Çok kısa" }),
  name: z.string().min(2, { message: "Çok kısa" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Şifreniz en az 8 karakter olmalı" }),
});

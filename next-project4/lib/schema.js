import { z } from "zod";

export const orderSchema = z.object({
  customerName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{9,15}$/, "Enter a valid phone number."),

  area: z
    .string()
    .trim()
    .min(2, "Delivery area is required.")
    .max(100, "Delivery area is too long."),

  dishId: z.string().trim().min(1, "Dish is required."),

  quantity: z.coerce
    .number()
    .int("Quantity must be a whole number.")
    .min(1, "Quantity must be at least 1.")
    .max(20, "Maximum quantity is 20."),
});

export function getFieldErrors(error) {
  return error.flatten().fieldErrors;
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, length: number = 20) {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

export function truncateAddress(address: string, length: number = 4) {
  return `${address.slice(0, length)}...${address.slice(-length)}`;
}
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(dateString: string): string {
  const date: Date = new Date(dateString);
  const now: Date = new Date();
  const timeDifference: number = now.getTime() - date.getTime();

  const seconds: number = Math.floor(timeDifference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);

  if (days > 1) {
    return `${days} gün önce`;
  } else if (hours > 1) {
    return `${hours} saat önce`;
  } else if (minutes > 1) {
    return `${minutes} dakika önce`;
  } else {
    return `${seconds} saniye önce`;
  }
}

const dateString: string = "-2024-05-13T17:51:21.434+00:00";
const formattedDate: string = timeAgo(dateString);
console.log(formattedDate); // Output will be something like "1 day ago"

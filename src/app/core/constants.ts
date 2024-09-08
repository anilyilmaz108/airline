import { signal } from "@angular/core";

export const appName = "Air";
export const pageSize = signal(50);
export const pageSizeOptions = signal([10, 15, 20, 30, 50, 100]);
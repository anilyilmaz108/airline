import { signal } from "@angular/core";
import { FlightModel } from "../models/flight";
import { UserModel } from "../models/user";

export const flightSignal = signal<any>(null);
export const flightUserSignal = signal<UserModel | null>(null);
export const isSimulate = signal<boolean>(false);
export const adminSignal = signal<UserModel | null>(null);
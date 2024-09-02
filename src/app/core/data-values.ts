import { signal } from "@angular/core";
import { FlightModel } from "../models/flight";
import { UserModel } from "../models/user";

export const flightSignal = signal<FlightModel | null>(null);
export const flightUserSignal = signal<UserModel | null>(null);
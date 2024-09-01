import { signal } from "@angular/core";
import { FlightModel } from "../models/flight";

export const flightSignal = signal<FlightModel | null>(null);
import { Animal } from "./animal";

export interface Enclosure {
    id: number;
    name: string;
    type:string;
    caretaker: string;
    capacity: number;
    animals: Animal[];
}

import {Transfer} from "./Transfer";
import {RandomPerson} from "./RandomPerson";

export class RandomTransfer extends Transfer {
    constructor() {
        super(
            new RandomPerson().name,
            new RandomPerson().name,
            0
        );
    }
}
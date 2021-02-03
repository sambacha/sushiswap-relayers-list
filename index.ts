// To parse this data:
//
//   import { Convert, SushiSwapRelayers } from "./file";
//
//   const sushiSwapRelayers = Convert.toSushiSwapRelayers(json);

export interface SushiSwapRelayers {
    schema:      string;
    id:          string;
    type:        string;
    definitions: Definitions;
    title:       string;
    description: string;
    items:       Items;
}

export interface Definitions {
}

export interface Items {
    id:          string;
    type:        string;
    title:       string;
    description: string;
    default:     string;
    examples:    string[];
    pattern:     string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSushiSwapRelayers(json: string): SushiSwapRelayers {
        return JSON.parse(json);
    }

    public static sushiSwapRelayersToJson(value: SushiSwapRelayers): string {
        return JSON.stringify(value);
    }
}

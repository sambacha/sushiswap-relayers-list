declare module namespace {

    export interface Definitions {
    }

    export interface Items {
        $id: string;
        type: string;
        title: string;
        description: string;
        default: string;
        examples: string[];
        pattern: string;
    }

    export interface RootObject {
        $schema: string;
        $id: string;
        type: string;
        definitions: Definitions;
        title: string;
        description: string;
        items: Items;
    }

}


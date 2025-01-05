import { Document } from '@contentful/rich-text-types';

export type Module = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
    }
}
export type Modules = ReadonlyArray<Module>;

export type ModuleQueryResult = {
    items: Modules;
}
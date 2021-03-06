import ItemModel, { ItemMetadata, ItemAttachments } from './models';

export const setItem = (state: any, item: ItemModel) => {
    state.item = item;
}

export const setItemMetadata = (state: any, metadata: ItemMetadata) => {
    const item = {...state.item, metadata};
    state.item = item;
}

export const addItemAttachments = (state: any, attachments: ItemAttachments[]) => {
    const item = {...state.item, attachments: [...(state.item.attachments||[]), ...attachments]};
    state.item = item;
}

export const setItems = (state: any, items: []) => {
    state.items = items;
}

export const setCollectionItems = (state: any, collectionItems: []) => {
    state.collectionItems = collectionItems;
}

export const setInstituteItems = (state: any, instituteItems: []) => {
    state.instituteItems = instituteItems;
}

export const setTotalItems = (state: any, totalItems: number) => {
    state.totalItems = totalItems;
}

export const setTotalCollectionItems = (state: any, totalCollectionItems: number) => {
    state.totalCollectionItems = totalCollectionItems;
}

export const setInstituteTotalItems = (state: any, totalInstituteItems: number) => {
    state.totalInstituteItems = totalInstituteItems;
};

export const setItemsByLocation = (state: any, itemsByLocation: []) => {
    state.itemsByLocation = itemsByLocation;
}

export const setTotalItemsByLocation = (state: any, totalItemsByLocation: number) => {
    state.totalItemsByLocation = totalItemsByLocation;
}
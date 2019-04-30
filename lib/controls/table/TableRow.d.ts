import { ITableAttribute } from '../../types/ITableAttribute';
import { ITableRowAction } from '../Table';
import I18next from 'i18next';
import * as React from 'react';
export interface IRowProps {
    t: I18next.TFunction;
    id: string;
    tableId: string;
    data: any;
    rawData: any;
    attributes: ITableAttribute[];
    sortAttribute: string;
    actions: ITableRowAction[];
    language: string;
    onClick: React.MouseEventHandler<any>;
    selected: boolean;
    highlighted: boolean;
    domRef?: (ref: any) => void;
    container: HTMLElement;
    visible: boolean;
    onSetVisible: (rowId: string, visible: boolean) => void;
    onHighlight: (rowId: string, highlight: boolean) => void;
}
declare const _default: React.ComponentClass<IRowProps, any>;
export default _default;

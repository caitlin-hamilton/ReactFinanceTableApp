import React from 'react';
import {ArrowUp, ArrowDown } from 'react-bootstrap-icons';

export const ASSET_CLASS_SORT_ORDER = {'Equities': 0, 'Macro': 1 ,'Credit': 2}
export const ASSET_CLASS_COLOURS = {Equities: "p-3 mb-2 bg-info text-white", Credit: "p-3 mb-2 bg-success text-white", Macro: "p-3 mb-2 bg-white text-dark"}
export const SORT_ARROW ={ 'DOWN': <ArrowDown />, 'UP': <ArrowUp />}
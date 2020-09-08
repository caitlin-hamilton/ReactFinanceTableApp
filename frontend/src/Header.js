import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import {ArrowDown, ArrowUp } from 'react-bootstrap-icons';
import {SORT_ARROW} from './config';

const HeaderSpecialColumn = (props) => (
    <OverlayTrigger
    placement="bottom"
    delay={{show: 50, hide: 100}}
overlay={<Tooltip>Click to sort {props.attribute} {props.sortIcon === 'DOWN' ? <ArrowUp /> : <ArrowDown />}</Tooltip>}
    >
    <th onClick={() => {props.sortAttribute(props.attribute)}}>{props.attribute} {SORT_ARROW[props.sortIcon]}</th>
    </OverlayTrigger>
);

  export default HeaderSpecialColumn
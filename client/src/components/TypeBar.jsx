import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { ListGroup } from 'react-bootstrap';

export const TypeBar = observer(() => {
  const {les} = useContext(Context)
    return (
        <ListGroup>
         
        </ListGroup>
    );
});

export default TypeBar;
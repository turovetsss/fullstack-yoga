import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {item} = useContext(Context)

    return (
            <ul>
                {item.brands.map(brand =>//brand - элемент из массива item.brands
                    <li key={brand.id}>{brand.name}</li>
                )}
            </ul>
    );
});

export default BrandBar;
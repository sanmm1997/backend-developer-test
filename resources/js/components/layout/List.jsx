import React from 'react';

const List = ({ items, textAlign, render }) => {
    const classes = `text-${textAlign || 'left'} mt-4`;

    return (
        items.map(item => (
            <tr key={item.id} className={classes}>
                { render(item) }
            </tr>
        ))
    )
};

export  default List;

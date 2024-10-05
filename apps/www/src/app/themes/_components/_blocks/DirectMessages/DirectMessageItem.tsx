'use client';
import React, {PropsWithChildren} from 'react';
import { ListItem } from "@andore-ui/list";

const DirectMessageItem = (props: PropsWithChildren) => {
    const {children} = props;
    return (
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
            {children}
        </ListItem>
    );
};

export default DirectMessageItem;

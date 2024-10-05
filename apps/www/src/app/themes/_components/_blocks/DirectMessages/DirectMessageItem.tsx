'use client';
import React, {PropsWithChildren} from 'react';
import { ListItem } from "@andore-ui/list";

interface DirectMessageItemProps extends PropsWithChildren {

}

const DirectMessageItem = (props: DirectMessageItemProps) => {
    const {children} = props;
    return (
        <ListItem onClick={() => {}} className={"p-2 rounded h-fit"}>
            {children}
        </ListItem>
    );
};

export default DirectMessageItem;

"use client";
import { Avatar } from "@material-tailwind-ui/avatar";
import { TextField } from "@material-tailwind-ui/text-field";
import React from 'react';

const MailHeader = () => {
    return (
        <div className={"header flex flex-row w-full min-h-14 h-14 items-center"}>
            <div className={"flex-1"}>
                <TextField placeholder={"Search mail..."} className={"h-10"}/>
            </div>
            <div className={""}>
                <Avatar/>
            </div>
        </div>
    );
};

export default MailHeader;

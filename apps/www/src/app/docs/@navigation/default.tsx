import React from "react";
import { fetchPages } from "@/app/docs/_data/pages.data";
import NavigationList from "./_components/NavigationList";

const Navigation = async () => {
    const pages = await fetchPages();
    return (
        <aside className={"hidden lg:flex flex-col gap-6 overflow-auto max-h-[calc(100vh-110px)] sticky top-[90px] box-border"}>
            <NavigationList pages={pages} />
        </aside>
    );
};

export default Navigation;

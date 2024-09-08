import React from 'react';
import Link from "next/link";
import AppIcon from "@/app/AppIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 mx-auto container">
            <div className="left-side flex items-center space-x-4 gap-3">
                <span className={'flex flex-row items-center gap-2'}>
                    <AppIcon className="w-8 h-8"/>
                    <span className={'font-semibold'}>andore/ui</span>
                </span>
                <nav>
                    <ul className="flex space-x-4 gap-3">
                        <li>
                            <Link href="/docs">Docs</Link>
                        </li>
                        <li>
                            <Link href="/components">Components</Link>
                        </li>
                        <li>
                            <Link href="/apps">Apps</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="right-side">
                <GithubIcon className={'w-6 h-6'}/>
            </div>
        </header>
    );
};

export default Header;

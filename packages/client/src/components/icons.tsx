import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord, FaEthereum, FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { VscChevronDown, VscChevronRight, VscLoading } from "react-icons/vsc";

export type IconName = 
| 'twitter'
| 'discord'
| 'github'
| 'link'
| 'eth'
| 'collapsed'
| 'expanded'
| 'loading'
;
export const Icon = ({icon}:{icon:IconName})=>{
    switch(icon){
        case 'twitter': return <AiFillTwitterCircle/>;
        case 'discord': return <FaDiscord/>;
        case 'github': return <FaGithub/>;
        case 'link': return <HiLink/>;
        case 'eth': return <FaEthereum/>;
        case 'collapsed': return <VscChevronRight/>;
        case 'expanded': return <VscChevronDown/>;
        case 'loading': return <VscLoading/>;
    }

    return <></>;
};

export const LoadingIndicator = ()=>{
    return (
        <div className='loading'>
            <Icon icon='loading'/>
        </div>
    );
};

export const IconLink = ({url, icon, iconUrl}: {url?:string, icon?: IconName, iconUrl?:string})=>{
    return (
        <>
            
        </>
    );
};
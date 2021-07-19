import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Service ops',
        path: '/ServiceOps',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'iphone-allocation',
                path: '/ServiceOps/iphone-allocation',
            },
            {
                title: 'id-status',
                path: '/ServiceOps/id-status',
            },
        ]

    },
    {
        title: 'Pimco',
        path: '/Pimco',
        //icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Team structure',
                path: '/Pimco/TeamStructure',
            },
            {
                title: 'Team Details',
                path: '/Pimco/TeamDetails',
            },
        ]

    },
    {
        title: 'Beacon',
        path: '/Beacon',
        //icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Team structure',
                path: '/Beacon/TeamStructure',
            },
            {
                title: 'id-status',
                path: '/ServiceOps/id-status',
            },
        ]
    },
    {
        title: 'Tata AIG',
        path: '/tata AIG',
    }
]


import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';

export const navRoute = [
  { path: "/", key: "general", category: "general", country: "us" },
  { path: "/news/general", key: "general", category: "general", country: "us" },
  { path: "/news/world", key: "world", category: "world", country: "us" },
  { path: "/news/nation", key: "nation", category: "nation", country: "us" },
  { path: "/news/business", key: "business", category: "business", country: "us" },
  { path: "/news/technology", key: "technology", category: "technology", country: "us" },
  { path: "/news/entertainment", key: "entertainment", category: "entertainment",country: "us" },
  { path: "/news/sports", key: "sports", category: "sports", country: "us" },
  { path: "/news/science", key: "science", category: "science", country: "us" },
  { path: "/news/health", key: "health", category: "health", country: "us" },
  { path: "/about", key: "about"}
];

export const navMap = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'News',
    path: '#',
    icon: <ImIcons.ImNewspaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
            title: 'World',
            path: '/news/world',
            icon: <GiIcons.GiWorld />,
            cName: 'sub-nav'
        },
        {
            title: 'Nation',
            path: '/news/nation',
            icon: <SiIcons.SiUnitednations />
        },
        {
            title: 'Business',
            path: '/news/business',
            icon: <MdIcons.MdBusinessCenter />
        },
        {
            title: 'Technology',
            path: '/news/technology',
            icon: <GrIcons.GrTechnology />
        },
        {
            title: 'Entertainment',
            path: '/news/entertainment',
            icon: <MdIcons.MdMovieFilter />
        },
        {
            title: 'Sports',
            path: '/news/sports',
            icon: <GrIcons.GrRun />
        },
        {
            title: 'Science',
            path: '/news/science',
            icon: <MdIcons.MdOutlineScience />
        },
        {
            title: 'Health',
            path: '/news/health',
            icon: <GiIcons.GiHealthNormal />
        }
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <FcIcons.FcAbout />
  }
];


import React from 'react';
import Facebook from './icons/Facebook';
import Github from './icons/Github';
import Twitter from './icons/Twitter';
import Instagram from './icons/Instagram';
import Youtube from './icons/Youtube';

export default [
  {
    url: 'https://github.com/JSConfArmenia/',
    key: 'github',
    component: <Github />,
  },
  {
    url: 'https://www.facebook.com/jsconf.am/',
    key: 'facebook',
    component: <Facebook />,
  },
  {
    url: 'https://twitter.com/jsconf_am/',
    key: 'twitter',
    component: <Twitter />,
  },
  {
    url: 'https://www.instagram.com/jsconf.am/',
    key: 'instagram',
    component: <Instagram />,
  },
  {
    url: 'https://www.youtube.com/channel/UCkzEOKU959F6_T0OaQBH4VQ/featured',
    key: 'youtube',
    component: <Youtube />,
  },
];

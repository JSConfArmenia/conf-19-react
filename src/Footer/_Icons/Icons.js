import React from 'react';
import Facebook from './Facebook';
import Github from './Github';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Youtube from './Youtube';

export default [
  {
    url: 'https://github.com/JSConfArmenia/',
    key: 'github',
    component: <Github />,
  },
  {
    url: 'https://www.facebook.com/reactconf.am/',
    key: 'facebook',
    component: <Facebook />,
  },
  {
    url: 'https://twitter.com/ReactConfAM',
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

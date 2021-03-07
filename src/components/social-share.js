import React from 'react';
import { TwitterShareButton, FacebookShareButton, PocketShareButton, RedditShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, PocketIcon, RedditIcon } from 'react-share';

import { useSiteMetadata } from './useSiteMetadata';

const SocialShare = ({ frontmatter, ...props }) => {
    const { siteUrl } = useSiteMetadata();
    const url = siteUrl + '/' + frontmatter.slug;

    return (
        <>
            <TwitterShareButton url={url} title={frontmatter.title} via="compartimoss_com">
                <TwitterIcon size={32} />
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={frontmatter.title}>
                <FacebookIcon size={32} />
            </FacebookShareButton>
            <PocketShareButton url={url} title={frontmatter.title}>
                <PocketIcon size={32} />
            </PocketShareButton>
            <RedditShareButton url={url} title={frontmatter.title}>
                <RedditIcon size={32} />
            </RedditShareButton>
        </>
    );
};

export default SocialShare;
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';

const { site_title, site_description } = site;

export async function GET(context) {
  const posts = await getCollection('stories');
  return rss({
    title: site_title,
    description: site_description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/stories/${post.slug}/`,
    })),
  });
}

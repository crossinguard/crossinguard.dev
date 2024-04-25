import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../data/site.json';

const { website } = site;

export async function GET(context) {
  const posts = await getCollection('stories');
  return rss({
    title: website.title,
    description: website.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/stories/${post.slug}/`,
    })),
  });
}

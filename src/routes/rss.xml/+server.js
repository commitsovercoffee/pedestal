import { Feed } from 'feed';

export const prerender = true;

export async function GET() {
	const feed = new Feed({
		title: 'Ana Baker',
		description: 'Ana Baker | Blog',
		id: 'https://ana.codes',
		link: 'https://ana.codes',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		copyright: `Copyright ${new Date().getFullYear().toString()}, Ana Baker`,
		generator: '💾', // optional, default = 'Feed for Node.js'
		feedLinks: {
			rss: 'https://ana.codes/rss.xml'
		},
		author: {
			name: 'Ana Baker',
			email: 'ana.baker@gmail.com',
			link: 'https://ana.codes'
		},
		ttl: 60
	});

	const modules = import.meta.glob('/src/posts/*.md', { eager: true });
	const posts = Object.entries(modules).map(([path, post]) => {
		const slug = path.split('/').pop().replace('.md', '');
		return { slug, ...(post.metadata ?? {}) };
	});

	for (const post of posts) {
		feed.addItem({
			title: post.title,
			description: post.desc,
			content: `<p>${post.desc}</p>`,
			link: `https://ana.codes/blog/${post.slug}`,
			author: [
				{
					name: 'Ana Baker',
					email: 'ana.baker@gmail.com',
					link: 'https://ana.codes'
				}
			],
			date: new Date(post.date)
		});
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}

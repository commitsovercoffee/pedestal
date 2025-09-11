import { Feed } from 'feed';
export const prerender = true;

export async function GET() {
	const feed = new Feed({
		title: 'Your Name',
		description: 'Your Name | Blog',
		id: 'https://your-domain.com',
		link: 'https://your-domain.com',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		copyright: `Copyright ${new Date().getFullYear().toString()}, Your Name`,
		generator: '💾', // optional, default = 'Feed for Node.js'
		feedLinks: {
			rss: 'https://your-domain.com/rss.xml'
		},
		author: {
			name: 'Your Name',
			email: 'your-mail@gmail.com',
			link: 'https://your-domain.com'
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
			link: `https://your-domain.com/blog/${post.slug}`,
			author: [
				{
					name: 'Your Name',
					email: 'your-mail@gmail.com',
					link: 'https://your-domain.com'
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

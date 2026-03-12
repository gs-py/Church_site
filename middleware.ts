import songsData from './songs-data.json';

const SITE_URL = 'https://zbcmysuru.in';
const SITE_NAME = 'Zion Brethren Church Mysore';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const BOT_AGENTS = [
  'whatsapp',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'telegrambot',
  'discordbot',
  'pinterest',
  'embedly',
];

function isBot(ua: string): boolean {
  const lower = ua.toLowerCase();
  return BOT_AGENTS.some((bot) => lower.includes(bot));
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function ogHtml(title: string, description: string, url: string): string {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"/>
<title>${t}</title>
<meta name="description" content="${d}"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="${escapeHtml(url)}"/>
<meta property="og:title" content="${t}"/>
<meta property="og:description" content="${d}"/>
<meta property="og:image" content="${OG_IMAGE}"/>
<meta property="og:site_name" content="${SITE_NAME}"/>
<meta property="og:locale" content="en_IN"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${t}"/>
<meta name="twitter:description" content="${d}"/>
<meta name="twitter:image" content="${OG_IMAGE}"/>
</head>
<body><h1>${t}</h1><p>${d}</p></body>
</html>`;
}

export default function middleware(request: Request): Response | undefined {
  const ua = request.headers.get('user-agent') || '';
  if (!isBot(ua)) return undefined;

  const url = new URL(request.url);
  const path = url.pathname;

  // Individual song page
  const songMatch = path.match(/^\/songbook\/song\/(\d+)$/);
  if (songMatch) {
    const num = parseInt(songMatch[1]);
    const song = (songsData as { number: number; title: string; englishTitle: string }[])
      .find((s) => s.number === num);
    if (song) {
      const title = `${song.title}${song.englishTitle ? ` - ${song.englishTitle}` : ''} | Song #${song.number} | ${SITE_NAME}`;
      const description = `Lyrics for "${song.title}"${song.englishTitle ? ` (${song.englishTitle})` : ''} - Song #${song.number} from the Christian Brethren Songbook, Hootagalli Brethren Assembly, Mysore. ${song.englishTitle ? 'Kannada-English translated hymn.' : 'Kannada Christian hymn.'}`;
      return new Response(ogHtml(title, description, `${SITE_URL}${path}`), {
        headers: { 'content-type': 'text/html; charset=utf-8' },
      });
    }
  }

  // Songbook listing pages
  if (path === '/songbook' || path === '/songbook/kannada' || path === '/songbook/english') {
    const titles: Record<string, { title: string; description: string }> = {
      '/songbook': {
        title: `Songbook - Kannada & English Christian Hymns | Brethren Assembly | ${SITE_NAME}`,
        description: 'Browse Kannada and English translated praise songs and hymns from the Christian Brethren songbook. Searchable Kannada-English hymn book used in Brethren Assembly worship at Hootagalli, Mysore.',
      },
      '/songbook/kannada': {
        title: `Kannada Christian Songs - Brethren Assembly Praise Songbook | ${SITE_NAME}`,
        description: 'Kannada praise songs and hymns from the Christian Brethren songbook. Kannada translated worship songs with full lyrics from Hootagalli Brethren Assembly, Mysore.',
      },
      '/songbook/english': {
        title: `English Christian Hymns - Brethren Assembly Praise Songbook | ${SITE_NAME}`,
        description: 'English hymns and praise songs from the Christian Brethren songbook. English translated worship songs with lyrics from Hootagalli Brethren Assembly, Mysore.',
      },
    };
    const meta = titles[path];
    return new Response(ogHtml(meta.title, meta.description, `${SITE_URL}${path}`), {
      headers: { 'content-type': 'text/html; charset=utf-8' },
    });
  }

  return undefined;
}

export const config = {
  matcher: ['/songbook', '/songbook/:path*'],
};

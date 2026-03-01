import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const content = readFileSync('src/data/songbook.ts', 'utf-8');
const songs = [];
const regex = /number:\s*(\d+),\s*\n\s*title:\s*'([^']*)',\s*\n\s*englishTitle:\s*'([^']*)'/g;

let match;
while ((match = regex.exec(content)) !== null) {
  songs.push({
    number: parseInt(match[1]),
    title: match[2],
    englishTitle: match[3],
  });
}

mkdirSync('netlify/edge-functions', { recursive: true });
writeFileSync('netlify/edge-functions/songs-data.json', JSON.stringify(songs));
console.log(`Generated songs-data.json with ${songs.length} songs`);

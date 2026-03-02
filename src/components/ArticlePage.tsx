import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Article not found</p>
          <Link to="/" className="text-blue-600 hover:underline text-sm font-medium">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero header */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: article.tint, opacity: 0.88 }}
        />
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 md:px-16 md:pb-14">
          <Link
            to="/"
            className="text-white/60 hover:text-white text-sm font-medium mb-6 flex items-center gap-1.5 w-fit transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3">
            {article.category} — {article.date}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        {article.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="mb-10"
          >
            {section.heading && (
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3 mt-2">
                {section.heading}
              </h2>
            )}
            {section.text && (
              <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                {section.text}
              </p>
            )}
            {section.verse && (
              <blockquote className="border-l-4 border-blue-400 pl-4 my-4 text-gray-500 italic text-sm leading-relaxed">
                {section.verse}
              </blockquote>
            )}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-gray-700 text-[1.05rem]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
            {article.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

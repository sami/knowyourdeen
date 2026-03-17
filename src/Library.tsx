import { useState, useMemo } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { questionsDB, CATEGORIES } from './data/questions';
import { t } from './i18n/translations';
import type { Lang } from './i18n/translations';

export default function Library({ lang, onBack }: { lang: Lang; onBack: () => void }) {
  const isRTL = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  const currentQuestions = useMemo(
    () =>
      questionsDB.filter((q) => {
        const cat = CATEGORIES.find((c) => c.id === activeCategory);
        return cat && q.id >= cat.startId && q.id <= cat.endId;
      }),
    [activeCategory]
  );

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in flex flex-col h-[85vh]">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl flex-1 flex flex-col mb-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-100/50">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-teal-600" />
            <h2 className="text-3xl font-extrabold text-teal-800">{t('libraryTitle', lang)}</h2>
          </div>
          <button
            onClick={onBack}
            className={`flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-xl transition-colors font-bold ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            {t('back', lang)}
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-6 pb-2 hide-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedQuestionId(null);
              }}
              className={`px-5 py-2.5 rounded-2xl font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md scale-105'
                  : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
              }`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {isRTL ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar" dir={isRTL ? 'rtl' : 'ltr'}>
          {currentQuestions.map((q) => {
            const isExpanded = expandedQuestionId === q.id;
            return (
              <div
                key={q.id}
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-teal-400 bg-white shadow-lg' : 'border-teal-100/50 bg-white/50 hover:border-teal-200'
                }`}
              >
                <button
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="w-full text-left flex items-start justify-between p-4"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  aria-expanded={isExpanded}
                >
                  <div className="flex gap-3 text-left">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                      {q.id}
                    </span>
                    <h3 className={`font-bold text-gray-800 mt-1 ${isRTL ? 'text-right' : 'text-left'}`}>{q[lang].q}</h3>
                  </div>
                  <div className="mt-1 ml-2 mr-2 text-teal-500 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 bg-teal-50/50 border-t border-teal-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {Object.entries(q[lang].options).map(([letter, text]) => {
                        const isCorrect = letter === q[lang].ans;
                        return (
                          <div
                            key={letter}
                            className={`p-3 rounded-xl border ${
                              isCorrect ? 'bg-green-100 border-green-300 text-green-900 font-bold' : 'bg-white border-gray-200 text-gray-600'
                            }`}
                          >
                            <span className="mr-2 ml-2">{letter} -</span>
                            {text}
                            {isCorrect && (
                              <span className={`${isRTL ? 'float-left' : 'float-right'} text-green-600`}>
                                ✓
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className={`font-bold text-teal-800 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('explanation', lang)}
                      </p>
                      <p className={`text-gray-700 leading-relaxed text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{q[lang].exp}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type Lang = 'ar' | 'en';

const translations = {
  title: { ar: "اِعْرِفْ دِينَك", en: "Know Your Deen" },
  subtitle: { ar: "تَحَدِّي الْأَسْئِلَةِ الدِّينِيَّةِ", en: "Challenge your Islamic knowledge" },
  setupPlayers: { ar: "عَدَدُ اللَّاعِبِينَ:", en: "Number of Players:" },
  startBtn: { ar: "اِبْدَأ اللَّعِبَ", en: "Start Game" },
  namePlaceholder: { ar: "اِسْمُ اللَّاعِبِ", en: "Player Name" },
  turnOf: { ar: "دَوْرُ:", en: "Turn:" },
  qNum: { ar: "سُؤَال", en: "Question" },
  score: { ar: "النِّقَاط", en: "Score" },
  correct: { ar: "إِجَابَةٌ صَحِيحَةٌ! أَحْسَنْتَ", en: "Correct Answer! Well done" },
  wrong: { ar: "إِجَابَةٌ خَاطِئَةٌ", en: "Incorrect Answer" },
  correctIs: { ar: "الْإِجَابَةُ الصَّحِيحَةُ هِيَ:", en: "The correct answer is:" },
  nextBtn: { ar: "التَّالِي", en: "Next" },
  gameOver: { ar: "انْتَهَتِ اللَّعْبَةُ!", en: "Game Over!" },
  playAgain: { ar: "اِلْعَبْ مَرَّةً أُخْرَى", en: "Play Again" },
  resetTitle: { ar: "إِعَادَةُ تَعْيِينِ اللَّعْبَةِ؟", en: "Reset Game?" },
  resetMessage: { ar: "سَيَتِمُّ مَسْحُ جَمِيعِ النِّقَاطِ وَالتَّقَدُّمِ. هَلْ أَنْتَ مُتَأَكِّدٌ؟", en: "All scores and progress will be lost. Are you sure?" },
  resetConfirm: { ar: "نَعَمْ، اِمْسَحْ", en: "Yes, Reset" },
  cancel: { ar: "إِلْغَاء", en: "Cancel" },
  support: { ar: "اُدْعُمْ", en: "Support" },
  libraryTitle: { ar: "مكتبة الأسئلة", en: "Questions Library" },
  libraryLabel: { ar: "مكتبة الأسئلة", en: "Questions Library" },
  back: { ar: "عودة", en: "Back" },
  explanation: { ar: "التفسير:", en: "Explanation:" },
  resetGameLabel: { ar: "إعادة تعيين اللعبة", en: "Reset Game" },
  switchLangLabel: { ar: "English (تبديل اللغة)", en: "الْعَرَبِيَّة (Switch Language)" },
  switchLangText: { ar: "English", en: "الْعَرَبِيَّة" },
  defaultPlayer: { ar: "لاعب", en: "Player" },
  selectPlayerLabel: { ar: "اختيار", en: "Select" },
  players: { ar: "لاعب", en: "player" },
  source: { ar: "المصدر", en: "Source" },
  basmala: { ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", en: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" },
  errorTitle: { ar: "حدث خطأ", en: "Something went wrong" },
  errorReload: { ar: "إعادة تحميل", en: "Reload" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}

export default translations;

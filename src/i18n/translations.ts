export type Lang = 'ar' | 'en';

const translations = {
  title: { ar: "اِعْرِفْ دِينَكَ", en: "Know Your Deen" },
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
  basmala: { ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", en: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" },
  errorTitle: { ar: "حدث خطأ", en: "Something went wrong" },
  errorReload: { ar: "إعادة تحميل", en: "Reload" },
  share: { ar: "مشاركة", en: "Share" },
  shareWhatsApp: { ar: "واتساب", en: "WhatsApp" },
  shareCopyLink: { ar: "نسخ الرابط", en: "Copy Link" },
  copied: { ar: "تم النسخ!", en: "Copied!" },
  shareScoreMsg: { ar: "حصلت على {score}/{total} في اعرف دينك! اختبر معلوماتك الإسلامية: https://knowyourdeen.co.uk", en: "I scored {score}/{total} on Know Your Deen! Test your Islamic knowledge: https://knowyourdeen.co.uk" },
  shareAppMsg: { ar: "تحدَّ معلوماتك الإسلامية مع اعرف دينك! https://knowyourdeen.co.uk", en: "Challenge your Islamic knowledge with Know Your Deen! https://knowyourdeen.co.uk" },

  // Mode select
  playLocally: { ar: "اللعب محلياً", en: "Play Locally" },
  playOnline: { ar: "اللعب أونلاين", en: "Play Online" },

  // Online setup
  createRoom: { ar: "إنشاء غرفة", en: "Create Room" },
  joinRoom: { ar: "انضم لغرفة", en: "Join Room" },
  enterRoomCode: { ar: "أدخل كود الغرفة", en: "Enter Room Code" },
  yourName: { ar: "اسمك", en: "Your Name" },
  or: { ar: "أو", en: "or" },

  // Lobby
  roomCode: { ar: "كود الغرفة", en: "Room Code" },
  waitingForPlayers: { ar: "في انتظار اللاعبين...", en: "Waiting for players..." },
  waitingForHost: { ar: "في انتظار المضيف لبدء اللعبة...", en: "Waiting for host to start..." },
  questionsPerPlayerLabel: { ar: "الأسئلة لكل لاعب", en: "Questions per Player" },
  shareRoomCode: { ar: "شارك عبر واتساب", en: "Share via WhatsApp" },
  leaveRoom: { ar: "مغادرة الغرفة", en: "Leave Room" },
  you: { ar: "أنت", en: "You" },

  // Online playing
  yourTurn: { ar: "دورك!", en: "Your turn!" },
  waitingForTurn: { ar: "في انتظار {name}...", en: "Waiting for {name}..." },
  timedOut: { ar: "انتهى الوقت!", en: "Time's up!" },
  downloadScoreCard: { ar: "حفظ بطاقة النتيجة", en: "Download Score Card" },

  // Online errors
  reconnecting: { ar: "جاري إعادة الاتصال...", en: "Reconnecting..." },
  gameInProgress: { ar: "اللعبة جارية بالفعل", en: "Game already in progress" },
  roomFull: { ar: "الغرفة ممتلئة", en: "Room is full" },
  notHost: { ar: "فقط المضيف يمكنه فعل ذلك", en: "Only the host can do that" },
  needMorePlayers: { ar: "تحتاج لاعبين اثنين على الأقل", en: "Need at least 2 players" },
  connectionLost: { ar: "انقطع الاتصال", en: "Connection lost" },
  removedFromRoom: { ar: "تمت إزالتك من الغرفة بسبب انقطاع الاتصال", en: "You were removed from the room due to disconnection" },
  rejoinRoom: { ar: "العودة للغرفة", en: "Rejoin Room" },
  copyImage: { ar: "نسخ الصورة", en: "Copy Image" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}

export default translations;

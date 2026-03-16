export interface QuestionData {
  id: number;
  ar: {
    q: string;
    options: Record<string, string>;
    ans: string;
    exp: string;
    link: string;
  };
  en: {
    q: string;
    options: Record<string, string>;
    ans: string;
    exp: string;
    link: string;
  };
}

export const questionsDB: QuestionData[] = [
  {
    id: 1,
    ar: { q: "في أي مدينة وُلد النبي محمد ﷺ؟", options: { "أ": "المدينة المنورة", "ب": "مكة المكرمة", "ج": "القدس", "د": "الطائف" }, ans: "ب", exp: "وُلد النبي محمد ﷺ في مكة المكرمة في عام الفيل (حوالي 570 م).", link: "https://islamqa.info/ar/answers/125529" },
    en: { q: "In which city was the Prophet Muhammad (PBUH) born?", options: { "A": "Madinah", "B": "Makkah", "C": "Jerusalem", "D": "Ta'if" }, ans: "B", exp: "The Prophet Muhammad (PBUH) was born in Makkah in the Year of the Elephant (approx. 570 CE).", link: "https://islamqa.info/en/answers/125529" }
  },
  {
    id: 2,
    ar: { q: "ما هي أطول سورة في القرآن الكريم؟", options: { "أ": "سورة البقرة", "ب": "سورة آل عمران", "ج": "سورة النساء", "د": "سورة الكهف" }, ans: "أ", exp: "سورة البقرة هي أطول سورة في القرآن الكريم، وتحتوي على 286 آية.", link: "https://quran.com/2" },
    en: { q: "What is the longest Surah in the Noble Qur'an?", options: { "A": "Surah Al-Baqarah", "B": "Surah Ali 'Imran", "C": "Surah An-Nisa", "D": "Surah Al-Kahf" }, ans: "A", exp: "Surah Al-Baqarah is the longest chapter in the Qur'an, consisting of 286 verses.", link: "https://quran.com/2" }
  },
  {
    id: 3,
    ar: { q: "من هو الصحابي الذي لُقب بـ 'سيف الله المسلول'؟", options: { "أ": "عمر بن الخطاب (رضي الله عنه)", "ب": "علي بن أبي طالب (رضي الله عنه)", "ج": "خالد بن الوليد (رضي الله عنه)", "د": "حمزة بن عبد المطلب (رضي الله عنه)" }, ans: "ج", exp: "خالد بن الوليد (رضي الله عنه) لُقب بهذا اللقب لمهارته العسكرية الفذة وشجاعته.", link: "https://islamqa.info/ar/answers/100512" },
    en: { q: "Which Companion (RA) was given the title 'The Drawn Sword of Allah'?", options: { "A": "Umar ibn Al-Khattab (RA)", "B": "Ali ibn Abi Talib (RA)", "C": "Khalid ibn Al-Walid (RA)", "D": "Hamza ibn Abdul-Muttalib (RA)" }, ans: "C", exp: "Khalid ibn Al-Walid (RA) was given this title by the Prophet (PBUH) due to his unmatched military brilliance.", link: "https://islamqa.info/en/answers/100512" }
  },
  {
    id: 4,
    ar: { q: "كم عدد أركان الإيمان؟", options: { "أ": "5", "ب": "6", "ج": "7", "د": "4" }, ans: "ب", exp: "أركان الإيمان ستة: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.", link: "https://islamqa.info/ar/answers/107144" },
    en: { q: "How many Pillars of Iman (Faith) are there?", options: { "A": "5", "B": "6", "C": "7", "D": "4" }, ans: "B", exp: "There are six pillars of Iman: Belief in Allah (SWT), His Angels, His Books, His Messengers, the Last Day, and Divine Decree.", link: "https://islamqa.info/en/answers/107144" }
  },
  {
    id: 5,
    ar: { q: "في أي غزوة استُشهد حمزة بن عبد المطلب (رضي الله عنه)؟", options: { "أ": "غزوة بدر", "ب": "غزوة أحد", "ج": "غزوة الخندق", "د": "غزوة تبوك" }, ans: "ب", exp: "استُشهد أسد الله حمزة بن عبد المطلب في غزوة أحد سنة 3 هـ.", link: "https://islamqa.info/ar/answers/148054" },
    en: { q: "In which battle was Hamza ibn Abdul-Muttalib (RA) martyred?", options: { "A": "Battle of Badr", "B": "Battle of Uhud", "C": "Battle of Khandaq", "D": "Battle of Tabuk" }, ans: "B", exp: "The Lion of Allah, Hamza (RA), was martyred during the Battle of Uhud in 3 AH.", link: "https://islamqa.info/en/answers/148054" }
  },
  {
    id: 6,
    ar: { q: "أي سورة تُعرف بـ 'قلب القرآن'؟", options: { "أ": "سورة الرحمن", "ب": "سورة الملك", "ج": "سورة يس", "د": "سورة الفاتحة" }, ans: "ج", exp: "سورة يس تُسمى قلب القرآن لما تحتويه من مواعظ وتأكيد على التوحيد والبعث.", link: "https://quran.com/36" },
    en: { q: "Which Surah is famously known as the 'Heart of the Qur'an'?", options: { "A": "Surah Ar-Rahman", "B": "Surah Al-Mulk", "C": "Surah Ya-Sin", "D": "Surah Al-Fatihah" }, ans: "C", exp: "Surah Ya-Sin is referred to as the heart of the Qur'an due to its profound themes of monotheism and resurrection.", link: "https://quran.com/36" }
  },
  {
    id: 7,
    ar: { q: "من كان أول مؤذن في الإسلام؟", options: { "أ": "أبو بكر الصديق (رضي الله عنه)", "ب": "بلال بن رباح (رضي الله عنه)", "ج": "عثمان بن عفان (رضي الله عنه)", "د": "زيد بن حارثة (رضي الله عنه)" }, ans: "ب", exp: "بلال بن رباح (رضي الله عنه) اختاره النبي ﷺ لنداوة صوته وإيمانه الراسخ.", link: "https://islamqa.info/ar/answers/110595" },
    en: { q: "Who was the first Mu'adhin (caller to prayer) in Islam?", options: { "A": "Abu Bakr As-Siddiq (RA)", "B": "Bilal ibn Rabah (RA)", "C": "Uthman ibn Affan (RA)", "D": "Zayd ibn Harithah (RA)" }, ans: "B", exp: "Bilal ibn Rabah (RA) was chosen by the Prophet (PBUH) for his beautiful voice and unwavering faith.", link: "https://islamqa.info/en/answers/110595" }
  },
  {
    id: 8,
    ar: { q: "ما هي السورة التي لا تبدأ بـ 'بسم الله الرحمن الرحيم'؟", options: { "أ": "سورة التوبة", "ب": "سورة الأنفال", "ج": "سورة يونس", "د": "سورة هود" }, ans: "أ", exp: "سورة التوبة لا تبدأ بالبسملة لأنها نزلت بالبراءة من المشركين.", link: "https://islamqa.info/ar/answers/11175" },
    en: { q: "Which Surah does NOT begin with 'Bismillah ir-Rahman ir-Rahim'?", options: { "A": "Surah At-Tawbah", "B": "Surah Al-Anfal", "C": "Surah Yunus", "D": "Surah Hud" }, ans: "A", exp: "Surah At-Tawbah does not start with the Basmalah as it was revealed containing warnings and severing ties with polytheists.", link: "https://islamqa.info/en/answers/11175" }
  },
  {
    id: 9,
    ar: { q: "ما هو الشهر الذي أُنزل فيه القرآن؟", options: { "أ": "رجب", "ب": "شعبان", "ج": "رمضان", "د": "محرم" }, ans: "ج", exp: "{شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ} - بدأ نزول القرآن في ليلة القدر في شهر رمضان.", link: "https://quran.com/2/185" },
    en: { q: "In which Islamic month was the Qur'an first revealed?", options: { "A": "Rajab", "B": "Sha'ban", "C": "Ramadan", "D": "Muharram" }, ans: "C", exp: "The Qur'an was first revealed on Laylat al-Qadr (The Night of Decree) during the month of Ramadan.", link: "https://quran.com/2/185" }
  },
  {
    id: 10,
    ar: { q: "من هي أول زوجة للنبي محمد ﷺ؟", options: { "أ": "عائشة بنت أبي بكر (رضي الله عنها)", "ب": "حفصة بنت عمر (رضي الله عنها)", "ج": "خديجة بنت خويلد (رضي الله عنها)", "د": "أم سلمة (رضي الله عنها)" }, ans: "ج", exp: "خديجة بنت خويلد (رضي الله عنها) كانت أول زوجة وأول من آمن بالنبي ﷺ من النساء.", link: "https://islamqa.info/ar/answers/10050" },
    en: { q: "Who was the first wife of the Prophet Muhammad (PBUH)?", options: { "A": "Aisha bint Abi Bakr (RA)", "B": "Hafsah bint Umar (RA)", "C": "Khadijah bint Khuwaylid (RA)", "D": "Umm Salamah (RA)" }, ans: "C", exp: "Khadijah bint Khuwaylid (RA) was his first wife and the first woman to accept Islam.", link: "https://islamqa.info/en/answers/10050" }
  },
  {
    id: 11,
    ar: { q: "ما هي العبادة التي تُعرف بـ 'عماد الدين'؟", options: { "أ": "الزكاة", "ب": "الصلاة", "ج": "الصوم", "د": "الحج" }, ans: "ب", exp: "الصلاة هي عماد الدين، من أقامها فقد أقام الدين.", link: "https://islamqa.info/ar/answers/21524" },
    en: { q: "Which act of worship is known as the 'Pillar of the Religion'?", options: { "A": "Zakat (Charity)", "B": "Salah (Prayer)", "C": "Sawm (Fasting)", "D": "Hajj (Pilgrimage)" }, ans: "B", exp: "Salah (Prayer) is the foundation of a Muslim's faith and the second pillar of Islam.", link: "https://islamqa.info/en/answers/21524" }
  },
  {
    id: 12,
    ar: { q: "أين تقع قبلة المسلمين الأولى؟", options: { "أ": "الكعبة المشرفة", "ب": "المسجد النبوي", "ج": "المسجد الأقصى", "د": "مسجد قباء" }, ans: "ج", exp: "المسجد الأقصى في القدس كان القبلة الأولى للمسلمين قبل أن تتغير إلى الكعبة.", link: "https://islamqa.info/ar/answers/118680" },
    en: { q: "Where was the first Qiblah (direction of prayer) for Muslims?", options: { "A": "The Kaaba", "B": "Al-Masjid An-Nabawi", "C": "Al-Masjid Al-Aqsa", "D": "Masjid Quba" }, ans: "C", exp: "Al-Masjid Al-Aqsa in Jerusalem was the initial direction of prayer before it was changed to the Kaaba in Makkah.", link: "https://islamqa.info/en/answers/118680" }
  },
  {
    id: 13,
    ar: { q: "كم عدد سور القرآن الكريم؟", options: { "أ": "110", "ب": "112", "ج": "114", "د": "120" }, ans: "ج", exp: "يحتوي القرآن الكريم على 114 سورة تبدأ بالفاتحة وتختم بالناس.", link: "https://quran.com/" },
    en: { q: "How many Surahs are there in the Qur'an?", options: { "A": "110", "B": "112", "C": "114", "D": "120" }, ans: "C", exp: "The Qur'an contains 114 Surahs, beginning with Al-Fatihah and ending with An-Nas.", link: "https://quran.com/" }
  },
  {
    id: 14,
    ar: { q: "ما هي أقصر سورة في القرآن الكريم؟", options: { "أ": "سورة الكوثر", "ب": "سورة الإخلاص", "ج": "سورة الفلق", "د": "سورة الناس" }, ans: "أ", exp: "سورة الكوثر هي أقصر سور القرآن الكريم وتتكون من 3 آيات قصيرة.", link: "https://quran.com/108" },
    en: { q: "What is the shortest Surah in the Qur'an?", options: { "A": "Surah Al-Kawthar", "B": "Surah Al-Ikhlas", "C": "Surah Al-Falaq", "D": "Surah An-Nas" }, ans: "A", exp: "Surah Al-Kawthar is the shortest chapter in the Qur'an, consisting of only 3 short verses.", link: "https://quran.com/108" }
  },
  {
    id: 15,
    ar: { q: "كم عدد أجزاء القرآن الكريم؟", options: { "أ": "20", "ب": "30", "ج": "25", "د": "40" }, ans: "ب", exp: "قُسم القرآن الكريم إلى 30 جزءاً لتسهيل قراءته وحفظه.", link: "https://quran.com/" },
    en: { q: "How many Juz (parts) is the Qur'an divided into?", options: { "A": "20", "B": "30", "C": "25", "D": "40" }, ans: "B", exp: "The Qur'an is divided into 30 Juz (parts) to facilitate reading and memorisation.", link: "https://quran.com/" }
  },
  {
    id: 16,
    ar: { q: "أي سورة تعدل ثلث القرآن؟", options: { "أ": "سورة الفاتحة", "ب": "سورة الملك", "ج": "سورة يس", "د": "سورة الإخلاص" }, ans: "د", exp: "سورة الإخلاص تعدل ثلث القرآن كما أخبر النبي ﷺ في الحديث الصحيح.", link: "https://sunnah.com/muslim:812" },
    en: { q: "Which Surah is equivalent to one-third of the Qur'an?", options: { "A": "Surah Al-Fatihah", "B": "Surah Al-Mulk", "C": "Surah Ya-Sin", "D": "Surah Al-Ikhlas" }, ans: "D", exp: "Surah Al-Ikhlas is equivalent to one-third of the Qur'an as stated by the Prophet (PBUH) in an authentic hadith.", link: "https://sunnah.com/muslim:812" }
  },
  {
    id: 17,
    ar: { q: "ما أول كلمة نزلت من القرآن الكريم؟", options: { "أ": "اقرأ", "ب": "قل", "ج": "بسم", "د": "الحمد" }, ans: "أ", exp: "أول ما نزل من القرآن {اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ} في غار حراء.", link: "https://quran.com/96" },
    en: { q: "What was the first word of the Qur'an revealed to the Prophet (PBUH)?", options: { "A": "Iqra (Read)", "B": "Qul (Say)", "C": "Bismillah", "D": "Alhamdulillah" }, ans: "A", exp: "The first word revealed was 'Iqra' (Read) from Surah Al-Alaq in the Cave of Hira.", link: "https://quran.com/96" }
  },
  {
    id: 18,
    ar: { q: "كم عدد آيات سورة الفاتحة؟", options: { "أ": "5", "ب": "6", "ج": "7", "د": "8" }, ans: "ج", exp: "سورة الفاتحة تتكون من 7 آيات وتُسمى أيضاً السبع المثاني.", link: "https://quran.com/1" },
    en: { q: "How many verses are in Surah Al-Fatihah?", options: { "A": "5", "B": "6", "C": "7", "D": "8" }, ans: "C", exp: "Surah Al-Fatihah has 7 verses and is also known as 'The Seven Oft-Repeated Verses'.", link: "https://quran.com/1" }
  },
  {
    id: 19,
    ar: { q: "من هو النبي الأكثر ذكراً بالاسم في القرآن الكريم؟", options: { "أ": "إبراهيم عليه السلام", "ب": "موسى عليه السلام", "ج": "عيسى عليه السلام", "د": "نوح عليه السلام" }, ans: "ب", exp: "موسى عليه السلام ذُكر بالاسم في القرآن أكثر من 130 مرة.", link: "https://quran.com/" },
    en: { q: "Which prophet is mentioned by name the most in the Qur'an?", options: { "A": "Ibrahim (AS)", "B": "Musa (AS)", "C": "Isa (AS)", "D": "Nuh (AS)" }, ans: "B", exp: "Prophet Musa (Moses, AS) is mentioned by name over 130 times in the Qur'an.", link: "https://quran.com/" }
  },
  {
    id: 20,
    ar: { q: "في أي سورة ذُكرت البسملة في وسط آية وليس في بدايتها فقط؟", options: { "أ": "سورة الفاتحة", "ب": "سورة البقرة", "ج": "سورة النمل", "د": "سورة الرحمن" }, ans: "ج", exp: "في سورة النمل الآية 30 ذُكرت البسملة في رسالة النبي سليمان عليه السلام إلى ملكة سبأ.", link: "https://quran.com/27/30" },
    en: { q: "In which Surah does 'Bismillah' appear within a verse (not just at the start)?", options: { "A": "Surah Al-Fatihah", "B": "Surah Al-Baqarah", "C": "Surah An-Naml", "D": "Surah Ar-Rahman" }, ans: "C", exp: "In Surah An-Naml (27:30), the Bismillah appears in Prophet Sulayman's (AS) letter to the Queen of Sheba.", link: "https://quran.com/27/30" }
  },
  {
    id: 21,
    ar: { q: "في أي سورة توجد آية الكرسي؟", options: { "أ": "سورة البقرة", "ب": "سورة آل عمران", "ج": "سورة النساء", "د": "سورة المائدة" }, ans: "أ", exp: "آية الكرسي هي الآية 255 من سورة البقرة، وهي أعظم آية في القرآن.", link: "https://quran.com/2/255" },
    en: { q: "In which Surah is Ayat al-Kursi (The Verse of the Throne)?", options: { "A": "Surah Al-Baqarah", "B": "Surah Ali 'Imran", "C": "Surah An-Nisa", "D": "Surah Al-Ma'idah" }, ans: "A", exp: "Ayat al-Kursi is verse 255 of Surah Al-Baqarah and is the greatest verse in the Qur'an.", link: "https://quran.com/2/255" }
  },
  {
    id: 22,
    ar: { q: "كم عدد الأنبياء المذكورين بالاسم في القرآن؟", options: { "أ": "20", "ب": "25", "ج": "30", "د": "15" }, ans: "ب", exp: "ذُكر في القرآن الكريم 25 نبياً ورسولاً بالاسم.", link: "https://islamqa.info/ar/answers/95747" },
    en: { q: "How many prophets are mentioned by name in the Qur'an?", options: { "A": "20", "B": "25", "C": "30", "D": "15" }, ans: "B", exp: "There are 25 prophets and messengers mentioned by name in the Qur'an.", link: "https://islamqa.info/en/answers/95747" }
  },
  {
    id: 23,
    ar: { q: "أي سورة سُميت باسم يوم من أيام الأسبوع؟", options: { "أ": "سورة الشمس", "ب": "سورة القمر", "ج": "سورة الفجر", "د": "سورة الجمعة" }, ans: "د", exp: "سورة الجمعة سُميت بيوم الجمعة، وهو خير يوم طلعت عليه الشمس.", link: "https://quran.com/62" },
    en: { q: "Which Surah is named after a day of the week?", options: { "A": "Surah Ash-Shams", "B": "Surah Al-Qamar", "C": "Surah Al-Fajr", "D": "Surah Al-Jumu'ah" }, ans: "D", exp: "Surah Al-Jumu'ah is named after Friday, the best day upon which the sun rises.", link: "https://quran.com/62" }
  },
  {
    id: 24,
    ar: { q: "أي سورة سُميت باسم امرأة؟", options: { "أ": "سورة فاطمة", "ب": "سورة عائشة", "ج": "سورة مريم", "د": "سورة خديجة" }, ans: "ج", exp: "سورة مريم هي السورة الوحيدة في القرآن التي سُميت باسم امرأة، وهي مريم بنت عمران عليها السلام.", link: "https://quran.com/19" },
    en: { q: "Which Surah is named after a woman?", options: { "A": "Surah Fatimah", "B": "Surah Aisha", "C": "Surah Maryam", "D": "Surah Khadijah" }, ans: "C", exp: "Surah Maryam is the only Surah named after a woman — Maryam (Mary), the mother of Isa (Jesus, AS).", link: "https://quran.com/19" }
  },
  {
    id: 25,
    ar: { q: "أي سورة تُنجي من عذاب القبر كما ورد في الحديث؟", options: { "أ": "سورة الملك", "ب": "سورة الكهف", "ج": "سورة يس", "د": "سورة الواقعة" }, ans: "أ", exp: "سورة الملك تشفع لصاحبها وتمنع عنه عذاب القبر كما ورد في الأحاديث.", link: "https://sunnah.com/tirmidhi:2890" },
    en: { q: "Which Surah protects from the punishment of the grave, as mentioned in hadith?", options: { "A": "Surah Al-Mulk", "B": "Surah Al-Kahf", "C": "Surah Ya-Sin", "D": "Surah Al-Waqi'ah" }, ans: "A", exp: "Surah Al-Mulk intercedes for its reciter and protects from the punishment of the grave.", link: "https://sunnah.com/tirmidhi:2890" }
  },
  {
    id: 26,
    ar: { q: "ما اسم السورة التي سُميت بـ 'النحل'؟", options: { "أ": "السورة الخامسة عشرة", "ب": "السورة السادسة عشرة", "ج": "السورة السابعة عشرة", "د": "السورة الثامنة عشرة" }, ans: "ب", exp: "سورة النحل هي السورة السادسة عشرة وسُميت بذلك لذكر النحل فيها وما أوحى الله إليه.", link: "https://quran.com/16" },
    en: { q: "Surah An-Nahl ('The Bee') is which chapter number?", options: { "A": "15th", "B": "16th", "C": "17th", "D": "18th" }, ans: "B", exp: "Surah An-Nahl is the 16th chapter, named after the bee and Allah's (SWT) inspiration to it.", link: "https://quran.com/16" }
  },
  {
    id: 27,
    ar: { q: "في أي سورة تُروى قصة النبي يوسف عليه السلام بالتفصيل؟", options: { "أ": "سورة يوسف", "ب": "سورة إبراهيم", "ج": "سورة الأنبياء", "د": "سورة القصص" }, ans: "أ", exp: "سورة يوسف تروي قصته كاملة ووصفها الله بأنها أحسن القصص.", link: "https://quran.com/12" },
    en: { q: "In which Surah is the story of Prophet Yusuf (Joseph, AS) told in full detail?", options: { "A": "Surah Yusuf", "B": "Surah Ibrahim", "C": "Surah Al-Anbiya", "D": "Surah Al-Qasas" }, ans: "A", exp: "Surah Yusuf narrates his complete story, which Allah (SWT) described as 'the best of stories'.", link: "https://quran.com/12" }
  },
  {
    id: 28,
    ar: { q: "ما هي آخر سورة في القرآن الكريم؟", options: { "أ": "سورة الفلق", "ب": "سورة الإخلاص", "ج": "سورة الكافرون", "د": "سورة الناس" }, ans: "د", exp: "سورة الناس هي السورة الأخيرة في ترتيب المصحف (السورة 114).", link: "https://quran.com/114" },
    en: { q: "What is the last Surah in the Qur'an?", options: { "A": "Surah Al-Falaq", "B": "Surah Al-Ikhlas", "C": "Surah Al-Kafirun", "D": "Surah An-Nas" }, ans: "D", exp: "Surah An-Nas is the final chapter in the Qur'an (114th Surah).", link: "https://quran.com/114" }
  },
  {
    id: 29,
    ar: { q: "ما اسم السورة المعروفة بـ 'الكهف'؟", options: { "أ": "السورة السادسة عشرة", "ب": "السورة السابعة عشرة", "ج": "السورة الثامنة عشرة", "د": "السورة التاسعة عشرة" }, ans: "ج", exp: "سورة الكهف هي السورة الثامنة عشرة ويُستحب قراءتها يوم الجمعة.", link: "https://quran.com/18" },
    en: { q: "Surah Al-Kahf ('The Cave') is which chapter number?", options: { "A": "16th", "B": "17th", "C": "18th", "D": "19th" }, ans: "C", exp: "Surah Al-Kahf is the 18th chapter, and it is recommended to recite it on Fridays.", link: "https://quran.com/18" }
  },
  {
    id: 30,
    ar: { q: "ما هي أول سورة نزلت كاملة؟", options: { "أ": "سورة البقرة", "ب": "سورة الفاتحة", "ج": "سورة المدثر", "د": "سورة العلق" }, ans: "ب", exp: "سورة الفاتحة هي أول سورة نزلت كاملة على النبي ﷺ.", link: "https://islamqa.info/ar/answers/3248" },
    en: { q: "What was the first complete Surah revealed to the Prophet (PBUH)?", options: { "A": "Surah Al-Baqarah", "B": "Surah Al-Fatihah", "C": "Surah Al-Muddathir", "D": "Surah Al-Alaq" }, ans: "B", exp: "Surah Al-Fatihah was the first Surah to be revealed in its entirety to the Prophet (PBUH).", link: "https://islamqa.info/en/answers/3248" }
  },
  // --- SUNNAH ---
  {
    id: 31,
    ar: { q: "كم عدد أركان الإسلام؟", options: { "أ": "5", "ب": "4", "ج": "6", "د": "7" }, ans: "أ", exp: "أركان الإسلام خمسة: الشهادتان، والصلاة، والزكاة، والصوم، والحج.", link: "https://sunnah.com/bukhari:8" },
    en: { q: "How many Pillars of Islam are there?", options: { "A": "5", "B": "4", "C": "6", "D": "7" }, ans: "A", exp: "The Five Pillars: Shahadah, Salah, Zakat, Sawm, and Hajj.", link: "https://sunnah.com/bukhari:8" }
  },
  {
    id: 32,
    ar: { q: "ما هو الركن الأول من أركان الإسلام؟", options: { "أ": "الصلاة", "ب": "الشهادتان", "ج": "الزكاة", "د": "الصوم" }, ans: "ب", exp: "الشهادتان هي أول ركن: شهادة أن لا إله إلا الله وأن محمداً رسول الله.", link: "https://sunnah.com/bukhari:8" },
    en: { q: "What is the first Pillar of Islam?", options: { "A": "Salah (Prayer)", "B": "Shahadah (Testimony of Faith)", "C": "Zakat (Charity)", "D": "Sawm (Fasting)" }, ans: "B", exp: "The Shahadah — testifying that there is no god but Allah (SWT) and that Muhammad (PBUH) is His Messenger.", link: "https://sunnah.com/bukhari:8" }
  },
  {
    id: 33,
    ar: { q: "كم عدد الصلوات المفروضة في اليوم والليلة؟", options: { "أ": "3", "ب": "4", "ج": "5", "د": "6" }, ans: "ج", exp: "الصلوات المفروضة خمس: الفجر، والظهر، والعصر، والمغرب، والعشاء.", link: "https://sunnah.com/bukhari:8" },
    en: { q: "How many obligatory daily prayers are there in Islam?", options: { "A": "3", "B": "4", "C": "5", "D": "6" }, ans: "C", exp: "There are five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha.", link: "https://sunnah.com/bukhari:8" }
  },
  {
    id: 34,
    ar: { q: "ما معنى 'الإحسان' كما جاء في حديث جبريل عليه السلام؟", options: { "أ": "الصلاة في جماعة", "ب": "الصدقة على الفقراء", "ج": "حفظ القرآن", "د": "أن تعبد الله كأنك تراه" }, ans: "د", exp: "الإحسان هو أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك.", link: "https://sunnah.com/muslim:8" },
    en: { q: "What is the meaning of 'Ihsan' as described in the Hadith of Jibreel (AS)?", options: { "A": "Praying in congregation", "B": "Giving charity to the poor", "C": "Memorising the Qur'an", "D": "To worship Allah as if you see Him" }, ans: "D", exp: "Ihsan is to worship Allah (SWT) as if you see Him, and if you cannot, then know that He sees you.", link: "https://sunnah.com/muslim:8" }
  },
  {
    id: 35,
    ar: { q: "'إنما الأعمال بالنيات' - بماذا تُحكم الأعمال؟", options: { "أ": "بالنيات", "ب": "بالنتائج", "ج": "بالمظاهر", "د": "بالأقوال" }, ans: "أ", exp: "هذا الحديث أصل عظيم في الإسلام: إنما الأعمال بالنيات وإنما لكل امرئ ما نوى.", link: "https://sunnah.com/bukhari:1" },
    en: { q: "'Actions are judged by...' — what completes this famous hadith?", options: { "A": "Intentions", "B": "Results", "C": "Appearances", "D": "Words" }, ans: "A", exp: "This foundational hadith states: 'Actions are judged by intentions, and everyone will be rewarded according to what they intended.'", link: "https://sunnah.com/bukhari:1" }
  },
  {
    id: 36,
    ar: { q: "ما نسبة الزكاة المفروضة على الأموال؟", options: { "أ": "5%", "ب": "10%", "ج": "2.5%", "د": "1%" }, ans: "ج", exp: "نسبة الزكاة هي ربع العشر (2.5%) من المال الذي بلغ النصاب وحال عليه الحول.", link: "https://islamqa.info/ar/answers/2795" },
    en: { q: "What is the standard Zakat rate on accumulated wealth?", options: { "A": "5%", "B": "10%", "C": "2.5%", "D": "1%" }, ans: "C", exp: "Zakat is 2.5% of wealth that has reached the nisab threshold and been held for one lunar year.", link: "https://islamqa.info/en/answers/2795" }
  },
  {
    id: 37,
    ar: { q: "ما أفضل شهر للصيام بعد رمضان كما ورد في الحديث؟", options: { "أ": "شعبان", "ب": "محرم", "ج": "رجب", "د": "ذو الحجة" }, ans: "ب", exp: "قال النبي ﷺ: 'أفضل الصيام بعد رمضان شهر الله المحرم' (رواه مسلم).", link: "https://sunnah.com/muslim:1163" },
    en: { q: "What is the best month for voluntary fasting after Ramadan?", options: { "A": "Sha'ban", "B": "Muharram", "C": "Rajab", "D": "Dhul-Hijjah" }, ans: "B", exp: "The Prophet (PBUH) said: 'The best fasting after Ramadan is the month of Allah, Muharram.' (Sahih Muslim).", link: "https://sunnah.com/muslim:1163" }
  },
  {
    id: 38,
    ar: { q: "ما هما اليومان اللذان يُستحب صيامهما تطوعاً كل أسبوع؟", options: { "أ": "الاثنين والخميس", "ب": "السبت والأحد", "ج": "الثلاثاء والأربعاء", "د": "الأربعاء والخميس" }, ans: "أ", exp: "كان النبي ﷺ يتحرى صيام يومي الاثنين والخميس لأن الأعمال تُعرض فيهما.", link: "https://sunnah.com/tirmidhi:747" },
    en: { q: "Which two days of the week are recommended for voluntary fasting?", options: { "A": "Monday and Thursday", "B": "Saturday and Sunday", "C": "Tuesday and Wednesday", "D": "Wednesday and Thursday" }, ans: "A", exp: "The Prophet (PBUH) used to fast on Mondays and Thursdays as deeds are presented to Allah (SWT) on these days.", link: "https://sunnah.com/tirmidhi:747" }
  },
  {
    id: 39,
    ar: { q: "كم عدد ركعات صلاة الفجر المفروضة؟", options: { "أ": "3", "ب": "2", "ج": "4", "د": "1" }, ans: "ب", exp: "صلاة الفجر المفروضة ركعتان، وهي أقل الصلوات الخمس في عدد الركعات.", link: "https://islamqa.info/ar/answers/1048" },
    en: { q: "How many rak'at are in the obligatory Fajr prayer?", options: { "A": "3", "B": "2", "C": "4", "D": "1" }, ans: "B", exp: "The Fajr prayer consists of 2 rak'at, making it the shortest of the five daily prayers.", link: "https://islamqa.info/en/answers/1048" }
  },
  {
    id: 40,
    ar: { q: "ما هي الصلاة التي تُصلى على المتوفى المسلم؟", options: { "أ": "صلاة الاستسقاء", "ب": "صلاة الكسوف", "ج": "صلاة الجنازة", "د": "صلاة الاستخارة" }, ans: "ج", exp: "صلاة الجنازة هي الصلاة التي تُؤدى على المسلم المتوفى وهي فرض كفاية.", link: "https://islamqa.info/ar/answers/12347" },
    en: { q: "What is the prayer performed for a deceased Muslim?", options: { "A": "Salat al-Istisqa", "B": "Salat al-Kusuf", "C": "Salat al-Janazah", "D": "Salat al-Istikhara" }, ans: "C", exp: "Salat al-Janazah is the funeral prayer performed for a deceased Muslim. It is a communal obligation.", link: "https://islamqa.info/en/answers/12347" }
  },
  {
    id: 41,
    ar: { q: "ما اسم صلاة طلب المشورة من الله تعالى؟", options: { "أ": "صلاة الاستخارة", "ب": "صلاة الحاجة", "ج": "صلاة التوبة", "د": "صلاة الشكر" }, ans: "أ", exp: "صلاة الاستخارة يُصليها المسلم عندما يحتاج لتوجيه الله في أمر ما.", link: "https://sunnah.com/bukhari:1162" },
    en: { q: "What is the prayer for seeking Allah's (SWT) guidance called?", options: { "A": "Salat al-Istikhara", "B": "Salat al-Hajah", "C": "Salat at-Tawbah", "D": "Salat ash-Shukr" }, ans: "A", exp: "Salat al-Istikhara is prayed when a Muslim needs divine guidance in making a decision.", link: "https://sunnah.com/bukhari:1162" }
  },
  {
    id: 42,
    ar: { q: "ما اسم وجبة ما قبل الفجر في رمضان؟", options: { "أ": "الإفطار", "ب": "الغداء", "ج": "العشاء", "د": "السحور" }, ans: "د", exp: "السحور هو الوجبة التي يتناولها المسلم قبل أذان الفجر استعداداً للصيام.", link: "https://sunnah.com/bukhari:1923" },
    en: { q: "What is the pre-dawn meal before fasting called?", options: { "A": "Iftar", "B": "Lunch", "C": "Dinner", "D": "Suhoor" }, ans: "D", exp: "Suhoor is the pre-dawn meal eaten before Fajr prayer in preparation for the day's fast.", link: "https://sunnah.com/bukhari:1923" }
  },
  {
    id: 43,
    ar: { q: "كم عدد ركعات صلاة المغرب المفروضة؟", options: { "أ": "2", "ب": "3", "ج": "4", "د": "1" }, ans: "ب", exp: "صلاة المغرب المفروضة ثلاث ركعات.", link: "https://islamqa.info/ar/answers/1048" },
    en: { q: "How many rak'at are in the obligatory Maghrib prayer?", options: { "A": "2", "B": "3", "C": "4", "D": "1" }, ans: "B", exp: "The Maghrib prayer consists of 3 obligatory rak'at.", link: "https://islamqa.info/en/answers/1048" }
  },
  {
    id: 44,
    ar: { q: "من هو مؤلف كتاب 'رياض الصالحين'؟", options: { "أ": "الإمام البخاري", "ب": "الإمام مسلم", "ج": "الإمام النووي", "د": "الإمام أحمد" }, ans: "ج", exp: "الإمام النووي (رحمه الله) هو مؤلف كتاب رياض الصالحين المشهور.", link: "https://sunnah.com/riyadussalihin" },
    en: { q: "Who compiled the book 'Riyad as-Salihin'?", options: { "A": "Imam Al-Bukhari", "B": "Imam Muslim", "C": "Imam An-Nawawi", "D": "Imam Ahmad" }, ans: "C", exp: "Imam An-Nawawi (may Allah have mercy on him) compiled the renowned book Riyad as-Salihin.", link: "https://sunnah.com/riyadussalihin" }
  },
  {
    id: 45,
    ar: { q: "ما أفضل الذكر كما ورد في الحديث الشريف؟", options: { "أ": "لا إله إلا الله", "ب": "سبحان الله", "ج": "الحمد لله", "د": "الله أكبر" }, ans: "أ", exp: "قال النبي ﷺ: 'أفضل الذكر لا إله إلا الله' (رواه الترمذي).", link: "https://sunnah.com/tirmidhi:3383" },
    en: { q: "What is the best form of dhikr (remembrance) according to hadith?", options: { "A": "La ilaha illallah", "B": "SubhanAllah", "C": "Alhamdulillah", "D": "Allahu Akbar" }, ans: "A", exp: "The Prophet (PBUH) said: 'The best dhikr is La ilaha illallah.' (Tirmidhi).", link: "https://sunnah.com/tirmidhi:3383" }
  },
  {
    id: 46,
    ar: { q: "كم عدد ركعات صلاة الظهر المفروضة؟", options: { "أ": "2", "ب": "3", "ج": "5", "د": "4" }, ans: "د", exp: "صلاة الظهر المفروضة أربع ركعات.", link: "https://islamqa.info/ar/answers/1048" },
    en: { q: "How many rak'at are in the obligatory Dhuhr prayer?", options: { "A": "2", "B": "3", "C": "5", "D": "4" }, ans: "D", exp: "The Dhuhr prayer consists of 4 obligatory rak'at.", link: "https://islamqa.info/en/answers/1048" }
  },
  {
    id: 47,
    ar: { q: "من هو مؤلف صحيح مسلم؟", options: { "أ": "الإمام البخاري", "ب": "مسلم بن الحجاج", "ج": "أبو داود", "د": "الإمام الترمذي" }, ans: "ب", exp: "الإمام مسلم بن الحجاج النيسابوري هو مؤلف صحيح مسلم (رحمه الله).", link: "https://sunnah.com/muslim" },
    en: { q: "Who is the compiler of Sahih Muslim?", options: { "A": "Imam Al-Bukhari", "B": "Muslim ibn al-Hajjaj", "C": "Abu Dawud", "D": "Imam At-Tirmidhi" }, ans: "B", exp: "Imam Muslim ibn al-Hajjaj an-Naysaburi (may Allah have mercy on him) compiled Sahih Muslim.", link: "https://sunnah.com/muslim" }
  },
  {
    id: 48,
    ar: { q: "ما هي ليلة القدر؟", options: { "أ": "ليلة عيد الفطر", "ب": "ليلة النصف من شعبان", "ج": "ليلة خير من ألف شهر في رمضان", "د": "ليلة رأس السنة الهجرية" }, ans: "ج", exp: "ليلة القدر خير من ألف شهر، وتقع في العشر الأواخر من رمضان.", link: "https://quran.com/97" },
    en: { q: "What is Laylat al-Qadr (The Night of Decree)?", options: { "A": "Night of Eid al-Fitr", "B": "Middle of Sha'ban", "C": "A night better than 1,000 months in Ramadan", "D": "Islamic New Year's Eve" }, ans: "C", exp: "Laylat al-Qadr is better than a thousand months, occurring in the last ten nights of Ramadan.", link: "https://quran.com/97" }
  },
  // --- SEERAH ---
  {
    id: 49,
    ar: { q: "ما اسم والد النبي محمد ﷺ؟", options: { "أ": "عبد الله", "ب": "أبو طالب", "ج": "عبد المطلب", "د": "أبو لهب" }, ans: "أ", exp: "والد النبي ﷺ هو عبد الله بن عبد المطلب، وتوفي قبل مولد النبي ﷺ.", link: "https://islamqa.info/ar/answers/87945" },
    en: { q: "What was the name of the Prophet Muhammad's (PBUH) father?", options: { "A": "Abdullah", "B": "Abu Talib", "C": "Abdul-Muttalib", "D": "Abu Lahab" }, ans: "A", exp: "The Prophet's (PBUH) father was Abdullah ibn Abdul-Muttalib, who passed away before his birth.", link: "https://islamqa.info/en/answers/87945" }
  },
  {
    id: 50,
    ar: { q: "ما اسم أم النبي محمد ﷺ؟", options: { "أ": "فاطمة", "ب": "آمنة بنت وهب", "ج": "هالة", "د": "حليمة" }, ans: "ب", exp: "أم النبي ﷺ هي آمنة بنت وهب من بني زهرة.", link: "https://islamqa.info/ar/answers/87945" },
    en: { q: "What was the name of the Prophet Muhammad's (PBUH) mother?", options: { "A": "Fatimah", "B": "Aminah bint Wahb", "C": "Halah", "D": "Halimah" }, ans: "B", exp: "The Prophet's (PBUH) mother was Aminah bint Wahb of the Banu Zuhrah clan.", link: "https://islamqa.info/en/answers/87945" }
  },
  {
    id: 51,
    ar: { q: "من هي مرضعة النبي محمد ﷺ من بني سعد؟", options: { "أ": "أم أيمن", "ب": "ثويبة", "ج": "حليمة السعدية", "د": "فاطمة بنت أسد" }, ans: "ج", exp: "حليمة السعدية (رضي الله عنها) هي التي أرضعت النبي ﷺ في بادية بني سعد.", link: "https://islamqa.info/ar/answers/43519" },
    en: { q: "Who was the Prophet's (PBUH) foster mother from the Banu Sa'd tribe?", options: { "A": "Umm Ayman", "B": "Thuwaybah", "C": "Halimah As-Sa'diyyah", "D": "Fatimah bint Asad" }, ans: "C", exp: "Halimah As-Sa'diyyah (RA) nursed the Prophet (PBUH) in the desert of Banu Sa'd.", link: "https://islamqa.info/en/answers/43519" }
  },
  {
    id: 52,
    ar: { q: "ما اسم الغار الذي نزل فيه الوحي لأول مرة على النبي ﷺ؟", options: { "أ": "غار حراء", "ب": "غار ثور", "ج": "غار أحد", "د": "غار المغارة" }, ans: "أ", exp: "غار حراء في جبل النور بمكة هو المكان الذي نزل فيه جبريل عليه السلام بأول الوحي.", link: "https://islamqa.info/ar/answers/118287" },
    en: { q: "In which cave did the Prophet (PBUH) receive the first revelation?", options: { "A": "Cave of Hira", "B": "Cave of Thawr", "C": "Cave of Uhud", "D": "Cave of Maghara" }, ans: "A", exp: "The Cave of Hira on Mount Noor (Light) in Makkah is where Jibreel (AS) first appeared.", link: "https://islamqa.info/en/answers/118287" }
  },
  {
    id: 53,
    ar: { q: "في أي سنة ميلادية كانت الهجرة النبوية إلى المدينة؟", options: { "أ": "610 م", "ب": "622 م", "ج": "630 م", "د": "632 م" }, ans: "ب", exp: "كانت الهجرة النبوية من مكة إلى المدينة في عام 622 م.", link: "https://islamqa.info/ar/answers/14629" },
    en: { q: "In which year (CE) did the Hijrah to Madinah take place?", options: { "A": "610 CE", "B": "622 CE", "C": "630 CE", "D": "632 CE" }, ans: "B", exp: "The Hijrah (migration) from Makkah to Madinah occurred in 622 CE.", link: "https://islamqa.info/en/answers/14629" }
  },
  {
    id: 54,
    ar: { q: "ما أول مسجد بناه النبي ﷺ عند وصوله إلى المدينة؟", options: { "أ": "المسجد النبوي", "ب": "المسجد الحرام", "ج": "مسجد القبلتين", "د": "مسجد قباء" }, ans: "د", exp: "مسجد قباء هو أول مسجد بُني في الإسلام، بناه النبي ﷺ عند وصوله إلى أطراف المدينة.", link: "https://islamqa.info/ar/answers/21054" },
    en: { q: "What was the first mosque built by the Prophet (PBUH) near Madinah?", options: { "A": "Al-Masjid An-Nabawi", "B": "Al-Masjid Al-Haram", "C": "Masjid Al-Qiblatayn", "D": "Masjid Quba" }, ans: "D", exp: "Masjid Quba was the first mosque built in Islam, established upon the Prophet's (PBUH) arrival near Madinah.", link: "https://islamqa.info/en/answers/21054" }
  },
  {
    id: 55,
    ar: { q: "ما هي رحلة الإسراء والمعراج؟", options: { "أ": "هجرة النبي ﷺ إلى المدينة", "ب": "رحلة النبي ﷺ إلى الطائف", "ج": "رحلة النبي ﷺ ليلاً إلى المسجد الأقصى ثم إلى السماوات", "د": "فتح مكة" }, ans: "ج", exp: "الإسراء هو الرحلة الليلية من المسجد الحرام إلى المسجد الأقصى، والمعراج هو الصعود إلى السماوات العلى.", link: "https://quran.com/17/1" },
    en: { q: "What was the Isra and Mi'raj?", options: { "A": "Migration to Madinah", "B": "Journey to Ta'if", "C": "Night journey to Al-Aqsa then ascension to the heavens", "D": "Conquest of Makkah" }, ans: "C", exp: "The Isra was the night journey to Al-Aqsa, and the Mi'raj was the ascension through the heavens.", link: "https://quran.com/17/1" }
  },
  {
    id: 56,
    ar: { q: "ماذا حدث في 'عام الحزن'؟", options: { "أ": "وفاة خديجة وأبي طالب", "ب": "غزوة بدر", "ج": "فتح مكة", "د": "الهجرة إلى الحبشة" }, ans: "أ", exp: "عام الحزن هو العام الذي توفيت فيه خديجة بنت خويلد وأبو طالب عم النبي ﷺ.", link: "https://islamqa.info/ar/answers/147381" },
    en: { q: "What happened during the 'Year of Sorrow' (Aam al-Huzn)?", options: { "A": "Deaths of Khadijah (RA) and Abu Talib", "B": "Battle of Badr", "C": "Conquest of Makkah", "D": "Migration to Abyssinia" }, ans: "A", exp: "The Year of Sorrow marks the passing of both Khadijah (RA) and Abu Talib, the Prophet's (PBUH) closest supporters.", link: "https://islamqa.info/en/answers/147381" }
  },
  {
    id: 57,
    ar: { q: "من هو جد النبي ﷺ الذي كفله بعد وفاة أمه؟", options: { "أ": "أبو طالب", "ب": "عبد المطلب", "ج": "هاشم", "د": "عبد مناف" }, ans: "ب", exp: "عبد المطلب بن هاشم كفل النبي ﷺ بعد وفاة أمه آمنة.", link: "https://islamqa.info/ar/answers/87945" },
    en: { q: "Who was the Prophet's (PBUH) grandfather who raised him after his mother's death?", options: { "A": "Abu Talib", "B": "Abdul-Muttalib", "C": "Hashim", "D": "Abd Manaf" }, ans: "B", exp: "Abdul-Muttalib ibn Hashim took care of the Prophet (PBUH) after his mother Aminah passed away.", link: "https://islamqa.info/en/answers/87945" }
  },
  {
    id: 58,
    ar: { q: "من هو عم النبي ﷺ الذي حماه ودعمه رغم عدم إسلامه؟", options: { "أ": "العباس", "ب": "حمزة", "ج": "أبو طالب", "د": "أبو لهب" }, ans: "ج", exp: "أبو طالب حمى النبي ﷺ ودافع عنه طوال سنوات الدعوة في مكة رغم أنه لم يُسلم.", link: "https://islamqa.info/ar/answers/108068" },
    en: { q: "Which uncle protected the Prophet (PBUH) despite not accepting Islam?", options: { "A": "Al-Abbas", "B": "Hamza", "C": "Abu Talib", "D": "Abu Lahab" }, ans: "C", exp: "Abu Talib shielded and supported the Prophet (PBUH) throughout his mission in Makkah, yet he did not embrace Islam.", link: "https://islamqa.info/en/answers/108068" }
  },
  {
    id: 59,
    ar: { q: "كم كان عمر النبي ﷺ حين توفي؟", options: { "أ": "60 سنة", "ب": "65 سنة", "ج": "70 سنة", "د": "63 سنة" }, ans: "د", exp: "توفي النبي ﷺ وعمره 63 سنة في المدينة المنورة.", link: "https://islamqa.info/ar/answers/11575" },
    en: { q: "How old was the Prophet Muhammad (PBUH) when he passed away?", options: { "A": "60", "B": "65", "C": "70", "D": "63" }, ans: "D", exp: "The Prophet (PBUH) passed away at the age of 63 in Madinah.", link: "https://islamqa.info/en/answers/11575" }
  },
  {
    id: 60,
    ar: { q: "أين دُفن النبي ﷺ؟", options: { "أ": "في حجرة عائشة بالمدينة المنورة", "ب": "في مكة المكرمة", "ج": "في المسجد الأقصى", "د": "في بيت المقدس" }, ans: "أ", exp: "دُفن النبي ﷺ في حجرة عائشة (رضي الله عنها) في المدينة المنورة.", link: "https://islamqa.info/ar/answers/11575" },
    en: { q: "Where is the Prophet Muhammad (PBUH) buried?", options: { "A": "In Aisha's (RA) chamber in Madinah", "B": "In Makkah", "C": "In Al-Masjid Al-Aqsa", "D": "In Bayt al-Maqdis" }, ans: "A", exp: "The Prophet (PBUH) is buried in the chamber of Aisha (RA) in Madinah, now part of Al-Masjid An-Nabawi.", link: "https://islamqa.info/en/answers/11575" }
  },
  {
    id: 61,
    ar: { q: "في أي سنة هجرية كان فتح مكة؟", options: { "أ": "6 هـ", "ب": "8 هـ", "ج": "10 هـ", "د": "5 هـ" }, ans: "ب", exp: "فتح مكة كان في السنة الثامنة للهجرة (630 م) ودخل فيه الناس في دين الله أفواجاً.", link: "https://islamqa.info/ar/answers/10070" },
    en: { q: "In which Hijri year was the Conquest of Makkah (Fath Makkah)?", options: { "A": "6 AH", "B": "8 AH", "C": "10 AH", "D": "5 AH" }, ans: "B", exp: "The Conquest of Makkah took place in 8 AH (630 CE), after which people entered Islam in multitudes.", link: "https://islamqa.info/en/answers/10070" }
  },
  {
    id: 62,
    ar: { q: "من أول من أسلم من الصبيان؟", options: { "أ": "زيد بن حارثة", "ب": "عمر بن الخطاب", "ج": "علي بن أبي طالب", "د": "الزبير بن العوام" }, ans: "ج", exp: "علي بن أبي طالب (رضي الله عنه) كان أول من أسلم من الصبيان.", link: "https://islamqa.info/ar/answers/169295" },
    en: { q: "Who was the first youth to accept Islam?", options: { "A": "Zayd ibn Harithah", "B": "Umar ibn Al-Khattab", "C": "Ali ibn Abi Talib", "D": "Az-Zubayr ibn Al-Awwam" }, ans: "C", exp: "Ali ibn Abi Talib (RA) was the first youth to embrace Islam.", link: "https://islamqa.info/en/answers/169295" }
  },
  {
    id: 63,
    ar: { q: "إلى أين كانت أول هجرة للمسلمين؟", options: { "أ": "الحبشة", "ب": "المدينة المنورة", "ج": "الشام", "د": "اليمن" }, ans: "أ", exp: "كانت أول هجرة للمسلمين إلى الحبشة (إثيوبيا) هرباً من اضطهاد قريش.", link: "https://islamqa.info/ar/answers/172771" },
    en: { q: "Where was the first migration of Muslims?", options: { "A": "Abyssinia (Ethiopia)", "B": "Madinah", "C": "Syria", "D": "Yemen" }, ans: "A", exp: "The first Muslim migration was to Abyssinia (Ethiopia) to escape persecution by the Quraysh.", link: "https://islamqa.info/en/answers/172771" }
  },
  {
    id: 64,
    ar: { q: "من هو ملك الحبشة الذي آوى المسلمين؟", options: { "أ": "كسرى", "ب": "قيصر", "ج": "المقوقس", "د": "النجاشي" }, ans: "د", exp: "النجاشي (أصحمة بن أبجر) هو ملك الحبشة الذي أحسن استقبال المسلمين المهاجرين.", link: "https://islamqa.info/ar/answers/172771" },
    en: { q: "Who was the king of Abyssinia who gave refuge to the Muslims?", options: { "A": "Khosrow", "B": "Caesar", "C": "Al-Muqawqis", "D": "An-Najashi (Negus)" }, ans: "D", exp: "An-Najashi (Negus Ashama ibn Abjar) was the just king of Abyssinia who sheltered the Muslim emigrants.", link: "https://islamqa.info/en/answers/172771" }
  },
  {
    id: 65,
    ar: { q: "بماذا كان يُلقب النبي ﷺ قبل البعثة؟", options: { "أ": "الصادق الأمين", "ب": "سيد قريش", "ج": "أسد الله", "د": "فارس العرب" }, ans: "أ", exp: "كان النبي ﷺ يُعرف في قريش بـ 'الصادق الأمين' لصدقه وأمانته.", link: "https://islamqa.info/ar/answers/21546" },
    en: { q: "What was the Prophet (PBUH) known as before his prophethood?", options: { "A": "As-Sadiq Al-Amin (The Truthful, The Trustworthy)", "B": "Master of Quraysh", "C": "Lion of Allah", "D": "Knight of the Arabs" }, ans: "A", exp: "The Prophet (PBUH) was known by the Quraysh as 'As-Sadiq Al-Amin' for his honesty and trustworthiness.", link: "https://islamqa.info/en/answers/21546" }
  },
  // --- HISTORY ---
  {
    id: 66,
    ar: { q: "من كان أول خليفة للمسلمين بعد وفاة النبي ﷺ؟", options: { "أ": "علي بن أبي طالب", "ب": "عمر بن الخطاب", "ج": "عثمان بن عفان", "د": "أبو بكر الصديق" }, ans: "د", exp: "أبو بكر الصديق (رضي الله عنه) كان أول الخلفاء الراشدين.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "Who was the first Caliph after the Prophet (PBUH)?", options: { "A": "Ali ibn Abi Talib", "B": "Umar ibn Al-Khattab", "C": "Uthman ibn Affan", "D": "Abu Bakr As-Siddiq" }, ans: "D", exp: "Abu Bakr As-Siddiq (RA) was the first of the Rightly Guided Caliphs.", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 67,
    ar: { q: "من كان ثاني الخلفاء الراشدين؟", options: { "أ": "عمر بن الخطاب", "ب": "عثمان بن عفان", "ج": "علي بن أبي طالب", "د": "معاوية بن أبي سفيان" }, ans: "أ", exp: "عمر بن الخطاب (رضي الله عنه) كان ثاني الخلفاء الراشدين ولُقب بالفاروق.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "Who was the second Rightly Guided Caliph?", options: { "A": "Umar ibn Al-Khattab", "B": "Uthman ibn Affan", "C": "Ali ibn Abi Talib", "D": "Mu'awiyah ibn Abi Sufyan" }, ans: "A", exp: "Umar ibn Al-Khattab (RA) was the second Caliph, known as Al-Faruq (The Distinguisher).", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 68,
    ar: { q: "من هو الصحابي الذي أمر بجمع القرآن في مصحف واحد؟", options: { "أ": "عمر بن الخطاب", "ب": "عثمان بن عفان", "ج": "أبو بكر الصديق", "د": "علي بن أبي طالب" }, ans: "ج", exp: "أبو بكر الصديق (رضي الله عنه) أمر بجمع القرآن بعد استشهاد كثير من الحفاظ في معركة اليمامة.", link: "https://islamqa.info/ar/answers/10012" },
    en: { q: "Which Caliph ordered the first compilation of the Qur'an into one book?", options: { "A": "Umar ibn Al-Khattab", "B": "Uthman ibn Affan", "C": "Abu Bakr As-Siddiq", "D": "Ali ibn Abi Talib" }, ans: "C", exp: "Abu Bakr (RA) ordered the compilation after many memorisers were martyred at the Battle of Yamamah.", link: "https://islamqa.info/en/answers/10012" }
  },
  {
    id: 69,
    ar: { q: "من الخليفة الذي وحّد المصاحف على قراءة واحدة؟", options: { "أ": "أبو بكر الصديق", "ب": "عثمان بن عفان", "ج": "عمر بن الخطاب", "د": "علي بن أبي طالب" }, ans: "ب", exp: "عثمان بن عفان (رضي الله عنه) وحّد المصاحف على رسم واحد ونسخها وأرسلها إلى الأمصار.", link: "https://islamqa.info/ar/answers/10012" },
    en: { q: "Which Caliph standardised the Qur'an into one unified text?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Umar ibn Al-Khattab", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "Uthman ibn Affan (RA) standardised the Qur'anic text and sent copies to the major cities.", link: "https://islamqa.info/en/answers/10012" }
  },
  {
    id: 70,
    ar: { q: "من هو الخليفة الذي فتح القدس؟", options: { "أ": "عمر بن الخطاب", "ب": "أبو بكر الصديق", "ج": "خالد بن الوليد", "د": "صلاح الدين الأيوبي" }, ans: "أ", exp: "عمر بن الخطاب (رضي الله عنه) تسلم مفاتيح القدس من البطريرك صفرونيوس.", link: "https://islamqa.info/ar/answers/174752" },
    en: { q: "Which Caliph received the keys to Jerusalem?", options: { "A": "Umar ibn Al-Khattab", "B": "Abu Bakr As-Siddiq", "C": "Khalid ibn Al-Walid", "D": "Salah ad-Din" }, ans: "A", exp: "Umar ibn Al-Khattab (RA) received the keys of Jerusalem from Patriarch Sophronius.", link: "https://islamqa.info/en/answers/174752" }
  },
  {
    id: 71,
    ar: { q: "حروب الردة وقعت في عهد أي خليفة؟", options: { "أ": "عمر بن الخطاب", "ب": "أبو بكر الصديق", "ج": "عثمان بن عفان", "د": "علي بن أبي طالب" }, ans: "ب", exp: "حروب الردة وقعت في عهد أبي بكر الصديق (رضي الله عنه) بعد وفاة النبي ﷺ.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "The Ridda Wars (Wars of Apostasy) occurred during whose caliphate?", options: { "A": "Umar ibn Al-Khattab", "B": "Abu Bakr As-Siddiq", "C": "Uthman ibn Affan", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "The Ridda Wars took place during Abu Bakr's (RA) caliphate after the Prophet's (PBUH) passing.", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 72,
    ar: { q: "من اقترح بداية التقويم الهجري من الهجرة النبوية؟", options: { "أ": "أبو بكر الصديق", "ب": "عثمان بن عفان", "ج": "عمر بن الخطاب", "د": "علي بن أبي طالب" }, ans: "ج", exp: "عمر بن الخطاب (رضي الله عنه) هو من اقترح اعتماد الهجرة النبوية كبداية للتقويم الإسلامي.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "Who suggested starting the Islamic calendar from the Hijrah?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Umar ibn Al-Khattab", "D": "Ali ibn Abi Talib" }, ans: "C", exp: "Umar ibn Al-Khattab (RA) proposed using the Hijrah as the starting point for the Islamic calendar.", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 73,
    ar: { q: "معركة اليرموك كانت ضد أي إمبراطورية؟", options: { "أ": "الفارسية", "ب": "المغولية", "ج": "الصينية", "د": "البيزنطية (الرومانية)" }, ans: "د", exp: "معركة اليرموك (636 م) كانت انتصاراً حاسماً للمسلمين على الإمبراطورية البيزنطية.", link: "https://en.wikipedia.org/wiki/Battle_of_Yarmouk" },
    en: { q: "The Battle of Yarmouk was fought against which empire?", options: { "A": "Persian", "B": "Mongol", "C": "Chinese", "D": "Byzantine (Roman)" }, ans: "D", exp: "The Battle of Yarmouk (636 CE) was a decisive Muslim victory against the Byzantine Empire.", link: "https://en.wikipedia.org/wiki/Battle_of_Yarmouk" }
  },
  {
    id: 74,
    ar: { q: "من هو القائد المسلم الذي فتح مصر؟", options: { "أ": "عمرو بن العاص", "ب": "طارق بن زياد", "ج": "صلاح الدين", "د": "خالد بن الوليد" }, ans: "أ", exp: "عمرو بن العاص (رضي الله عنه) فتح مصر في عهد الخليفة عمر بن الخطاب.", link: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt" },
    en: { q: "Which Muslim commander conquered Egypt?", options: { "A": "Amr ibn al-As", "B": "Tariq ibn Ziyad", "C": "Salah ad-Din", "D": "Khalid ibn Al-Walid" }, ans: "A", exp: "Amr ibn al-As (RA) conquered Egypt during the caliphate of Umar ibn Al-Khattab (RA).", link: "https://en.wikipedia.org/wiki/Muslim_conquest_of_Egypt" }
  },
  {
    id: 75,
    ar: { q: "من حرر القدس من الصليبيين؟", options: { "أ": "خالد بن الوليد", "ب": "صلاح الدين الأيوبي", "ج": "محمد الفاتح", "د": "طارق بن زياد" }, ans: "ب", exp: "صلاح الدين الأيوبي حرر القدس من الصليبيين بعد معركة حطين سنة 1187 م.", link: "https://en.wikipedia.org/wiki/Saladin" },
    en: { q: "Who liberated Jerusalem from the Crusaders?", options: { "A": "Khalid ibn Al-Walid", "B": "Salah ad-Din Al-Ayyubi (Saladin)", "C": "Sultan Mehmed II", "D": "Tariq ibn Ziyad" }, ans: "B", exp: "Salah ad-Din liberated Jerusalem after the Battle of Hattin in 1187 CE.", link: "https://en.wikipedia.org/wiki/Saladin" }
  },
  {
    id: 76,
    ar: { q: "في أي عام سقطت بغداد على يد المغول؟", options: { "أ": "1187 م", "ب": "1453 م", "ج": "1258 م", "د": "1099 م" }, ans: "ج", exp: "سقطت بغداد عاصمة الخلافة العباسية على يد المغول بقيادة هولاكو عام 1258 م.", link: "https://en.wikipedia.org/wiki/Siege_of_Baghdad_(1258)" },
    en: { q: "In which year did the Mongols sack Baghdad?", options: { "A": "1187 CE", "B": "1453 CE", "C": "1258 CE", "D": "1099 CE" }, ans: "C", exp: "Baghdad, the Abbasid capital, fell to the Mongols under Hulagu Khan in 1258 CE.", link: "https://en.wikipedia.org/wiki/Siege_of_Baghdad_(1258)" }
  },
  {
    id: 77,
    ar: { q: "من هو القائد المسلم الذي فتح الأندلس (إسبانيا)؟", options: { "أ": "طارق بن زياد", "ب": "موسى بن نصير", "ج": "عقبة بن نافع", "د": "صلاح الدين" }, ans: "أ", exp: "طارق بن زياد فتح الأندلس عام 711 م وسُمي مضيق جبل طارق باسمه.", link: "https://en.wikipedia.org/wiki/Tariq_ibn_Ziyad" },
    en: { q: "Which Muslim commander conquered Al-Andalus (Spain)?", options: { "A": "Tariq ibn Ziyad", "B": "Musa ibn Nusayr", "C": "Uqba ibn Nafi", "D": "Salah ad-Din" }, ans: "A", exp: "Tariq ibn Ziyad conquered Iberia in 711 CE. The Strait of Gibraltar (Jabal Tariq) is named after him.", link: "https://en.wikipedia.org/wiki/Tariq_ibn_Ziyad" }
  },
  {
    id: 78,
    ar: { q: "في أي عام فتح العثمانيون القسطنطينية؟", options: { "أ": "1258 م", "ب": "1453 م", "ج": "1492 م", "د": "1517 م" }, ans: "ب", exp: "فتح السلطان محمد الفاتح القسطنطينية عام 1453 م.", link: "https://en.wikipedia.org/wiki/Fall_of_Constantinople" },
    en: { q: "In which year did the Ottomans conquer Constantinople?", options: { "A": "1258 CE", "B": "1453 CE", "C": "1492 CE", "D": "1517 CE" }, ans: "B", exp: "Sultan Mehmed II (Al-Fatih) conquered Constantinople in 1453 CE.", link: "https://en.wikipedia.org/wiki/Fall_of_Constantinople" }
  },
  {
    id: 79,
    ar: { q: "من هو السلطان الذي فتح القسطنطينية؟", options: { "أ": "سليمان القانوني", "ب": "بايزيد", "ج": "محمد الفاتح", "د": "مراد الثاني" }, ans: "ج", exp: "السلطان محمد الفاتح (محمد الثاني) هو من فتح القسطنطينية محققاً بشارة النبي ﷺ.", link: "https://en.wikipedia.org/wiki/Mehmed_the_Conqueror" },
    en: { q: "Which Ottoman Sultan conquered Constantinople?", options: { "A": "Suleiman the Magnificent", "B": "Bayezid", "C": "Sultan Mehmed II (Al-Fatih)", "D": "Murad II" }, ans: "C", exp: "Sultan Mehmed II (The Conqueror) fulfilled the Prophet's (PBUH) prophecy about the conquest of Constantinople.", link: "https://en.wikipedia.org/wiki/Mehmed_the_Conqueror" }
  },
  {
    id: 80,
    ar: { q: "ما هو 'بيت الحكمة'؟", options: { "أ": "مكتبة ومركز علمي في بغداد", "ب": "مسجد في دمشق", "ج": "قصر في القاهرة", "د": "حصن في الأندلس" }, ans: "أ", exp: "بيت الحكمة كان مركزاً علمياً وثقافياً في بغداد في العصر العباسي.", link: "https://en.wikipedia.org/wiki/House_of_Wisdom" },
    en: { q: "What was the 'Bayt al-Hikmah' (House of Wisdom)?", options: { "A": "A library and academic centre in Baghdad", "B": "A mosque in Damascus", "C": "A palace in Cairo", "D": "A fortress in Al-Andalus" }, ans: "A", exp: "The House of Wisdom was a major intellectual centre in Baghdad during the Abbasid era.", link: "https://en.wikipedia.org/wiki/House_of_Wisdom" }
  },
  {
    id: 81,
    ar: { q: "من يُعرف بـ 'أبو الجبر'؟", options: { "أ": "ابن سينا", "ب": "الرازي", "ج": "ابن الهيثم", "د": "الخوارزمي" }, ans: "د", exp: "محمد بن موسى الخوارزمي هو العالم الذي أسس علم الجبر في كتابه الشهير.", link: "https://en.wikipedia.org/wiki/Al-Khwarizmi" },
    en: { q: "Who is known as the 'Father of Algebra'?", options: { "A": "Ibn Sina", "B": "Ar-Razi", "C": "Ibn al-Haytham", "D": "Al-Khwarizmi" }, ans: "D", exp: "Muhammad ibn Musa al-Khwarizmi founded algebra through his seminal work.", link: "https://en.wikipedia.org/wiki/Al-Khwarizmi" }
  },
  {
    id: 82,
    ar: { q: "معركة عين جالوت (1260 م) أوقفت تقدم أي جيش؟", options: { "أ": "الصليبيين", "ب": "المغول", "ج": "البيزنطيين", "د": "الفرس" }, ans: "ب", exp: "معركة عين جالوت أوقفت زحف المغول على يد المماليك بقيادة قطز وبيبرس.", link: "https://en.wikipedia.org/wiki/Battle_of_Ain_Jalut" },
    en: { q: "The Battle of Ain Jalut (1260 CE) stopped the advance of which army?", options: { "A": "Crusaders", "B": "Mongols", "C": "Byzantines", "D": "Persians" }, ans: "B", exp: "The Battle of Ain Jalut halted the Mongol advance, won by the Mamluks under Qutuz and Baibars.", link: "https://en.wikipedia.org/wiki/Battle_of_Ain_Jalut" }
  },
  {
    id: 83,
    ar: { q: "من بنى قبة الصخرة في القدس؟", options: { "أ": "صلاح الدين", "ب": "عمر بن الخطاب", "ج": "عبد الملك بن مروان", "د": "هارون الرشيد" }, ans: "ج", exp: "بنى الخليفة الأموي عبد الملك بن مروان قبة الصخرة في القدس.", link: "https://en.wikipedia.org/wiki/Dome_of_the_Rock" },
    en: { q: "Who built the Dome of the Rock in Jerusalem?", options: { "A": "Salah ad-Din", "B": "Umar ibn Al-Khattab", "C": "Caliph Abdul-Malik ibn Marwan", "D": "Harun ar-Rashid" }, ans: "C", exp: "The Umayyad Caliph Abdul-Malik ibn Marwan built the Dome of the Rock in Jerusalem.", link: "https://en.wikipedia.org/wiki/Dome_of_the_Rock" }
  },
  {
    id: 84,
    ar: { q: "من أسس مدينة بغداد؟", options: { "أ": "هارون الرشيد", "ب": "أبو جعفر المنصور", "ج": "المأمون", "د": "معاوية بن أبي سفيان" }, ans: "ب", exp: "أسس الخليفة العباسي أبو جعفر المنصور مدينة بغداد عام 762 م.", link: "https://en.wikipedia.org/wiki/Baghdad" },
    en: { q: "Who founded the city of Baghdad?", options: { "A": "Harun ar-Rashid", "B": "Caliph Abu Ja'far Al-Mansur", "C": "Al-Ma'mun", "D": "Mu'awiyah ibn Abi Sufyan" }, ans: "B", exp: "The Abbasid Caliph Abu Ja'far Al-Mansur founded Baghdad in 762 CE.", link: "https://en.wikipedia.org/wiki/Baghdad" }
  },
  // --- MIXED / ADDITIONAL ---
  {
    id: 85,
    ar: { q: "ما اسم البئر المقدسة في الحرم المكي؟", options: { "أ": "بئر معونة", "ب": "بئر بدر", "ج": "بئر أريس", "د": "بئر زمزم" }, ans: "د", exp: "بئر زمزم في المسجد الحرام بمكة المكرمة، نبعت بأمر الله لإسماعيل وهاجر عليهما السلام.", link: "https://islamqa.info/ar/answers/110994" },
    en: { q: "What is the name of the sacred well in the Haram in Makkah?", options: { "A": "Bi'r Ma'unah", "B": "Bi'r Badr", "C": "Bi'r Aris", "D": "Zamzam" }, ans: "D", exp: "The well of Zamzam in the Sacred Mosque sprang forth by Allah's (SWT) command for Isma'il and Hajar (AS).", link: "https://islamqa.info/en/answers/110994" }
  },
  {
    id: 86,
    ar: { q: "لمن نبعت بئر زمزم بأمر الله تعالى؟", options: { "أ": "إسماعيل وهاجر عليهما السلام", "ب": "إبراهيم عليه السلام", "ج": "موسى عليه السلام", "د": "محمد ﷺ" }, ans: "أ", exp: "نبعت بئر زمزم بأمر الله تعالى لإسماعيل الرضيع وأمه هاجر عليهما السلام في وادي مكة.", link: "https://sunnah.com/bukhari:3364" },
    en: { q: "For whom did the well of Zamzam spring forth by Allah's (SWT) command?", options: { "A": "Isma'il and Hajar (AS)", "B": "Ibrahim (AS)", "C": "Musa (AS)", "D": "Muhammad (PBUH)" }, ans: "A", exp: "Zamzam sprang forth for baby Isma'il (AS) and his mother Hajar (AS) in the valley of Makkah.", link: "https://sunnah.com/bukhari:3364" }
  },
  {
    id: 87,
    ar: { q: "من هو الصحابي الملقب بـ 'الفاروق'؟", options: { "أ": "أبو بكر الصديق", "ب": "عمر بن الخطاب", "ج": "عثمان بن عفان", "د": "علي بن أبي طالب" }, ans: "ب", exp: "عمر بن الخطاب (رضي الله عنه) لُقب بالفاروق لأنه فرّق بين الحق والباطل.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "Which Companion was given the title 'Al-Faruq' (The Distinguisher)?", options: { "A": "Abu Bakr As-Siddiq", "B": "Umar ibn Al-Khattab", "C": "Uthman ibn Affan", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "Umar ibn Al-Khattab (RA) was called Al-Faruq because he distinguished between truth and falsehood.", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 88,
    ar: { q: "كم كان عدد المسلمين تقريباً في غزوة بدر؟", options: { "أ": "1000", "ب": "700", "ج": "313", "د": "500" }, ans: "ج", exp: "كان عدد المسلمين في غزوة بدر حوالي 313 مقاتلاً مقابل نحو 1000 من قريش.", link: "https://islamqa.info/ar/answers/12572" },
    en: { q: "Approximately how many Muslims fought at the Battle of Badr?", options: { "A": "1,000", "B": "700", "C": "313", "D": "500" }, ans: "C", exp: "There were approximately 313 Muslim fighters against around 1,000 Quraysh soldiers at Badr.", link: "https://islamqa.info/en/answers/12572" }
  },
  {
    id: 89,
    ar: { q: "كم عدد أشواط الطواف حول الكعبة؟", options: { "أ": "5", "ب": "6", "ج": "3", "د": "7" }, ans: "د", exp: "الطواف حول الكعبة يتكون من 7 أشواط تبدأ وتنتهي عند الحجر الأسود.", link: "https://islamqa.info/ar/answers/31822" },
    en: { q: "How many rounds (circuits) make up one Tawaf around the Kaaba?", options: { "A": "5", "B": "6", "C": "3", "D": "7" }, ans: "D", exp: "Tawaf consists of 7 circuits around the Kaaba, starting and ending at the Black Stone.", link: "https://islamqa.info/en/answers/31822" }
  },
  {
    id: 90,
    ar: { q: "بين أي جبلين يتم السعي في الحج والعمرة؟", options: { "أ": "الصفا والمروة", "ب": "أحد وثور", "ج": "عرفات ومزدلفة", "د": "حراء والنور" }, ans: "أ", exp: "السعي يكون بين جبلي الصفا والمروة 7 أشواط اقتداءً بسعي هاجر عليها السلام.", link: "https://islamqa.info/ar/answers/31822" },
    en: { q: "Between which two hills is the Sa'i performed during Hajj and Umrah?", options: { "A": "Safa and Marwa", "B": "Uhud and Thawr", "C": "Arafat and Muzdalifah", "D": "Hira and Noor" }, ans: "A", exp: "Sa'i is performed between the hills of Safa and Marwa, 7 times, following the example of Hajar (AS).", link: "https://islamqa.info/en/answers/31822" }
  },
  {
    id: 91,
    ar: { q: "يوم عرفة يقع في أي شهر هجري؟", options: { "أ": "شوال", "ب": "ذو الحجة", "ج": "محرم", "د": "رجب" }, ans: "ب", exp: "يوم عرفة هو التاسع من ذي الحجة وهو أعظم أيام الحج.", link: "https://islamqa.info/ar/answers/7283" },
    en: { q: "The Day of Arafah falls in which Hijri month?", options: { "A": "Shawwal", "B": "Dhul-Hijjah", "C": "Muharram", "D": "Rajab" }, ans: "B", exp: "The Day of Arafah is the 9th of Dhul-Hijjah and the most important day of Hajj.", link: "https://islamqa.info/en/answers/7283" }
  },
  {
    id: 92,
    ar: { q: "عيد الأضحى يُحيي ذكرى أي حدث؟", options: { "أ": "الهجرة النبوية", "ب": "فتح مكة", "ج": "استعداد إبراهيم عليه السلام للتضحية بابنه طاعةً لله", "د": "نزول القرآن" }, ans: "ج", exp: "عيد الأضحى يُحيي ذكرى استعداد إبراهيم عليه السلام للتضحية بابنه إسماعيل طاعةً لله تعالى.", link: "https://islamqa.info/ar/answers/36432" },
    en: { q: "Eid al-Adha commemorates which event?", options: { "A": "The Hijrah", "B": "Conquest of Makkah", "C": "Ibrahim's (AS) willingness to sacrifice his son in obedience to Allah (SWT)", "D": "Revelation of the Qur'an" }, ans: "C", exp: "Eid al-Adha commemorates Prophet Ibrahim's (AS) willingness to sacrifice his son Isma'il (AS) in obedience to Allah (SWT).", link: "https://islamqa.info/en/answers/36432" }
  },
  {
    id: 93,
    ar: { q: "كم عدد أبواب الجنة؟", options: { "أ": "6", "ب": "7", "ج": "10", "د": "8" }, ans: "د", exp: "للجنة ثمانية أبواب كما ورد في الأحاديث الصحيحة.", link: "https://sunnah.com/bukhari:3257" },
    en: { q: "How many gates does Jannah (Paradise) have?", options: { "A": "6", "B": "7", "C": "10", "D": "8" }, ans: "D", exp: "Jannah has eight gates, as mentioned in authentic ahadith.", link: "https://sunnah.com/bukhari:3257" }
  },
  {
    id: 94,
    ar: { q: "متى فُرضت الصلوات الخمس على المسلمين؟", options: { "أ": "في ليلة الإسراء والمعراج", "ب": "بعد الهجرة", "ج": "في غزوة بدر", "د": "عند فتح مكة" }, ans: "أ", exp: "فُرضت الصلوات الخمس في ليلة الإسراء والمعراج.", link: "https://sunnah.com/bukhari:349" },
    en: { q: "When were the five daily prayers made obligatory?", options: { "A": "During the Isra and Mi'raj", "B": "After the Hijrah", "C": "At the Battle of Badr", "D": "At the Conquest of Makkah" }, ans: "A", exp: "The five daily prayers were made obligatory during the night of Al-Isra wal-Mi'raj.", link: "https://sunnah.com/bukhari:349" }
  },
  {
    id: 95,
    ar: { q: "من هو الصحابي الملقب بـ 'ذو النورين'؟", options: { "أ": "أبو بكر الصديق", "ب": "عثمان بن عفان", "ج": "علي بن أبي طالب", "د": "عمر بن الخطاب" }, ans: "ب", exp: "عثمان بن عفان (رضي الله عنه) لُقب بذي النورين لأنه تزوج ابنتين من بنات النبي ﷺ.", link: "https://islamqa.info/ar/answers/98650" },
    en: { q: "Which Companion was known as 'Dhun-Nurayn' (Possessor of Two Lights)?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Ali ibn Abi Talib", "D": "Umar ibn Al-Khattab" }, ans: "B", exp: "Uthman ibn Affan (RA) was called Dhun-Nurayn because he married two of the Prophet's (PBUH) daughters.", link: "https://islamqa.info/en/answers/98650" }
  },
  {
    id: 96,
    ar: { q: "من هو الرحالة المسلم الشهير الذي طاف العالم الإسلامي؟", options: { "أ": "ابن سينا", "ب": "الإدريسي", "ج": "ابن بطوطة", "د": "ابن خلدون" }, ans: "ج", exp: "ابن بطوطة رحالة مغربي شهير طاف العالم الإسلامي وترك رحلته المعروفة.", link: "https://en.wikipedia.org/wiki/Ibn_Battuta" },
    en: { q: "Who was the famous Muslim traveller who journeyed across the Muslim world?", options: { "A": "Ibn Sina", "B": "Al-Idrisi", "C": "Ibn Battuta", "D": "Ibn Khaldun" }, ans: "C", exp: "Ibn Battuta was a renowned Moroccan explorer who travelled extensively across the Muslim world.", link: "https://en.wikipedia.org/wiki/Ibn_Battuta" }
  },
  {
    id: 97,
    ar: { q: "ما هي مهنة النبي ﷺ قبل البعثة؟", options: { "أ": "مزارع", "ب": "تاجر", "ج": "حداد", "د": "نجار" }, ans: "ب", exp: "كان النبي ﷺ يعمل في التجارة، وقد تاجر لخديجة (رضي الله عنها) قبل زواجهما.", link: "https://islamqa.info/ar/answers/21546" },
    en: { q: "What was the Prophet's (PBUH) occupation before prophethood?", options: { "A": "Farmer", "B": "Trader", "C": "Blacksmith", "D": "Carpenter" }, ans: "B", exp: "The Prophet (PBUH) was a trader and managed the business affairs of Khadijah (RA) before their marriage.", link: "https://islamqa.info/en/answers/21546" }
  },
  {
    id: 98,
    ar: { q: "من يُعرف بالخليفة الراشد الخامس؟", options: { "أ": "معاوية بن أبي سفيان", "ب": "هارون الرشيد", "ج": "عمر بن عبد العزيز", "د": "سليمان بن عبد الملك" }, ans: "ج", exp: "عمر بن عبد العزيز (رحمه الله) يُعرف بالخليفة الراشد الخامس لعدله وتقواه.", link: "https://islamqa.info/ar/answers/106262" },
    en: { q: "Who is often referred to as the 'Fifth Rightly-Guided Caliph'?", options: { "A": "Mu'awiyah ibn Abi Sufyan", "B": "Harun ar-Rashid", "C": "Umar ibn Abdul-Aziz", "D": "Sulayman ibn Abdul-Malik" }, ans: "C", exp: "Umar ibn Abdul-Aziz (may Allah have mercy on him) is known as the Fifth Rightly-Guided Caliph due to his justice and piety.", link: "https://islamqa.info/en/answers/106262" }
  },
  {
    id: 99,
    ar: { q: "كم عدد ركعات صلاة العشاء المفروضة؟", options: { "أ": "2", "ب": "3", "ج": "5", "د": "4" }, ans: "د", exp: "صلاة العشاء المفروضة أربع ركعات.", link: "https://islamqa.info/ar/answers/1048" },
    en: { q: "How many rak'at are in the obligatory Isha prayer?", options: { "A": "2", "B": "3", "C": "5", "D": "4" }, ans: "D", exp: "The Isha prayer consists of 4 obligatory rak'at.", link: "https://islamqa.info/en/answers/1048" }
  },
  {
    id: 100,
    ar: { q: "ما اسم صلح الحديبية؟", options: { "أ": "اتفاقية سلام بين المسلمين وقريش في 6 هـ", "ب": "معاهدة مع يهود المدينة", "ج": "ميثاق مع نصارى نجران", "د": "حلف بين قبائل العرب" }, ans: "أ", exp: "صلح الحديبية كان معاهدة سلام بين المسلمين وقريش عام 6 هـ، ووصفه الله بالفتح المبين.", link: "https://islamqa.info/ar/answers/78675" },
    en: { q: "What was the Treaty of Hudaybiyyah?", options: { "A": "A peace agreement between the Muslims and Quraysh in 6 AH", "B": "A treaty with the Jews of Madinah", "C": "A pact with the Christians of Najran", "D": "An alliance among Arab tribes" }, ans: "A", exp: "The Treaty of Hudaybiyyah was a peace agreement between the Muslims and Quraysh in 6 AH, described by Allah (SWT) as a clear victory.", link: "https://islamqa.info/en/answers/78675" }
  },
];

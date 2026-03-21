export type ArOptionKey = "أ" | "ب" | "ج" | "د";
export type EnOptionKey = "A" | "B" | "C" | "D";

export const AR_OPTION_KEYS: ArOptionKey[] = ["أ", "ب", "ج", "د"];
export const EN_OPTION_KEYS: EnOptionKey[] = ["A", "B", "C", "D"];

export const arToEnKey: Record<ArOptionKey, EnOptionKey> = { "أ": "A", "ب": "B", "ج": "C", "د": "D" };
export const enToArKey: Record<EnOptionKey, ArOptionKey> = { "A": "أ", "B": "ب", "C": "ج", "D": "د" };

export interface QuestionData {
  id: number;
  ar: {
    q: string;
    options: Record<ArOptionKey, string>;
    ans: ArOptionKey;
    exp: string;
  };
  en: {
    q: string;
    options: Record<EnOptionKey, string>;
    ans: EnOptionKey;
    exp: string;
  };
}

export const questionsDB: QuestionData[] = [
{
    id: 1,
    ar: { q: " مَا هِي أَطْوَلِ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " سُورَةُ الْبَقَرَةِ", "ب": " سُورَةُ آلِ عِمْرَانَ", "ج": " سُورَةُ النِّسَاءِ", "د": " سُورَةُ الْكَهْفِ" }, ans: "أ", exp: " سُورَةُ الْبَقَرَةِ هِي أَطْوَلُ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ، وَتَحْتَوِي عَلَى 286 آيَةً، وَتَتَنَاوَلُ جَوَانِبَ كَثِيرَةً مِنَ الْأَحْكَامِ الشَّرْعِيَّةِ وَالْقَصَصِ وَالْهِدَايَةِ." },
    en: { q: "What is the longest Surah in the Qur'an?", options: { "A": "Surah Al-Baqarah", "B": "Surah Ali 'Imran", "C": "Surah An-Nisa", "D": "Surah Al-Kahf" }, ans: "A", exp: "It contains 286 verses and covers many aspects of Islamic law, stories, and guidance." }
  },
  {
    id: 2,
    ar: { q: " أَيَّ سُورَةٍ تُعْرَفُ ب 'قلب القرآن' ؟", options: { "أ": " سُورَةُ الرَّحْمَنِ", "ب": " سُورَةُ الْمُلْكِ", "ج": " سُورَةُ يَسَّ", "د": " سُورَةُ الْفَاتِحَةِ" }, ans: "ج", exp: " قَالَ النَّبِيُّ ﷺ: 'إِنَّ لِكُلِّ شَيْءٍ قَلْبًا، وَقَلْبُ الْقُرْآنِ يَسَّ.' (رَوَاهُ التِّرْمِذِيُّ)." },
    en: { q: "Which Surah is known as the 'Heart of the Qur'an'?", options: { "A": "Surah Ar-Rahman", "B": "Surah Al-Mulk", "C": "Surah Ya-Sin", "D": "Surah Al-Fatihah" }, ans: "C", exp: "The Prophet (PBUH) said: 'Everything has a heart, and the heart of the Qur'an is Ya-Sin.' (Tirmidhi)" }
  },
  {
    id: 3,
    ar: { q: " مَا هِي السُّورَةِ الَّتِي لَا تَبْدَأُ ب 'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ' ؟", options: { "أ": " سُورَةُ التَّوْبَةِ", "ب": " سُورَةُ الْأَنْفَالِ", "ج": " سُورَةُ يُونِسٍ", "د": " سُورَةُ هُودٌ" }, ans: "أ", exp: " سُورَةُ التَّوْبَةِ هِي السُّورَةُ الْوَحِيدَةُ الَّتِي لَا تَبْدَأُ بِالْبَسْمَلَةِ. وَيَرَى الْعُلَمَاءُ أَنَّهَا نَزَلَتْ بِالْبَرَاءَةِ مِنَ الْمُشْرِكِينَ، وَالْبَسْمَلَةُ رَحْمَةٌ وَأَمَانٌ." },
    en: { q: "Which Surah does NOT begin with Bismillah?", options: { "A": "Surah At-Tawbah", "B": "Surah Al-Anfal", "C": "Surah Yunus", "D": "Surah Hud" }, ans: "A", exp: "It is the only Surah without Bismillah at its start. Scholars say because it was revealed as a declaration of disassociation from the polytheists." }
  },
  {
    id: 4,
    ar: { q: " مَا هُو الشَّهْرِ الَّذِي أُنْزِلُ فِيهِ الْقُرْآنَ ؟", options: { "أ": " رَجَبٌ", "ب": " رَمَضَانُ", "ج": " شَعْبَانِ", "د": " مُحَرَّمٌ" }, ans: "ب", exp: " قَالَ اللهُ تَعَالَى: ﴿شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ﴾ (البقرة: 185)." },
    en: { q: "In which month was the Qur'an first revealed?", options: { "A": "Rajab", "B": "Ramadan", "C": "Sha'ban", "D": "Muharram" }, ans: "B", exp: "Allah says: 'The month of Ramadan in which the Qur'an was revealed.' (2:185)" }
  },
  {
    id: 5,
    ar: { q: " كَم عَدَدِ سورِ الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " 110", "ب": " 120", "ج": " 112", "د": " 114" }, ans: "د", exp: " يَحْتَوِي الْقُرْآنُ الْكَرِيمُ عَلَى 114 سُورَةً تَبْدَأُ بِالْفَاتِحَةِ وَتَخْتِمُ بِالنَّاسِ." },
    en: { q: "How many Surahs are in the Qur'an?", options: { "A": "110", "B": "120", "C": "112", "D": "114" }, ans: "D", exp: "The Qur'an contains 114 Surahs, from Al-Fatihah to An-Nas." }
  },
  {
    id: 6,
    ar: { q: " مَا هِي أقْصَرِ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " سُورَةُ الْإِخْلَاَصِ", "ب": " سُورَةُ الْكَوْثَرِ", "ج": " سُورَةُ الْفَلْقِ", "د": " سُورَةُ النَّاسِ" }, ans: "ب", exp: " سُورَةُ الْكَوْثَرِ هِي أَقْصَرُ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ، تَتَكَوَّنُ مِن 3 آيَاتٍ فَقَطْ، وَنَزَلَتْ تَعْزِيَةً لِلنَّبِيِّ ﷺ بَعْدَ وَفَاةِ ابْنِهِ." },
    en: { q: "What is the shortest Surah?", options: { "A": "Surah Al-Ikhlas", "B": "Surah Al-Kawthar", "C": "Surah Al-Falaq", "D": "Surah An-Nas" }, ans: "B", exp: "It has only 3 verses, revealed to comfort the Prophet (PBUH) after the death of his son." }
  },
  {
    id: 7,
    ar: { q: " كَم عَدَدِ أَجْزَاءِ الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " 20", "ب": " 25", "ج": " 30", "د": " 40" }, ans: "ج", exp: " قُسِّمَ الْقُرْآنُ الْكَرِيمُ إِلَى 30 جُزْءًا مُتَسَاوِيًا لِتَسْهِيلِ قِرَاءَتِهِ وَحِفْظِهِ وَخَتْمِهِ فِي شَهْرٍ وَاحِدٍ، لَا سِيَّمَا فِي رَمَضَانَ." },
    en: { q: "How many Juz is the Qur'an divided into?", options: { "A": "20", "B": "25", "C": "30", "D": "40" }, ans: "C", exp: "The Qur'an is divided into 30 equal parts to make it easier to complete in one month, especially during Ramadan." }
  },
  {
    id: 8,
    ar: { q: " أَيَّ سُورَةٍ تُعَدِّلُ ثُلْثُ الْقُرْآنِ ؟", options: { "أ": " سُورَةُ الْفَاتِحَةِ", "ب": " سُورَةُ الْإِخْلَاَصِ", "ج": " سُورَةُ الْمُلْكِ", "د": " سُورَةُ يَسَّ" }, ans: "ب", exp: " قَالَ النَّبِيُّ ﷺ: 'قُلْ هُوَ اللهُ أَحَدٌ تَعْدِلُ ثُلُثَ الْقُرْآنِ.' (رَوَاهُ مُسْلِمٌ). وَهِي تَجْمَعُ جَوْهَرَ التَّوْحِيدِ." },
    en: { q: "Which Surah equals one-third of the Qur'an?", options: { "A": "Surah Al-Fatihah", "B": "Surah Al-Ikhlas", "C": "Surah Al-Mulk", "D": "Surah Ya-Sin" }, ans: "B", exp: "The Prophet (PBUH) said: 'Qul Huwa Allahu Ahad is equivalent to one-third of the Qur'an.' (Muslim) It captures the essence of Tawhid." }
  },
  {
    id: 9,
    ar: { q: " مَا أَوَّل كَلِمَةِ نَزَّلَتْ مِن الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " قُلْ", "ب": " بِسْمِ اللهِ", "ج": " اِقْرَأْ", "د": " الْحَمْدُ" }, ans: "ج", exp: " جَاءَ جِبْرِيلُ عَلَيْهِ السَّلَامُ إِلَى النَّبِيِّ ﷺ فِي غَارِ حِرَاءٍ وَأَمَرَهُ بِالْقِرَاءَةِ، فَكَانَتْ أُولَى كَلِمَاتِ الْوَحْيِ 'اِقْرَأْ' مِن سُورَةِ الْعَلَقِ." },
    en: { q: "What was the first word revealed?", options: { "A": "Qul (Say)", "B": "Bismillah", "C": "Iqra (Read)", "D": "Alhamdulillah" }, ans: "C", exp: "The angel Jibreel (AS) came to the Prophet in the Cave of Hira and commanded him to read, beginning the revelation of Surah Al-Alaq." }
  },
  {
    id: 10,
    ar: { q: " كَم عَدَدِ آيَاتِ سُورَةِ الْفَاتِحَةِ ؟", options: { "أ": " 5", "ب": " 6", "ج": " 8", "د": " 7" }, ans: "د", exp: " سُورَةُ الْفَاتِحَةِ تَتَكَوَّنُ مِن 7 آيَاتٍ، وَتُسَمَّى أَيْضًا 'السَّبْعُ الْمَثَانِي' كَمَا فِي قَوْلِهِ تَعَالَى (الحجر: 87)." },
    en: { q: "How many verses in Al-Fatihah?", options: { "A": "5", "B": "6", "C": "8", "D": "7" }, ans: "D", exp: "Al-Fatihah consists of 7 verses and is also known as 'The Seven Oft-Repeated Verses' (Al-Hijr 15:87)." }
  },
  {
    id: 11,
    ar: { q: " مَنٌّ هُو النَّبِيِّ الْأَكْثَرِ ذِكْرًا بِالْاِسْمِ فِي الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " إبراهيم عَلَيْهِ السُّلَّامَ", "ب": " مُوسًى عَلَيْهِ السُّلَّامَ", "ج": " عِيسَى عَلَيْهِ السُّلَّامَ", "د": " نَوْحٌ عَلَيْهِ السُّلَّامَ" }, ans: "ب", exp: " مُوسَى عَلَيْهِ السَّلَامُ ذُكِرَ بِالْاِسْمِ 136 مَرَّةً فِي الْقُرْآنِ. وَقِصَّتُهُ تَشْمَلُ وِلَادَتَهُ فِي ظِلِّ ظُلْمِ فِرْعَوْنَ، وَنَشْأَتَهُ فِي قَصْرِهِ، وَفِرَارَهُ إِلَى مَدْيَنَ، وَتَلَقِّيَهُ الْوَحْيَ فِي الطُّورِ، وَمُوَاجَهَتَهُ لِفِرْعَوْنَ، وَانْفِلَاقَ الْبَحْرِ، وَقِيَادَتَهُ بَنِي إِسْرَائِيلَ. وَتَكَرَّرَتْ قِصَّتُهُ لِمَا فِيهَا مِن دُرُوسٍ فِي الصَّبْرِ وَالتَّوَكُّلِ وَالْإِنْكَارِ عَلَى الظُّلْمِ." },
    en: { q: "Which prophet is mentioned most by name?", options: { "A": "Ibrahim (AS)", "B": "Musa (AS)", "C": "Isa (AS)", "D": "Nuh (AS)" }, ans: "B", exp: "Musa (AS) is mentioned by name 136 times. His story covers his birth in Egypt under Pharaoh's tyranny, being raised in the palace, fleeing to Madyan, receiving revelation at Mount Tur, confronting Pharaoh, the parting of the sea, and leading the Israelites. His story is told repeatedly because it carries lessons about patience, trust in Allah, and standing up to oppression." }
  },
  {
    id: 12,
    ar: { q: " فِي أَيِّ سُورَةِ ذُكِرَتْ الْبَسْمَلَةُ فِي وَسَطِ آيَةٍ ولَيْس فِي بِدَايَتِهَا فَقَط ؟", options: { "أ": " سُورَةُ الْفَاتِحَةِ", "ب": " سُورَةُ الْبَقَرَةِ", "ج": " سُورَةُ النَّمْلِ", "د": " سُورَةُ الرَّحْمَنِ" }, ans: "ج", exp: " فِي الْآيَةِ 30 مِن سُورَةِ النَّمْلِ، وَرَدَتِ الْبَسْمَلَةُ فِي رِسَالَةِ سُلَيْمَانَ عَلَيْهِ السَّلَامُ إِلَى مَلِكَةِ سَبَأَ: ﴿إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ﴾." },
    en: { q: "In which Surah does Bismillah appear within a verse?", options: { "A": "Surah Al-Fatihah", "B": "Surah Al-Baqarah", "C": "Surah An-Naml", "D": "Surah Ar-Rahman" }, ans: "C", exp: "In verse 30, Sulayman's letter to the Queen of Sheba begins with 'In the name of Allah, the Most Gracious, the Most Merciful.'" }
  },
  {
    id: 13,
    ar: { q: " فِي أَيِّ سُورَةِ تَوَجُّدِ آيَةِ الْكُرْسِيِّ ؟", options: { "أ": " سُورَةُ آلِ عِمْرَانَ", "ب": " سُورَةُ النِّسَاءِ", "ج": " سُورَةُ الْبَقَرَةِ", "د": " سُورَةُ الْمَائِدَةِ" }, ans: "ج", exp: " آيَةُ الْكُرْسِيِّ هِي الْآيَةُ 255 مِن سُورَةِ الْبَقَرَةِ. تَصِفُ سِيَادَةَ اللهِ الْمُطْلَقَةَ — الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ. وَقَالَ النَّبِيُّ ﷺ إِنَّهَا أَعْظَمُ آيَةٍ فِي الْقُرْآنِ، وَأَوْصَى بِقِرَاءَتِهَا بَعْدَ كُلِّ صَلَاةٍ وَعِنْدَ النَّوْمِ لِلْحِمَايَةِ." },
    en: { q: "In which Surah is Ayat al-Kursi?", options: { "A": "Surah Ali 'Imran", "B": "Surah An-Nisa", "C": "Surah Al-Baqarah", "D": "Surah Al-Ma'idah" }, ans: "C", exp: "Ayat al-Kursi (The Verse of the Throne) is verse 255 of Surah Al-Baqarah. It describes Allah's absolute sovereignty — that He is the Ever-Living, the Sustainer, that neither drowsiness nor sleep overtakes Him, and that His Kursi (Throne) extends over the heavens and the earth. The Prophet (PBUH) said it is the greatest verse in the Qur'an and recommended reciting it after every prayer and before sleeping for protection." }
  },
  {
    id: 14,
    ar: { q: " كَم عَدَدِ الْأَنْبِيَاءِ الْمَذْكُورِينَ بِالْاِسْمِ فِي الْقُرْآنِ ؟", options: { "أ": " 20", "ب": " 30", "ج": " 15", "د": " 25" }, ans: "د", exp: " ذُكِرَ فِي الْقُرْآنِ الْكَرِيمِ 25 نَبِيًّا وَرَسُولًا بِالْاِسْمِ، مِن آدَمَ عَلَيْهِ السَّلَامُ إِلَى مُحَمَّدٍ ﷺ، وَإِنْ كَانَ قَدْ أُرْسِلَ أَنْبِيَاءُ كَثِيرُونَ غَيْرُهُمْ." },
    en: { q: "How many prophets are mentioned by name?", options: { "A": "20", "B": "30", "C": "15", "D": "25" }, ans: "D", exp: "The Qur'an mentions 25 prophets by name, from Adam (AS) to Muhammad (PBUH), though many more were sent." }
  },
  {
    id: 15,
    ar: { q: " أَيَّ سُورَةِ سُمِّيَتْ بِاِسْمِ يَوْمٍ مِن أَيَّامِ الْأُسْبُوعِ ؟", options: { "أ": " سُورَةُ الشَّمْسِ", "ب": " سُورَةُ الْجُمُعَةِ", "ج": " سُورَةُ الْقَمَرِ", "د": " سُورَةُ الْفَجْرِ" }, ans: "ب", exp: " سُورَةُ الْجُمُعَةِ سُمِّيَتْ بِيَوْمِ الْجُمُعَةِ، يَوْمِ صَلَاةِ الْجَمَاعَةِ الْأُسْبُوعِيَّةِ، وَتُؤَكِّدُ أَهَمِّيَّةَ هَذَا الْيَوْمِ لِلْمُسْلِمِينَ." },
    en: { q: "Which Surah is named after a day of the week?", options: { "A": "Surah Ash-Shams", "B": "Surah Al-Jumu'ah", "C": "Surah Al-Qamar", "D": "Surah Al-Fajr" }, ans: "B", exp: "Named after Friday, the day of congregational prayer, it emphasises the importance of Jumu'ah for Muslims." }
  },
  {
    id: 16,
    ar: { q: " أَيَّ سُورَةِ سُمِّيَتْ بِاِسْمِ اِمْرَأَةٍ ؟", options: { "أ": " سُورَةُ فَاطِمَةُ", "ب": " سُورَةُ عَائِشَةُ", "ج": " سُورَةُ مَرْيَمٍ", "د": " سُورَةُ خَدِيجَةٍ" }, ans: "ج", exp: " سُورَةُ مَرْيَمٍ هِي السُّورَةُ الْوَحِيدَةُ فِي الْقُرْآنِ الَّتِي سُمِّيَتْ بِاِسْمِ اِمْرَأَةٍ — مَرْيَمُ أُمُّ عِيسَى عَلَيْهِ السَّلَامُ. وَهِي الْمَرْأَةُ الْوَحِيدَةُ الَّتِي ذُكِرَتْ بِاِسْمِهَا فِي الْقُرْآنِ." },
    en: { q: "Which Surah is named after a woman?", options: { "A": "Surah Fatimah", "B": "Surah Aisha", "C": "Surah Maryam", "D": "Surah Khadijah" }, ans: "C", exp: "Named after Maryam (Mary), the mother of Isa (AS). She is the only woman mentioned by name in the Qur'an." }
  },
  {
    id: 17,
    ar: { q: " أَيَّ سُورَةٍ تُنْجِي مِن عَذَابِ الْقَبْرِ كَمَا وَرَدَّ فِِي الْحَديثِ ؟", options: { "أ": " سُورَةُ الْمُلْكِ", "ب": " سُورَةُ الْكَهْفِ", "ج": " سُورَةُ يَسَّ", "د": " سُورَةُ الْوَاقِعَةِ" }, ans: "أ", exp: " قَالَ النَّبِيُّ ﷺ: 'سُورَةٌ مِن الْقُرْآنِ ثَلَاثُونَ آيَةً شَفَعَتْ لِصَاحِبِهَا حَتَّى غُفِرَ لَهُ.' (رَوَاهُ التِّرْمِذِيُّ)." },
    en: { q: "Which Surah protects from grave punishment?", options: { "A": "Surah Al-Mulk", "B": "Surah Al-Kahf", "C": "Surah Ya-Sin", "D": "Surah Al-Waqi'ah" }, ans: "A", exp: "The Prophet (PBUH) said: 'There is a Surah of 30 verses which intercedes for its companion until he is forgiven.' (Tirmidhi)" }
  },
  {
    id: 18,
    ar: { q: " فِي أَيِّ سُورَةٍ وَرَدَتِ الْآيَةُ: ﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا﴾ ؟", options: { "أ": " سُورَةُ الضُّحَى", "ب": " سُورَةُ الشَّرْحِ", "ج": " سُورَةُ الْكَوْثَرِ", "د": " سُورَةُ التِّينِ" }, ans: "ب", exp: " الْآيَةُ 6 مِن هَذِهِ السُّورَةِ الْقَصِيرَةِ تُطَمْئِنُ النَّبِيَّ ﷺ بِأَنَّ الْفَرَجَ يَأْتِي مَعَ الشِّدَّةِ دَائِمًا. وَقَدْ تَكَرَّرَتِ الْآيَةُ مَرَّتَيْنِ لِلتَّأْكِيدِ." },
    en: { q: "Which Surah contains 'Verily, with hardship comes ease'?", options: { "A": "Surah Ad-Duha", "B": "Surah Ash-Sharh", "C": "Surah Al-Kawthar", "D": "Surah At-Tin" }, ans: "B", exp: "Verse 6 of this short Surah reassures the Prophet (PBUH) that relief always accompanies difficulty. The verse is repeated twice for emphasis." }
  },
  {
    id: 19,
    ar: { q: " فِي أَيِّ سُورَةٍ تُرْوَى قِصَّةُ النَّبِيِّ يوسف عَلَيْهِ السُّلَّامَ بِالتَّفْصِيلِ ؟", options: { "أ": " سُورَةُ يوسف", "ب": " سُورَةُ إبراهيم", "ج": " سُورَةُ الْأَنْبِيَاءِ", "د": " سُورَةُ الْقَصَصِ" }, ans: "أ", exp: " وَصَفَ اللهُ قِصَّةَ يُوسُفَ بِأَنَّهَا 'أَحْسَنُ الْقَصَصِ' (12:3). وَهِي السُّورَةُ الْوَحِيدَةُ الَّتِي تَرْوِي قِصَّةَ نَبِيٍّ وَاحِدٍ مِن بِدَايَتِهَا إِلَى نِهَايَتِهَا." },
    en: { q: "Which Surah tells Prophet Yusuf's story in full?", options: { "A": "Surah Yusuf", "B": "Surah Ibrahim", "C": "Surah Al-Anbiya", "D": "Surah Al-Qasas" }, ans: "A", exp: "Allah describes it as 'the best of stories' (12:3). It is the only Surah that tells one prophet's story from beginning to end." }
  },
  {
    id: 20,
    ar: { q: " مَا هِي آخِرِ سُورَةٍ فِي الْقُرْآنِ الْكَرِيمِ ؟", options: { "أ": " سُورَةُ الْفَلْقِ", "ب": " سُورَةُ الْإِخْلَاَصِ", "ج": " سُورَةُ النَّاسِ", "د": " سُورَةُ الْكَافِرُونَ" }, ans: "ج", exp: " سُورَةُ النَّاسِ هِي السُّورَةُ الْأَخِيرَةُ فِي الْمُصْحَفِ (السُّورَةُ 114)، تَسْتَعِيذُ بِاللهِ مِنَ الْوَسْوَاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ." },
    en: { q: "What is the last Surah in the Qur'an?", options: { "A": "Surah Al-Falaq", "B": "Surah Al-Ikhlas", "C": "Surah An-Nas", "D": "Surah Al-Kafirun" }, ans: "C", exp: "The 114th Surah, it seeks refuge in Allah from the whisperer who whispers into the hearts of mankind." }
  },
  {
    id: 21,
    ar: { q: " أَيُّ سُورَةٍ سُمِّيَتْ بِاِسْمِ مَعْدِنٍ ؟", options: { "أ": " سُورَةُ الْحَدِيدِ", "ب": " سُورَةُ الذَّهَبِ", "ج": " سُورَةُ النُّحَاسِ", "د": " سُورَةُ الْفِضَّةِ" }, ans: "أ", exp: " سُورَةُ الْحَدِيدِ (57) هِي السُّورَةُ الْوَحِيدَةُ الْمُسَمَّاةُ بِاِسْمِ مَعْدِنٍ، وَفِيهَا: ﴿وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ﴾ (57:25)." },
    en: { q: "Which is the only Surah named after a metal?", options: { "A": "Surah Al-Hadid (Iron)", "B": "Surah Ad-Dhahab (Gold)", "C": "Surah An-Nuhas (Copper)", "D": "Surah Al-Fidda (Silver)" }, ans: "A", exp: "Chapter 57, it mentions that Allah 'sent down iron, wherein is great strength and benefits for people.' (57:25)" }
  },
  {
    id: 22,
    ar: { q: " مَا هِي أَوَّل سُورَةِ نَزِلَتْ كَامِلَةٌ ؟", options: { "أ": " سُورَةُ الْبَقَرَةِ", "ب": " سُورَةُ الْمُدَّثِّرِ", "ج": " سُورَةُ الْعَلَقِ", "د": " سُورَةُ الْفَاتِحَةِ" }, ans: "د", exp: " بَيْنَمَا كَانَتْ أُولَى الْآيَاتِ الْمُنَزَّلَةِ مِن سُورَةِ الْعَلَقِ، فَإِنَّ سُورَةَ الْفَاتِحَةِ هِي أُولَى السُّوَرِ الَّتِي نَزَلَتْ كَامِلَةً." },
    en: { q: "What was the first complete Surah revealed?", options: { "A": "Surah Al-Baqarah", "B": "Surah Al-Muddathir", "C": "Surah Al-Alaq", "D": "Surah Al-Fatihah" }, ans: "D", exp: "While the first verses revealed were from Surah Al-Alaq, Al-Fatihah was the first Surah revealed in its entirety." }
  },
  {
    id: 23,
    ar: { q: " كَم عَدَدِ أَرْكَانِ الْإيمَانِ ؟", options: { "أ": " 5", "ب": " 6", "ج": " 7", "د": " 4" }, ans: "ب", exp: " أَرْكَانُ الْإِيمَانِ سِتَّةٌ: الْإِيمَانُ بِاللهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَالْقَدَرِ خَيْرِهِ وَشَرِّهِ — كَمَا عَلَّمَنَا حَدِيثُ جِبْرِيلَ." },
    en: { q: "How many Pillars of Iman are there?", options: { "A": "5", "B": "6", "C": "7", "D": "4" }, ans: "B", exp: "Belief in Allah, His Angels, His Books, His Messengers, the Last Day, and Divine Decree (Qadr) — as taught in the Hadith of Jibreel." }
  },
  {
    id: 24,
    ar: { q: " مَا الِاسْمُ الَّذِي يُعْرَفُ بِهِ سُورَةُ الْفَاتِحَةِ وَيَعْنِي 'أُمَّ الْكِتَابِ' ؟", options: { "أ": " سُورَةُ الْبَقَرَةِ", "ب": " سُورَةُ يَسَّ", "ج": " سُورَةُ الْإِخْلَاَصِ", "د": " سُورَةُ الْفَاتِحَةِ" }, ans: "د", exp: " تُسَمَّى سُورَةُ الْفَاتِحَةِ 'أُمَّ الْكِتَابِ' لِأَنَّهَا تُلَخِّصُ الْمَضَامِينَ الْجَوْهَرِيَّةَ لِلْقُرْآنِ كُلِّهِ: الْحَمْدُ، وَالْهِدَايَةُ، وَالْعِبَادَةُ." },
    en: { q: "Which Surah is known as 'The Mother of the Book'?", options: { "A": "Surah Al-Baqarah", "B": "Surah Ya-Sin", "C": "Surah Al-Ikhlas", "D": "Surah Al-Fatihah" }, ans: "D", exp: "Called 'Umm al-Kitab' because it summarises the core themes of the entire Qur'an: praise, guidance, and worship." }
  },
  {
    id: 25,
    ar: { q: " فِي أَيِّ سُورَةٍ تُرْوَى قِصَّةُ أَصْحَابِ الْكَهْفِ ؟", options: { "أ": " سُورَةُ الْكَهْفِ", "ب": " سُورَةُ الْحِجْرِ", "ج": " سُورَةُ الْأَنْبِيَاءِ", "د": " سُورَةُ مَرْيَمٍ" }, ans: "أ", exp: " سُورَةُ الْكَهْفِ تَحْكِي قِصَّةَ فِتْيَةٍ مُؤْمِنِينَ فَرُّوا مِنَ الِاضْطِهَادِ وَنَامُوا فِي كَهْفٍ مِئَاتِ السِّنِينَ بِإِذْنِ اللهِ." },
    en: { q: "Which Surah tells the story of the People of the Cave?", options: { "A": "Surah Al-Kahf", "B": "Surah Al-Hijr", "C": "Surah Al-Anbiya", "D": "Surah Maryam" }, ans: "A", exp: "It recounts the story of young believers who fled persecution and slept in a cave for hundreds of years by Allah's will." }
  },
  {
    id: 26,
    ar: { q: " مَا الِاسْمُ الَّذِي يُطْلَقُ عَلَى سُورَتَيِ الْفَلَقِ وَالنَّاسِ مَعًا ؟", options: { "أ": " الزَّهْرَاوَانِ", "ب": " الْمُعَوِّذَتَانِ", "ج": " السَّبْعُ الطِّوَالُ", "د": " الْمُفَصَّلَاتُ" }, ans: "ب", exp: " سُورَةُ الْفَلَقِ وَسُورَةُ النَّاسِ تُسَمَّيَانِ 'الْمُعَوِّذَتَيْنِ' أَيِ 'السُّورَتَيْنِ الْحَامِيَتَيْنِ'. وَكَانَ النَّبِيُّ ﷺ يَقْرَؤُهُمَا لِلتَّحَصُّنِ مِنَ الشَّرِّ." },
    en: { q: "What are the last two Surahs collectively called?", options: { "A": "Al-Zahrawain", "B": "Al-Mu'awwidhatayn", "C": "As-Sab' at-Tiwal", "D": "Al-Mufassalat" }, ans: "B", exp: "Surah Al-Falaq and Surah An-Nas are called 'The Two Protectors.' The Prophet (PBUH) used to recite them for protection." }
  },
  {
    id: 27,
    ar: { q: " كَمْ سُورَةً تَبْدَأُ بِحُرُوفِ 'الم' ؟", options: { "أ": " 3", "ب": " 9", "ج": " 6", "د": " 12" }, ans: "ج", exp: " سِتُّ سُوَرٍ تَبْدَأُ بِ 'الم': الْبَقَرَةُ، وَآلُ عِمْرَانَ، وَالْعَنْكَبُوتُ، وَالرُّومُ، وَلُقْمَانُ، وَالسَّجْدَةُ. وَتُسَمَّى هَذِهِ الْحُرُوفُ 'الْحُرُوفَ الْمُقَطَّعَةَ' — حُرُوفٌ مُقَطَّعَةٌ تَرِدُ فِي مَطَالِعِ 29 سُورَةً. مَعْنَاهَا الدَّقِيقُ لَا يَعْلَمُهُ إِلَّا اللهُ، غَيْرَ أَنَّ الْعُلَمَاءَ يَرَوْنَ أَنَّهَا تَدُلُّ عَلَى إِعْجَازِ الْقُرْآنِ: إِذْ لَمْ يَسْتَطِعِ الْبَشَرُ مُعَارَضَتَهُ رَغْمَ أَنَّهُ مُؤَلَّفٌ مِنْ ذَاتِ الْحُرُوفِ الَّتِي يَتَكَلَّمُونَ بِهَا." },
    en: { q: "How many Surahs begin with 'Alif Lam Mim'?", options: { "A": "3", "B": "9", "C": "6", "D": "12" }, ans: "C", exp: "Six Surahs open with these letters: Al-Baqarah, Ali 'Imran, Al-Ankabut, Ar-Rum, Luqman, and As-Sajdah. These are known as Huruf al-Muqatta'at (disconnected letters) — mysterious letter combinations that appear at the start of 29 Surahs. Their exact meaning is known only to Allah, though scholars suggest they serve to demonstrate the Qur'an's miraculous nature: despite being composed of the same Arabic letters people use daily, no one could produce anything like it." }
  },
  {
    id: 28,
    ar: { q: " أَيَّ سُورَةٍ تَحْتَوِي عَلَى سَجْدَتَيْنِ ؟", options: { "أ": " سُورَةُ الْإِسْرَاءِ", "ب": " سُورَةُ السَّجْدَةِ", "ج": " سُورَةُ مَرْيَمٍ", "د": " سُورَةُ الْحَجِّ" }, ans: "د", exp: " مَعْظَمُ السُّوَرِ ذَاتِ آيَاتِ السَّجْدَةِ تَحْتَوِي عَلَى سَجْدَةٍ وَاحِدَةٍ، غَيْرَ أَنَّ سُورَةَ الْحَجِّ تَتَمَيَّزُ بِاحْتِوَائِهَا عَلَى سَجْدَتَيْنِ: فِي الْآيَتَيْنِ 18 و 77." },
    en: { q: "Which Surah contains two Sajdah (prostration) verses?", options: { "A": "Surah Al-Isra", "B": "Surah As-Sajdah", "C": "Surah Maryam", "D": "Surah Al-Hajj" }, ans: "D", exp: "Most Surahs with a Sajdah verse have one, but Al-Hajj uniquely contains two — at verses 18 and 77." }
  },
  {
    id: 29,
    ar: { q: " أَيُّ سُورَةٍ سُمِّيَتْ بِاِسْمِ حَشَرَةٍ ؟", options: { "أ": " سُورَةُ النَّحْلِ", "ب": " سُورَةُ الْعَنْكَبُوتِ", "ج": " سُورَةُ النَّمْلِ", "د": " سُورَةُ الْفِيلِ" }, ans: "ج", exp: " سُورَةُ النَّمْلِ (27) تَتَضَمَّنُ قِصَّةَ سُلَيْمَانَ عَلَيْهِ السَّلَامُ حِينَ سَمِعَ نَمْلَةً تُحَذِّرُ مُسْتَعْمَرَتَهَا مِنِ اقْتِرَابِ جَيْشِهِ." },
    en: { q: "Which Surah is named after an insect?", options: { "A": "Surah An-Nahl (The Bee)", "B": "Surah Al-Ankabut (The Spider)", "C": "Surah An-Naml (The Ant)", "D": "Surah Al-Fil (The Elephant)" }, ans: "C", exp: "Chapter 27, it includes the story of Sulayman (AS) who heard an ant warning its colony as his army approached." }
  },
  {
    id: 30,
    ar: { q: " فِي أَيِّ سُورَةٍ وَرَدَتِ الْآيَةُ: ﴿لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا﴾ ؟", options: { "أ": " سُورَةُ النِّسَاءِ", "ب": " سُورَةُ الْأَنْعَامِ", "ج": " سُورَةُ الْبَقَرَةِ", "د": " سُورَةُ الْمُؤْمِنُونَ" }, ans: "ج", exp: " هَذِهِ الْآيَةُ الْكَرِيمَةُ هِي خَاتِمَةُ سُورَةِ الْبَقَرَةِ (2:286)، وَهِي مِن أَكْثَرِ الْآيَاتِ اسْتِشْهَادًا، تُؤَكِّدُ لِلْمُؤْمِنِينَ أَنَّ كُلَّ ابْتِلَاءٍ فِي طَاقَتِهِمْ." },
    en: { q: "In which Surah is 'Allah does not burden a soul beyond what it can bear'?", options: { "A": "Surah An-Nisa", "B": "Surah Al-An'am", "C": "Surah Al-Baqarah", "D": "Surah Al-Mu'minun" }, ans: "C", exp: "The final verse (2:286), one of the most quoted verses, assuring believers that every trial is within their capacity." }
  },
  {
    id: 31,
    ar: { q: " مَا هِي الْعِبَادَةِ الَّتِي تُعْرَفُ ب 'عماد الدين' ؟", options: { "أ": " الزَّكَاةُ", "ب": " الصَّلَاَةُ", "ج": " الصَّوْمُ", "د": " اِلْحَجْ" }, ans: "ب", exp: " قَالَ النَّبِيُّ ﷺ: 'رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ.' الصَّلَاةُ هِي عِمَادُ الدِّينِ، مَنْ أَقَامَهَا فَقَدْ أَقَامَ الدِّينَ. (رَوَاهُ التِّرْمِذِيُّ)" },
    en: { q: "Which act of worship is known as the 'Pillar of the Religion'?", options: { "A": "Zakat (Charity)", "B": "Salah (Prayer)", "C": "Sawm (Fasting)", "D": "Hajj (Pilgrimage)" }, ans: "B", exp: "The Prophet (PBUH) said: 'The head of the matter is Islam, its pillar is Salah.' (Tirmidhi)" }
  },
  {
    id: 32,
    ar: { q: " كَم عَدَدِ أَرْكَانِ الْإِسْلَامِ ؟", options: { "أ": " 5", "ب": " 4", "ج": " 6", "د": " 7" }, ans: "أ", exp: " أَرْكَانُ الْإِسْلَامِ خَمْسَةٌ: الشَّهَادَتَانِ، وَالصَّلَاةُ، وَالزَّكَاةُ، وَصَوْمُ رَمَضَانَ، وَحَجُّ الْبَيْتِ — كَمَا وَرَدَ فِي حَدِيثِ ابْنِ عُمَرَ (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)." },
    en: { q: "How many Pillars of Islam are there?", options: { "A": "5", "B": "4", "C": "6", "D": "7" }, ans: "A", exp: "The Five Pillars are: Shahadah, Salah, Zakat, Fasting, and Hajj — as stated in the hadith of Ibn Umar (Bukhari & Muslim)." }
  },
  {
    id: 33,
    ar: { q: " مَا هُو الرُّكْنِ الْأَوَّلِ مِن أَرْكَانِ الْإِسْلَامِ ؟", options: { "أ": " الصَّلَاَةُ", "ب": " الشَّهَادَتَانِ", "ج": " الزَّكَاةُ", "د": " الصَّوْمُ" }, ans: "ب", exp: " الشَّهَادَتَانِ هِي أَوَّلُ رُكْنٍ: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللهِ.' وَهِي أَسَاسُ إِيمَانِ الْمُسْلِمِ." },
    en: { q: "What is the first Pillar of Islam?", options: { "A": "Salah (Prayer)", "B": "Shahadah (Testimony of Faith)", "C": "Zakat (Charity)", "D": "Sawm (Fasting)" }, ans: "B", exp: "'I bear witness that there is no god but Allah and that Muhammad is the Messenger of Allah.' It is the foundation of a Muslim's faith." }
  },
  {
    id: 34,
    ar: { q: " كَم عَدَدِ الصَّلَوَاتِ الْمَفْرُوضَةِ فِي الْيَوْمِ وَاللَّيْلَةِ ؟", options: { "أ": " 3", "ب": " 4", "ج": " 5", "د": " 6" }, ans: "ج", exp: " الصَّلَوَاتُ الْمَفْرُوضَةُ خَمْسٌ: الْفَجْرُ، وَالظُّهْرُ، وَالْعَصْرُ، وَالْمَغْرِبُ، وَالْعِشَاءُ — وَقَدْ فُرِضَتْ لَيْلَةَ الْإِسْرَاءِ وَالْمِعْرَاجِ." },
    en: { q: "How many obligatory daily prayers are there in Islam?", options: { "A": "3", "B": "4", "C": "5", "D": "6" }, ans: "C", exp: "Fajr, Dhuhr, Asr, Maghrib, and Isha — made obligatory during the Isra and Mi'raj." }
  },
  {
    id: 35,
    ar: { q: " مَا مُعَنَّى 'الإحسان' كَمَا جَاءَ فِي حَديثِ جبريل عَلَيْهِ السُّلَّامَ ؟", options: { "أ": " الصَّلَاَةُ فِي جَمَاعَةٍ", "ب": " الصِّدْقَةُ عَلَى الْفُقَرَاءِ", "ج": " حِفْظُ الْقُرْآنِ", "د": " أَنّ تَعَبُّدِ اللهِ كأَنّكَ تَرَاهُ" }, ans: "د", exp: " الْإِحْسَانُ أَعْلَى مَرَاتِبِ الْعِبَادَةِ: 'أَنْ تَعْبُدَ اللهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ.' (رَوَاهُ مُسْلِمٌ)" },
    en: { q: "What is the meaning of 'Ihsan' as described in the Hadith of Jibreel (AS)?", options: { "A": "Praying in congregation", "B": "Giving charity to the poor", "C": "Memorising the Qur'an", "D": "To worship Allah as if you see Him" }, ans: "D", exp: "The highest level of worship: 'If you do not see Him, then indeed He sees you.' (Muslim)" }
  },
  {
    id: 36,
    ar: { q: " 'إِنْمَا الْأَعْمَالَ بالنيات' - بِمَاذَا تُحْكَمُ الْأَعْمَالُ ؟", options: { "أ": " بِالنِّيَّاتِ", "ب": " بِالنَّتَائِجِ", "ج": " بِالْمَظَاهِرِ", "د": " بِالْأَقْوَالِ" }, ans: "أ", exp: " أَوَّلُ حَدِيثٍ فِي صَحِيحِ الْبُخَارِيِّ: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.' كُلُّ عَمَلٍ يُثَابُ عَلَيْهِ صَاحِبُهُ بِحَسَبِ نِيَّتِهِ." },
    en: { q: "'Actions are judged by...' — what completes this famous hadith?", options: { "A": "Intentions", "B": "Results", "C": "Appearances", "D": "Words" }, ans: "A", exp: "The first hadith in Sahih al-Bukhari. Every deed is rewarded according to its intention." }
  },
  {
    id: 37,
    ar: { q: " مَا نِسْبَةِ الزَّكَاةِ الْمَفْرُوضَةِ عَلَى الْأَمْوَالِ ؟", options: { "أ": " 5 %", "ب": " 10 %", "ج": " 2.5 %", "د": " 1 %" }, ans: "ج", exp: " نِسْبَةُ الزَّكَاةِ رُبُعُ الْعُشْرِ (2.5%) مِنَ الْمَالِ الَّذِي بَلَغَ النِّصَابَ وَحَالَ عَلَيْهِ الْحَوْلُ الْقَمَرِيُّ." },
    en: { q: "What is the standard Zakat rate on accumulated wealth?", options: { "A": "5%", "B": "10%", "C": "2.5%", "D": "1%" }, ans: "C", exp: "Wealth above the Nisab threshold held for one lunar year is subject to 2.5% Zakat." }
  },
  {
    id: 38,
    ar: { q: " مَا أفْضَلُ شَهْرِ لِلصِّيَامَ بَعْد رَمَضَانِ كَمَا وَرَدَّ فِِي الْحَديثِ ؟", options: { "أ": " شَعْبَانِ", "ب": " مُحَرَّمٌ", "ج": " رَجَبٌ", "د": " ذُو الْحُجَّةِ" }, ans: "ب", exp: " قَالَ النَّبِيُّ ﷺ: 'أَفْضَلُ الصِّيَامِ بَعْدَ رَمَضَانَ شَهْرُ اللهِ الْمُحَرَّمُ.' (رَوَاهُ مُسْلِمٌ)." },
    en: { q: "What is the best month for voluntary fasting after Ramadan?", options: { "A": "Sha'ban", "B": "Muharram", "C": "Rajab", "D": "Dhul-Hijjah" }, ans: "B", exp: "The Prophet (PBUH) said: 'The best fasting after Ramadan is in the month of Muharram.' (Muslim)" }
  },
  {
    id: 39,
    ar: { q: " مَا هُمَا الْيَوْمَانِ الْلَذَان يُسْتَحَبُّ صِيَامُهُمَا تَطَوُّعًا كُلّ أُسْبُوعٍ ؟", options: { "أ": " الْاِثْنَيْنُ وَالْخَمِيسُ", "ب": " السَّبْتُ وَالْأحَدُ", "ج": " الثُّلَاَثَاءُ وَالْأَرْبِعَاءُ", "د": " الْأَرْبِعَاءُ وَالْخَمِيسُ" }, ans: "أ", exp: " كَانَ النَّبِيُّ ﷺ يَتَحَرَّى صِيَامَ يَوْمَيِ الِاثْنَيْنِ وَالْخَمِيسِ لِأَنَّ الْأَعْمَالَ تُعْرَضُ فِيهِمَا عَلَى اللهِ. (رَوَاهُ التِّرْمِذِيُّ)" },
    en: { q: "Which two days of the week are recommended for voluntary fasting?", options: { "A": "Monday and Thursday", "B": "Saturday and Sunday", "C": "Tuesday and Wednesday", "D": "Wednesday and Thursday" }, ans: "A", exp: "The Prophet (PBUH) fasted these days as deeds are presented to Allah on them. (Tirmidhi)" }
  },
  {
    id: 40,
    ar: { q: " كَم عَدَدِ رَكْعَاتِ صَلَاَةِ الْفَجْرِ الْمَفْرُوضَةِ ؟", options: { "أ": " 3", "ب": " 2", "ج": " 4", "د": " 1" }, ans: "ب", exp: " صَلَاةُ الْفَجْرِ الْمَفْرُوضَةُ رَكْعَتَانِ، وَهِي أَقَلُّ الصَّلَوَاتِ الْخَمْسِ فِي عَدَدِ الرَّكَعَاتِ." },
    en: { q: "How many rak'at are in the obligatory Fajr prayer?", options: { "A": "3", "B": "2", "C": "4", "D": "1" }, ans: "B", exp: "The dawn prayer is the shortest obligatory prayer at 2 rak'at." }
  },
  {
    id: 41,
    ar: { q: " مَا هِي الصَّلَاَةِ الَّتِي تُصَلَّى عَلَى الْمُتَوَفَّى الْمُسْلِمِ ؟", options: { "أ": " صَلَاَةُ الِاسْتِسْقَاءِ", "ب": " صَلَاَةُ الْكُسُوفِ", "ج": " صَلَاَةُ الْجِنَازَةِ", "د": " صَلَاَةُ الِاسْتِخَارَةِ" }, ans: "ج", exp: " صَلَاةُ الْجِنَازَةِ فَرْضُ كِفَايَةٍ، تُؤَدَّى بِأَرْبَعِ تَكْبِيرَاتٍ قِيَامًا دُونَ رُكُوعٍ أَوْ سُجُودٍ." },
    en: { q: "What is the prayer performed for a deceased Muslim?", options: { "A": "Salat al-Istisqa", "B": "Salat al-Kusuf", "C": "Salat al-Janazah", "D": "Salat al-Istikhara" }, ans: "C", exp: "A communal obligation with 4 takbirs, performed standing with no bowing or prostration." }
  },
  {
    id: 42,
    ar: { q: " مَا اِسْمِ صَلَاَةِ طَلَبِ الْمَشُورَةِ مِن اللهِ تَعَالَى ؟", options: { "أ": " صَلَاَةُ الِاسْتِخَارَةِ", "ب": " صَلَاَةُ الْحَاجَةِ", "ج": " صَلَاَةُ التَّوْبَةِ", "د": " صَلَاَةُ الشُّكْرِ" }, ans: "أ", exp: " صَلَاةُ الِاسْتِخَارَةِ رَكْعَتَانِ يَتْبَعُهُمَا دُعَاءٌ خَاصٌّ يَطْلُبُ فِيهِ الْمُسْلِمُ مِنَ اللهِ أَنْ يَهْدِيَهُ إِلَى الْخَيْرِ فِي أَمْرِهِ." },
    en: { q: "What is the prayer for seeking Allah's (SWT) guidance called?", options: { "A": "Salat al-Istikhara", "B": "Salat al-Hajah", "C": "Salat at-Tawbah", "D": "Salat ash-Shukr" }, ans: "A", exp: "A 2-rak'ah prayer followed by a du'a asking Allah to guide one's decision." }
  },
  {
    id: 43,
    ar: { q: " مَا اِسْمِ وَجْبَةٍ مَا قَبْل الْفَجْرِ فِي رَمَضَانِ ؟", options: { "أ": " الْإِفْطَارُ", "ب": " الْغَدَاءُ", "ج": " الْعَشَاءُ", "د": " السَّحُورُ" }, ans: "د", exp: " قَالَ النَّبِيُّ ﷺ: 'تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً.' (رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ)." },
    en: { q: "What is the pre-dawn meal before fasting called?", options: { "A": "Iftar", "B": "Lunch", "C": "Dinner", "D": "Suhoor" }, ans: "D", exp: "The Prophet (PBUH) said: 'Eat Suhoor, for in Suhoor there is blessing.' (Bukhari & Muslim)" }
  },
  {
    id: 44,
    ar: { q: " كَم عَدَدِ رَكْعَاتِ صَلَاَةِ الْمَغْرِبِ الْمَفْرُوضَةِ ؟", options: { "أ": " 2", "ب": " 3", "ج": " 4", "د": " 1" }, ans: "ب", exp: " صَلَاةُ الْمَغْرِبِ الْمَفْرُوضَةُ ثَلَاثُ رَكَعَاتٍ، وَهِي الصَّلَاةُ الْفَرِيضَةُ الْوَحِيدَةُ ذَاتُ الْعَدَدِ الْفَرْدِيِّ، تُؤَدَّى عِنْدَ غُرُوبِ الشَّمْسِ." },
    en: { q: "How many rak'at are in the obligatory Maghrib prayer?", options: { "A": "2", "B": "3", "C": "4", "D": "1" }, ans: "B", exp: "The only odd-numbered obligatory prayer, performed at sunset." }
  },
  {
    id: 45,
    ar: { q: " مَا أَفَضْلَ الذِّكْرِ كَمَا وَرَدَّ فِِي الْحَديثَ الشَّرِيفَ ؟", options: { "أ": " لَا إلَهٍ إِلَّا اللهِ", "ب": " سُبْحَانَ اللَّهِ", "ج": " الْحَمْدُ لِلَهَّ", "د": " اللهُ أَكْبَرْ" }, ans: "أ", exp: " قَالَ النَّبِيُّ ﷺ: 'أَفْضَلُ الذِّكْرِ لَا إِلَهَ إِلَّا اللهُ.' (رَوَاهُ التِّرْمِذِيُّ)." },
    en: { q: "What is the best form of dhikr (remembrance) according to hadith?", options: { "A": "La ilaha illallah", "B": "SubhanAllah", "C": "Alhamdulillah", "D": "Allahu Akbar" }, ans: "A", exp: "The Prophet (PBUH) said: 'The best dhikr is La ilaha illallah.' (Tirmidhi)" }
  },
  {
    id: 46,
    ar: { q: " كَم عَدَدِ رَكْعَاتِ صَلَاَةِ الظُّهْرِ الْمَفْرُوضَةِ ؟", options: { "أ": " 2", "ب": " 3", "ج": " 5", "د": " 4" }, ans: "د", exp: " صَلَاةُ الظُّهْرِ الْمَفْرُوضَةُ أَرْبَعُ رَكَعَاتٍ، وَهِي نَفْسُ عَدَدِ رَكَعَاتِ الْعَصْرِ وَالْعِشَاءِ." },
    en: { q: "How many rak'at are in the obligatory Dhuhr prayer?", options: { "A": "2", "B": "3", "C": "5", "D": "4" }, ans: "D", exp: "The midday prayer, same count as Asr and Isha." }
  },
  {
    id: 47,
    ar: { q: " مَنٌّ هُو مُؤَلِّفِ صَحِيحِ مُسْلِمِ ؟", options: { "أ": " الْإمَامُ الْبُخَارِيُّ", "ب": " مُسْلِمُ بْن الْحُجَّاجَ", "ج": " أَبُو دَاوُدٍ", "د": " الْإمَامُ التِّرْمِذِيَّ" }, ans: "ب", exp: " الْإِمَامُ مُسْلِمُ بْنُ الْحَجَّاجِ النَّيْسَابُورِيُّ عَالِمٌ مِنَ الْقَرْنِ التَّاسِعِ الْمِيلَادِيِّ، أَمْضَى خَمْسَةَ عَشَرَ عَامًا فِي تَأْلِيفِ صَحِيحِهِ مُنْتَقِيًا نَحْوَ سَبْعَةِ آلَافٍ وَخَمْسِمِائَةِ حَدِيثٍ. يُعَدُّ صَحِيحُ مُسْلِمٍ ثَانِيَ أَصَحِّ كُتُبِ الْحَدِيثِ، وَيُعْرَفُ هُوَ وَصَحِيحُ الْبُخَارِيِّ بِـ'الصَّحِيحَيْنِ'." },
    en: { q: "Who is the compiler of Sahih Muslim?", options: { "A": "Imam Al-Bukhari", "B": "Muslim ibn al-Hajjaj", "C": "Abu Dawud", "D": "Imam At-Tirmidhi" }, ans: "B", exp: "Muslim ibn al-Hajjaj was a 9th-century scholar from Nishapur. He spent 15 years compiling his collection, selecting approximately 7,500 hadith from over 300,000. Sahih Muslim is the second most authentic hadith book after Sahih al-Bukhari. Together they are known as 'As-Sahihayn' (The Two Authentics)." }
  },
  {
    id: 48,
    ar: { q: " مَا هِي لَيْلَةِ الْقَدْرِ ؟", options: { "أ": " لَيْلَةُ عِيدِ الْفِطْرِ", "ب": " لَيْلَةُ النِّصْفِ مِن شَعْبَانِ", "ج": " لَيْلَةُ خَيْرٍ مِن ألْفِ شَهْرِ فِي رَمَضَانِ", "د": " لَيْلَةُ رَأْسِ السَّنَةِ الْهِجْرِيَّةِ" }, ans: "ج", exp: " 'لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ.' (97:3) وَتَقَعُ فِي الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ." },
    en: { q: "What is Laylat al-Qadr (The Night of Decree)?", options: { "A": "Night of Eid al-Fitr", "B": "Middle of Sha'ban", "C": "A night better than 1,000 months in Ramadan", "D": "Islamic New Year's Eve" }, ans: "C", exp: "'The Night of Decree is better than a thousand months.' (97:3) It falls in the last 10 nights of Ramadan." }
  },
  {
    id: 49,
    ar: { q: " كَم عَدَدِ أَشْوَاطِ الطَّوَافِ حَوْل الْكَعْبَةِ ؟", options: { "أ": " 5", "ب": " 6", "ج": " 3", "د": " 7" }, ans: "د", exp: " يَطُوفُ الْحُجَّاجُ حَوْلَ الْكَعْبَةِ 7 أَشْوَاطٍ عَكْسَ عَقَارِبِ السَّاعَةِ، يَبْدَأُونَ عِنْدَ الْحَجَرِ الْأَسْوَدِ وَيَنْتَهُونَ عِنْدَهُ." },
    en: { q: "How many rounds (circuits) make up one Tawaf around the Kaaba?", options: { "A": "5", "B": "6", "C": "3", "D": "7" }, ans: "D", exp: "Pilgrims walk counter-clockwise around the Kaaba 7 times, starting at the Black Stone." }
  },
  {
    id: 50,
    ar: { q: " بَيْن أَيِّ جَبَلَيْنِ يَتِمُّ السَّعِيُّ فِي الْحَجِّ وَالْعُمَرَةِ ؟", options: { "أ": " اُلْصُفَا وَالْمروَةَ", "ب": " أَحَدٌّ وَثَوْرٌ", "ج": " عَرَفَاتٌ وَمُزْدَلِفَةٌ", "د": " حِرَاءٌ وَالنُّورُ" }, ans: "أ", exp: " السَّعِيُّ بَيْنَ الصَّفَا وَالْمَرْوَةِ سَبْعَةَ أَشْوَاطٍ اقْتِدَاءً بِسَعْيِ هَاجِرَ عَلَيْهَا السَّلَامُ فِي بَحْثِهَا عَنِ الْمَاءِ لِإِسْمَاعِيلَ." },
    en: { q: "Between which two hills is the Sa'i performed during Hajj and Umrah?", options: { "A": "Safa and Marwa", "B": "Uhud and Thawr", "C": "Arafat and Muzdalifah", "D": "Hira and Noor" }, ans: "A", exp: "Commemorates Hajar's (AS) search for water for Isma'il (AS). Walked 7 times." }
  },
  {
    id: 51,
    ar: { q: " يَوْمُ عُرْفَةٍ يَقُعُّ فِي أَيِّ شَهْرِ هِجْرِيٍّ ؟", options: { "أ": " شَوَّالٌ", "ب": " ذُو الْحُجَّةِ", "ج": " مُحَرَّمٌ", "د": " رَجَبٌ" }, ans: "ب", exp: " يَوْمُ عَرَفَةَ هُوَ التَّاسِعُ مِنْ ذِي الْحِجَّةِ. وَقَالَ النَّبِيُّ ﷺ: 'الْحَجُّ عَرَفَةُ' — فَهُوَ أَعْظَمُ أَرْكَانِ الْحَجِّ وَأَهَمُّهَا." },
    en: { q: "The Day of Arafah falls in which Hijri month?", options: { "A": "Shawwal", "B": "Dhul-Hijjah", "C": "Muharram", "D": "Rajab" }, ans: "B", exp: "The 9th of Dhul-Hijjah. 'Hajj is Arafah' — the most essential rite of pilgrimage." }
  },
  {
    id: 52,
    ar: { q: " عِيدِ الْأَضْحَى يُحَيِّي ذِكْرَى أَيِّ حَدَثٍ ؟", options: { "أ": " الْهِجْرَةُ النَّبَوِيَّةُ", "ب": " فَتَحَ مَكَّةٌ", "ج": " اِسْتِعْدَادُ إبراهيم عَلَيْهِ السُّلَّامَ لِلتَّضْحِيَةَ بِاِبْنِهِ طَاعَةً لِلَهَّ", "د": " نُزُولُ الْقُرْآنِ" }, ans: "ج", exp: " رَأَى إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ فِي مَنَامِهِ أَنَّهُ يَذْبَحُ ابْنَهُ إِسْمَاعِيلَ، فَأَخْبَرَهُ فَقَالَ: 'يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِنْ شَاءَ اللهُ مِنَ الصَّابِرِينَ.' (37:102) فَلَمَّا اسْتَسْلَمَا فَدَاهُ اللهُ بِكَبْشٍ عَظِيمٍ. يُحْيِي الْمُسْلِمُونَ هَذِهِ الذِّكْرَى بِالتَّضْحِيَةِ وَتَوْزِيعِ اللَّحْمِ عَلَى الْأُسْرَةِ وَالْجِيرَانِ وَالْفُقَرَاءِ." },
    en: { q: "Eid al-Adha commemorates which event?", options: { "A": "The Hijrah", "B": "Conquest of Makkah", "C": "Ibrahim's (AS) willingness to sacrifice his son in obedience to Allah (SWT)", "D": "Revelation of the Qur'an" }, ans: "C", exp: "Ibrahim (AS) saw in a recurring dream that he was sacrificing his son Isma'il (AS). Isma'il responded: 'O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.' (37:102) When they both submitted, Allah ransomed Isma'il with a great sacrifice (a ram). Muslims commemorate this by sacrificing an animal and sharing meat with family, neighbours, and the poor." }
  },
  {
    id: 53,
    ar: { q: " مَتَى فُرِضَتْ الصَّلَوَاتُ الْخُمُسَ عَلَى الْمُسْلِمِينَ ؟", options: { "أ": " فِي لَيْلَةِ الْإِسْرَاءِ وَالْمِعْرَاجِ", "ب": " بَعْد الْهِجْرَةِ", "ج": " فِي غَزْوَةٍ بِدُرٍّ", "د": " عِنْد فَتَحَ مَكَّةٌ" }, ans: "أ", exp: " فُرِضَتِ الصَّلَوَاتُ الْخَمْسُ لَيْلَةَ الْإِسْرَاءِ وَالْمِعْرَاجِ. كَانَتْ فِي الْأَصْلِ خَمْسِينَ، ثُمَّ خُفِّفَتْ إِلَى خَمْسٍ بِأَجْرِ خَمْسِينَ بَعْدَ مَشُورَةِ مُوسَى عَلَيْهِ السَّلَامُ." },
    en: { q: "When were the five daily prayers made obligatory?", options: { "A": "During the Isra and Mi'raj", "B": "After the Hijrah", "C": "At the Battle of Badr", "D": "At the Conquest of Makkah" }, ans: "A", exp: "Initially 50, reduced to 5 with the reward of 50 after consultation with Musa (AS)." }
  },
  {
    id: 54,
    ar: { q: " كَم عَدَدِ أَبْوَابِ الْجَنَّةِ ؟", options: { "أ": " 6", "ب": " 7", "ج": " 10", "د": " 8" }, ans: "د", exp: " لِلْجَنَّةِ ثَمَانِيَةُ أَبْوَابٍ كَمَا وَرَدَ فِي الْأَحَادِيثِ الصَّحِيحَةِ. مِنْهَا بَابُ 'الرَّيَّانِ' الْمُخَصَّصُ لِلصَّائِمِينَ، وَ'بَابُ الصَّلَاةِ' لِلْمُدَاوِمِينَ عَلَى الصَّلَاةِ. (رَوَاهُ الْبُخَارِيُّ)" },
    en: { q: "How many gates does Jannah (Paradise) have?", options: { "A": "6", "B": "7", "C": "10", "D": "8" }, ans: "D", exp: "Including Ar-Rayyan for those who fast and Baab as-Salah for those devoted to prayer. (Bukhari)" }
  },
  {
    id: 55,
    ar: { q: "فِي أَيِّ يَوْمٍ تُؤَدَّى صَلَاةُ الْجُمُعَةِ ؟", options: { "أ": " السَّبْتُ", "ب": " الْأَحَدُ", "ج": " الْخَمِيسُ", "د": " الْجُمُعَةُ" }, ans: "د", exp: " قَالَ النَّبِيُّ ﷺ: 'خَيْرُ يَوْمٍ طَلَعَتْ عَلَيْهِ الشَّمْسُ يَوْمُ الْجُمُعَةِ.' (رَوَاهُ مُسْلِمٌ) وَتَحُلُّ صَلَاةُ الْجُمُعَةِ مَحَلَّ صَلَاةِ الظُّهْرِ فِي ذَلِكَ الْيَوْمِ." },
    en: { q: "On which day is Salat al-Jumu'ah (Friday Prayer) performed?", options: { "A": "Saturday", "B": "Sunday", "C": "Thursday", "D": "Friday" }, ans: "D", exp: "'The best day on which the sun rises is Friday.' (Muslim) It replaces Dhuhr on that day." }
  },
  {
    id: 56,
    ar: { q: "كَم عَدَدُ صَلَوَاتِ الْعِيدِ فِي الْعَامِ ؟", options: { "أ": " 1", "ب": " 2", "ج": " 3", "د": " 4" }, ans: "ب", exp: " يُشْرَعُ فِي الْإِسْلَامِ عِيدَانِ: عِيدُ الْفِطْرِ عَقِبَ رَمَضَانَ، وَعِيدُ الْأَضْحَى فِي مَوْسِمِ الْحَجِّ." },
    en: { q: "How many Eid prayers are there each year?", options: { "A": "1", "B": "2", "C": "3", "D": "4" }, ans: "B", exp: "Eid al-Fitr (after Ramadan) and Eid al-Adha (during Hajj season)." }
  },
  {
    id: 57,
    ar: { q: "فِي أَيِّ شَهْرٍ يَجِبُ الصِّيَامُ عَلَى الْمُسْلِمِينَ ؟", options: { "أ": " شَعْبَانُ", "ب": " رَمَضَانُ", "ج": " شَوَّالٌ", "د": " ذُو الْحِجَّةِ" }, ans: "ب", exp: " قَالَ اللهُ تَعَالَى: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ.' (2:183) وَصَوْمُ رَمَضَانَ الرُّكْنُ الرَّابِعُ مِنْ أَرْكَانِ الْإِسْلَامِ." },
    en: { q: "In which month is fasting obligatory for Muslims?", options: { "A": "Sha'ban", "B": "Ramadan", "C": "Shawwal", "D": "Dhul-Hijjah" }, ans: "B", exp: "'O you who believe, fasting is prescribed for you.' (2:183)" }
  },
  {
    id: 58,
    ar: { q: "مَا اِسْمُ الصَّلَاةِ الَّتِي تُؤَدَّى فِي رَمَضَانَ بَعْدَ صَلَاةِ الْعِشَاءِ جَمَاعَةً ؟", options: { "أ": " التَّهَجُّدُ", "ب": " التَّرَاوِيحُ", "ج": " قِيَامُ اللَّيْلِ", "د": " الْوِتْرُ" }, ans: "ب", exp: " صَلَاةُ التَّرَاوِيحِ صَلَاةٌ نَافِلَةٌ تُؤَدَّى جَمَاعَةً بَعْدَ الْعِشَاءِ فِي رَمَضَانَ. وَقَدْ نَظَّمَهَا عُمَرُ بْنُ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ عَلَى هَيْئَةِ جَمَاعَةٍ مُنْتَظِمَةٍ." },
    en: { q: "What is the night prayer in Ramadan performed in congregation called?", options: { "A": "Tahajjud", "B": "Tarawih", "C": "Qiyam al-Layl", "D": "Witr" }, ans: "B", exp: "Voluntary congregational prayer after Isha. Umar (RA) organised it as a regular congregation." }
  },
  {
    id: 59,
    ar: { q: "مَا اِسْمُ وَجْبَةِ الْإِفْطَارِ عِنْدَ غُرُوبِ الشَّمْسِ ؟", options: { "أ": " السَّحُورُ", "ب": " الْإِفْطَارُ", "ج": " الْوَلِيمَةُ", "د": " الْغَدَاءُ" }, ans: "ب", exp: " كَانَ النَّبِيُّ ﷺ يُوصِي بِتَعْجِيلِ الْإِفْطَارِ وَيُفْطِرُ عَلَى تَمْرَاتٍ أَوْ مَاءٍ قَبْلَ صَلَاةِ الْمَغْرِبِ." },
    en: { q: "What is the meal at sunset to break the fast called?", options: { "A": "Suhoor", "B": "Iftar", "C": "Walimah", "D": "Ghada" }, ans: "B", exp: "The Prophet (PBUH) recommended breaking fast with dates and water." }
  },
  {
    id: 60,
    ar: { q: " مَنٌّ هُو مُؤَلِّفِ كِتَابِ 'رياض الصالحين' ؟", options: { "أ": " الْإمَامُ الْبُخَارِيُّ", "ب": " الْإمَامُ مُسْلِمٌ", "ج": " الْإمَامُ النَّوَوِيُّ", "د": " الْإمَامُ أَحَمِدَ" }, ans: "ج", exp: " الْإِمَامُ النَّوَوِيُّ (رَحِمَهُ اللهُ) عَالِمٌ سُورِيٌّ مِنَ الْقَرْنِ الثَّالِثَ عَشَرَ، أَلَّفَ 'رِيَاضَ الصَّالِحِينَ' وَهُوَ مِنْ أَشْهَرِ كُتُبِ الْحَدِيثِ، مُرَتَّبٌ فِي أَبْوَابٍ تَشْمَلُ الْعِبَادَاتِ وَالْأَخْلَاقَ وَالْحَيَاةَ الْيَوْمِيَّةَ. كَمَا أَلَّفَ 'الْأَرْبَعِينَ النَّوَوِيَّةَ' الْمَشْهُورَةَ." },
    en: { q: "Who compiled the book 'Riyad as-Salihin'?", options: { "A": "Imam Al-Bukhari", "B": "Imam Muslim", "C": "Imam An-Nawawi", "D": "Imam Ahmad" }, ans: "C", exp: "Imam An-Nawawi was a 13th-century Syrian scholar who compiled Riyad as-Salihin ('Gardens of the Righteous'), a collection of hadith organised into chapters covering daily life, worship, manners, sincerity, patience, and more. It is one of the most widely read hadith books in the Muslim world. An-Nawawi also compiled the famous '40 Hadith' collection." }
  },
  {
    id: 61,
    ar: { q: "إلى أيِّ قبيلةٍ وبطنٍ ينتسبُ النبيُّ محمّدٌ ﷺ؟", options: { "أ": "قريش - بنو هاشم", "ب": "قريش - بنو أميّة", "ج": "قريش - بنو مخزوم", "د": "قريش - بنو عبد الدار" }, ans: "أ", exp: "ينتسبُ النبيُّ ﷺ إلى بني هاشم من قبيلة قريش، وهاشمٌ هو جدُّه الأكبر الذي كان يُطعمُ الحجيجَ ويتولّى السقاية. وكانت قريشٌ أشرفَ قبائل العرب وأعظمها مكانةً عند العرب جميعًا." },
    en: { q: "To which tribe and clan does Prophet Muhammad ﷺ belong?", options: { "A": "Quraysh - Banu Hashim", "B": "Quraysh - Banu Umayyah", "C": "Quraysh - Banu Makhzum", "D": "Quraysh - Banu Abd al-Dar" }, ans: "A", exp: "Prophet Muhammad ﷺ belongs to Banu Hashim, a clan of the Quraysh tribe. Hashim was his great-grandfather who was known for feeding the pilgrims and managing the water supply in Makkah. Quraysh was the most noble and prestigious tribe among the Arabs." }
},
{
    id: 62,
    ar: { q: "ماذا حدثَ في عامِ الفيل الذي وُلِدَ فيه النبيُّ ﷺ؟", options: { "أ": "غزا الرومُ مكّةَ", "ب": "حاولَ أبرهةُ الأشرمُ هدمَ الكعبة بجيشٍ من الفِيَلة", "ج": "ضربَ زلزالٌ مكّةَ", "د": "اندلعت حربٌ بين قريشٍ وثقيف" }, ans: "ب", exp: "في عام الفيل (حوالي 570م) زحفَ أبرهةُ الحبشيُّ بجيشه وفيلته لهدم الكعبة، فأرسلَ اللهُ عليهم طيرًا أبابيلَ ترميهم بحجارةٍ من سِجِّيل فجعلهم كعصفٍ مأكول، كما جاء في سورة الفيل." },
    en: { q: "What happened in the Year of the Elephant, the year the Prophet ﷺ was born?", options: { "A": "The Romans invaded Makkah", "B": "Abrahah al-Ashram attempted to destroy the Ka'bah with an army of elephants", "C": "An earthquake struck Makkah", "D": "A war broke out between Quraysh and Thaqif" }, ans: "B", exp: "In the Year of the Elephant (approximately 570 CE), Abrahah the Abyssinian marched with his army and elephants to destroy the Ka'bah. Allah sent flocks of birds (Ababil) that pelted them with stones of baked clay, destroying the army completely, as described in Surah Al-Fil (Quran 105)." }
},
{
    id: 63,
    ar: { q: "مَن هي مُرضِعةُ النبيِّ ﷺ مِن بني سعد؟", options: { "أ": "ثُوَيبة", "ب": "حليمةُ السعديّة", "ج": "أمُّ أيمن", "د": "فاطمةُ بنتُ أسد" }, ans: "ب", exp: "حليمةُ بنتُ أبي ذُؤَيبٍ السعديّة هي التي أرضعت النبيَّ ﷺ وربّته في بادية بني سعد. وكانت العربُ تسترضعُ أولادها في البادية ليتعلّموا الفصاحةَ وينشأوا في بيئةٍ صحّية. أمّا ثُوَيبةُ فكانت أوّلَ مَن أرضعته قبل حليمة." },
    en: { q: "Who was the Prophet's ﷺ foster mother from the tribe of Banu Sa'd?", options: { "A": "Thuwaybah", "B": "Halimah al-Sa'diyyah", "C": "Umm Ayman", "D": "Fatimah bint Asad" }, ans: "B", exp: "Halimah bint Abi Dhu'ayb al-Sa'diyyah was the foster mother who nursed and raised the Prophet ﷺ in the desert of Banu Sa'd. It was an Arab custom to send children to the desert to learn eloquent Arabic and grow up in a healthy environment. Thuwaybah was actually the first to nurse him briefly before Halimah." }
},
{
    id: 64,
    ar: { q: "كم كان عمرُ النبيِّ ﷺ حين تُوفِّيت أمُّه آمنةُ بنتُ وهب؟", options: { "أ": "سنتان", "ب": "أربعُ سنوات", "ج": "ستُّ سنوات", "د": "ثمانِ سنوات" }, ans: "ج", exp: "تُوفِّيت آمنةُ بنتُ وهب وعمرُ النبيِّ ﷺ ستُّ سنوات، وذلك في طريق عودتها من زيارة أخوال أبيه في المدينة بموضعٍ يُقال له الأبواء. فكفله بعدها جدُّه عبدُ المطّلب ثمّ عمُّه أبو طالب." },
    en: { q: "How old was the Prophet ﷺ when his mother Aminah bint Wahb passed away?", options: { "A": "Two years old", "B": "Four years old", "C": "Six years old", "D": "Eight years old" }, ans: "C", exp: "Aminah bint Wahb passed away when the Prophet ﷺ was six years old. She died at a place called Al-Abwa on the road back from visiting his father's maternal uncles in Madinah. After her death, his grandfather Abdul-Muttalib took care of him, and after Abdul-Muttalib's death, his uncle Abu Talib raised him." }
},
{
    id: 65,
    ar: { q: "ما اللقبُ الذي عُرِفَ به النبيُّ ﷺ في شبابه قبل البعثة؟", options: { "أ": "الفاروق", "ب": "الصدّيق", "ج": "الأمين", "د": "الحبيب" }, ans: "ج", exp: "لُقِّبَ النبيُّ ﷺ بالصادق الأمين قبل بعثته لِما عُرِفَ عنه من صدقٍ وأمانةٍ وحُسن خُلُق. وكان أهلُ مكّة يستودعونه أماناتهم ويثقون به ثقةً تامّة، حتّى إنّه ﷺ عند هجرته أمرَ عليًّا بردِّ الأمانات إلى أصحابها." },
    en: { q: "What title was the Prophet ﷺ known by among the people of Makkah before his prophethood?", options: { "A": "Al-Faruq (The Distinguisher)", "B": "Al-Siddiq (The Truthful)", "C": "Al-Amin (The Trustworthy)", "D": "Al-Habib (The Beloved)" }, ans: "C", exp: "The Prophet ﷺ was known as Al-Sadiq Al-Amin (The Truthful, The Trustworthy) before his prophethood due to his impeccable honesty and integrity. The people of Makkah would entrust him with their valuables. Even when he migrated to Madinah, he instructed Ali (RA) to return the entrusted belongings to their owners." }
},
{
    id: 66,
    ar: { q: "مع مَن عمِلَ النبيُّ ﷺ في التجارة قبل زواجه؟", options: { "أ": "أبو بكر الصدّيق", "ب": "أبو طالب", "ج": "خديجة بنت خُوَيلد", "د": "عبد الله بن جُدعان" }, ans: "ج", exp: "عملَ النبيُّ ﷺ في تجارة خديجة بنت خُوَيلد رضي الله عنها، فخرجَ بمالها إلى الشام ومعه غلامُها مَيسَرة. فلمّا رأت خديجةُ أمانتَه وبركةَ تجارته وحُسنَ خُلُقه رغبت في الزواج منه." },
    en: { q: "Whom did the Prophet ﷺ work for as a merchant before his marriage?", options: { "A": "Abu Bakr al-Siddiq", "B": "Abu Talib", "C": "Khadijah bint Khuwaylid", "D": "Abdullah ibn Jud'an" }, ans: "C", exp: "The Prophet ﷺ worked as a merchant managing the trade of Khadijah bint Khuwaylid (RA). He traveled to Syria with her goods accompanied by her servant Maysarah. When Khadijah saw his trustworthiness, the blessings in the trade, and his noble character, she proposed marriage to him." }
},
{
    id: 67,
    ar: { q: "في أيِّ غارٍ نزلَ الوحيُ على النبيِّ ﷺ لأوّل مرّة؟", options: { "أ": "غار ثَور", "ب": "غار حِراء", "ج": "غار المُزدَلِفة", "د": "غار أُحُد" }, ans: "ب", exp: "نزلَ الوحيُ لأوّلِ مرّة في غار حراء في جبل النور بمكّة، حيثُ كان النبيُّ ﷺ يتعبَّدُ ويتحنَّث. جاءه جبريلُ عليه السلام وقال له: اقرأ، فكانت أوّلُ آياتٍ نزلت: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾." },
    en: { q: "In which cave did the Prophet ﷺ receive the first revelation?", options: { "A": "Cave of Thawr", "B": "Cave of Hira", "C": "Cave of Muzdalifah", "D": "Cave of Uhud" }, ans: "B", exp: "The first revelation came in the Cave of Hira on Jabal al-Nur (the Mountain of Light) in Makkah, where the Prophet ﷺ used to retreat for worship and contemplation. The angel Jibreel (AS) came to him and said 'Read!' The first verses revealed were the opening of Surah Al-Alaq: 'Read in the name of your Lord who created' (96:1)." }
},
{
    id: 68,
    ar: { q: "مَن أوّلُ مَن آمنَ بالنبيِّ ﷺ مِن الناس؟", options: { "أ": "أبو بكر الصدّيق رضي الله عنه", "ب": "عليُّ بن أبي طالب رضي الله عنه", "ج": "خديجةُ بنتُ خُوَيلد رضي الله عنها", "د": "زيدُ بن حارثة رضي الله عنه" }, ans: "ج", exp: "خديجةُ بنتُ خُوَيلد رضي الله عنها هي أوّلُ مَن آمنَ بالنبيِّ ﷺ على الإطلاق. فلمّا رجعَ إليها خائفًا بعد نزول الوحي قالت له: كلّا واللهِ لا يُخزيكَ اللهُ أبدًا، إنّك لتصلُ الرحمَ وتحملُ الكلَّ وتُكسِبُ المعدومَ وتَقري الضيف." },
    en: { q: "Who was the first person to believe in the Prophet ﷺ?", options: { "A": "Abu Bakr al-Siddiq (RA)", "B": "Ali ibn Abi Talib (RA)", "C": "Khadijah bint Khuwaylid (RA)", "D": "Zayd ibn Harithah (RA)" }, ans: "C", exp: "Khadijah bint Khuwaylid (RA) was the very first person to believe in the Prophet ﷺ. When he returned to her trembling after the first revelation, she reassured him saying: 'By Allah, Allah will never disgrace you. You maintain ties of kinship, bear the burden of the weak, earn for the destitute, and honor your guests.'" }
},
{
    id: 69,
    ar: { q: "مَن أوّلُ مَن أسلمَ مِن الصِّبيان (الأحداث)؟", options: { "أ": "الزبير بن العوّام", "ب": "سعد بن أبي وقّاص", "ج": "عليُّ بن أبي طالب", "د": "طلحةُ بن عُبيد الله" }, ans: "ج", exp: "عليُّ بن أبي طالب رضي الله عنه هو أوّلُ مَن أسلمَ من الصبيان، وكان عمرُه نحو عشر سنوات وكان يعيشُ في كنف النبيِّ ﷺ. وأوّلُ مَن أسلم من الرجال الأحرار أبو بكر، ومن الموالي زيدُ بن حارثة، ومن النساء خديجة رضي الله عنهم أجمعين." },
    en: { q: "Who was the first youth (child) to embrace Islam?", options: { "A": "Al-Zubayr ibn al-Awwam", "B": "Sa'd ibn Abi Waqqas", "C": "Ali ibn Abi Talib", "D": "Talhah ibn Ubaydullah" }, ans: "C", exp: "Ali ibn Abi Talib (RA) was the first youth to embrace Islam. He was about ten years old and was living under the care of the Prophet ﷺ. The first free man to accept Islam was Abu Bakr, the first freed slave was Zayd ibn Harithah, and the first woman was Khadijah (RA)." }
},
{
    id: 70,
    ar: { q: "أيُّ عائلةٍ مِن المسلمين الأوائل اشتُهِرت بتعذيب قريشٍ لها، واستُشهِدَ منها أوّلُ شهيدةٍ في الإسلام؟", options: { "أ": "آل أبي بكر", "ب": "آل ياسر", "ج": "آل عبد المطّلب", "د": "آل الأرقم" }, ans: "ب", exp: "تعرَّضت أسرةُ ياسر بن عامر لأشدِّ أنواع التعذيب من مشركي قريش. وكانت سُمَيَّةُ بنتُ خيّاط أمُّ عمّار أوّلَ شهيدةٍ في الإسلام، إذ قتلها أبو جهل بحربته. وكان النبيُّ ﷺ يمرُّ عليهم ويقول: صبرًا آلَ ياسر فإنّ موعدكم الجنّة." },
    en: { q: "Which early Muslim family was famously tortured by Quraysh, and from whom came the first female martyr in Islam?", options: { "A": "The family of Abu Bakr", "B": "The family of Yasir", "C": "The family of Abdul-Muttalib", "D": "The family of Al-Arqam" }, ans: "B", exp: "The family of Yasir ibn Amir endured the most severe persecution from the Quraysh polytheists. Sumayyah bint Khayyat, the mother of Ammar, became the first female martyr in Islam when Abu Jahl killed her with his spear. The Prophet ﷺ would pass by them and say: 'Patience, O family of Yasir, for your meeting place is Paradise.'" }
},
{
    id: 71,
    ar: { q: "إلى أيِّ بلدٍ هاجرَ المسلمون الأوائل فرارًا من اضطهاد قريش؟", options: { "أ": "اليمن", "ب": "الشام", "ج": "الحبشة (إثيوبيا)", "د": "فارس" }, ans: "ج", exp: "أمرَ النبيُّ ﷺ أصحابَه بالهجرة إلى الحبشة لأنّ فيها ملكًا لا يُظلَمُ عنده أحد، وهو النجاشيُّ أصحمة. وكانت الهجرةُ الأولى نحو اثني عشر رجلًا وأربع نساء، ثمّ تبعتهم هجرةٌ ثانية أكبرُ عددًا." },
    en: { q: "To which country did the early Muslims migrate to escape the persecution of Quraysh?", options: { "A": "Yemen", "B": "Syria (Al-Sham)", "C": "Abyssinia (Ethiopia)", "D": "Persia" }, ans: "C", exp: "The Prophet ﷺ instructed his companions to migrate to Abyssinia because its king, the Negus (Al-Najashi Ashamah), was a just ruler under whom no one was wronged. The first migration included about twelve men and four women, followed by a larger second migration." }
},
{
    id: 72,
    ar: { q: "لماذا سُمِّيَ عامُ الحزن بهذا الاسم؟", options: { "أ": "بسبب وفاة حمزة بن عبد المطّلب", "ب": "بسبب وفاة خديجة وأبي طالب في عامٍ واحد", "ج": "بسبب هزيمة المسلمين في أُحُد", "د": "بسبب حصار قريشٍ لبني هاشم" }, ans: "ب", exp: "سُمِّيَ العامُ العاشرُ من البعثة بعام الحزن لوفاة زوجته خديجة رضي الله عنها وعمِّه أبي طالب فيه. فقدَ النبيُّ ﷺ فيه سندَه في البيت (خديجة) وحاميه من أذى قريش (أبو طالب)، فاشتدّ عليه الأذى بعدهما." },
    en: { q: "Why was the 'Year of Sorrow' (Aam al-Huzn) given this name?", options: { "A": "Because of the death of Hamzah ibn Abdul-Muttalib", "B": "Because of the deaths of Khadijah and Abu Talib in the same year", "C": "Because of the Muslim defeat at Uhud", "D": "Because of Quraysh's siege of Banu Hashim" }, ans: "B", exp: "The tenth year of prophethood was called the Year of Sorrow because the Prophet ﷺ lost both his beloved wife Khadijah (RA) and his protective uncle Abu Talib in the same year. Khadijah was his greatest supporter at home, and Abu Talib shielded him from the harm of Quraysh. After their deaths, the persecution intensified greatly." }
},
{
    id: 73,
    ar: { q: "ما الصلاةُ التي فُرِضَت على المسلمين ليلةَ الإسراء والمعراج؟", options: { "أ": "صلاةُ الجمعة", "ب": "صلاةُ العيد", "ج": "الصلواتُ الخمسُ المفروضة", "د": "صلاةُ الليل" }, ans: "ج", exp: "في ليلة الإسراء والمعراج فُرِضت الصلواتُ الخمس، وكانت في الأصل خمسين صلاةً ثمّ خفَّفها اللهُ تعالى إلى خمسٍ في الأداء وخمسين في الأجر. وكانت رحلةُ الإسراء من المسجد الحرام إلى المسجد الأقصى ثمّ عُرِجَ به إلى السماوات العُلا." },
    en: { q: "What act of worship was made obligatory on the night of Isra and Mi'raj?", options: { "A": "Friday prayer (Jumu'ah)", "B": "Eid prayer", "C": "The five daily prayers", "D": "Night prayer (Qiyam al-Layl)" }, ans: "C", exp: "On the night of Isra and Mi'raj, the five daily prayers were made obligatory. They were originally fifty prayers, but Allah reduced them to five in performance while keeping the reward of fifty. The journey took the Prophet ﷺ from Masjid al-Haram to Masjid al-Aqsa, and then he ascended through the heavens." }
},
{
    id: 74,
    ar: { q: "ما الذي بايعَ عليه أهلُ يثربَ النبيَّ ﷺ في بيعة العقبة الأولى؟", options: { "أ": "القتال في سبيل الله", "ب": "الهجرة إلى المدينة", "ج": "ألّا يُشركوا بالله شيئًا ولا يسرقوا ولا يزنوا", "د": "بناءُ مسجدٍ في يثرب" }, ans: "ج", exp: "في بيعة العقبة الأولى بايعَ اثنا عشر رجلًا من أهل يثرب النبيَّ ﷺ على ألّا يشركوا بالله شيئًا ولا يسرقوا ولا يزنوا ولا يقتلوا أولادهم ولا يأتوا ببُهتان. وتُشبهُ هذه البيعةُ بيعةَ النساء لأنّها لم تتضمّن القتال." },
    en: { q: "What did the people of Yathrib pledge to the Prophet ﷺ in the First Pledge of Aqabah?", options: { "A": "To fight in the cause of Allah", "B": "To migrate to Madinah", "C": "Not to associate partners with Allah, not to steal, and not to commit adultery", "D": "To build a mosque in Yathrib" }, ans: "C", exp: "In the First Pledge of Aqabah, twelve men from Yathrib pledged to the Prophet ﷺ that they would not associate anything with Allah, would not steal, would not commit adultery, would not kill their children, and would not utter slander. This pledge is also called the 'Pledge of Women' because it did not include fighting." }
},
{
    id: 75,
    ar: { q: "كم عددُ الذين بايعوا النبيَّ ﷺ في بيعة العقبة الثانية تقريبًا؟", options: { "أ": "اثنا عشر رجلًا", "ب": "أربعون رجلًا", "ج": "ثلاثةٌ وسبعون رجلًا وامرأتان", "د": "مئةُ رجل" }, ans: "ج", exp: "في بيعة العقبة الثانية (الكبرى) بايعَ النبيَّ ﷺ ثلاثةٌ وسبعون رجلًا وامرأتان من الأنصار. وبايعوه على النُّصرة والحماية والسمع والطاعة، وتضمَّنت هذه البيعةُ القتالَ دفاعًا عن الإسلام، وكانت تمهيدًا للهجرة إلى المدينة." },
    en: { q: "Approximately how many people took the Second Pledge of Aqabah with the Prophet ﷺ?", options: { "A": "Twelve men", "B": "Forty men", "C": "Seventy-three men and two women", "D": "One hundred men" }, ans: "C", exp: "In the Second Pledge of Aqabah (the greater pledge), seventy-three men and two women from the Ansar pledged allegiance to the Prophet ﷺ. They pledged to support and protect him, to hear and obey. This pledge included the commitment to fight in defense of Islam and paved the way for the Hijrah to Madinah." }
},
{
    id: 76,
    ar: { q: "مَن رافقَ النبيَّ ﷺ في هجرته إلى المدينة واختبأ معه في غار ثَور؟", options: { "أ": "عليُّ بن أبي طالب", "ب": "عمرُ بن الخطّاب", "ج": "أبو بكر الصدّيق", "د": "عثمانُ بن عفّان" }, ans: "ج", exp: "أبو بكرٍ الصدّيق رضي الله عنه هو صاحبُ النبيِّ ﷺ في الهجرة، واختبأا معًا في غار ثور ثلاثَ ليالٍ. وقد ذكره اللهُ تعالى في القرآن: ﴿إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا﴾ [التوبة: 40]." },
    en: { q: "Who accompanied the Prophet ﷺ on his Hijrah to Madinah and hid with him in the Cave of Thawr?", options: { "A": "Ali ibn Abi Talib", "B": "Umar ibn al-Khattab", "C": "Abu Bakr al-Siddiq", "D": "Uthman ibn Affan" }, ans: "C", exp: "Abu Bakr al-Siddiq (RA) was the Prophet's companion during the Hijrah. They hid together in the Cave of Thawr for three nights. Allah mentioned him in the Quran: 'When he said to his companion, Do not grieve; indeed Allah is with us' (Quran 9:40)." }
},
{
    id: 77,
    ar: { q: "ما نظامُ المؤاخاة الذي أقامه النبيُّ ﷺ في المدينة؟", options: { "أ": "المؤاخاة بين المهاجرين والأنصار", "ب": "المؤاخاة بين المسلمين واليهود", "ج": "المؤاخاة بين الأوس والخزرج فقط", "د": "المؤاخاة بين العرب والعجم" }, ans: "أ", exp: "آخى النبيُّ ﷺ بين المهاجرين الذين تركوا ديارهم وأموالهم في مكّة، والأنصار الذين استقبلوهم في المدينة. فكان الأنصاريُّ يتقاسمُ مالَه وبيتَه مع أخيه المهاجر، وكان هذا من أعظم صور التكافل الاجتماعي في الإسلام." },
    en: { q: "What system of brotherhood did the Prophet ﷺ establish in Madinah?", options: { "A": "Brotherhood between the Muhajirun and the Ansar", "B": "Brotherhood between the Muslims and the Jews", "C": "Brotherhood between the Aws and Khazraj only", "D": "Brotherhood between Arabs and non-Arabs" }, ans: "A", exp: "The Prophet ﷺ established brotherhood between the Muhajirun (emigrants from Makkah who left their homes and wealth) and the Ansar (the helpers of Madinah who welcomed them). The Ansar would share their wealth and homes with their Muhajir brothers. This was one of the greatest examples of social solidarity in Islamic history." }
},
{
    id: 78,
    ar: { q: "ما الوثيقةُ التي نظَّمَ بها النبيُّ ﷺ العلاقاتِ بين سكّان المدينة من مسلمين وغيرهم؟", options: { "أ": "صُحُف إبراهيم", "ب": "صحيفةُ المدينة (دستور المدينة)", "ج": "معاهدةُ الحُديبية", "د": "ميثاقُ مكّة" }, ans: "ب", exp: "صحيفةُ المدينة (أو الدستور) وثيقةٌ كتبها النبيُّ ﷺ لتنظيم العلاقات بين المسلمين واليهود وغيرهم في المدينة. نصَّت على حرّية العقيدة والتعاون في الدفاع عن المدينة وأنّ المرجعيّةَ العُليا للنبيِّ ﷺ في حلّ النزاعات." },
    en: { q: "What document did the Prophet ﷺ draft to organize relations among the inhabitants of Madinah?", options: { "A": "The Scrolls of Ibrahim", "B": "The Constitution of Madinah (Sahifat al-Madinah)", "C": "The Treaty of Hudaybiyyah", "D": "The Charter of Makkah" }, ans: "B", exp: "The Constitution of Madinah (Sahifat al-Madinah) was a document drafted by the Prophet ﷺ to regulate relations between Muslims, Jews, and other groups in Madinah. It established freedom of belief, mutual cooperation in defending the city, and designated the Prophet ﷺ as the ultimate authority for resolving disputes." }
},
{
    id: 79,
    ar: { q: "كم كان عددُ المسلمين تقريبًا في غزوة بدرٍ الكبرى؟", options: { "أ": "حوالي 113", "ب": "حوالي 313", "ج": "حوالي 700", "د": "حوالي 1000" }, ans: "ب", exp: "كان عددُ المسلمين في غزوة بدر نحو 313 مقاتلًا في مقابل نحو ألفٍ من المشركين. ومع ذلك نصرهم اللهُ نصرًا مؤزَّرًا وأيَّدهم بالملائكة. وسمّى اللهُ يومَ بدرٍ يومَ الفُرقان لأنّه فرَّقَ بين الحقّ والباطل." },
    en: { q: "Approximately how many Muslims fought in the Battle of Badr?", options: { "A": "About 113", "B": "About 313", "C": "About 700", "D": "About 1,000" }, ans: "B", exp: "The Muslim army at the Battle of Badr numbered approximately 313 fighters against about 1,000 Quraysh warriors. Despite being outnumbered, Allah granted them a decisive victory and supported them with angels. Allah called the day of Badr 'Yawm al-Furqan' (the Day of Criterion) because it distinguished truth from falsehood (Quran 8:41)." }
},
{
    id: 80,
    ar: { q: "ما السببُ الرئيسيُّ الذي أدّى إلى خسائر المسلمين في غزوة أُحُد؟", options: { "أ": "قلّةُ عدد المسلمين", "ب": "خيانةُ بعض الصحابة", "ج": "مخالفةُ الرُّماة لأمر النبيِّ ﷺ ونزولُهم من الجبل", "د": "نقصُ الأسلحة" }, ans: "ج", exp: "أمرَ النبيُّ ﷺ الرُّماة بالبقاء على جبل أُحُد وعدم مغادرته مهما حدث، لكنّ معظمهم نزلوا لجمع الغنائم ظنًّا أنّ المعركة انتهت. فالتفَّ خالدُ بن الوليد بفرسان قريش من خلف الجبل وباغتَ المسلمين، ممّا أدّى إلى استشهاد سبعين صحابيًّا." },
    en: { q: "What was the main reason for the Muslim losses at the Battle of Uhud?", options: { "A": "The small number of Muslims", "B": "Betrayal by some companions", "C": "The archers disobeying the Prophet's ﷺ order and leaving the mountain", "D": "Lack of weapons" }, ans: "C", exp: "The Prophet ﷺ stationed archers on the hill of Uhud with strict orders not to leave their positions under any circumstances. However, most of them descended to collect war spoils, thinking the battle was won. Khalid ibn al-Walid then led the Quraysh cavalry around the hill and ambushed the Muslims from behind, resulting in the martyrdom of seventy companions." }
},
{
    id: 81,
    ar: { q: "مَن الصحابيُّ الذي اقترحَ حفرَ الخندق حولَ المدينة في غزوة الأحزاب؟", options: { "أ": "عليُّ بن أبي طالب", "ب": "سلمانُ الفارسيّ", "ج": "سعدُ بن معاذ", "د": "أبو ذرّ الغِفاريّ" }, ans: "ب", exp: "سلمانُ الفارسيُّ رضي الله عنه هو الذي أشارَ بحفر الخندق حول المدينة، وكان هذا أسلوبًا حربيًّا معروفًا عند الفرس لم تعرفه العرب. فحفرَ المسلمون خندقًا واسعًا فشلت بسببه قريشٌ وأحزابُها في اقتحام المدينة." },
    en: { q: "Which companion suggested digging the trench around Madinah during the Battle of the Trench (Khandaq)?", options: { "A": "Ali ibn Abi Talib", "B": "Salman al-Farisi (the Persian)", "C": "Sa'd ibn Mu'adh", "D": "Abu Dharr al-Ghifari" }, ans: "B", exp: "Salman al-Farisi (RA) suggested digging a trench around Madinah. This was a Persian military strategy unfamiliar to the Arabs. The Muslims dug a wide trench that prevented the Quraysh and their allies (the Confederates) from breaching the city's defenses, ultimately leading to their withdrawal." }
},
{
    id: 82,
    ar: { q: "ما الذي وصفه القرآنُ بأنّه فتحٌ مُبين في سورة الفتح؟", options: { "أ": "غزوة بدر", "ب": "فتحُ مكّة", "ج": "صُلحُ الحُديبية", "د": "غزوة خيبر" }, ans: "ج", exp: "وصفَ اللهُ تعالى صُلحَ الحُديبية بأنّه فتحٌ مبين في قوله: ﴿إِنَّا فَتَحْنَا لَكَ فَتْحًا مُبِينًا﴾ [الفتح: 1]. رغم أنّ بعض الصحابة رأوا في شروطه إجحافًا، إلّا أنّ الهُدنة أتاحت نشرَ الإسلام بحرّية ودخلَ فيه كثيرون حتّى كان فتحُ مكّة بعده بسنتين." },
    en: { q: "What event did the Quran describe as a 'clear victory' (Fath Mubin) in Surah Al-Fath?", options: { "A": "The Battle of Badr", "B": "The Conquest of Makkah", "C": "The Treaty of Hudaybiyyah", "D": "The Battle of Khaybar" }, ans: "C", exp: "Allah described the Treaty of Hudaybiyyah as a clear victory in the verse: 'Indeed, We have given you a clear victory' (Quran 48:1). Although some companions initially felt the treaty terms were unfavorable, the truce allowed Islam to spread freely. So many people embraced Islam during this period that the Conquest of Makkah followed just two years later." }
},
{
    id: 83,
    ar: { q: "في أيِّ سنةٍ هجريّةٍ كان فتحُ مكّة؟", options: { "أ": "السنة السادسة", "ب": "السنة السابعة", "ج": "السنة الثامنة", "د": "السنة العاشرة" }, ans: "ج", exp: "كان فتحُ مكّة في شهر رمضان من السنة الثامنة للهجرة. دخلَ النبيُّ ﷺ مكّة بعشرة آلاف مقاتل فاتحًا متواضعًا، وعفا عن أهلها قائلًا: اذهبوا فأنتم الطُلَقاء. ودخلَ الكعبةَ وحطَّمَ الأصنامَ وقال: جاءَ الحقُّ وزهقَ الباطل." },
    en: { q: "In which Hijri year did the Conquest of Makkah take place?", options: { "A": "The 6th year", "B": "The 7th year", "C": "The 8th year", "D": "The 10th year" }, ans: "C", exp: "The Conquest of Makkah occurred in the month of Ramadan in the 8th year of Hijrah. The Prophet ﷺ entered Makkah with ten thousand fighters, humbly and peacefully. He forgave the people of Makkah saying: 'Go, for you are free.' He entered the Ka'bah, destroyed the idols, and declared: 'Truth has come and falsehood has vanished' (Quran 17:81)." }
},
{
    id: 84,
    ar: { q: "أين دُفِنَ النبيُّ ﷺ بعد وفاته؟", options: { "أ": "في المسجد الحرام بمكّة", "ب": "في البقيع بالمدينة", "ج": "في حُجرة عائشة رضي الله عنها بالمسجد النبوي", "د": "في غار حراء" }, ans: "ج", exp: "دُفِنَ النبيُّ ﷺ في حُجرة عائشة رضي الله عنها في المدينة المنوّرة، وهي المكان الذي تُوفِّيَ فيه. فقد قال ﷺ: ما قُبِضَ نبيٌّ إلّا دُفِنَ حيثُ يُقبَض. تُوفِّيَ النبيُّ ﷺ يوم الاثنين الثاني عشر من ربيع الأوّل سنة 11 للهجرة." },
    en: { q: "Where was the Prophet ﷺ buried after his death?", options: { "A": "In the Sacred Mosque (Masjid al-Haram) in Makkah", "B": "In Al-Baqi cemetery in Madinah", "C": "In the chamber of Aisha (RA) in the Prophet's Mosque", "D": "In the Cave of Hira" }, ans: "C", exp: "The Prophet ﷺ was buried in the chamber of Aisha (RA) in Madinah, which is the place where he passed away. He ﷺ said: 'No prophet is taken (in death) except that he is buried where he died.' The Prophet ﷺ passed away on Monday, the 12th of Rabi al-Awwal in the 11th year of Hijrah." }
},
  {
    id: 85,
    ar: { q: "مَا اسْمُ نَاقَةِ النَّبِيِّ ﷺ الَّتِي حَمَلَتْهُ فِي الْهِجْرَةِ؟", options: { "أ": " الْقَصْوَاءُ", "ب": " الْعَضْبَاءُ", "ج": " الْبُرَاقُ", "د": " السَّفِينَةُ" }, ans: "أ", exp: " الْقَصْوَاءُ هِيَ نَاقَةُ النَّبِيِّ ﷺ الَّتِي حَمَلَتْهُ فِي الْهِجْرَةِ وَعِنْدَ دُخُولِهِ الْمَدِينَةَ. تَرَكَهَا ﷺ تَسِيرُ حُرَّةً لِتَخْتَارَ مَوْضِعَ النُّزُولِ، فَكَانَ الْمَكَانُ الَّذِي أَنَاخَتْ فِيهِ هُوَ مَوْضِعَ بِنَاءِ الْمَسْجِدِ النَّبَوِيِّ." },
    en: { q: "What was the name of the Prophet's (PBUH) camel?", options: { "A": "Al-Qaswa", "B": "Al-Adba", "C": "Al-Buraq", "D": "As-Safinah" }, ans: "A", exp: "She carried the Prophet during the Hijrah and into Madinah. He let her roam freely to choose where to stop — the site that became Masjid an-Nabawi." }
  },
  {
    id: 86,
    ar: { q: "مَنِ الَّذِي اسْتَضَافَ النَّبِيَّ ﷺ عِنْدَ وُصُولِهِ إِلَى الْمَدِينَةِ أَوَّلَ مَرَّةٍ؟", options: { "أ": " سَعْدُ بْنُ مُعَاذٍ", "ب": " أَبُو أَيُّوبَ الْأَنْصَارِيُّ", "ج": " أَسْعَدُ بْنُ زُرَارَةَ", "د": " أُبَيُّ بْنُ كَعْبٍ" }, ans: "ب", exp: " أَقَامَ النَّبِيُّ ﷺ فِي بَيْتِ أَبِي أَيُّوبَ الْأَنْصَارِيِّ (رَضِيَ اللهُ عَنْهُ) نَحْوَ سَبْعَةِ أَشْهُرٍ حَتَّى اكْتَمَلَ بِنَاءُ الْمَسْجِدِ النَّبَوِيِّ وَالْحُجُرَاتِ الْمُجَاوِرَةِ." },
    en: { q: "Who hosted the Prophet (PBUH) when he first arrived in Madinah?", options: { "A": "Sa'd ibn Mu'adh", "B": "Abu Ayyub al-Ansari", "C": "As'ad ibn Zurarah", "D": "Ubayy ibn Ka'b" }, ans: "B", exp: "The Prophet stayed in his home for about 7 months until Masjid an-Nabawi and adjacent rooms were built." }
  },
  {
    id: 87,
    ar: { q: "مَا اسْمُ خُطْبَةِ النَّبِيِّ ﷺ الَّتِي أَلْقَاهَا فِي حَجَّةِ الْوَدَاعِ؟", options: { "أ": " خُطْبَةُ الْحَاجَةِ", "ب": " خُطْبَةُ الْجُمُعَةِ", "ج": " خُطْبَةُ النَّصْرِ", "د": " خُطْبَةُ الْوَدَاعِ" }, ans: "د", exp: " خُطْبَةُ الْوَدَاعِ أُلْقِيَتْ فِي التَّاسِعِ مِنْ ذِي الْحِجَّةِ سَنَةَ 10 هـ فِي جَبَلِ عَرَفَةَ أَمَامَ أَكْثَرَ مِنْ مِائَةِ أَلْفِ صَحَابِيٍّ. أَكَّدَ فِيهَا النَّبِيُّ ﷺ حُرْمَةَ الدِّمَاءِ وَالْأَمْوَالِ وَالْأَعْرَاضِ، وَأَلْغَى الرِّبَا وَثَارَاتِ الْجَاهِلِيَّةِ، وَوَصَّى بِالنِّسَاءِ، وَأَعْلَنَ أُخُوَّةَ الْمُسْلِمِينَ، وَسَأَلَ الشُّهُودَ فَشَهِدُوا أَنَّهُ قَدْ بَلَّغَ. وَتُوُفِّيَ بَعْدَهَا بِنَحْوِ ثَمَانِينَ يَوْمًا." },
    en: { q: "What was the Prophet's (PBUH) final sermon called?", options: { "A": "Khutbat al-Hajjah", "B": "Khutbat al-Jumu'ah", "C": "Khutbat an-Nasr", "D": "Khutbat al-Wada (Farewell Sermon)" }, ans: "D", exp: "Khutbat al-Wada (The Farewell Sermon) was delivered on the 9th of Dhul-Hijjah, 10 AH, at Mount Arafah during the Prophet's only Hajj, before over 100,000 companions. He declared the sanctity of life, property, and honour; abolished usury and blood feuds from the days of ignorance; affirmed the rights of women; and reminded that all Muslims are brothers. He asked the people: 'Have I conveyed the message?' and they testified that he had. He passed away about 80 days later." }
  },
  {
    id: 88,
    ar: { q: "أَيْنَ اخْتَبَأَ النَّبِيُّ ﷺ وَأَبُو بَكْرٍ أَثْنَاءَ الْهِجْرَةِ؟", options: { "أ": " غَارُ حِرَاءٍ", "ب": " غَارُ ثَوْرٍ", "ج": " غَارُ أُحُدٍ", "د": " غَارُ مِنَى" }, ans: "ب", exp: " اخْتَبَأَ النَّبِيُّ ﷺ وَأَبُو بَكْرٍ (رَضِيَ اللهُ عَنْهُ) فِي غَارِ ثَوْرٍ ثَلَاثَةَ أَيَّامٍ بَيْنَمَا كَانَتْ قُرَيْشٌ تُفَتِّشُ عَنْهُمَا، فَأَرْسَلَ اللهُ عَنْكَبُوتًا نَسَجَتْ عَلَى فَمِ الْغَارِ وَحَمَامَتَيْنِ بَاضَتَا عَلَيْهِ سِتْرًا لَهُمَا." },
    en: { q: "Where did the Prophet (PBUH) take shelter during the Hijrah?", options: { "A": "Cave of Hira", "B": "Cave of Thawr", "C": "Cave of Uhud", "D": "Cave of Mina" }, ans: "B", exp: "He and Abu Bakr hid there for 3 days while the Quraysh searched for them. Allah sent a spider and doves to conceal the entrance." }
  },
  {
    id: 89,
    ar: { q: "كَمْ اسْتَمَرَّ حِصَارُ بَنِي هَاشِمٍ فِي شِعْبِ أَبِي طَالِبٍ؟", options: { "أ": " سَنَةٌ وَاحِدَةٌ", "ب": " سَنَتَانِ", "ج": " ثَلَاثُ سَنَوَاتٍ", "د": " خَمْسُ سَنَوَاتٍ" }, ans: "ج", exp: " حِينَ عَجَزَتْ قُرَيْشٌ عَنْ إِيقَافِ دَعْوَةِ النَّبِيِّ ﷺ بِالتَّرْهِيبِ فَرَضَتْ حِصَارًا اقْتِصَادِيًّا وَاجْتِمَاعِيًّا شَامِلًا عَلَى بَنِي هَاشِمٍ كَافَّةً، وَعَلَّقَتْ صَحِيفَةَ الْمَقَاطَعَةِ دَاخِلَ الْكَعْبَةِ. ظَلَّ الْمُسْلِمُونَ وَذَوُوهُمْ مَحْصُورِينَ فِي شِعْبِ أَبِي طَالِبٍ ثَلَاثَ سَنَوَاتٍ يَعِيشُونَ عَلَى أَقَلِّ الطَّعَامِ حَتَّى دَفَعَ الضَّمِيرُ بَعْضَ زُعَمَاءِ قُرَيْشٍ إِلَى تَمْزِيقِ الصَّحِيفَةِ." },
    en: { q: "How long did the boycott of Banu Hashim last?", options: { "A": "1 year", "B": "2 years", "C": "3 years", "D": "5 years" }, ans: "C", exp: "When the Quraysh failed to stop the Prophet's message through intimidation, they imposed a complete social and economic boycott on the entire clan of Banu Hashim. A decree was hung inside the Kaaba forbidding anyone from trading with, marrying into, or even speaking to the clan. The Muslims and their relatives were confined to the Valley of Abu Talib (Shi'b Abi Talib) for 3 years, surviving on minimal food — at times eating leaves and leather. The boycott only ended when several Qurayshi leaders, moved by conscience, tore up the decree." }
  },
  {
    id: 90,
    ar: { q: "مَا الْمُعْجِزَةُ الَّتِي طَلَبَهَا الْقُرَيْشُ فَأَجْرَاهَا اللهُ عَلَى يَدَيِ النَّبِيِّ ﷺ؟", options: { "أ": " الْمَاءُ يَنْبُعُ مِنْ بَيْنِ أَصَابِعِهِ", "ب": " شِفَاءُ الْمَرْضَى", "ج": " إِحْيَاءُ الْمَوْتَى", "د": " انْشِقَاقُ الْقَمَرِ" }, ans: "د", exp: " حِينَ طَلَبَ الْقُرَيْشِيُّونَ آيَةً مِنَ النَّبِيِّ ﷺ أَشَارَ إِلَى الْقَمَرِ فَانْشَقَّ فِلْقَتَيْنِ رَأَوْهُمَا بِأَعْيُنِهِمْ ثُمَّ قَالُوا: سِحْرٌ مُسْتَمِرٌّ. وَقَدْ سَجَّلَ اللهُ ذَلِكَ فِي الْقُرْآنِ: ﴿اقْتَرَبَتِ السَّاعَةُ وَانشَقَّ الْقَمَرُ * وَإِن يَرَوْا آيَةً يُعْرِضُوا وَيَقُولُوا سِحْرٌ مُّسْتَمِرٌّ﴾ (القمر:1-2)." },
    en: { q: "What miracle is the Prophet (PBUH) known to have performed for the Quraysh?", options: { "A": "Water from his fingers", "B": "Healing the sick", "C": "Reviving the dead", "D": "Splitting of the moon" }, ans: "D", exp: "When the Quraysh demanded a miraculous sign, the Prophet (PBUH) pointed at the moon and it split into two visible halves. The Quraysh saw it themselves but dismissed it as sorcery. Allah recorded it in the Qur'an: 'The Hour has drawn near and the moon has split. Yet whenever they see a sign, they turn away and say: continued sorcery.' (54:1-2) Despite witnessing this, the Quraysh persisted in their rejection." }
  },
  {
    id: 91,
    ar: { q: " مَنٌّ هُو الصَّحَابِيِّ الَّذِي لُقِّبَ ب 'سيف اللهَ المسلول' ؟", options: { "أ": " عُمَرُ بْن الْخِطَابَ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "ب": " عُلِيَ بْن أبِي طَالِبِ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "ج": " خَالِدُ بْن الْوَلِيدَ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "د": " حَمْزَةُ بْن عَبْدَ الْمَطْلَبِ ( رَضِّيَّ الْلَّهُ عَنْهُ )" }, ans: "ج", exp: " خَالِدُ بْن الْوَلِيدَ ( رَضِّيَّ الْلَّهُ عَنْهُ ) لَقَّبَهُ النَّبِيُّ ﷺ بِهَذَا اللَّقَبِ. وَكَانَ قَدْ قَاتَلَ الْمُسْلِمِينَ فِي غَزْوَةِ أُحُدٍ، ثُمَّ أَسْلَمَ وَلَمْ يَخْسَرْ مَعْرَكَةً وَاحِدَةً قَائِدًا مُسْلِمًا" },
    en: { q: "Which Companion (RA) was given the title 'The Drawn Sword of Allah'?", options: { "A": "Umar ibn Al-Khattab (RA)", "B": "Ali ibn Abi Talib (RA)", "C": "Khalid ibn Al-Walid (RA)", "D": "Hamza ibn Abdul-Muttalib (RA)" }, ans: "C", exp: "Khalid ibn Al-Walid (RA) was given this title by the Prophet (PBUH). He initially fought against Islam at Uhud but after converting, never lost a battle." }
  },
  {
    id: 92,
    ar: { q: " مَنٌّ كَان أَوَّل مُؤَذِّنٍ فِي الْإِسْلَامِ ؟", options: { "أ": " أَبُو بِكْرِ الصَّدِيقِ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "ب": " بِلَالُ بْن رُبَّاحَ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "ج": " عُثْمَانُ بْن عَفَّانِ ( رَضِّيَّ الْلَّهُ عَنْهُ )", "د": " زِيدَ بْن حَارِثَةَ ( رَضِّيَّ الْلَّهُ عَنْهُ )" }, ans: "ب", exp: " بِلَالُ بْن رَبَاحٍ ( رَضِّيَّ الْلَّهُ عَنْهُ ) كَانَ عَبْدًا حَبَشِيًّا تَعَرَّضَ لِتَعْذِيبٍ شَدِيدٍ بِسَبَبِ إِيمَانِهِ وَكَانَ يُرَدِّدُ 'أَحَدٌ، أَحَدٌ'. أَعْتَقَهُ أَبُو بَكْرٍ الصِّدِّيقُ ( رَضِّيَّ الْلَّهُ عَنْهُ )، وَاخْتَارَهُ النَّبِيُّ ﷺ أَوَّلَ مُؤَذِّنٍ فِي الْإِسْلَامِ لِعُذُوبَةِ صَوْتِهِ" },
    en: { q: "Who was the first Mu'adhin (caller to prayer) in Islam?", options: { "A": "Abu Bakr As-Siddiq (RA)", "B": "Bilal ibn Rabah (RA)", "C": "Uthman ibn Affan (RA)", "D": "Zayd ibn Harithah (RA)" }, ans: "B", exp: "A freed Abyssinian slave. The Prophet chose him for his beautiful voice. He called the first adhan from atop the Kaaba after the Conquest of Makkah." }
  },
  {
    id: 93,
    ar: { q: " مَنٌّ هُو الصَّحَابِيِّ الْمُلَقِّبِ ب 'الفاروق' ؟", options: { "أ": " أَبُو بِكْرِ الصَّدِيقِ", "ب": " عُمَرُ بْن الْخِطَابَ", "ج": " عُثْمَانُ بْن عَفَّانِ", "د": " عُلِيَ بْن أبِي طَالِبٍ" }, ans: "ب", exp: " عُمَرُ بْنُ الْخَطَّابِ ( رَضِيَ اللهُ عَنْهُ ) كَانَ مِنْ أَشَدِّ الْمُعَارِضِينَ لِلْإِسْلَامِ قَبْلَ إِسْلَامِهِ. خَرَجَ يَوْمًا يُرِيدُ قَتْلَ النَّبِيِّ ﷺ، فَعَلِمَ فِي الطَّرِيقِ أَنَّ أُخْتَهُ وَزَوْجَهَا قَدْ أَسْلَمَا، فَذَهَبَ إِلَيْهِمَا وَسَمِعَ تِلَاوَةَ سُورَةِ طَهَ فَتَأَثَّرَ، ثُمَّ مَضَى مُبَاشَرَةً إِلَى النَّبِيِّ ﷺ وَأَشْهَدَ. وَكَانَ إِسْلَامُهُ مُؤَثِّرًا حَتَّى صَلَّى الْمُسْلِمُونَ عَلَنًا عِنْدَ الْكَعْبَةِ لِأَوَّلِ مَرَّةٍ، فَلُقِّبَ بِالْفَارُوقِ" },
    en: { q: "Which Companion was given the title 'Al-Faruq' (The Distinguisher)?", options: { "A": "Abu Bakr As-Siddiq", "B": "Umar ibn Al-Khattab", "C": "Uthman ibn Affan", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "Umar ibn Al-Khattab (RA) was one of the fiercest opponents of Islam before his conversion. He set out to kill the Prophet, but on the way learned his sister had accepted Islam. He heard Surah Ta-Ha, was deeply moved, and declared his Shahadah. His conversion allowed Muslims to pray openly at the Kaaba — hence 'Al-Faruq' (The Distinguisher between truth and falsehood)." }
  },
  {
    id: 94,
    ar: { q: " كَمٌّ كَان عَدَدِ الْمُسْلِمِينَ تَقْريبًا فِي غَزْوَةٍ بِدُرٍّ ؟", options: { "أ": " 1000", "ب": " 700", "ج": " 313", "د": " 500" }, ans: "ج", exp: " وَاجَهَ نَحْوَ 313 مُسْلِمًا قَلِيلِيَ الْعَتَادِ حَوَالِيَ 1000 مِنْ جُنُودِ قُرَيْشٍ عِنْدَ آبَارِ بَدْرٍ سَنَةَ 2 هـ. وَلَمْ يَكُنْ مَعَ الْمُسْلِمِينَ سِوَى فَرَسَيْنِ وَسَبْعِينَ بَعِيرًا. وَرَغْمَ التَّفَاوُتِ الْكَبِيرِ حَقَّقُوا نَصْرًا حَاسِمًا بِعَوْنِ اللهِ، وَقَدْ أَخْبَرَ الْقُرْآنُ أَنَّ اللهَ أَمَدَّهُمْ بِالْمَلَائِكَةِ (8:9). وَكَانَتْ بَدْرٌ أَوَّلَ مُوَاجَهَةٍ عَسْكَرِيَّةٍ كُبْرَى وَثَبَّتَتِ الْمُسْلِمِينَ قُوَّةً فِي الْجَزِيرَةِ الْعَرَبِيَّةِ" },
    en: { q: "Approximately how many Muslims fought at the Battle of Badr?", options: { "A": "1,000", "B": "700", "C": "313", "D": "500" }, ans: "C", exp: "About 313 Muslims faced approximately 1,000 well-equipped Qurayshi fighters at the wells of Badr in 2 AH. The Muslims had only 2 horses and 70 camels. Despite the odds, they achieved a decisive victory — the Qur'an states Allah sent angels to fight alongside them (8:9). Badr established the Muslim community as a serious force in Arabia." }
  },
  {
    id: 95,
    ar: { q: " مَنٌّ هُو الصَّحَابِيِّ الْمُلَقِّبِ ب 'ذُو النورين' ؟", options: { "أ": " أَبُو بِكْرِ الصَّدِيقِ", "ب": " عُثْمَانُ بْن عَفَّانِ", "ج": " عُلِيَ بْن أبِي طَالِبٍ", "د": " عُمَرُ بْن الْخِطَابَ" }, ans: "ب", exp: " عُثْمَانُ بْنُ عَفَّانَ ( رَضِّيَّ الْلَّهُ عَنْهُ ) لُقِّبَ بِذِي النُّورَيْنِ لِأَنَّهُ تَزَوَّجَ ابْنَتَيْنِ مِنْ بَنَاتِ النَّبِيِّ ﷺ: أَوَّلًا رُقَيَّةَ، وَبَعْدَ وَفَاتِهَا أُمَّ كُلْثُومٍ رَضِيَ اللهُ عَنْهُمَا" },
    en: { q: "Which Companion was known as 'Dhun-Nurayn' (Possessor of Two Lights)?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Ali ibn Abi Talib", "D": "Umar ibn Al-Khattab" }, ans: "B", exp: "Uthman ibn Affan (RA) married two of the Prophet's daughters: Ruqayyah and after her death, Umm Kulthum." }
  },
  {
    id: 96,
    ar: { q: "مَنْ كَانَتْ أَوَّلَ امْرَأَةٍ تَقْبَلُ الْإِسْلَامَ؟", options: { "أ": "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ", "ب": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "ج": "فَاطِمَةُ بِنْتُ مُحَمَّدٍ", "د": "سُمَيَّةُ بِنْتُ خَيَّاطٍ" }, ans: "ب", exp: "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ ( رَضِيَ اللهُ عَنْهَا ) زَوْجُ النَّبِيِّ ﷺ. لَمَّا رَجَعَ مِنْ غَارِ حِرَاءٍ مُرْتَعِشًا طَمْأَنَتْهُ وَآمَنَتْ بِرِسَالَتِهِ فَوْرًا دُونَ تَرَدُّدٍ" },
    en: { q: "Who was the first woman to accept Islam?", options: { "A": "Aisha bint Abi Bakr", "B": "Khadijah bint Khuwaylid", "C": "Fatimah bint Muhammad", "D": "Sumayyah bint Khayyat" }, ans: "B", exp: "The Prophet's wife Khadijah (RA). When he returned from Hira trembling, she reassured him and immediately believed in his message." }
  },
  {
    id: 97,
    ar: { q: "مَنْ كَانَ أَوَّلَ شَهِيدٍ فِي الْإِسْلَامِ؟", options: { "أ": "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ", "ب": "بِلَالُ بْنُ رَبَاحٍ", "ج": "سُمَيَّةُ بِنْتُ خَيَّاطٍ", "د": "يَاسِرُ بْنُ عَامِرٍ" }, ans: "ج", exp: "سُمَيَّةُ بِنْتُ خَيَّاطٍ ( رَضِيَ اللهُ عَنْهَا ) عُذِّبَتْ وَقُتِلَتْ عَلَى يَدِ أَبِي جَهْلٍ لِرَفْضِهَا التَّخَلِّيَ عَنِ الْإِسْلَامِ. وَقَالَ لَهَا النَّبِيُّ ﷺ وَلِأَهْلِهَا: 'صَبْرًا آلَ يَاسِرٍ، فَإِنَّ مَوْعِدَكُمُ الْجَنَّةُ'" },
    en: { q: "Who was the first person martyred in Islam?", options: { "A": "Hamza ibn Abdul-Muttalib", "B": "Bilal ibn Rabah", "C": "Sumayyah bint Khayyat", "D": "Yasir ibn Amir" }, ans: "C", exp: "Sumayyah bint Khayyat (RA) was tortured and killed by Abu Jahl for refusing to renounce Islam. The Prophet said to her family: 'Patience, O family of Yasir, for your appointment is Paradise.'" }
  },
  {
    id: 98,
    ar: { q: "أَيُّ صَحَابِيٍّ لُقِّبَ بِـ'الصِّدِّيقِ'؟", options: { "أ": "عُمَرُ بْنُ الْخَطَّابِ", "ب": "أَبُو بَكْرٍ الصِّدِّيقُ", "ج": "عُثْمَانُ بْنُ عَفَّانَ", "د": "عَلِيُّ بْنُ أَبِي طَالِبٍ" }, ans: "ب", exp: "أَبُو بَكْرٍ ( رَضِيَ اللهُ عَنْهُ ) لُقِّبَ بِالصِّدِّيقِ أَيْ 'الْمُصَدِّقُ'، إِذْ صَدَّقَ النَّبِيَّ ﷺ فَوْرًا حِينَ أَخْبَرَهُ بِالْإِسْرَاءِ وَالْمِعْرَاجِ بَيْنَمَا شَكَّ كَثِيرُونَ" },
    en: { q: "Which Companion was known as 'Al-Siddiq' (The Truthful)?", options: { "A": "Umar ibn Al-Khattab", "B": "Abu Bakr As-Siddiq", "C": "Uthman ibn Affan", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "Meaning 'The Truthful.' Abu Bakr (RA) believed the Prophet instantly when told of the Isra and Mi'raj while others doubted." }
  },
  {
    id: 99,
    ar: { q: "أَيُّ صَحَابِيٍّ اشْتُهِرَ بِتَفْسِيرِ الْقُرْآنِ الْكَرِيمِ؟", options: { "أ": "عَبْدُ اللهِ بْنُ مَسْعُودٍ", "ب": "ابْنُ عَبَّاسٍ", "ج": "أُبَيُّ بْنُ كَعْبٍ", "د": "زَيْدُ بْنُ ثَابِتٍ" }, ans: "ب", exp: "عَبْدُ اللهِ بْنُ عَبَّاسٍ ( رَضِيَ اللهُ عَنْهُمَا ) لُقِّبَ بِحَبْرِ الْأُمَّةِ. وَقَدْ دَعَا لَهُ النَّبِيُّ ﷺ: 'اللَّهُمَّ فَقِّهْهُ فِي الدِّينِ وَعَلِّمْهُ التَّأْوِيلَ'" },
    en: { q: "Which Companion was renowned for his interpretation of the Qur'an?", options: { "A": "Abdullah ibn Mas'ud", "B": "Ibn Abbas", "C": "Ubayy ibn Ka'b", "D": "Zayd ibn Thabit" }, ans: "B", exp: "Called 'The Scholar of the Ummah.' The Prophet made du'a for him: 'O Allah, give him understanding of the religion and teach him interpretation.'" }
  },
  {
    id: 100,
    ar: { q: "مَنْ تَوَلَّى جَمْعَ الْقُرْآنِ الْكَرِيمِ فِي مُصْحَفٍ وَاحِدٍ؟", options: { "أ": "عَبْدُ اللهِ بْنُ مَسْعُودٍ", "ب": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ج": "زَيْدُ بْنُ ثَابِتٍ", "د": "أُبَيُّ بْنُ كَعْبٍ" }, ans: "ج", exp: "زَيْدُ بْنُ ثَابِتٍ ( رَضِيَ اللهُ عَنْهُ ) كَانَ كَاتِبَ وَحْيِ النَّبِيِّ ﷺ الرَّئِيسِيَّ. كَلَّفَهُ أَبُو بَكْرٍ الصِّدِّيقُ بِجَمْعِ الْقُرْآنِ بَعْدَ اسْتِشْهَادِ عَدَدٍ كَبِيرٍ مِنَ الْحُفَّاظِ فِي مَعْرَكَةِ الْيَمَامَةِ" },
    en: { q: "Who compiled the Qur'an into a single manuscript?", options: { "A": "Abdullah ibn Mas'ud", "B": "Ali ibn Abi Talib", "C": "Zayd ibn Thabit", "D": "Ubayy ibn Ka'b" }, ans: "C", exp: "Zayd ibn Thabit (RA) was the Prophet's chief scribe. Abu Bakr tasked him with this after many huffadh died at the Battle of Yamama." }
  },
  {
    id: 101,
    ar: { q: "مَنْ كَانَ رَفِيقَ النَّبِيِّ ﷺ فِي غَارِ ثَوْرٍ؟", options: { "أ": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ب": "أَبُو بَكْرٍ الصِّدِّيقُ", "ج": "عُمَرُ بْنُ الْخَطَّابِ", "د": "بِلَالُ بْنُ رَبَاحٍ" }, ans: "ب", exp: "ذَكَرَ اللهُ ذَلِكَ فِي الْقُرْآنِ الْكَرِيمِ: '...إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللهَ مَعَنَا' (التوبة: 40)" },
    en: { q: "Who was the Prophet's companion in the Cave of Thawr?", options: { "A": "Ali ibn Abi Talib", "B": "Abu Bakr As-Siddiq", "C": "Umar ibn Al-Khattab", "D": "Bilal ibn Rabah" }, ans: "B", exp: "Mentioned in the Qur'an: '...when they were in the cave and he said to his companion, Do not grieve; indeed Allah is with us.' (9:40)" }
  },
  {
    id: 102,
    ar: { q: "أَيُّ صَحَابِيٍّ أَعْتَقَ بِلَالَ بْنَ رَبَاحٍ مِنَ الرِّقِّ؟", options: { "أ": "أَبُو بَكْرٍ الصِّدِّيقُ", "ب": "عُمَرُ بْنُ الْخَطَّابِ", "ج": "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ", "د": "عُثْمَانُ بْنُ عَفَّانَ" }, ans: "أ", exp: "أَبُو بَكْرٍ الصِّدِّيقُ ( رَضِيَ اللهُ عَنْهُ ) اشْتَرَى بِلَالًا وَأَعْتَقَهُ مِنْ سَيِّدِهِ أُمَيَّةَ بْنِ خَلَفٍ الَّذِي كَانَ يُعَذِّبُهُ بِسَبَبِ إِسْلَامِهِ" },
    en: { q: "Which Companion freed Bilal ibn Rabah from slavery?", options: { "A": "Abu Bakr As-Siddiq", "B": "Umar ibn Al-Khattab", "C": "Hamza ibn Abdul-Muttalib", "D": "Uthman ibn Affan" }, ans: "A", exp: "Abu Bakr (RA) purchased and freed Bilal from his master Umayyah ibn Khalaf, who was torturing Bilal for accepting Islam." }
  },
  {
    id: 103,
    ar: { q: "أَيُّ صَحَابِيٍّ لُقِّبَ بِـ'أَسَدِ اللهِ'؟", options: { "أ": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ب": "خَالِدُ بْنُ الْوَلِيدِ", "ج": "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ", "د": "سَعْدُ بْنُ أَبِي وَقَّاصٍ" }, ans: "ج", exp: "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ ( رَضِيَ اللهُ عَنْهُ ) عَمُّ النَّبِيِّ ﷺ وَمِنْ أَشْجَعِ الْمُقَاتِلِينَ. اسْتُشْهِدَ فِي غَزْوَةِ أُحُدٍ عَلَى يَدِ وَحْشِيِّ بْنِ حَرْبٍ" },
    en: { q: "Which Companion was titled 'The Lion of Allah'?", options: { "A": "Ali ibn Abi Talib", "B": "Khalid ibn Al-Walid", "C": "Hamza ibn Abdul-Muttalib", "D": "Sa'd ibn Abi Waqqas" }, ans: "C", exp: "The Prophet's uncle and a fearless warrior. He was martyred at the Battle of Uhud by Wahshi." }
  },
  {
    id: 104,
    ar: { q: "كَمْ عَدَدُ الصَّحَابَةِ الَّذِينَ بُشِّرُوا بِالْجَنَّةِ بِأَسْمَائِهِمْ؟", options: { "أ": "4", "ب": "7", "ج": "10", "د": "12" }, ans: "ج", exp: "الْعَشَرَةُ الْمُبَشَّرُونَ بِالْجَنَّةِ هُمْ: أَبُو بَكْرٍ، وَعُمَرُ، وَعُثْمَانُ، وَعَلِيٌّ، وَطَلْحَةُ، وَالزُّبَيْرُ، وَسَعْدٌ، وَسَعِيدٌ، وَأَبُو عُبَيْدَةَ، وَعَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ ( رَضِيَ اللهُ عَنْهُمْ )" },
    en: { q: "How many Companions are promised Paradise by name?", options: { "A": "4", "B": "7", "C": "10", "D": "12" }, ans: "C", exp: "The Ten Promised Paradise (Al-Ashara al-Mubasharun) include Abu Bakr, Umar, Uthman, Ali, Talha, Zubayr, Sa'd, Sa'id, Abu Ubaydah, and Abdur-Rahman ibn Awf." }
  },
  {
    id: 105,
    ar: { q: "أَيُّ صَحَابِيٍّ قَادَ فَتْحَ بِلَادِ فَارِسَ؟", options: { "أ": "خَالِدُ بْنُ الْوَلِيدِ", "ب": "عَمْرُو بْنُ الْعَاصِ", "ج": "سَعْدُ بْنُ أَبِي وَقَّاصٍ", "د": "أَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ" }, ans: "ج", exp: "سَعْدُ بْنُ أَبِي وَقَّاصٍ ( رَضِيَ اللهُ عَنْهُ ) قَادَ الْمُسْلِمِينَ إِلَى النَّصْرِ فِي مَعْرَكَةِ الْقَادِسِيَّةِ سَنَةَ 636م، مُنْهِيًا السَّيْطَرَةَ السَّاسَانِيَّةَ عَلَى الْعِرَاقِ" },
    en: { q: "Which Companion led the conquest of Persia?", options: { "A": "Khalid ibn Al-Walid", "B": "Amr ibn al-As", "C": "Sa'd ibn Abi Waqqas", "D": "Abu Ubaydah ibn Al-Jarrah" }, ans: "C", exp: "Sa'd ibn Abi Waqqas (RA) led the Muslims to victory at the Battle of Qadisiyyah (636 CE), ending Sassanid control of Iraq." }
  },
  {
    id: 106,
    ar: { q: "مَنْ كَانَ أَوَّلَ سَفِيرٍ لِلْإِسْلَامِ إِلَى الْمَدِينَةِ الْمُنَوَّرَةِ؟", options: { "أ": "مُصْعَبُ بْنُ عُمَيْرٍ", "ب": "زَيْدُ بْنُ حَارِثَةَ", "ج": "عَبْدُ اللهِ بْنُ رَوَاحَةَ", "د": "أَسْعَدُ بْنُ زُرَارَةَ" }, ans: "أ", exp: "مُصْعَبُ بْنُ عُمَيْرٍ ( رَضِيَ اللهُ عَنْهُ ) كَانَ شَابًّا مَيْسُورًا مِنْ قُرَيْشٍ تَرَكَ رَفَاهِيَتَهُ بَعْدَ إِسْلَامِهِ. بَعَثَهُ النَّبِيُّ ﷺ إِلَى الْمَدِينَةِ بَعْدَ بَيْعَةِ الْعَقَبَةِ الْأُولَى لِيُعَلِّمَ الْقُرْآنَ وَيَنْشُرَ الْإِسْلَامَ. فَكَانَ أَثَرُهُ بَالِغًا حَتَّى دَخَلَ الْإِسْلَامُ كُلَّ بَيْتٍ تَقْرِيبًا فِي الْمَدِينَةِ، مُمَهِّدًا لِبَيْعَةِ الْعَقَبَةِ الثَّانِيَةِ وَهِجْرَةِ النَّبِيِّ ﷺ" },
    en: { q: "Who was the first ambassador of Islam to Madinah?", options: { "A": "Mus'ab ibn Umayr", "B": "Zayd ibn Harithah", "C": "Abdullah ibn Rawahah", "D": "As'ad ibn Zurarah" }, ans: "A", exp: "Mus'ab ibn Umayr (RA) was a wealthy young man from Quraysh who gave up his comfortable life after accepting Islam. After the first pledge of Aqabah, the Prophet sent him to Madinah to teach the Qur'an. He was so effective that within a year, Islam had entered almost every household in Madinah, paving the way for the Prophet's Hijrah." }
  },
  {
    id: 107,
    ar: { q: "أَيُّ صَحَابِيٍّ رَوَى أَكْثَرَ الْأَحَادِيثِ النَّبَوِيَّةِ؟", options: { "أ": "عَبْدُ اللهِ بْنُ عُمَرَ", "ب": "أَنَسُ بْنُ مَالِكٍ", "ج": "أَبُو هُرَيْرَةَ", "د": "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ" }, ans: "ج", exp: "أَبُو هُرَيْرَةَ ( رَضِيَ اللهُ عَنْهُ ) رَوَى أَكْثَرَ مِنْ 5000 حَدِيثٍ. كَرَّسَ نَفْسَهُ لِمُلَازَمَةِ النَّبِيِّ ﷺ وَحِفْظِ أَقْوَالِهِ" },
    en: { q: "Which Companion narrated the most hadith?", options: { "A": "Abdullah ibn Umar", "B": "Anas ibn Malik", "C": "Abu Hurayrah", "D": "Aisha bint Abi Bakr" }, ans: "C", exp: "Abu Hurayrah (RA) narrated over 5,000 hadith. He dedicated himself to accompanying the Prophet and memorising his words." }
  },
  {
    id: 108,
    ar: { q: "أَيُّ زَوْجَاتِ النَّبِيِّ ﷺ رَوَتْ أَكْثَرَ الْأَحَادِيثِ مِنَ النِّسَاءِ؟", options: { "أ": "خَدِيجَةُ بِنْتُ خُوَيْلِدٍ", "ب": "عَائِشَةُ بِنْتُ أَبِي بَكْرٍ", "ج": "حَفْصَةُ بِنْتُ عُمَرَ", "د": "أُمُّ سَلَمَةَ" }, ans: "ب", exp: "عَائِشَةُ ( رَضِيَ اللهُ عَنْهَا ) رَوَتْ أَكْثَرَ مِنْ 2200 حَدِيثٍ وَكَانَتْ مَرْجِعًا كَبِيرًا فِي الْفِقْهِ الْإِسْلَامِيِّ، وَكَانَ الْعُلَمَاءُ يَرْحَلُونَ إِلَيْهَا لِيَسْتَشِيرُوهَا" },
    en: { q: "Which wife of the Prophet narrated the most hadith among women?", options: { "A": "Khadijah bint Khuwaylid", "B": "Aisha bint Abi Bakr", "C": "Hafsa bint Umar", "D": "Umm Salamah" }, ans: "B", exp: "Aisha (RA) narrated over 2,200 hadith and was a major authority on Islamic law. Scholars would travel to consult her." }
  },
  {
    id: 109,
    ar: { q: "أَيُّ صَحَابِيٍّ لُقِّبَ بِـ'أَمِينِ هَذِهِ الْأُمَّةِ'؟", options: { "أ": "أَبُو بَكْرٍ الصِّدِّيقُ", "ب": "أَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ", "ج": "سَعْدُ بْنُ أَبِي وَقَّاصٍ", "د": "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ" }, ans: "ب", exp: "قَالَ النَّبِيُّ ﷺ: 'لِكُلِّ أُمَّةٍ أَمِينٌ، وَأَمِينُ هَذِهِ الْأُمَّةِ أَبُو عُبَيْدَةَ بْنُ الْجَرَّاحِ' (رَوَاهُ الْبُخَارِيُّ)" },
    en: { q: "Which Companion was titled 'Trustworthy of this Ummah'?", options: { "A": "Abu Bakr As-Siddiq", "B": "Abu Ubaydah ibn Al-Jarrah", "C": "Sa'd ibn Abi Waqqas", "D": "Abdur-Rahman ibn Awf" }, ans: "B", exp: "The Prophet (PBUH) said: 'Every nation has a trustworthy guardian, and the trustworthy one of this Ummah is Abu Ubaydah.' (Bukhari)" }
  },
  {
    id: 110,
    ar: { q: "مَنْ أَمَّ الْمُسْلِمِينَ فِي الصَّلَاةِ خِلَالَ مَرَضِ النَّبِيِّ ﷺ الْأَخِيرِ؟", options: { "أ": "عُمَرُ بْنُ الْخَطَّابِ", "ب": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ج": "أَبُو بَكْرٍ الصِّدِّيقُ", "د": "عُثْمَانُ بْنُ عَفَّانَ" }, ans: "ج", exp: "اخْتَارَ النَّبِيُّ ﷺ أَبَا بَكْرٍ ( رَضِيَ اللهُ عَنْهُ ) لِيَؤُمَّ الْمُسْلِمِينَ فِي الصَّلَاةِ، وَرَأَى الصَّحَابَةُ فِي ذَلِكَ دَلَالَةً عَلَى أَحَقِّيَّتِهِ بِالْخِلَافَةِ" },
    en: { q: "Which Companion led the prayer during the Prophet's final illness?", options: { "A": "Umar ibn Al-Khattab", "B": "Ali ibn Abi Talib", "C": "Abu Bakr As-Siddiq", "D": "Uthman ibn Affan" }, ans: "C", exp: "The Prophet specifically chose Abu Bakr (RA) to lead the prayers, which the Companions later took as an indication of his suitability for leadership." }
  },
  {
    id: 111,
    ar: { q: "أَيُّ صَحَابِيٍّ تَزَوَّجَ بِنْتَيْنِ مِنْ بَنَاتِ النَّبِيِّ ﷺ؟", options: { "أ": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ب": "عُثْمَانُ بْنُ عَفَّانَ", "ج": "أَبُو الْعَاصِ بْنُ الرَّبِيعِ", "د": "الزُّبَيْرُ بْنُ الْعَوَّامِ" }, ans: "ب", exp: "عُثْمَانُ بْنُ عَفَّانَ ( رَضِيَ اللهُ عَنْهُ ) تَزَوَّجَ رُقَيَّةَ، وَبَعْدَ وَفَاتِهَا زَوَّجَهُ النَّبِيُّ ﷺ أُمَّ كُلْثُومٍ، فَلُقِّبَ بِذِي النُّورَيْنِ" },
    en: { q: "Which Companion married two daughters of the Prophet?", options: { "A": "Ali ibn Abi Talib", "B": "Uthman ibn Affan", "C": "Abu al-As ibn al-Rabi", "D": "Zubayr ibn al-Awwam" }, ans: "B", exp: "Uthman ibn Affan (RA) married Ruqayyah, and after she passed away, the Prophet gave him Umm Kulthum in marriage — hence 'Dhun-Nurayn.'" }
  },
  {
    id: 112,
    ar: { q: "مَنْ كَانَ أَصْغَرَ قَائِدٍ عَيَّنَهُ النَّبِيُّ ﷺ؟", options: { "أ": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ب": "أُسَامَةُ بْنُ زَيْدٍ", "ج": "مُعَاذُ بْنُ جَبَلٍ", "د": "زَيْدُ بْنُ حَارِثَةَ" }, ans: "ب", exp: "أُسَامَةُ بْنُ زَيْدٍ ( رَضِيَ اللهُ عَنْهُ ) ابْنُ زَيْدِ بْنِ حَارِثَةَ الَّذِي تَبَنَّاهُ النَّبِيُّ ﷺ. عَيَّنَهُ قَائِدًا وَعُمُرُهُ نَحْوُ ثَمَانِيَةَ عَشَرَ عَامًا لِيَقُودَ جَيْشًا إِلَى الشَّامِ، وَفِي صُفُوفِهِ أَبُو بَكْرٍ وَعُمَرُ. وَلَمَّا أَنْكَرَ بَعْضُهُمْ صِغَرَ سِنِّهِ قَالَ ﷺ: 'إِنْ تَطْعَنُوا فِي إِمَارَتِهِ فَقَدْ طَعَنْتُمْ فِي إِمَارَةِ أَبِيهِ مِنْ قَبْلُ، وَايْمُ اللهِ إِنْ كَانَ لَخَلِيقًا لِلْإِمَارَةِ'" },
    en: { q: "Who was the youngest commander appointed by the Prophet?", options: { "A": "Ali ibn Abi Talib", "B": "Usamah ibn Zayd", "C": "Mu'adh ibn Jabal", "D": "Zayd ibn Harithah" }, ans: "B", exp: "Usamah ibn Zayd (RA) was appointed at about 18 years old to lead an army to Syria, even though senior Companions like Abu Bakr and Umar were in the ranks. The Prophet said: 'If you criticise his leadership, you criticised his father's before him.' Abu Bakr insisted on dispatching his army as one of his first acts as Caliph." }
  },
  {
    id: 113,
    ar: { q: "أَيُّ صَحَابِيٍّ تَصَدَّقَ بِجَمِيعِ مَالِهِ فِي غَزْوَةِ تَبُوكَ؟", options: { "أ": "عُثْمَانُ بْنُ عَفَّانَ", "ب": "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ", "ج": "أَبُو بَكْرٍ الصِّدِّيقُ", "د": "عُمَرُ بْنُ الْخَطَّابِ" }, ans: "ج", exp: "حِينَ سُئِلَ أَبُو بَكْرٍ ( رَضِيَ اللهُ عَنْهُ ) عَمَّا أَبْقَاهُ لِأَهْلِهِ أَجَابَ: 'أَبْقَيْتُ لَهُمُ اللهَ وَرَسُولَهُ'. وَقَدْ تَصَدَّقَ عُمَرُ بِنِصْفِ مَالِهِ وَأَدْرَكَ أَنَّهُ لَنْ يَسْبِقَ أَبَا بَكْرٍ أَبَدًا" },
    en: { q: "Which Companion donated his entire wealth for the Battle of Tabuk?", options: { "A": "Uthman ibn Affan", "B": "Abdur-Rahman ibn Awf", "C": "Abu Bakr As-Siddiq", "D": "Umar ibn Al-Khattab" }, ans: "C", exp: "When asked what he left for his family, Abu Bakr (RA) replied: 'I left for them Allah and His Messenger.' Umar donated half and realised he could never surpass Abu Bakr." }
  },
  {
    id: 114,
    ar: { q: "مَنْ كَانَ أَوَّلَ مَنْ تَلَا الْقُرْآنَ جَهْرًا فِي مَكَّةَ الْمُكَرَّمَةَ؟", options: { "أ": "بِلَالُ بْنُ رَبَاحٍ", "ب": "عَبْدُ اللهِ بْنُ مَسْعُودٍ", "ج": "أَبُو بَكْرٍ الصِّدِّيقُ", "د": "مُصْعَبُ بْنُ عُمَيْرٍ" }, ans: "ب", exp: "عَبْدُ اللهِ بْنُ مَسْعُودٍ ( رَضِيَ اللهُ عَنْهُ ) تَلَا سُورَةَ الرَّحْمَنِ جَهْرًا قُرْبَ الْكَعْبَةِ فَضَرَبَهُ الْمُشْرِكُونَ، لَكِنَّهُ تَمَسَّكَ بِتِلَاوَتِهِ وَلَمْ يَتَوَقَّفْ" },
    en: { q: "Who was the first to recite Qur'an publicly in Makkah?", options: { "A": "Bilal ibn Rabah", "B": "Abdullah ibn Mas'ud", "C": "Abu Bakr As-Siddiq", "D": "Mus'ab ibn Umayr" }, ans: "B", exp: "Abdullah ibn Mas'ud (RA) recited Surah Ar-Rahman aloud near the Kaaba and was beaten by the Quraysh for it, but persisted." }
  },
  {
    id: 115,
    ar: { q: "فِي بَيْتِ أَيِّ صَحَابِيٍّ كَانَتْ أُولَى مَدَارِسِ الْإِسْلَامِ (دَارُ الْأَرْقَمِ)؟", options: { "أ": "أَبُو بَكْرٍ الصِّدِّيقُ", "ب": "الْأَرْقَمُ بْنُ أَبِي الْأَرْقَمِ", "ج": "حَمْزَةُ بْنُ عَبْدِ الْمُطَّلِبِ", "د": "عُثْمَانُ بْنُ عَفَّانَ" }, ans: "ب", exp: "كَانَتْ دَارُ الْأَرْقَمِ بْنِ أَبِي الْأَرْقَمِ ( رَضِيَ اللهُ عَنْهُ ) تَقَعُ قُرْبَ الصَّفَا، وَكَانَ النَّبِيُّ ﷺ يُعَلِّمُ فِيهَا الْمُسْلِمِينَ الْأَوَائِلَ سِرًّا فِي السَّنَوَاتِ الْأُولَى مِنَ الدَّعْوَةِ" },
    en: { q: "Whose house was the first school of Islam (Dar al-Arqam)?", options: { "A": "Abu Bakr As-Siddiq", "B": "Al-Arqam ibn Abi al-Arqam", "C": "Hamza ibn Abdul-Muttalib", "D": "Uthman ibn Affan" }, ans: "B", exp: "Located near the hill of Safa, the Prophet secretly taught the early Muslims there in the early years of the message." }
  },
  {
    id: 116,
    ar: { q: " مِن أَوَّل مِن أسْلُمٍ مِن الصِّبْيَانِ ؟", options: { "أ": " زِيدَ بْن حَارِثَةً", "ب": " عُمَرُ بْن الْخِطَابَ", "ج": " عُلِيَ بْن أبِي طَالِبٍ", "د": " الزُّبَيْرُ بْن الْعَوَّامَ" }, ans: "ج", exp: " عَلِيُّ بْنُ أَبِي طَالِبٍ ( رَضِّيَّ الْلَّهُ عَنْهُ ) كَانَ أَوَّلَ مَنْ أَسْلَمَ مِنَ الصِّبْيَانِ وَعُمُرُهُ نَحْوَ عَشْرِ سَنَوَاتٍ. وَهُوَ ابْنُ عَمِّ النَّبِيِّ ﷺ نَشَأَ فِي بَيْتِهِ، وَأَصْبَحَ لَاحِقًا رَابِعَ الْخُلَفَاءِ الرَّاشِدِينَ" },
    en: { q: "Who was the first youth to accept Islam?", options: { "A": "Zayd ibn Harithah", "B": "Umar ibn Al-Khattab", "C": "Ali ibn Abi Talib", "D": "Az-Zubayr ibn Al-Awwam" }, ans: "C", exp: "Ali ibn Abi Talib (RA) was about 10 years old and was raised in the Prophet's household. He later became the fourth Caliph." }
  },
  {
    id: 117,
    ar: { q: " فِي أَيِّ غَزْوَةٍ اُسْتُشْهِدَ حَمْزَةَ بْن عَبْدَ الْمَطْلَبِ ( رَضِّيَّ الْلَّهُ عَنْهُ )؟", options: { "أ": " غَزْوَةُ بَدْرٍ", "ب": " غَزْوَةُ أحَدٍ", "ج": " غَزْوَةُ الْخَنْدَقِ", "د": " غَزْوَةٌ تَبُوكُ" }, ans: "ب", exp: " حَمْزَةُ بْن عَبْدِ الْمُطَّلِبِ ( رَضِّيَّ الْلَّهُ عَنْهُ ) عَمُّ النَّبِيِّ ﷺ وَمِنْ أَوَائِلِ مَنْ أَسْلَمَ وَأَشْجَعِهِمْ، اُسْتُشْهِدَ فِي غَزْوَةِ أُحُدٍ سَنَةَ 3 هـ، وَحَزِنَ النَّبِيُّ ﷺ حُزْنًا شَدِيدًا لِوَفَاتِهِ" },
    en: { q: "In which battle was Hamza ibn Abdul-Muttalib (RA) martyred?", options: { "A": "Battle of Badr", "B": "Battle of Uhud", "C": "Battle of Khandaq", "D": "Battle of Tabuk" }, ans: "B", exp: "Hamza (RA) was martyred at the Battle of Uhud in 3 AH. Archers left their positions against the Prophet's orders, allowing an attack from behind. Hamza was killed by Wahshi ibn Harb. The Prophet called him 'the master of the martyrs.' Wahshi later accepted Islam and was forgiven." }
  },
  {
    id: 118,
    ar: { q: "أَيُّ صَحَابِيٍّ اشْتُهِرَ بِكَرَمِهِ وَحَفْرِ الْآبَارِ لِلْمُسْلِمِينَ؟", options: { "أ": "أَبُو بَكْرٍ الصِّدِّيقُ", "ب": "عُثْمَانُ بْنُ عَفَّانَ", "ج": "عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ", "د": "طَلْحَةُ بْنُ عُبَيْدِ اللهِ" }, ans: "ب", exp: "عُثْمَانُ بْنُ عَفَّانَ ( رَضِيَ اللهُ عَنْهُ ) اشْتَرَى بِئْرَ رُومَةَ وَوَقَفَهَا لِلْمُسْلِمِينَ، كَمَا مَوَّلَ تَوْسِعَةَ الْمَسْجِدِ النَّبَوِيِّ الشَّرِيفِ" },
    en: { q: "Which Companion was known for his generosity and digging wells?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Abdur-Rahman ibn Awf", "D": "Talha ibn Ubaydullah" }, ans: "B", exp: "Uthman ibn Affan (RA) bought the well of Rumah for the Muslim community and financed the expansion of Masjid an-Nabawi." }
  },
  {
    id: 119,
    ar: { q: "أَيُّ صَحَابِيٍّ كَانَ ابْنَ عَمِّ النَّبِيِّ ﷺ وَصِهْرَهُ فِي آنٍ وَاحِدٍ؟", options: { "أ": "جَعْفَرُ بْنُ أَبِي طَالِبٍ", "ب": "عَلِيُّ بْنُ أَبِي طَالِبٍ", "ج": "الزُّبَيْرُ بْنُ الْعَوَّامِ", "د": "عُثْمَانُ بْنُ عَفَّانَ" }, ans: "ب", exp: "عَلِيُّ بْنُ أَبِي طَالِبٍ ( رَضِيَ اللهُ عَنْهُ ) ابْنُ أَبِي طَالِبٍ عَمِّ النَّبِيِّ ﷺ، وَتَزَوَّجَ فَاطِمَةَ ( رَضِيَ اللهُ عَنْهَا ). وَيُلَقَّبُ بِـ'بَابِ الْعِلْمِ'" },
    en: { q: "Which Companion was the Prophet's cousin and son-in-law?", options: { "A": "Ja'far ibn Abi Talib", "B": "Ali ibn Abi Talib", "C": "Zubayr ibn al-Awwam", "D": "Uthman ibn Affan" }, ans: "B", exp: "Son of Abu Talib, Ali (RA) married Fatimah (RA). He is known as 'Bab al-'Ilm' (the gate of knowledge)." }
  },
  {
    id: 120,
    ar: { q: "أَيُّ صَحَابِيٍّ عَيَّنَهُ النَّبِيُّ ﷺ وَالِيًا عَلَى الْيَمَنِ؟", options: { "أ": "أَبُو مُوسَى الْأَشْعَرِيُّ", "ب": "مُعَاذُ بْنُ جَبَلٍ", "ج": "عَمْرُو بْنُ الْعَاصِ", "د": "خَالِدُ بْنُ الْوَلِيدِ" }, ans: "ب", exp: "قَالَ لَهُ النَّبِيُّ ﷺ: 'إِنَّكَ سَتَأْتِي قَوْمًا أَهْلَ كِتَابٍ، فَلْيَكُنْ أَوَّلَ مَا تَدْعُوهُمْ إِلَيْهِ التَّوْحِيدُ' (رَوَاهُ الْبُخَارِيُّ)" },
    en: { q: "Which Companion was appointed governor of Yemen by the Prophet?", options: { "A": "Abu Musa al-Ash'ari", "B": "Mu'adh ibn Jabal", "C": "Amr ibn al-As", "D": "Khalid ibn Al-Walid" }, ans: "B", exp: "The Prophet told him: 'You are going to a people of the Book, so let the first thing you call them to be Tawhid.' (Bukhari)" }
  },
  {
    id: 121,
    ar: { q: " أَيْن تُقْعِ قِبَلَةُ الْمُسْلِمِينَ الْأوْلَى ؟", options: { "أ": " الْكَعْبَةُ الْمُشَرَّفَة", "ب": " الْمَسْجِدُ النَّبَوِيُّ", "ج": " الْمَسْجِدَ الْأقْصَى", "د": " مَسْجِدُ قَبَاءٍ" }, ans: "ج", exp: " الْمَسْجِدُ الْأَقْصَى فِي الْقُدْسِ كَانَ الْقِبْلَةَ الْأُولَى لِلْمُسْلِمِينَ. صَلَّى الْمُسْلِمُونَ نَحْوَ 16-17 شَهْرًا تِجَاهَ الْقُدْسِ قَبْلَ أَنْ يَأْمُرَ اللهُ بِتَحْوِيلِ الْقِبْلَةِ إِلَى الْكَعْبَةِ. (الْبَقَرَة 2:144)" },
    en: { q: "Where was the first Qiblah (direction of prayer) for Muslims?", options: { "A": "The Kaaba", "B": "Al-Masjid An-Nabawi", "C": "Al-Masjid Al-Aqsa", "D": "Masjid Quba" }, ans: "C", exp: "Al-Masjid Al-Aqsa in Jerusalem was the first Qiblah. Muslims prayed towards Jerusalem for about 16-17 months before Allah (SWT) commanded the change to the Kaaba in Makkah. (2:144)" }
  },
  {
    id: 122,
    ar: { q: " مَنٌّ كَان أَوَّل خَلِيفَةٍ لِلْمُسْلِمِينَ بَعْد وَفَاةِ النَّبِيِّ ﷺ ؟", options: { "أ": " عُلِيَ بْن أبِي طَالِبٍ", "ب": " عُمَرُ بْن الْخِطَابَ", "ج": " عُثْمَانُ بْن عَفَّانِ", "د": " أَبُو بِكْرِ الصَّدِيقِ" }, ans: "د", exp: " اخْتَارَ الصَّحَابَةُ أَبَا بَكْرٍ الصِّدِّيقَ ( رَضِيَ اللهُ عَنْهُ ) خَلِيفَةً فِي سَقِيفَةِ بَنِي سَاعِدَةَ فَوْرَ وَفَاةِ النَّبِيِّ ﷺ. وَدَامَتْ خِلَافَتُهُ نَحْوَ سَنَتَيْنِ ( 632–634 م )" },
    en: { q: "Who was the first Caliph after the Prophet (PBUH)?", options: { "A": "Ali ibn Abi Talib", "B": "Umar ibn Al-Khattab", "C": "Uthman ibn Affan", "D": "Abu Bakr As-Siddiq" }, ans: "D", exp: "Abu Bakr As-Siddiq (RA) was chosen by the Companions at Saqifah Bani Sa'idah immediately after the Prophet's death. His caliphate lasted about 2 years (632–634 CE)." }
  },
  {
    id: 123,
    ar: { q: " مَنٌّ كَان ثاني الْخُلَفَاءِ الرَّاشِدِينَ ؟", options: { "أ": " عُمَرُ بْن الْخِطَابَ", "ب": " عُثْمَانُ بْن عَفَّانِ", "ج": " عُلِيَ بْن أبِي طَالِبٍ", "د": " مُعَاوِيَةُ بْن أبِي سُفْيَانٍ" }, ans: "أ", exp: " عُمَرُ بْنُ الْخَطَّابِ ( رَضِيَ اللهُ عَنْهُ ) كَانَ ثَانِيَ الْخُلَفَاءِ الرَّاشِدِينَ، دَامَتْ خِلَافَتُهُ 10 سَنَوَاتٍ. وَفِي عَهْدِهِ تَوَسَّعَتِ الدَّوْلَةُ الْإِسْلَامِيَّةُ تَوَسُّعًا هَائِلًا شَمِلَ فَتْحَ بِلَادِ فَارِسَ وَالشَّامَ" },
    en: { q: "Who was the second Rightly Guided Caliph?", options: { "A": "Umar ibn Al-Khattab", "B": "Uthman ibn Affan", "C": "Ali ibn Abi Talib", "D": "Mu'awiyah ibn Abi Sufyan" }, ans: "A", exp: "Umar ibn Al-Khattab (RA) was the second Rightly Guided Caliph. His 10-year caliphate saw massive expansion of the Islamic state, including the conquests of Persia and the Levant." }
  },
  {
    id: 124,
    ar: { q: " مَنٌّ هُو الصَّحَابِيِّ الَّذِي أَمْرٍ بِجَمْعِ الْقُرْآنِ فِي مُصْحَفِ وَاحِدِ ؟", options: { "أ": " عُمَرُ بْن الْخِطَابَ", "ب": " عُثْمَانُ بْن عَفَّانِ", "ج": " أَبُو بِكْرِ الصَّدِيقِ", "د": " عُلِيَ بْن أبِي طَالِبٍ" }, ans: "ج", exp: " بَعْدَ اسْتِشْهَادِ كَثِيرٍ مِنْ حُفَّاظِ الْقُرْآنِ فِي مَعْرَكَةِ الْيَمَامَةِ، حَثَّ عُمَرُ أَبَا بَكْرٍ عَلَى جَمْعِ الْقُرْآنِ، فَأَسْنَدَ الْمُهِمَّةَ إِلَى زَيْدِ بْنِ ثَابِتٍ ( رَضِيَ اللهُ عَنْهُ )" },
    en: { q: "Which Caliph ordered the first compilation of the Qur'an into one book?", options: { "A": "Umar ibn Al-Khattab", "B": "Uthman ibn Affan", "C": "Abu Bakr As-Siddiq", "D": "Ali ibn Abi Talib" }, ans: "C", exp: "After many Qur'an memorisers died at the Battle of Yamama, Umar urged Abu Bakr to compile the Qur'an, and Zayd ibn Thabit (RA) led the task." }
  },
  {
    id: 125,
    ar: { q: " مِن الْخَلِيفَةِ الَّذِي وَحَّدَ الْمَصَاحِفُ عَلَى قُرَّاءَةِ وَاحِدَةِ ؟", options: { "أ": " أَبُو بِكْرِ الصَّدِيقِ", "ب": " عُثْمَانُ بْن عَفَّانِ", "ج": " عُمَرُ بْن الْخِطَابَ", "د": " عُلِيَ بْن أبِي طَالِبٍ" }, ans: "ب", exp: " مَعَ انْتِشَارِ الْإِسْلَامِ ظَهَرَتْ اخْتِلَافَاتٌ فِي النُّطْقِ، فَأَمَرَ عُثْمَانُ بْنُ عَفَّانَ ( رَضِيَ اللهُ عَنْهُ ) بِتَوْحِيدِ الْمَصَاحِفِ عَلَى رَسْمٍ وَاحِدٍ وَأَرْسَلَ نُسَخًا إِلَى الْأَمْصَارِ وَأَمَرَ بِإِتْلَافِ مَا سِوَاهَا" },
    en: { q: "Which Caliph standardised the Qur'an into one unified text?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Umar ibn Al-Khattab", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "As Islam spread, pronunciation differences arose. Uthman ibn Affan (RA) standardised the Qur'anic text into one official script, sent standardised copies to major cities, and ordered all other versions destroyed." }
  },
  {
    id: 126,
    ar: { q: " مَنٌّ هُو الْخَلِيفَةِ الَّذِي فَتْحِ الْقُدْسِ ؟", options: { "أ": " عُمَرُ بْن الْخِطَابَ", "ب": " أَبُو بِكْرِ الصَّدِيقِ", "ج": " خَالِدُ بْن الْوَلِيدَ", "د": " صَلَاَحُ الدِّينِ الأيوبي" }, ans: "أ", exp: " عَامَ 637 م رَفَضَ الْبَطْرِيَرْكُ صُفْرُونِيُوسُ تَسْلِيمَ الْقُدْسِ لِأَحَدٍ غَيْرِ الْخَلِيفَةِ نَفْسِهِ، فَسَافَرَ عُمَرُ بْنُ الْخَطَّابِ ( رَضِيَ اللهُ عَنْهُ ) مِنَ الْمَدِينَةِ بِثِيَابٍ مُرَقَّعَةٍ وَأَبْرَمَ 'الْعُهْدَةَ الْعُمَرِيَّةَ' ضَامِنًا سَلَامَةَ الْمَسِيحِيِّينَ وَكَنَائِسِهِمْ. وَحِينَ حَانَ وَقْتُ الصَّلَاةِ دَاخِلَ كَنِيسَةِ الْقِيَامَةِ آثَرَ الصَّلَاةَ خَارِجَهَا خَشْيَةَ أَنْ يَتَّخِذَهَا الْمُسْلِمُونَ مِنْ بَعْدِهِ مَسْجِدًا" },
    en: { q: "Which Caliph received the keys to Jerusalem?", options: { "A": "Umar ibn Al-Khattab", "B": "Abu Bakr As-Siddiq", "C": "Khalid ibn Al-Walid", "D": "Salah ad-Din" }, ans: "A", exp: "In 637 CE, Patriarch Sophronius refused to surrender Jerusalem to anyone except the Caliph himself. Umar (RA) travelled from Madinah wearing simple, patched clothing and signed the 'Pact of Umar' guaranteeing the safety of Christians, their churches, and crosses. When prayer time came inside the Church of the Holy Sepulchre, he chose to pray outside, fearing future Muslims might turn it into a mosque." }
  },
  {
    id: 127,
    ar: { q: " حُروبُ الرَّدَّةِ وَقَّعَتْ فِي عَهْدِ أَيِّ خَلِيفَةٍ ؟", options: { "أ": " عُمَرُ بْن الْخِطَابَ", "ب": " أَبُو بِكْرِ الصَّدِيقِ", "ج": " عُثْمَانُ بْن عَفَّانِ", "د": " عُلِيَ بْن أبِي طَالِبٍ" }, ans: "ب", exp: " بَعْدَ وَفَاةِ النَّبِيِّ ﷺ ارْتَدَّتْ بَعْضُ الْقَبَائِلِ عَنِ الْإِسْلَامِ أَوْ رَفَضَتْ دَفْعَ الزَّكَاةِ، فَقَاتَلَ أَبُو بَكْرٍ الصِّدِّيقُ ( رَضِيَ اللهُ عَنْهُ ) لِلْحِفَاظِ عَلَى وَحْدَةِ الدَّوْلَةِ الْإِسْلَامِيَّةِ" },
    en: { q: "The Ridda Wars (Wars of Apostasy) occurred during whose caliphate?", options: { "A": "Umar ibn Al-Khattab", "B": "Abu Bakr As-Siddiq", "C": "Uthman ibn Affan", "D": "Ali ibn Abi Talib" }, ans: "B", exp: "After the Prophet's death, some tribes renounced Islam or refused to pay Zakat. Abu Bakr (RA) fought to preserve the unity of the Muslim state." }
  },
  {
    id: 128,
    ar: { q: " مَن اِقْتَرَحَ بِدَايَةَ التَّقْويمِ الْهِجْرِيِّ مِن الْهِجْرَةِ النَّبَوِيَّةِ ؟", options: { "أ": " أَبُو بِكْرِ الصَّدِيقِ", "ب": " عُثْمَانُ بْن عَفَّانِ", "ج": " عُمَرُ بْن الْخِطَابَ", "د": " عُلِيَ بْن أبِي طَالِبٍ" }, ans: "ج", exp: " عُمَرُ بْنُ الْخَطَّابِ ( رَضِيَ اللهُ عَنْهُ ) اخْتَارَ الْهِجْرَةَ النَّبَوِيَّةَ نُقْطَةَ انْطِلَاقٍ لِلتَّقْوِيمِ الْإِسْلَامِيِّ لِأَنَّهَا تَمْثِّلُ تَأْسِيسَ أَوَّلِ مُجْتَمَعٍ مُسْلِمٍ فِي الْمَدِينَةِ" },
    en: { q: "Who suggested starting the Islamic calendar from the Hijrah?", options: { "A": "Abu Bakr As-Siddiq", "B": "Uthman ibn Affan", "C": "Umar ibn Al-Khattab", "D": "Ali ibn Abi Talib" }, ans: "C", exp: "Umar ibn Al-Khattab (RA) chose the Hijrah as the starting point because it marked the establishment of the first Muslim community in Madinah." }
  },
  {
    id: 129,
    ar: { q: " مَعْرَكَةُ الْيَرْمُوكِ كانت ضَدَّ أَيُّ إمْبرَاطُورِيَّةٍ ؟", options: { "أ": " الْفَارِسِيَّةُ", "ب": " الْمَغُولِيَّةُ", "ج": " الصِّينِيَّةُ", "د": " الْبِيزَنْطِيَّةُ ( الرُّومَانِيَّةَ )" }, ans: "د", exp: " خَاضَ الْمُسْلِمُونَ مَعْرَكَةَ الْيَرْمُوكِ عَامَ 636 م فِي الْأُرْدُنِ الْحَالِيِّ وَحَقَّقُوا نَصْرًا حَاسِمًا عَلَى الْإِمْبِرَاطُورِيَّةِ الْبِيزَنْطِيَّةِ أَنْهَى سَيْطَرَتَهَا عَلَى بِلَادِ الشَّامِ" },
    en: { q: "The Battle of Yarmouk was fought against which empire?", options: { "A": "Persian", "B": "Mongol", "C": "Chinese", "D": "Byzantine (Roman)" }, ans: "D", exp: "Fought in 636 CE in modern-day Jordan, this decisive Muslim victory ended Byzantine control over the Levant." }
  },
  {
    id: 130,
    ar: { q: " مَنٌّ هُو الْقَائِدِ الْمُسْلِمِ الَّذِي فَتْحِ مِصْرٍ ؟", options: { "أ": " عَمْروُ بْن الْعَاص", "ب": " طَارِقُ بْن زياد", "ج": " صَلَاَحُ الدِّينِ", "د": " خَالِدُ بْن الْوَلِيدَ" }, ans: "أ", exp: " عَمْرُو بْنُ الْعَاصِ ( رَضِيَ اللهُ عَنْهُ ) قَادَ الْجَيْشَ الْمُسْلِمَ إِلَى مِصْرَ عَامَ 639 م فِي عَهْدِ عُمَرَ بْنِ الْخَطَّابِ وَأَسَّسَ مَدِينَةَ الْفُسْطَاطِ ( الْقَاهِرَةُ الْقَدِيمَةُ )" },
    en: { q: "Which Muslim commander conquered Egypt?", options: { "A": "Amr ibn al-As", "B": "Tariq ibn Ziyad", "C": "Salah ad-Din", "D": "Khalid ibn Al-Walid" }, ans: "A", exp: "Amr ibn al-As (RA) led the Muslim army into Egypt in 639 CE during Umar's caliphate and founded the city of Fustat (old Cairo)." }
  },
  {
    id: 131,
    ar: { q: " مَن حَرَّرَ الْقُدْسَ مِن الصَّلِيبِيِّينَ ؟", options: { "أ": " خَالِدُ بْن الْوَلِيدَ", "ب": " صَلَاَحُ الدِّينِ الأيوبي", "ج": " مُحَمَّدُ الْفَاتِحِ", "د": " طَارِقُ بْن زياد" }, ans: "ب", exp: " صَلَاحُ الدِّينِ الْأَيُّوبِيُّ هَزَمَ الصَّلِيبِيِّينَ فِي مَعْرَكَةِ حِطِّينَ عَامَ 1187 م وَاسْتَرَدَّ الْقُدْسَ بَعْدَ 88 عَامًا مِنَ الْحُكْمِ الصَّلِيبِيِّ" },
    en: { q: "Who liberated Jerusalem from the Crusaders?", options: { "A": "Khalid ibn Al-Walid", "B": "Salah ad-Din (Saladin)", "C": "Sultan Mehmed II", "D": "Tariq ibn Ziyad" }, ans: "B", exp: "Salah ad-Din Al-Ayyubi (Saladin) defeated the Crusaders at the Battle of Hattin in 1187 CE and recaptured Jerusalem after 88 years of Crusader rule." }
  },
  {
    id: 132,
    ar: { q: " فِي أَيِّ عَامِ سَقَطَتْ بَغْدَادُ عَلَى يَدِ الْمَغُولِ ؟", options: { "أ": " 1187 م", "ب": " 1453 م", "ج": " 1258 م", "د": " 1099 م" }, ans: "ج", exp: " عَامَ 1258 م حَاصَرَ هُولَاكُو خَانُ بَغْدَادَ وَاجْتَاحَهَا مُنْهِيًا الْخِلَافَةَ الْعَبَّاسِيَّةَ الَّتِي دَامَتْ 500 عَامٍ وَأَعْدَمَ آخِرَ خُلَفَائِهَا الْمُسْتَعْصِمَ. قَتَلَ الْمَغُولُ مِئَاتِ الْآلَافِ وَدَمَّرُوا دَارَ الْحِكْمَةِ حَتَّى قِيلَ إِنَّ مِيَاهَ دِجْلَةَ سَالَتْ سَوْدَاءَ مِنَ الْحِبْرِ. وَكَانَتْ مِنْ أَشَدِّ النَّكَبَاتِ فِي التَّارِيخِ الْإِسْلَامِيِّ" },
    en: { q: "In which year did the Mongols sack Baghdad?", options: { "A": "1187 CE", "B": "1453 CE", "C": "1258 CE", "D": "1099 CE" }, ans: "C", exp: "In 1258 CE, Hulagu Khan's Mongol army besieged and sacked Baghdad, ending the 500-year Abbasid Caliphate. The last Caliph, Al-Musta'sim, was executed. The Mongols massacred hundreds of thousands, destroyed the House of Wisdom (reportedly turning the Tigris black with ink), and demolished mosques and hospitals — one of the most devastating events in Islamic history." }
  },
  {
    id: 133,
    ar: { q: " مَنٌّ هُو الْقَائِدِ الْمُسْلِمِ الَّذِي فَتْحِ الْأَنْدَلُسِ ( إسبانيا )؟", options: { "أ": " طَارِقُ بْن زياد", "ب": " مُوسَى بْن نَصِيرُ", "ج": " عَقِبَةُ بْن نَافِعٌ", "د": " صَلَاَحُ الدِّينِ" }, ans: "أ", exp: " طَارِقُ بْن زياد فَتَحَ الْأَنْدَلُسَ عَامَ 711 م عَابِرًا الْمَضِيقَ الَّذِي سُمِّيَ بَعْدَهُ جَبَلَ طَارِقٍ وَهَزَمَ الْقُوطَ" },
    en: { q: "Which Muslim commander conquered Al-Andalus (Spain)?", options: { "A": "Tariq ibn Ziyad", "B": "Musa ibn Nusayr", "C": "Uqba ibn Nafi", "D": "Salah ad-Din" }, ans: "A", exp: "In 711 CE Tariq ibn Ziyad crossed the strait (later named Gibraltar — Jabal Tariq) with a small army and defeated the Visigoths, opening the Iberian Peninsula to Muslim rule." }
  },
  {
    id: 134,
    ar: { q: " فِي أَيِّ عَامِ فَتْحِ الْعُثْمَانِيُّونَ الْقُسْطَنْطِينِيَّةَ ؟", options: { "أ": " 1258 م", "ب": " 1453 م", "ج": " 1492 م", "د": " 1517 م" }, ans: "ب", exp: " عَامَ 1453 م فَتَحَ السُّلْطَانُ مُحَمَّدٌ الْفَاتِحُ الْقُسْطَنْطِينِيَّةَ مُحَقِّقًا بِشَارَةَ النَّبِيِّ ﷺ: 'لَتُفْتَحَنَّ الْقُسْطَنْطِينِيَّةُ، فَلَنِعْمَ الْأَمِيرُ أَمِيرُهَا وَلَنِعْمَ الْجَيْشُ ذَلِكَ الْجَيْشُ' (أحمد). وَكَانَ عُمْرُهُ 21 عَامًا وَاسْتَخْدَمَ مَدَافِعَ عِمْلَاقَةً وَنَقَلَ سُفُنَهُ بَرًّا لِتَجَاوُزِ السِّلْسِلَةِ الَّتِي تَصُدُّ الْمِيِنَاءَ" },
    en: { q: "In which year did the Ottomans conquer Constantinople?", options: { "A": "1258 CE", "B": "1453 CE", "C": "1492 CE", "D": "1517 CE" }, ans: "B", exp: "In 1453 CE, Sultan Mehmed II conquered Constantinople, fulfilling the Prophet's (PBUH) hadith: 'You will certainly conquer Constantinople. How excellent a commander will be its commander, and how excellent an army will be that army.' (Ahmad) Mehmed, only 21, used enormous custom-built cannons and transported ships overland to bypass the harbour chain." }
  },
  {
    id: 135,
    ar: { q: " مَنٌّ هُو السُّلْطَانِ الَّذِي فَتَحَ الْقُسْطَنْطِينِيَّةُ ؟", options: { "أ": " سَلِيمَانِ الْقَانُونِيَّ", "ب": " بايزيد", "ج": " مُحَمَّدُ الْفَاتِحِ", "د": " مُرَادُ الثَّانِي" }, ans: "ج", exp: " السُّلْطَانُ مُحَمَّدُ الْفَاتِحُ ( مُحَمَّدَ الثَّانِي ) هُو مَن فَتَحَ الْقُسْطَنْطِينِيَّةَ مُحَقِّقًا بِشَارَةَ النَّبِيِّ ﷺ. كَانَ عُمْرُهُ 21 عَامًا فَقَطْ وَخَرَقَ أَسْوَارَهَا بِمَدَافِعَ ضَخْمَةٍ وَتَخْطِيطٍ عَسْكَرِيٍّ مُحْكَمٍ" },
    en: { q: "Which Ottoman Sultan conquered Constantinople?", options: { "A": "Suleiman the Magnificent", "B": "Bayezid", "C": "Sultan Mehmed II (Al-Fatih)", "D": "Murad II" }, ans: "C", exp: "Sultan Mehmed II (Al-Fatih) was only 21 years old when he conquered Constantinople. He breached the legendary walls using massive cannons and strategic planning." }
  },
  {
    id: 136,
    ar: { q: " مَا هُو 'بيت الحكمة' ؟", options: { "أ": " مَكْتَبَةٌ وَمَرْكَزُ عِلْمِيُّ فِي بَغْدَادِ", "ب": " مَسْجِدٌ فِي دِمَشْقِ", "ج": " قَصْرٌ فِي الْقَاهِرَةِ", "د": " حَصَّنَ فِي الْأَنْدَلُسِ" }, ans: "أ", exp: " بَيْتُ الْحِكْمَةِ كَانَ مَكْتَبَةً كُبْرَى وَمَرْكَزَ تَرْجَمَةٍ وَأَكَادِيمِيَّةً فِي بَغْدَادَ أُسِّسَتْ فِي الْخِلَافَةِ الْعَبَّاسِيَّةِ مَطْلَعَ الْقَرْنِ التَّاسِعِ. تَعَاوَنَ فِيهَا مُسْلِمُونَ وَمَسِيحِيُّونَ وَيَهُودُ وَصَابِئَةٌ لِتَرْجَمَةِ التُّرَاثِ الْيُونَانِيِّ وَالْفَارِسِيِّ وَالْهِنْدِيِّ وَالصِّينِيِّ، وَكَانَتِ الْمُحَرِّكَ الْأَسَاسَ لِلْعَصْرِ الذَّهَبِيِّ الْإِسْلَامِيِّ" },
    en: { q: "What was the 'Bayt al-Hikmah' (House of Wisdom)?", options: { "A": "A library and academic centre in Baghdad", "B": "A mosque in Damascus", "C": "A palace in Cairo", "D": "A fortress in Al-Andalus" }, ans: "A", exp: "The House of Wisdom was a grand library, translation centre, and academy in Baghdad, founded during the Abbasid Caliphate in the early 9th century. Scholars — Muslims, Christians, Jews, and Sabians — worked together to translate Greek, Persian, Indian, and Chinese works, driving the Islamic Golden Age and preserving ancient knowledge that later fuelled the European Renaissance." }
  },
  {
    id: 137,
    ar: { q: " مَن يُعْرَفُ ب 'أبُو الجبر' ؟", options: { "أ": " اِبْنَ سِيِنَا", "ب": " الرَّازِيُّ", "ج": " اِبْنَ الْهَيْثَمِ", "د": " الخوارزمي" }, ans: "د", exp: " مُحَمَّدُ بْنُ مُوسَى الْخَوَارِزْمِيُّ ( الْقَرْن 9 م ) رِيَاضِيٌّ فِي بَغْدَادَ أَلَّفَ 'الْكِتَابَ الْمُخْتَصَرَ فِي حِسَابِ الْجَبْرِ وَالْمُقَابَلَةِ' الَّذِي مُنْحَ مِنْهُ عِلْمُ الْجَبْرِ اسْمَهُ" },
    en: { q: "Who is known as the 'Father of Algebra'?", options: { "A": "Ibn Sina", "B": "Ar-Razi", "C": "Ibn al-Haytham", "D": "Al-Khwarizmi" }, ans: "D", exp: "Al-Khwarizmi was a 9th-century mathematician in Baghdad whose book 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' gave algebra its name (from 'al-jabr' in the title)." }
  },
  {
    id: 138,
    ar: { q: " مَعْرَكَةٌ عَيْن جَالُوتِ ( 1260 م ) أَوَقَفَتْ تَقَدُّمُ أَيِّ جَيْشٍ ؟", options: { "أ": " الصَّلِيبِيِّينَ", "ب": " الْمَغُولُ", "ج": " الْبِيزَنْطِيِّينَ", "د": " الْفَرَسُ" }, ans: "ب", exp: " مَعْرَكَةُ عَيْنِ جَالُوتَ ( 1260 م ) فِي فِلَسْطِينَ أَوْقَفَتِ الزَّحْفَ الْمَغُولِيَّ غَرْبًا وَهَزَمَهُمُ الْمَمَالِيكُ لِأَوَّلِ مَرَّةٍ فِي التَّارِيخِ" },
    en: { q: "The Battle of Ain Jalut (1260 CE) stopped the advance of which army?", options: { "A": "Crusaders", "B": "Mongols", "C": "Byzantines", "D": "Persians" }, ans: "B", exp: "In 1260 CE, the Mamluk army defeated the Mongols in Palestine, halting their westward expansion for the first time in history." }
  },
  {
    id: 139,
    ar: { q: " مِن بُنَى قُبَّةِ الصَّخْرَةِ فِي الْقُدْسِ ؟", options: { "أ": " صَلَاَحُ الدِّينِ", "ب": " عُمَرُ بْن الْخِطَابَ", "ج": " عَبْدُ الْمَلِكِ بْن مروَانِ", "د": " هَارُونُ الرَّشيدِ" }, ans: "ج", exp: " بَنَى الْخَلِيفَةُ الْأُمَوِيُّ عَبْدُ الْمَلِكِ بْنُ مَرْوَانَ قُبَّةَ الصَّخْرَةِ نَحْوَ عَامِ 691 م فَوْقَ الصَّخْرَةِ الْمُشَرَّفَةِ فِي الْقُدْسِ، وَهِيَ مِنْ أَقْدَمِ الآثارِ الْإِسْلَامِيَّةِ الْبَاقِيَةِ" },
    en: { q: "Who built the Dome of the Rock in Jerusalem?", options: { "A": "Salah ad-Din", "B": "Umar ibn Al-Khattab", "C": "Caliph Abdul-Malik ibn Marwan", "D": "Harun ar-Rashid" }, ans: "C", exp: "Completed in 691 CE on the Temple Mount in Jerusalem by the Umayyad Caliph Abdul-Malik ibn Marwan, it is one of the oldest surviving Islamic monuments." }
  },
  {
    id: 140,
    ar: { q: " مِن أُسُسِ مَدِينَةِ بَغْدَادِ ؟", options: { "أ": " هَارُونُ الرَّشيدِ", "ب": " أَبُو جَعْفَرِ الْمَنْصُورِ", "ج": " الْمَأْمُونُ", "د": " مُعَاوِيَةُ بْن أبِي سُفْيَانٍ" }, ans: "ب", exp: " أَسَّسَ الْخَلِيفَةُ الْعَبَّاسِيُّ أَبُو جَعْفَرٍ الْمَنْصُورُ بَغْدَادَ عَامَ 762 م عَاصِمَةً جَدِيدَةً لِلْخِلَافَةِ، صَمَّمَهَا عَلَى هَيْئَةِ دَائِرَةٍ فَأَصْبَحَتْ أَكْبَرَ مُدُنِ الْعَالَمِ" },
    en: { q: "Who founded the city of Baghdad?", options: { "A": "Harun ar-Rashid", "B": "Caliph Abu Ja'far Al-Mansur", "C": "Al-Ma'mun", "D": "Mu'awiyah ibn Abi Sufyan" }, ans: "B", exp: "Caliph Abu Ja'far Al-Mansur founded Baghdad in 762 CE as the new Abbasid capital. It was designed as a round city and became the world's largest city." }
  },
  {
    id: 141,
    ar: { q: " مَن يُعْرَفُ بِالْخَلِيفَةِ الرَّاشِدِ الْخَامسِ ؟", options: { "أ": " مُعَاوِيَةُ بْن أبِي سُفْيَانٍ", "ب": " هَارُونُ الرَّشيدِ", "ج": " عُمَرُ بْن عَبْدَ الْعَزِيزِ", "د": " سَلِيمَانِ بْن عَبْدَ الْمَلِكِ" }, ans: "ج", exp: " عُمَرُ بْن عَبْدَ الْعَزِيزِ ( رَحِمَهُ اللهُ ) خَلِيفَةٌ أُمَوِيٌّ اشْتُهِرَ بِعَدْلِهِ وَتَقْوَاهُ. أَصْلَحَ نِظَامَ الضَّرَائِبِ وَرَدَّ الثَّرَوَاتِ الظَّالِمَةَ وَلَمْ تَدُمْ خِلَافَتُهُ سِوَى سَنَتَيْنِ وَنِصْفٍ" },
    en: { q: "Who is often referred to as the 'Fifth Rightly-Guided Caliph'?", options: { "A": "Mu'awiyah ibn Abi Sufyan", "B": "Harun ar-Rashid", "C": "Umar ibn Abdul-Aziz", "D": "Sulayman ibn Abdul-Malik" }, ans: "C", exp: "Umar ibn Abdul-Aziz was an Umayyad Caliph known for his justice and piety. He reformed taxation, returned unjust wealth, and ruled for only 2.5 years." }
  },
  {
    id: 142,
    ar: { q: " مَنٌّ هُو الرَّحَّالَةِ الْمُسْلِمِ الشَّهِيرِ الَّذِي طَافٍ الْعَالَمِ الْإِسْلَامِيِّ ؟", options: { "أ": " اِبْنَ سِيِنَا", "ب": " الإدريسي", "ج": " اِبْنَ بُطوطَةٍ", "د": " اِبْنَ خَلْدُونٍ" }, ans: "ج", exp: " ابْنُ بَطُّوطَةَ ( 1304–1369 م ) رَحَّالَةٌ مَغْرِبِيٌّ أَمْضَى أَكْثَرَ مِنْ 30 عَامًا يَجُوبُ أَفْرِيقِيَا وَآسِيَا وَأُوروبَّا قَاطِعًا نَحْوَ 120,000 كِيلُومِتْرٍ" },
    en: { q: "Who was the famous Muslim traveller who journeyed across Africa, Asia and Europe?", options: { "A": "Ibn Sina", "B": "Al-Idrisi", "C": "Ibn Battuta", "D": "Ibn Khaldun" }, ans: "C", exp: "Ibn Battuta (1304–1369 CE) was a 14th-century Moroccan explorer who travelled over 120,000 km across Africa, Asia, and Europe over 30 years." }
  },
  {
    id: 143,
    ar: { q: "مَا كَانَتْ عَاصِمَةُ الدَّوْلَةِ الْأُمَوِيَّةِ؟", options: { "أ": " بَغْدَادُ", "ب": " دِمَشْقُ", "ج": " الْقَاهِرَةُ", "د": " قُرْطُبَةُ" }, ans: "ب", exp: " نَقَلَ مُعَاوِيَةُ بْنُ أَبِي سُفْيَانَ ( رَضِيَ اللهُ عَنْهُ ) الْعَاصِمَةَ مِنَ الْمَدِينَةِ الْمُنَوَّرَةِ إِلَى دِمَشْقَ حِينَ أَصْبَحَ خَلِيفَةً عَامَ 661 م فَظَلَّتْ دِمَشْقُ عَاصِمَةَ الدَّوْلَةِ الْأُمَوِيَّةِ طِوَالَ عَهْدِهَا" },
    en: { q: "What was the capital of the Umayyad Caliphate?", options: { "A": "Baghdad", "B": "Damascus", "C": "Cairo", "D": "Cordoba" }, ans: "B", exp: "The Umayyads moved the capital from Madinah to Damascus after Mu'awiyah became Caliph in 661 CE. Damascus remained the capital throughout the Umayyad era." }
  },
  {
    id: 144,
    ar: { q: "مَا كَانَتْ عَاصِمَةُ الدَّوْلَةِ الْعَبَّاسِيَّةِ؟", options: { "أ": " دِمَشْقُ", "ب": " الْقَاهِرَةُ", "ج": " بَغْدَادُ", "د": " سَامَرَّاءُ" }, ans: "ج", exp: " أُسِّسَتْ بَغْدَادُ عَامَ 762 م لِتَكُونَ عَاصِمَةً لِلْخِلَافَةِ الْعَبَّاسِيَّةِ خَلَفًا لِدِمَشْقَ، فَأَصْبَحَتْ مَرْكَزَ الْحَضَارَةِ الْإِسْلَامِيَّةِ فِي عَصْرِهَا الذَّهَبِيِّ" },
    en: { q: "What was the capital of the Abbasid Caliphate?", options: { "A": "Damascus", "B": "Cairo", "C": "Baghdad", "D": "Samarra" }, ans: "C", exp: "Founded in 762 CE, Baghdad replaced Damascus as the caliphate's capital and became the centre of Islamic civilisation's golden age." }
  },
  {
    id: 145,
    ar: { q: "مَنٌّ أَسَّسَ الدَّوْلَةَ الْأَيُّوبِيَّةَ؟", options: { "أ": " نُورُ الدِّينِ زَنْكِي", "ب": " صَلَاحُ الدِّينِ الْأَيُّوبِيُّ", "ج": " بَيْبَرْسُ", "د": " قُطُزُ" }, ans: "ب", exp: " صَلَاحُ الدِّينِ الْأَيُّوبِيُّ قَائِدٌ مُسْلِمٌ كُرْدِيٌّ تَدَرَّجَ فِي صُفُوفِ جَيْشِ الزَّنْكِيِّينَ وَأَنْهَى الْخِلَافَةَ الْفَاطِمِيَّةَ فِي مِصْرَ عَامَ 1171 م مُؤَسِّسًا الدَّوْلَةَ الْأَيُّوبِيَّةَ الَّتِي وَحَّدَتْ مِصْرَ وَالشَّامَ وَأَجْزَاءً مِنَ الْعِرَاقِ، وَمَكَّنَتْهُ مِنِ اسْتِعَادَةِ الْقُدْسِ عَامَ 1187 م. وَقَدِ اشْتُهِرَ حَتَّى عِنْدَ أَعْدَائِهِ بِفُرُوسِيَّتِهِ وَرَحْمَتِهِ وَعَدْلِهِ" },
    en: { q: "Who founded the Ayyubid dynasty?", options: { "A": "Nur ad-Din Zangi", "B": "Salah ad-Din Al-Ayyubi", "C": "Baybars", "D": "Qutuz" }, ans: "B", exp: "Salah ad-Din Al-Ayyubi (Saladin) was a Kurdish Muslim leader who ended the Fatimid Caliphate in Egypt in 1171 CE and established the Ayyubid dynasty, uniting Egypt, Syria, and parts of Iraq. This unity enabled him to liberate Jerusalem in 1187 CE after the Battle of Hattin. He was renowned even by his enemies for his chivalry, mercy, and justice." }
  },
  {
    id: 146,
    ar: { q: "مَا هِيَ أَقْدَمُ جَامِعَةٍ لَا تَزَالُ تَعْمَلُ حَتَّى الْيَوْمِ؟", options: { "أ": " الْأَزْهَرُ الشَّرِيفُ", "ب": " جَامِعَةُ الْقَرَوِيِّينَ", "ج": " الْمُسْتَنْصِرِيَّةُ", "د": " جَامِعَةُ بُولُونْيَا" }, ans: "ب", exp: " أَسَّسَتْ فَاطِمَةُ الْفِهْرِيَّةُ جَامِعَةَ الْقَرَوِيِّينَ فِي فَاسٍ بِالْمَغْرِبِ عَامَ 859 م، وَيَعْتَرِفُ بِهَا الْيُونِسْكُو وَمُوسُوعَةُ غِينِيسَ بِوَصْفِهَا أَقْدَمَ جَامِعَةٍ فِي الْعَالَمِ لَا تَزَالُ تَعْمَلُ مُتَوَاصِلًا" },
    en: { q: "Which is the oldest continuously operating university in the world?", options: { "A": "Al-Azhar", "B": "Al-Qarawiyyin", "C": "Al-Mustansiriyah", "D": "University of Bologna" }, ans: "B", exp: "Al-Qarawiyyin was founded in 859 CE in Fez, Morocco by Fatima al-Fihri. It is recognised by UNESCO and Guinness World Records as the oldest continuously operating university in the world." }
  },
  {
    id: 147,
    ar: { q: "مَنٌّ يُعْرَفُ بِـ'أَبِي الْبَصَرِيَّاتِ'؟", options: { "أ": " الْخَوَارِزْمِيُّ", "ب": " اِبْنُ سِينَا", "ج": " اِبْنُ الْهَيْثَمِ", "د": " الْبَيْرُونِيُّ" }, ans: "ج", exp: " وَضَعَ اِبْنُ الْهَيْثَمِ فِي الْقَرْنِ الْحَادِي عَشَرِ الْمِيلَادِيِّ كِتَابَهُ 'الْمَنَاظِرُ' الَّذِي أَرْسَى أُسُسَ عِلْمِ الْبَصَرِيَّاتِ الْحَدِيثَةِ وَالْمَنْهَجَ التَّجْرِيبِيَّ الْعِلْمِيَّ" },
    en: { q: "Who is known as the 'Father of Optics'?", options: { "A": "Al-Khwarizmi", "B": "Ibn Sina", "C": "Ibn al-Haytham", "D": "Al-Biruni" }, ans: "C", exp: "Ibn al-Haytham's 11th-century 'Book of Optics' (Kitab al-Manazir) laid the foundations for modern optics and the scientific method." }
  },
  {
    id: 148,
    ar: { q: "مَنٌّ أَلَّفَ 'الْقَانُونَ فِي الطِّبِّ'؟", options: { "أ": " اِبْنُ سِينَا", "ب": " الرَّازِيُّ", "ج": " اِبْنُ رُشْدٍ", "د": " اِبْنُ النَّفِيسِ" }, ans: "أ", exp: " أَلَّفَ اِبْنُ سِينَا ( أَبُو عَلِيٍّ الْحُسَيْنُ ) فِي الْقَرْنِ الْحَادِي عَشَرِ كِتَابَ 'الْقَانُونِ فِي الطِّبِّ' الَّذِي ظَلَّ مَرْجِعًا طِبِّيًّا رَئِيسِيًّا فِي أُوروبَّا وَالْعَالَمِ الْإِسْلَامِيِّ لِأَكْثَرِ مِنْ 500 عَامٍ" },
    en: { q: "Which Muslim scholar wrote 'The Canon of Medicine' (Al-Qanun fi al-Tibb)?", options: { "A": "Ibn Sina (Avicenna)", "B": "Al-Razi", "C": "Ibn Rushd", "D": "Ibn al-Nafis" }, ans: "A", exp: "Ibn Sina (Avicenna) wrote this 11th-century medical encyclopaedia, which was the standard medical textbook in Europe and the Muslim world for over 500 years." }
  },
  {
    id: 149,
    ar: { q: "فِي أَيِّ عَامٍ انْتَهَى الْحُكْمُ الْإِسْلَامِيُّ فِي الْأَنْدَلُسِ؟", options: { "أ": " 1236 م", "ب": " 1391 م", "ج": " 1492 م", "د": " 1502 م" }, ans: "ج", exp: " عَامَ 1492 م سَلَّمَتِ الدَّوْلَةُ النَّصْرِيَّةُ غَرْنَاطَةَ — آخِرَ مَدِينَةٍ إِسْلَامِيَّةٍ فِي شِبْهِ الْجَزِيرَةِ الْإِيبِيرِيَّةِ — لِلْمَلِكِ فَرْدِينَانْدَ وَالْمَلِكَةِ إِيزَابِيلَّا مُنْهِيَةً نَحْوَ 800 عَامٍ مِنَ الْوُجُودِ الْإِسْلَامِيِّ فِي الْأَنْدَلُسِ. وَبَعْدَ السُّقُوطِ وَاجَهَ الْمُسْلِمُونَ وَالْيَهُودُ التَّحَوُّلَ الْقَسْرِيَّ أَوِ التَّهْجِيرَ فِي ظِلِّ مَحَاكِمِ التَّفْتِيشِ الْإِسْبَانِيَّةِ" },
    en: { q: "In which year did Muslim rule in Al-Andalus (Spain) end?", options: { "A": "1236 CE", "B": "1391 CE", "C": "1492 CE", "D": "1502 CE" }, ans: "C", exp: "In 1492 CE, the Nasrid dynasty surrendered Granada — the last Muslim-ruled city in the Iberian Peninsula — to King Ferdinand and Queen Isabella, ending nearly 800 years of Muslim presence in Al-Andalus. Afterwards, Muslims and Jews faced forced conversion or expulsion under the Spanish Inquisition." }
  },
  {
    id: 150,
    ar: { q: "أَيُّ أُسْرَةٍ حَاكِمَةٍ بَنَتْ قَصْرَ الْحَمْرَاءِ فِي إِسْبَانِيَا؟", options: { "أ": " الدَّوْلَةُ الْأُمَوِيَّةُ", "ب": " الدَّوْلَةُ الْمُوَحِّدِيَّةُ", "ج": " الدَّوْلَةُ النَّصْرِيَّةُ", "د": " الدَّوْلَةُ الْمُرَابِطِيَّةُ" }, ans: "ج", exp: " بَنَتِ الدَّوْلَةُ النَّصْرِيَّةُ قَصْرَ الْحَمْرَاءِ فِي الْقَرْنَيْنِ الثَّالِثَ عَشَرَ وَالرَّابِعَ عَشَرَ الْمِيلَادِيَّيْنِ فِي غَرْنَاطَةَ، وَهُوَ يُعَدُّ مِنْ أَرْوَعِ نَمَاذِجِ الْعِمَارَةِ الْإِسْلَامِيَّةِ فِي أُوروبَّا" },
    en: { q: "Which dynasty built the Alhambra palace in Spain?", options: { "A": "Umayyad dynasty", "B": "Almohad dynasty", "C": "Nasrid dynasty", "D": "Almoravid dynasty" }, ans: "C", exp: "The Nasrid dynasty built the Alhambra in the 13th–14th centuries in Granada. It is one of the finest examples of Islamic architecture in Europe." }
  }
];

export interface CategoryMeta {
  id: string;
  ar: string;
  en: string;
  startId: number;
  endId: number;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'quran', ar: 'القرآن', en: 'Quran', startId: 1, endId: 30 },
  { id: 'sunnah', ar: 'السنة والعبادات', en: 'Sunnah & Ibadah', startId: 31, endId: 60 },
  { id: 'seerah', ar: 'السيرة', en: 'Seerah', startId: 61, endId: 90 },
  { id: 'sahaba', ar: 'الصحابة', en: 'Sahaba', startId: 91, endId: 120 },
  { id: 'history', ar: 'التاريخ', en: 'History', startId: 121, endId: 150 },
];

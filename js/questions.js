// Question bank: 4 dimensions × 3 facets × 3 statements, in English, Bengali and Hindi.
// Weights emphasise the most diagnostic statements; reverse-scored items are marked.
export const QUESTIONS = {
  "Emotional": {
    "Self-Awareness": [
      {
        "q": {
          "en": "I can accurately identify my emotions as I experience them",
          "bn": "আমি আমার অনুভূতিগুলো সঠিকভাবে চিনতে পারি যখন আমি সেগুলো অনুভব করি",
          "hi": "मैं अपनी भावनाओं को सही ढंग से पहचान सकता हूं जब मैं उन्हें अनुभव करता हूं"
        },
        "example": {
          "en": "If a colleague gets a promotion you also wanted, can you tell if you're feeling primarily sad (disappointed), angry (it's unfair), or anxious (worried about your own future)?",
          "bn": "যদি একজন সহকর্মী এমন একটি পদোন্নতি পায় যা আপনি চেয়েছিলেন, আপনি বলতে পারবেন কি আপনি প্রাথমিকভাবে দুঃখিত (হতাশ), রাগান্বিত (এটা অন্যায়) বা উদ্বিগ্ন (আপনার নিজের ভবিষ্যত নিয়ে চিন্তিত) বোধ করছেন?",
          "hi": "यदि एक सहकर्मी को वह पदोन्नति मिलती है जो आप भी चाहते थे, क्या आप बता सकते हैं कि आप मुख्य रूप से दुखी (निराश), क्रोधित (यह अनुचित है), या चिंतित (अपने भविष्य को लेकर चिंतित) महसूस कर रहे हैं?"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I understand what causes my emotional reactions",
          "bn": "আমি বুঝি কী কারণে আমার আবেগজনিত প্রতিক্রিয়া হয়",
          "hi": "मैं समझता हूं कि मेरी भावनात्मक प्रतिक्रियाओं का कारण क्या है"
        },
        "example": {
          "en": "You snap at a family member for a minor reason. Do you realize it's not about them, but because you're actually stressed about a looming work deadline?",
          "bn": "আপনি একটি ছোটখাটো কারণে একটি পরিবারের সদস্যের উপর চিৎকার করেন। আপনি কি বুঝতে পারেন যে এটা তাদের সম্পর্কে নয়, বরং কারণ আপনি আসলে একটি আসন্ন কাজের সময়সীমা নিয়ে চাপে আছেন?",
          "hi": "आप एक मामूली कारण से परिवार के किसी सदस्य पर चिल्लाते हैं। क्या आपको एहसास है कि यह उनके बारे में नहीं है, बल्कि इसलिए कि आप वास्तव में काम की आसन्न समय सीमा को लेकर तनाव में हैं?"
        },
        "weight": 1.1
      },
      {
        "q": {
          "en": "I recognize how my emotions affect my thoughts and decisions",
          "bn": "আমি বুঝি আমার আবেগ কীভাবে আমার চিন্তাভাবনা এবং সিদ্ধান্তকে প্রভাবিত করে",
          "hi": "मैं पहचानता हूं कि मेरी भावनाएं मेरे विचारों और निर्णयों को कैसे प्रभावित करती हैं"
        },
        "example": {
          "en": "When you're in a great mood, do you notice you're more likely to say 'yes' to new plans, but when you're tired, you tend to see more problems in every idea?",
          "bn": "যখন আপনি দুর্দান্ত মূডে থাকেন, আপনি কি লক্ষ্য করেন যে আপনি নতুন পরিকল্পনায় 'হ্যাঁ' বলতে বেশি ইচ্ছুক, কিন্তু যখন আপনি ক্লান্ত থাকেন, আপনি প্রতিটি ধারণায় আরও সমস্যা দেখতে পাচ্ছেন?",
          "hi": "जब आप बहुत अच्छे मूड में होते हैं, तो क्या आप देखते हैं कि आप नई योजनाओं के लिए 'हाँ' कहने की अधिक संभावना रखते हैं, लेकिन जब आप थके होते हैं, तो आप हर विचार में अधिक समस्याएं देखते हैं?"
        },
        "weight": 1.3
      }
    ],
    "Self-Regulation": [
      {
        "q": {
          "en": "I can manage disruptive emotions and impulses effectively",
          "bn": "আমি বিঘ্নিত আবেগ এবং আবেগকে কার্যকরভাবে পরিচালনা করতে পারি",
          "hi": "मैं विघटनकारी भावनाओं और आवेगों को प्रभावी ढंग से प्रबंधित कर सकता हूं"
        },
        "example": {
          "en": "When you feel a surge of anger in a heated discussion, can you stop yourself from sending that harsh text or making a hurtful comment, and instead take a deep breath?",
          "bn": "একটি উত্তপ্ত আলোচনায় যখন আপনি রাগের একটি ঢেউ অনুভব করেন, আপনি কি সেই কঠোর টেক্সট পাঠানো বা একটি ক্ষতিকর মন্তব্য করা থেকে নিজেকে বিরত রাখতে পারেন এবং পরিবর্তে একটি গভীর শ্বাস নিতে পারেন?",
          "hi": "जब आप गर्मजोशी की चर्चा में क्रोध की लहर महसूस करते हैं, तो क्या आप उस कठोर पाठ को भेजने या दुखद टिप्पणी करने से खुद को रोक सकते हैं, और इसके बजाय गहरी सांस ले सकते हैं?"
        },
        "weight": 1.4
      },
      {
        "q": {
          "en": "I remain calm under pressure and think clearly",
          "bn": "চাপের মধ্যেও আমি শান্ত থাকি এবং স্পষ্টভাবে চিন্তা করি",
          "hi": "मैं दबाव में शांत रहता हूं और स्पष्ट रूप से सोचता हूं"
        },
        "example": {
          "en": "Your computer crashes right before you need to submit an important project. Instead of panicking, you systematically start your recovery steps and inform your boss.",
          "bn": "একটি গুরুত্বপূর্ণ প্রকল্প জমা দেওয়ার ঠিক আগে আপনার কম্পিউটার ক্র্যাশ করে। আতঙ্কিত হওয়ার পরিবর্তে, আপনি পদ্ধতিগতভাবে আপনার পুনরুদ্ধারের পদক্ষেপগুলি শুরু করেন এবং আপনার বসকে জানান।",
          "hi": "आपके कंप्यूटर में एक महत्वपूर्ण प्रोजेक्ट जमा करने से ठीक पहले क्रैश हो जाता है। घबराने के बजाय, आप व्यवस्थित रूप से अपनी रिकवरी के कदम शुरू करते हैं और अपने बॉस को सूचित करते हैं।"
        },
        "weight": 1.5
      },
      {
        "q": {
          "en": "I adapt easily to changing situations",
          "bn": "পরিবর্তনশীল পরিস্থিতিতে আমি সহজেই খাপ খাইয়ে নিতে পারি",
          "hi": "मैं बदलती परिस्थितियों के अनुकूल आसानी से ढल जाता हूं"
        },
        "example": {
          "en": "Your weekend plans get suddenly canceled due to rain. Are you able to quickly think of and feel good about a fun 'Plan B' to do at home?",
          "bn": "বৃষ্টির কারণে আপনার সপ্তাহান্তের পরিকল্পনা হঠাৎ বাতিল হয়ে যায়। আপনি কি দ্রুত বাড়িতে করার জন্য একটি মজার 'প্ল্যান বি' নিয়ে চিন্তা করতে এবং এটিকে নিয়ে ভাল বোধ করতে সক্ষম?",
          "hi": "बारिश के कारण आपकी सप्ताहांत की योजनाएं अचानक रद्द हो जाती हैं। क्या आप घर पर करने के लिए एक मजेदार 'योजना बी' के बारे में जल्दी से सोचने और अच्छा महसूस करने में सक्षम हैं?"
        },
        "weight": 1.2
      }
    ],
    "Empathy": [
      {
        "q": {
          "en": "I can sense what others are feeling without being told",
          "bn": "কাউকে কিছু না বললেও আমি বুঝতে পারি অন্যরা কী অনুভব করছে",
          "hi": "मैं बिना बताए महसूस कर सकता हूं कि दूसरे क्या महसूस कर रहे हैं"
        },
        "example": {
          "en": "You notice a friend is laughing, but their smile doesn't reach their eyes and they're quieter than usual. Can you sense they might be feeling down, even if they say 'I'm fine'?",
          "bn": "আপনি লক্ষ্য করেন যে একজন বন্ধু হাসছে, কিন্তু তাদের হাসি তাদের চোখে পৌঁছায় না এবং তারা স্বাভাবিকের চেয়ে বেশি শান্ত। তারা যদি 'আমি ঠিক আছি'ও বলে, তবুও আপনি কি অনুভব করতে পারেন যে তারা হয়তো খারাপ বোধ করছে?",
          "hi": "आप देखते हैं कि एक दोस्त हंस रहा है, लेकिन उसकी मुस्कान उसकी आंखों तक नहीं पहुंचती और वह सामान्य से अधिक शांत है। क्या आप महसूस कर सकते हैं कि वह नीचे महसूस कर रहा होगा, भले ही वह कहे 'मैं ठीक हूं'?"
        },
        "weight": 1.1
      },
      {
        "q": {
          "en": "I understand others' perspectives even when different from mine",
          "bn": "আমার থেকে ভিন্ন হলেও আমি অন্যদের দৃষ্টিভঙ্গি বুঝতে পারি",
          "hi": "मैं दूसरों के दृष्टिकोण को समझता हूं भले ही वे मेरे से अलग हों"
        },
        "example": {
          "en": "In a debate about remote work, can you genuinely understand why your colleague, who has young kids at home, prefers the office, even if you work better from home?",
          "bn": "রিমোট কাজ নিয়ে বিতর্কে, আপনি কি সত্যিই বুঝতে পারেন কেন ছোট বাচ্চা থাকা আপনার সহকর্মী অফিসে যেতে পছন্দ করেন, যদিও আপনি নিজে বাড়ি থেকে ভালো কাজ করেন?",
          "hi": "रिमोट काम पर बहस में, क्या आप सच में समझ सकते हैं कि आपका सहकर्मी, जिसके घर छोटे बच्चे हैं, ऑफिस क्यों पसंद करता है, भले ही आप घर से बेहतर काम करते हों?"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I can anticipate people's emotional needs",
          "bn": "আমি মানুষের আবেগজনিত প্রয়োজনগুলি আগে থেকে অনুমান করতে পারি",
          "hi": "मैं लोगों की भावनात्मक जरूरतों का अंदाजा लगा सकता हूं"
        },
        "example": {
          "en": "Your teammate is presenting to a tough client. Without them asking, you prepare some supporting data and chime in to back them up when they seem stuck.",
          "bn": "আপনার সতীর্থ একজন কঠিন ক্লায়েন্টের সামনে উপস্থাপনা করছেন। না বলতেই আপনি কিছু সহায়ক তথ্য তৈরি রাখেন এবং তিনি আটকে গেলে তাঁর পাশে দাঁড়িয়ে কথা বলেন।",
          "hi": "आपका साथी एक कठिन क्लाइंट के सामने प्रेज़ेंटेशन दे रहा है। बिना कहे आप कुछ सहायक आँकड़े तैयार रखते हैं और जब वह अटकता है तो उसका साथ देने के लिए बीच में बोलते हैं।"
        },
        "weight": 1.3
      }
    ],
    "Social Skills": [
      {
        "q": {
          "en": "I build rapport easily with diverse people",
          "bn": "বিভিন্ন ধরনের মানুষের সাথে আমি সহজেই সুসম্পর্ক গড়ে তুলতে পারি",
          "hi": "मैं विविध लोगों के साथ आसानी से रिपोर्ट बना लेता हूं"
        },
        "example": {
          "en": "At a social event, can you comfortably have a genuine conversation with people from different age groups, backgrounds, and jobs?",
          "bn": "একটি সামাজিক অনুষ্ঠানে, আপনি কি বিভিন্ন বয়সী গোষ্ঠী, পটভূমি এবং চাকরির মানুষদের সাথে আরামদায়কভাবে একটি সত্যিকারের কথোপকথন করতে পারেন?",
          "hi": "क्या एक सामाजिक कार्यक्रम में, आप विभिन्न आयु वर्ग, पृष्ठभूमि और नौकरियों के लोगों के साथ आराम से वास्तविक बातचीत कर सकते हैं?"
        },
        "weight": 1.1
      },
      {
        "q": {
          "en": "I manage conflict constructively",
          "bn": "আমি গঠনমূলকভাবে দ্বন্দ্ব পরিচালনা করি",
          "hi": "मैं रचनात्मक रूप से संघर्ष का प्रबंधन करता हूं"
        },
        "example": {
          "en": "When you and your partner disagree on finances, do you focus on finding a solution that works for both, rather than on 'winning' the argument?",
          "bn": "আপনি এবং আপনার অংশীদার যখন অর্থনৈতিক বিষয়ে দ্বিমত পোষণ করেন, তখন কি আপনি 'তর্ক জয়' করার পরিবর্তে উভয়ের জন্য কাজ করে এমন একটি সমাধান খোঁজার উপর ফোকাস করেন?",
          "hi": "जब आप और आपके साथी वित्त पर असहमत होते हैं, तो क्या आप तर्क 'जीतने' के बजाय एक ऐसे समाधान को खोजने पर ध्यान केंद्रित करते हैं जो दोनों के लिए काम करे?"
        },
        "weight": 1.4
      },
      {
        "q": {
          "en": "I communicate my ideas clearly and persuasively",
          "bn": "আমি আমার ধারণাগুলি স্পষ্টভাবে এবং প্রতিপন্নভাবে যোগাযোগ করি",
          "hi": "मैं अपने विचारों को स्पष्ट और प्रेरक ढंग से संप्रेषित करता हूं"
        },
        "example": {
          "en": "You need to explain a complex idea to your team. Can you break it down into simple points that everyone understands and gets excited about?",
          "bn": "আপনাকে দলের কাছে একটি জটিল ধারণা বোঝাতে হবে। আপনি কি সেটিকে এমন সহজ কয়েকটি পয়েন্টে ভাঙতে পারেন যা সবাই বোঝে এবং যা নিয়ে সবাই উৎসাহী হয়?",
          "hi": "आपको अपनी टीम को एक जटिल विचार समझाना है। क्या आप उसे ऐसे सरल बिंदुओं में तोड़ सकते हैं जिन्हें सब समझें और जिनके लिए सब उत्साहित हों?"
        },
        "weight": 1.2
      }
    ]
  },
  "Resilience": {
    "Adaptability": [
      {
        "q": {
          "en": "I bounce back quickly from setbacks and disappointments",
          "bn": "ব্যর্থতা এবং হতাশা থেকে আমি দ্রুত সুস্থ হয়ে উঠি",
          "hi": "मैं असफलताओं और निराशाओं से जल्दी उबर जाता हूं"
        },
        "example": {
          "en": "If you fail your driving test, do you allow yourself to be disappointed for an evening, then sign up for more practice and re-book the test the next day?",
          "bn": "ড্রাইভিং পরীক্ষায় ফেল করলে, আপনি কি এক সন্ধ্যা মন খারাপ করে পরদিনই আরও অনুশীলনের ব্যবস্থা করেন এবং আবার পরীক্ষার তারিখ নেন?",
          "hi": "अगर आप ड्राइविंग टेस्ट में फेल हो जाएँ, तो क्या आप एक शाम निराश रहकर अगले ही दिन और अभ्यास की व्यवस्था करते हैं और टेस्ट दोबारा बुक कर लेते हैं?"
        },
        "weight": 1.5
      },
      {
        "q": {
          "en": "I adapt my approach when faced with obstacles",
          "bn": "বাধার সম্মুখীন হলে আমি আমার পদ্ধতি পরিবর্তন করি",
          "hi": "बाधाओं का सामना करने पर मैं अपना दृष्टिकोण बदल लेता हूं"
        },
        "example": {
          "en": "You're following a recipe and realize you're missing a key ingredient. Do you quickly Google a substitute or find a different recipe, rather than giving up on cooking?",
          "bn": "আপনি একটি রেসিপি অনুসরণ করছেন এবং বুঝতে পারছেন যে আপনি একটি মূল উপাদান হারিয়ে ফেলেছেন। আপনি কি রান্না ছেড়ে দেওয়ার পরিবর্তে দ্রুত একটি বিকল্প গুগল করেন বা একটি ভিন্ন রেসিপি খুঁজে পান?",
          "hi": "आप एक रेसिपी का पालन कर रहे हैं और महसूस करते हैं कि आप एक प्रमुख सामग्री से चूक गए हैं। क्या आप खाना बनाना छोड़ने के बजाय जल्दी से एक विकल्प गूगल करते हैं या एक अलग रेसिपी ढूंढते हैं?"
        },
        "weight": 1.3
      },
      {
        "q": {
          "en": "I view challenges as opportunities for growth",
          "bn": "আমি চ্যালেঞ্জগুলিকে বৃদ্ধির সুযোগ হিসাবে দেখি",
          "hi": "मैं चुनौतियों को विकास के अवसर के रूप में देखता हूं"
        },
        "example": {
          "en": "You're given a difficult new task at work that you've never done before. Do you think, 'This is scary, but I'm going to learn a lot,' rather than, 'I can't do this'?",
          "bn": "আপনাকে কাজে একটি কঠিন নতুন কাজ দেওয়া হয়েছে যা আপনি আগে কখনও করেননি। আপনি কি ভাবেন, 'এটা ভয়ঙ্কর, কিন্তু আমি অনেক কিছু শিখতে যাচ্ছি,' এর পরিবর্তে, 'আমি এটা করতে পারি না'?",
          "hi": "आपको काम पर एक कठिन नया कार्य दिया गया है जो आपने पहले कभी नहीं किया है। क्या आप सोचते हैं, 'यह डरावना है, लेकिन मैं बहुत कुछ सीखने जा रहा हूं,' इसके बजाय, 'मैं यह नहीं कर सकता'?"
        },
        "weight": 1.4
      }
    ],
    "Perseverance": [
      {
        "q": {
          "en": "I persist in pursuing goals despite difficulties",
          "bn": "কঠিনতা সত্ত্বেও আমি লক্ষ্য অর্জনে অটল থাকি",
          "hi": "कठिनाइयों के बावजूद मैं लक्ष्यों का पीछा करता रहता हूं"
        },
        "example": {
          "en": "Learning to play a song on the guitar is frustrating and your fingers hurt. Do you keep practicing for 10 minutes each day instead of putting the guitar away for good?",
          "bn": "গিটারে একটি গান শেখা হতাশাজনক আর আঙুলে ব্যথা হচ্ছে। আপনি কি গিটার চিরতরে তুলে রাখার বদলে প্রতিদিন ১০ মিনিট অনুশীলন চালিয়ে যান?",
          "hi": "गिटार पर एक गाना सीखना निराशाजनक है और उँगलियाँ दुखती हैं। क्या आप गिटार हमेशा के लिए रख देने के बजाय रोज़ 10 मिनट अभ्यास जारी रखते हैं?"
        },
        "weight": 1.4
      },
      {
        "q": {
          "en": "I maintain effort and interest over long periods",
          "bn": "দীর্ঘ সময় ধরে আমি প্রচেষ্টা এবং আগ্রহ বজায় রাখি",
          "hi": "मैं लंबे समय तक प्रयास और रुचि बनाए रखता हूं"
        },
        "example": {
          "en": "You start a fitness goal like running. After the initial excitement fades in a month, are you still able to stick to your schedule and find ways to stay motivated?",
          "bn": "আপনি দৌড়ানোর মতো একটি ফিটনেস লক্ষ্য শুরু করেন। এক মাসে প্রথম উত্তেজনা কমে গেলেও, আপনি কি রুটিন ধরে রাখতে এবং অনুপ্রাণিত থাকার উপায় খুঁজে পান?",
          "hi": "आप दौड़ने जैसा फिटनेस लक्ष्य शुरू करते हैं। एक महीने में शुरुआती जोश ठंडा पड़ने के बाद भी, क्या आप अपने शेड्यूल पर टिके रहते हैं और प्रेरित रहने के तरीके खोज लेते हैं?"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I complete tasks I start even when they become difficult",
          "bn": "কাজ কঠিন হয়ে উঠলেও আমি শুরু করা কাজগুলি সম্পন্ন করি",
          "hi": "मैं उन कार्यों को पूरा करता हूं जो मैं शुरू करता हूं, भले ही वे कठिन हो जाएं"
        },
        "example": {
          "en": "You start a 1000-piece puzzle. When it gets to the tricky, similar-looking sky pieces, do you push through to finish it?",
          "bn": "আপনি একটি 1000-টুকরা ধাঁধা শুরু করেন। যখন এটি কৌশলী, একই রকম দেখতে আকাশের টুকরোগুলিতে পৌঁছায়, আপনি কি এটি শেষ করতে এগিয়ে যান?",
          "hi": "आप एक 1000-टुकड़ा पहेली शुरू करते हैं। जब यह मुश्किल, समान दिखने वाले आकाश के टुकड़ों तक पहुंचता है, तो क्या आप इसे खत्म करने के लिए आगे बढ़ते हैं?"
        },
        "weight": 1.3
      }
    ],
    "Optimism": [
      {
        "q": {
          "en": "I maintain a positive outlook in difficult situations",
          "bn": "কঠিন পরিস্থিতিতেও আমি ইতিবাচক দৃষ্টিভঙ্গি বজায় রাখি",
          "hi": "मैं कठिन परिस्थितियों में सकारात्मक दृष्टिकोण बनाए रखता हूं"
        },
        "example": {
          "en": "You get stuck in a massive traffic jam. Instead of fuming, do you decide to enjoy the extra time to listen to your favorite podcast or audiobook?",
          "bn": "আপনি একটি বিশাল ট্রাফিক জ্যামে আটকে গেছেন। রাগ করার পরিবর্তে, আপনি কি আপনার প্রিয় পডকাস্ট বা অডিওবুক শোনার জন্য অতিরিক্ত সময় উপভোগ করার সিদ্ধান্ত নেন?",
          "hi": "आप एक बड़े ट्रैफिक जाम में फंस जाते हैं। क्रोधित होने के बजाय, क्या आप अपने पसंदीदा पॉडकास्ट या ऑडियोबुक को सुनने के लिए अतिरिक्त समय का आनंद लेने का निर्णय लेते हैं?"
        },
        "weight": 1.3
      },
      {
        "q": {
          "en": "I believe I can overcome most challenges I face",
          "bn": "আমি বিশ্বাস করি আমি আমার সম্মুখীন বেশিরভাগ চ্যালেঞ্জ কাটিয়ে উঠতে পারব",
          "hi": "मेरा मानना है कि मैं अपने सामने आने वाली अधिकांश चुनौतियों पर काबू पा सकता हूं"
        },
        "example": {
          "en": "Facing a major home repair, do you think, 'This is a big problem, but I/we can handle it,' and start looking for solutions?",
          "bn": "একটি বড় বাড়ির মেরামতের সম্মুখীন, আপনি কি ভাবেন, 'এটি একটি বড় সমস্যা, কিন্তু আমি/আমরা এটি সামলাতে পারি,' এবং সমাধান খুঁজতে শুরু করি?",
          "hi": "एक बड़ी घर की मरम्मत का सामना करते हुए, क्या आप सोचते हैं, 'यह एक बड़ी समस्या है, लेकिन मैं/हम इसे संभाल सकते हैं,' और समाधान ढूंढना शुरू करते हैं?"
        },
        "weight": 1.4
      },
      {
        "q": {
          "en": "I expect good things to happen in the future",
          "bn": "আমি ভবিষ্যতে ভালো কিছু ঘটবে বলে আশা করি",
          "hi": "मुझे उम्मीद है कि भविष्य में अच्छी चीजें होंगी"
        },
        "example": {
          "en": "When thinking about the year ahead, do you generally feel that good things are coming, even if you don't know what they are yet?",
          "bn": "আগামী বছরের কথা ভাবলে, আপনি কি সাধারণত অনুভব করেন যে ভালো কিছু আসছে, যদিও এখনও জানেন না সেটা কী?",
          "hi": "आने वाले साल के बारे में सोचते हुए, क्या आपको आमतौर पर लगता है कि अच्छी चीज़ें आने वाली हैं, भले ही अभी पता न हो कि वे क्या हैं?"
        },
        "weight": 1.2
      }
    ]
  },
  "Growth": {
    "Learning Orientation": [
      {
        "q": {
          "en": "I actively seek opportunities to learn new things",
          "bn": "আমি সক্রিয়ভাবে নতুন জিনিস শেখার সুযোগ খুঁজি",
          "hi": "मैं सक्रिय रूप से नई चीजें सीखने के अवसर तलाशता हूं"
        },
        "example": {
          "en": "When you need to fix something at home, do you immediately look up a 'how-to' video on YouTube instead of calling someone?",
          "bn": "যখন আপনার বাড়িতে কিছু ঠিক করতে হবে, আপনি কি কারোকে ডাকার পরিবর্তে ইউটিউবে একটি 'কিভাবে' ভিডিও খুঁজে দেখেন?",
          "hi": "जब आपको घर पर कुछ ठीक करने की आवश्यकता होती है, तो क्या आप किसी को फोन करने के बजाय तुरंत YouTube पर एक 'कैसे-करें' वीडियो देखते हैं?"
        },
        "weight": 1.3
      },
      {
        "q": {
          "en": "I enjoy acquiring new knowledge and skills",
          "bn": "আমি নতুন জ্ঞান এবং দক্ষতা অর্জন করতে উপভোগ করি",
          "hi": "मुझे नया ज्ञान और कौशल हासिल करने में आनंद आता है"
        },
        "example": {
          "en": "Do you find yourself falling down Wikipedia rabbit holes about random topics, or taking a free online course just for fun?",
          "bn": "আপনি কি নিজেকে উইকিপিডিয়ায় এলোমেলো বিষয়ের গভীরে ডুবে যেতে, বা শুধু মজার জন্য একটি বিনামূল্যের অনলাইন কোর্স করতে দেখেন?",
          "hi": "क्या आप खुद को विकिपीडिया पर बेतरतीब विषयों में गहरे उतरते, या सिर्फ़ मज़े के लिए कोई मुफ़्त ऑनलाइन कोर्स करते हुए पाते हैं?"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I apply feedback to improve my performance",
          "bn": "আমি আমার performance উন্নত করতে feedback প্রয়োগ করি",
          "hi": "मैं अपने प्रदर्शन को सुधारने के लिए feedback लागू करता हूं"
        },
        "example": {
          "en": "Your manager suggests you speak more slowly in presentations. In your next talk, do you consciously focus on your pacing and use pauses?",
          "bn": "আপনার ম্যানেজার বলেন উপস্থাপনায় একটু ধীরে কথা বলতে। পরের বক্তব্যে আপনি কি সচেতনভাবে গতির দিকে খেয়াল রাখেন এবং বিরতি ব্যবহার করেন?",
          "hi": "आपका मैनेजर सुझाव देता है कि प्रेज़ेंटेशन में थोड़ा धीरे बोलें। अगली बार क्या आप जान-बूझकर अपनी गति पर ध्यान देते हैं और ठहराव का इस्तेमाल करते हैं?"
        },
        "weight": 1.4
      }
    ],
    "Curiosity": [
      {
        "q": {
          "en": "I frequently explore unfamiliar topics and ideas",
          "bn": "আমি প্রায়শই অপরিচিত বিষয় এবং ধারণাগুলি অন্বেষণ করি",
          "hi": "मैं अक्सर अपरिचित विषयों और विचारों का पता लगाता हूं"
        },
        "example": {
          "en": "When you meet someone with a job you don't understand (like a 'data scientist'), do you ask them questions about what they actually do all day?",
          "bn": "এমন কারও সঙ্গে দেখা হলে যার কাজ আপনি বোঝেন না (যেমন একজন ডেটা সায়েন্টিস্ট), আপনি কি জিজ্ঞেস করেন তিনি সারাদিন আসলে কী করেন?",
          "hi": "जब आप किसी ऐसे व्यक्ति से मिलते हैं जिसका काम आप नहीं समझते (जैसे डेटा साइंटिस्ट), तो क्या आप पूछते हैं कि वह दिन भर असल में करता क्या है?"
        },
        "weight": 1.1
      },
      {
        "q": {
          "en": "I ask questions to deepen my understanding",
          "bn": "আমার বোঝাপড়া গভীর করতে আমি প্রশ্ন করি",
          "hi": "मैं अपनी समझ को गहरा करने के लिए सवाल पूछता हूं"
        },
        "example": {
          "en": "When someone explains a news event, do you find yourself asking 'Why did that happen?' or 'What happens next?' to understand the bigger picture?",
          "bn": "কেউ কোনো খবর বোঝালে, বড় ছবিটা বুঝতে আপনি কি নিজে থেকেই জিজ্ঞেস করেন ‘এটা কেন হলো?’ বা ‘এরপর কী হবে?’",
          "hi": "जब कोई किसी खबर के बारे में बताता है, तो क्या आप पूरी तस्वीर समझने के लिए खुद से पूछते हैं ‘ऐसा क्यों हुआ?’ या ‘आगे क्या होगा?’"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I enjoy thinking about complex problems",
          "bn": "জটিল সমস্যা নিয়ে চিন্তা করতে আমি উপভোগ করি",
          "hi": "मुझे जटिल समस्याओं के बारे में सोचने में आनंद आता है"
        },
        "example": {
          "en": "Do you enjoy puzzles, strategy games, or discussions about 'what if' scenarios that don't have an easy answer?",
          "bn": "আপনি কি ধাঁধা, কৌশল গেম, বা 'কি হবে যদি' পরিস্থিতি সম্পর্কে আলোচনা উপভোগ করেন যার সহজ উত্তর নেই?",
          "hi": "क्या आप पहेलियों, रणनीति खेलों, या 'क्या होगा अगर' परिदृश्यों पर चर्चा का आनंद लेते हैं जिनका आसान जवाब नहीं है?"
        },
        "weight": 1.3
      }
    ],
    "Openness to Change": [
      {
        "q": {
          "en": "I willingly try new approaches and methods",
          "bn": "আমি ইচ্ছাপূর্বক নতুন পদ্ধতি এবং পদ্ধতি চেষ্টা করি",
          "hi": "मैं स्वेच्छा से नए दृष्टिकोण और तरीके आजमाता हूं"
        },
        "example": {
          "en": "Your favorite app gets a complete redesign. Do you explore the new features with curiosity, or do you immediately grumble about how it was better before?",
          "bn": "আপনার প্রিয় অ্যাপটি পুরোপুরি নতুন করে সাজানো হলো। আপনি কি কৌতূহল নিয়ে নতুন ফিচারগুলো দেখেন, নাকি সঙ্গে সঙ্গে বলেন আগেরটাই ভালো ছিল?",
          "hi": "आपके पसंदीदा ऐप का पूरा डिज़ाइन बदल जाता है। क्या आप जिज्ञासा से नए फीचर देखते हैं, या तुरंत शिकायत करते हैं कि पहले वाला बेहतर था?"
        },
        "weight": 1.3
      },
      {
        "q": {
          "en": "I adapt quickly to new technologies and systems",
          "bn": "আমি নতুন প্রযুক্তি এবং সিস্টেমে দ্রুত খাপ খাইয়ে নিই",
          "hi": "मैं नई तकनीकों और प्रणालियों के लिए जल्दी से अनुकूल हो जाता हूं"
        },
        "example": {
          "en": "When your workplace introduces new software, are you one of the first to learn it, or one of the last who complains it's too different?",
          "bn": "কর্মস্থলে নতুন সফটওয়্যার এলে, আপনি কি প্রথম দিকে শিখে নেওয়াদের একজন, নাকি শেষ পর্যন্ত অভিযোগ করাদের একজন যে এটা খুব আলাদা?",
          "hi": "जब दफ़्तर में नया सॉफ़्टवेयर आता है, तो क्या आप उसे सबसे पहले सीखने वालों में होते हैं, या आखिर तक शिकायत करने वालों में कि यह बहुत अलग है?"
        },
        "weight": 1.2
      },
      {
        "q": {
          "en": "I embrace rather than resist organizational changes",
          "bn": "আমি organizational পরিবর্তনগুলিকে প্রতিরোধ করার পরিবর্তে গ্রহণ করি",
          "hi": "मैं organizational परिवर्तनों का विरोध करने के बजाय उन्हें अपनाता हूं"
        },
        "example": {
          "en": "If your company decides to switch to a new hybrid work model, do you look for the benefits and adapt your routine, or focus only on the inconveniences?",
          "bn": "আপনার কোম্পানি নতুন হাইব্রিড কাজের মডেলে গেলে, আপনি কি সুবিধাগুলো খোঁজেন ও রুটিন মানিয়ে নেন, নাকি শুধু অসুবিধাগুলোর দিকেই নজর দেন?",
          "hi": "अगर आपकी कंपनी नए हाइब्रिड वर्क मॉडल पर जाती है, तो क्या आप उसके फायदे देखते हैं और अपनी दिनचर्या ढालते हैं, या सिर्फ़ असुविधाओं पर ध्यान देते हैं?"
        },
        "weight": 1.4
      }
    ]
  },
  "Overthinking": {
    "Rumination": [
      {
        "q": {
          "en": "I repeatedly think about past mistakes or regrets",
          "bn": "আমি বারবার অতীতের ভুল বা অনুশোচনা নিয়ে চিন্তা করি",
          "hi": "मैं बार-बार पिछली गलतियों या पछतावों के बारे में सोचता हूं"
        },
        "example": {
          "en": "Do you find yourself replaying a conversation from five years ago and cringing, or thinking 'I should have said...' long after the moment has passed?",
          "bn": "আপনি কি পাঁচ বছর আগের কোনো কথোপকথন বারবার মনে করে অস্বস্তিতে পড়েন, বা মুহূর্তটা পেরিয়ে যাওয়ার অনেক পরেও ভাবেন ‘আমার বলা উচিত ছিল…’?",
          "hi": "क्या आप पाँच साल पुरानी कोई बातचीत बार-बार याद करके झेंपते हैं, या वह पल बीत जाने के बहुत बाद भी सोचते हैं ‘मुझे कहना चाहिए था…’?"
        },
        "weight": 1.5,
        "reverse": true
      },
      {
        "q": {
          "en": "I have difficulty letting go of negative thoughts",
          "bn": "নেতিবাচক চিন্তা ছেড়ে দিতে আমার অসুবিধা হয়",
          "hi": "मुझे नकारात्मक विचारों को छोड़ने में कठिनाई होती है"
        },
        "example": {
          "en": "If someone gives you one piece of criticism amid nine compliments, does the one criticism stick in your head for the rest of the day, drowning out the positive?",
          "bn": "নয়টি প্রশংসার মাঝে কেউ একটি সমালোচনা করলে, সেই একটিই কি সারাদিন মাথায় ঘোরে আর ভালো কথাগুলো ঢাকা পড়ে যায়?",
          "hi": "अगर नौ तारीफ़ों के बीच कोई एक आलोचना करे, तो क्या वही एक बात दिन भर दिमाग में अटकी रहती है और अच्छी बातें दब जाती हैं?"
        },
        "weight": 1.4,
        "reverse": true
      },
      {
        "q": {
          "en": "I dwell on problems for longer than necessary",
          "bn": "আমি প্রয়োজনীয়তার চেয়ে বেশি সময় সমস্যাগুলি নিয়ে চিন্তা করি",
          "hi": "मैं आवश्यकता से अधिक समय तक समस्याओं पर ध्यान देता हूं"
        },
        "example": {
          "en": "After a minor disagreement is resolved, do you keep analyzing it in your head for hours, going over every word that was said?",
          "bn": "ছোটখাটো মতবিরোধ মিটে যাওয়ার পরও, আপনি কি ঘণ্টার পর ঘণ্টা মাথার মধ্যে সেটি বিশ্লেষণ করেন, প্রতিটি কথা বারবার ভাবেন?",
          "hi": "किसी छोटी असहमति के सुलझ जाने के बाद भी, क्या आप घंटों उसे दिमाग में दोहराते रहते हैं, कही गई हर बात को बार-बार सोचते हुए?"
        },
        "weight": 1.6,
        "reverse": true
      }
    ],
    "Indecisiveness": [
      {
        "q": {
          "en": "I struggle to make decisions for fear of making mistakes",
          "bn": "ভুল করার ভয়ে সিদ্ধান্ত নিতে আমার struggle হয়",
          "hi": "गलतियाँ करने के डर से मुझे निर्णय लेने में संघर्ष होता है"
        },
        "example": {
          "en": "Do you spend 20 minutes staring at the menu in a restaurant, worrying that you'll order the 'wrong' thing and be disappointed?",
          "bn": "রেস্তোরাঁয় মেনুর দিকে ২০ মিনিট তাকিয়ে থাকেন কি, এই ভয়ে যে ‘ভুল’ জিনিস অর্ডার করে হতাশ হবেন?",
          "hi": "क्या आप रेस्तराँ में 20 मिनट मेन्यू ताकते रहते हैं, इस चिंता में कि ‘गलत’ चीज़ ऑर्डर कर बैठेंगे और निराश होंगे?"
        },
        "weight": 1.3,
        "reverse": true
      },
      {
        "q": {
          "en": "I frequently second-guess my choices",
          "bn": "আমি প্রায়শই আমার পছন্দগুলিকে দ্বিতীয়বার চিন্তা করি",
          "hi": "मैं अक्सर अपनी पसंद पर दोबारा विचार करता हूं"
        },
        "example": {
          "en": "After you finally buy a new item, do you immediately go online to check if you got the best deal or if there was a better product, looking for buyer's remorse?",
          "bn": "অবশেষে কিছু কেনার পরপরই, আপনি কি অনলাইনে দেখতে যান সেরা দামটা পেলেন কি না বা আরও ভালো কিছু ছিল কি না, যেন অনুশোচনার কারণ খুঁজছেন?",
          "hi": "आखिरकार कोई नई चीज़ खरीदने के तुरंत बाद, क्या आप ऑनलाइन जाँचते हैं कि सबसे अच्छा सौदा मिला या कोई बेहतर चीज़ थी, मानो पछतावे की वजह ढूँढ रहे हों?"
        },
        "weight": 1.4,
        "reverse": true
      },
      {
        "q": {
          "en": "I spend excessive time analyzing options before deciding",
          "bn": "সিদ্ধান্ত নেওয়ার আগে আমি অত্যধিক সময় বিকল্পগুলি বিশ্লেষণে ব্যয় করি",
          "hi": "निर्णय लेने से पहले मैं विकल्पों का विश्लेषण करने में अत्यधिक समय बिताता हूं"
        },
        "example": {
          "en": "When planning a vacation, do you get stuck for weeks comparing dozens of hotels and flight options, unable to book anything?",
          "bn": "ছুটির পরিকল্পনা করতে গিয়ে, আপনি কি সপ্তাহের পর সপ্তাহ ডজনখানেক হোটেল ও ফ্লাইট তুলনা করেই আটকে থাকেন, কিছুই বুক করতে পারেন না?",
          "hi": "छुट्टी की योजना बनाते समय, क्या आप हफ़्तों दर्जनों होटल और फ़्लाइट की तुलना में अटके रहते हैं और कुछ भी बुक नहीं कर पाते?"
        },
        "weight": 1.2,
        "reverse": true
      }
    ],
    "Worry": [
      {
        "q": {
          "en": "I worry about things that might never happen",
          "bn": "আমি এমন জিনিসগুলি নিয়ে চিন্তিত হই যা কখনও ঘটতে পারে না",
          "hi": "मैं उन चीजों के बारे में चिंता करता हूं जो शायद कभी नहीं होंगी"
        },
        "example": {
          "en": "If your partner is 30 minutes late coming home, does your mind jump to them being in a terrible accident, rather than assuming they hit traffic?",
          "bn": "আপনার সঙ্গী বাড়ি ফিরতে ৩০ মিনিট দেরি করলে, আপনার মন কি জ্যামে আটকে আছে ভাবার বদলে সোজা ভয়ানক দুর্ঘটনার কথা ভাবে?",
          "hi": "अगर आपका साथी घर आने में 30 मिनट लेट हो, तो क्या आपका मन ट्रैफ़िक में फँसने की बजाय सीधे किसी भयानक हादसे की कल्पना करने लगता है?"
        },
        "weight": 1.5,
        "reverse": true
      },
      {
        "q": {
          "en": "I imagine worst-case scenarios",
          "bn": "আমি সবচেয়ে খারাপ পরিস্থিতি কল্পনা করি",
          "hi": "मैं सबसे खराब स्थितियों की कल्पना करता हूं"
        },
        "example": {
          "en": "Before a doctor's appointment, do you find yourself mentally planning for a serious diagnosis, even for a routine check-up?",
          "bn": "ডাক্তারের কাছে যাওয়ার আগে, সাধারণ চেকআপ হলেও, আপনি কি মনে মনে কোনো গুরুতর রোগ ধরা পড়ার প্রস্তুতি নিতে থাকেন?",
          "hi": "डॉक्टर के पास जाने से पहले, चाहे रूटीन जाँच ही हो, क्या आप मन ही मन किसी गंभीर बीमारी की तैयारी करने लगते हैं?"
        },
        "weight": 1.4,
        "reverse": true
      },
      {
        "q": {
          "en": "I have trouble sleeping due to racing thoughts",
          "bn": "দ্রুত চলমান চিন্তার কারণে আমার ঘুমাতে সমস্যা হয়",
          "hi": "तेज दौड़ने वाले विचारों के कारण मुझे सोने में परेशानी होती है"
        },
        "example": {
          "en": "Do you lie in bed at night, unable to switch off your brain because you're mentally reviewing the day's events and worrying about tomorrow's to-do list?",
          "bn": "রাতে বিছানায় শুয়ে আপনি কি মাথা বন্ধ করতে পারেন না, কারণ সারাদিনের ঘটনা ভাবছেন আর কালকের কাজের তালিকা নিয়ে দুশ্চিন্তা করছেন?",
          "hi": "क्या आप रात को बिस्तर पर लेटे रहते हैं और दिमाग बंद नहीं कर पाते, क्योंकि दिन भर की घटनाएँ दोहराते और कल की टू-डू लिस्ट की चिंता करते रहते हैं?"
        },
        "weight": 1.6,
        "reverse": true
      }
    ]
  }
};

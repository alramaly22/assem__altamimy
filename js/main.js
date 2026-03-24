/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
const themeButton = document.getElementById('theme-button');
const logoImage = document.getElementById('logo');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const video = document.getElementById("myVideo");

video.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});






/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/

// let lang = {
//     ar: {
//         subscribe : "لا تنسي الاستراك"
//     }, 
//     en:{
//         subscribe :"dont' forget to subscribe "
//     }
// }
// let selector = document.getElementById('language-selector') ;
// selector.onchange - UpdateLanguage();

// function UpdateLanguage (){
//     let language = selector.options[selector.selectedIndex].value;
//     let nodes = document.querySelectorAll('[data-lang]');
//     let i = nodes.length
//     while(i--){
//         let key = nodes[i].getAttribute('data-lang');
//         nodes[i].innerHTML = lang[language][key]; // lang['ar']['subscribe']
//     }
// }
let lang = {
    ar: {
        subscribe: "اكتشف إمكانياتك الكاملة-",
        subscrib: "انضم إلى ثورتنا في مجال اللياقة",
        subscri: "استعد لتحويل حياتك مع كابتن عاصم التميمي، الخبير المعتمد في مجال اللياقة والتغذية. سنساعدك في بناء عادات صحية قوية وتحقيق أهدافك الصحية",
        subscr: "اشترك الآن",
        home2h3: "اطلق العنان للرياضي الداخلي فيك-",
        home2h1: "انضم إلينا لتحقيق صحة أفضل",
        home2p: "ابدأ رحلة نحو حياة أكثر صحة مع كابتن عاصم التميمي. بفضل خبرته التي تزيد عن 7 سنوات، سيكون هنا ليوجهك نحو أسلوب حياة أكثر نشاطًا ولياقة",
        questionh2: "لماذا تختار الكابتن عاصم التميمي؟",
        q1: "ما هي أهمية اللياقة البدنية في حياتنا؟",
        q2: " كيف يمكنني بناء عادات صحية دائمة؟",
        q3: "هل يمكنني الحصول على خطة تدريب مخصصة لأهدافي الشخصية؟",
        q4: "كيف يمكنني تحسين نظامي الغذائي؟",
        q5: "            كيف يعمل نظام الغذاء الخاص بك وما هو التفصيل البسيط له؟        ",
        q6: "مين اللي بيتابع معايا؟",
        q7: "            هل النظام الغذائي يتغير بانتظام؟        ",
        q8: "ما هي قصص النجاح التي حققها عملاؤك؟",
        q9: " ما هي استراتيجيات الكابتن عاصم التميمي لتحقيق أهداف اللياقة؟",
        q10: "كيف يمكنني الانضمام والبدء؟",
        a1: "اللياقة البدنية تسهم في تحسين الصحة العامة، زيادة مستوى الطاقة، وتقوية الجسم والعقل",
        a2: "من خلال التوجيه الشخصي والتحفيز المستمر، سنساعدك في تطوير عادات صحية قائمة على التمرين والتغذية السليمة",
        a3: "نعم، سنقوم بتقديم خطة تدريب مصممة خصيصًا لتحقيق أهدافك الفردية في اللياقة",
        a4: "سنقدم لك نصائح وخطط تغذية مخصصة لضمان تناولك للمواد الغذائية الصحية والمناسبة",
        a5: "            نحن نقدم نظام غذائي مخصص وسهل يناسب نمط حياتك اليومي. سنقوم بمتابعتك يوميًا لتحسين علاقتك مع الطعام. سوف تكون قادرًا على الاستمتاع بحياتك والسفر دون قلق بشأن نظامك الغذائي. سنقدم لك بدائل صحية للأكل وسنعلمك كيفية تحضير الوجبات بشكل صحي لتتمكن من تناول أطعمتك المفضلة بطريقة صحية       ",
        a6: "             التواصل و الشغل بيكون من خلالي انا مش مع اي تيم عشان ابقي متابع كل حاجه بنفسي.اي سؤال بتبقي عايز تسأله بتبعتلي علي الواتساب و برد عليك و بيبقي معاك رقمي ممكن تكلمني في اي وقت ",
        a7: "            نعم، لدينا مجموعة متنوعة من البرامج وجلسات التدريب التي تتغير بانتظام لتلبية الاحتياجات والأهداف المختلفة. النظام الغذائي يتغير بشكل دوري، سواء كل أسبوع أو كل ١٤ يومًا، لأن جسمك يتغير باستمرار، ونقوم بتعديل الدايت بناءً على تقدمك بالصور والوزن والمقاسات لضمان تحقيق النتائج المرجوة        ",
        a8: "نحن فخورون بقصص نجاح عملائنا الذين حققوا تحسينًا كبيرًا في صحتهم ولياقتهم من خلال برامجنا",
        a9: "يعتمد الكابتن عاصم التميمي على مزج التمارين البدنية المتنوعة مع تخصيص برامج تدريبية شخصية تناسب احتياجات وأهداف كل فرد. كما يوفر الدعم والتحفيز المستمر لضمان استمرارية التحسين وتطوير العادات الصحية الدائمة",
        a10: "انقر على زر 'اشترك الآن' أعلى الصفحة للانضمام إلى رحلتك نحو اللياقة والصحة",
        meh2: "حولنا",
        men1: "+7 سنوات",
        meex: "خبرة",
        men2: "+5000",
        meov: "تم إعداد أكثر من برنامج",
        men3: "+4000",
        meclient: "العملاء",
        mehp: "عاصم التميمي ليس مدرب لياقة بدنية وخبير تغذية عادي. بخبرته التي تزيد عن سبع سنوات في صناعة اللياقة البدنية وحصوله على شهادات متعددة، أصبح شخصية بارزة في عالم الصحة والعافية. يقود رحلة أسام شغفه بمساعدة الأفراد على تحويل حياتهم من خلال اللياقة البدنية والتغذية. من خلال برامج مخصصة واهتمامه بتمكين عملائه، اكتسب عاصم  سمعة كمحفز ومرشد، ملهمًا الناس لعيش حياة أكثر صحة وسعادة",
        serh2: "كيف تستطيع أن تبدأ و تغير حياتك؟",
        ser1: "اشترك الآن",
        ser2: "سجّل",
        ser3: "خطة النظام الغذائي والتمارين",
        ser4: "كتاب الطهي الإلكتروني",
        ser5: "تحديثات التقدم",
        ser6: "الدعم اليومي",
        serp1: "انقر 'اشترك الآن' وابدأ رحلتك نحو اللياقة البدنية",
        serp2: "املأ استمارة التسجيل بمعلوماتك",
        serp3: "احصل على خطة غذائية وتمارين مخصصة تتناسب مع أهدافك",
        serp4: "احصل على كتاب إلكتروني للطهي يحتوي على وصفات صحية",
        serp5: "قم بإرسال صور تقدمك كل 14 يومًا للحصول على تحديثات في خطتك الغذائية",
        serp6: "استلم الدعم اليومي والتوجيه، مع استجابة خلال 24 ساعة",
        proh1: "ماذا يتضمن البرنامج؟",
        prop: "ستحصل على نهج شامل للصحة والعافية. نحن نعتبر تحديثات منتظمة ومتابعة وثيقة لتوجيهك بفعالية. خططنا الغذائية تركز على تحقيق تحسينات مستدامة وتدريجية. نقدم المكملات الغذائية عند الحاجة بناءً على احتياجاتك الخاصة. استراتيجيات تدريبنا تمزج بين رؤية طويلة الأمد وتنفيذ مفصل لنجاحك",
        proh31: "برنامج اللياقة البدنية",
        proh32: "برنامج تمارين المقاومة",
        proh33: "برنامج التغذية",
        proh34: "كتاب الطهي",
        prop1: "لياقتك البدنية من اكبر العوامل المؤثرة علي استشفاء العضلات و علي الصحة في المطلق، من خلال برنامج تدريجي من محترفين اللياقة هتشوف فرق ملحوظ في لياقتك البدنية",
        prop2: "تمارين المقاومة هي أساس بناء عضلات، من خلال منهجيتنا العلمية هتستفاد بنظام مخصص ليك محسوبو مدروس علشان يوصلك لأقصي نتائج تقدر توصل ليها في أفضل وقت، متابعة واتساب  معاك علي طول الطريق متابعة بشكل يومي والرد علي جميع استفساراتك",
        prop3: "علشان تحصد نتائج المجهود في كل النواحي التانية أهم عامل هو التغذية، من خلال برنامج التغذية بتضمن نطام محسوب بيراعي كل العوامل { اهدافك، احتياجاتك،أنواع الأكل المفضلة و الغير مفضلة، طبيعية العمل....}",
        prop4: "ابدأ في مغامرة الطهي مع برنامج كتاب الطهي لدينا. إنها ليست مجرد مسألة ما تأكله، بل كيف تستمتع بذلك. قل مرحبًا بعالم الأكل اللذيذ والصحي",
        poph2: "نجاح قصص العملاء",
        prih2: " أسعارنا",
        pris1: "٧٥٠/ج.م",
        pris2: "12/أسبوعًا",
        pris3: "٢٠٠٠/ج.م",
        pris4: "12/أسبوعًا",
        pris5: "٢٥٠٠/ج.م",
        pris6: "12/أسبوعًا",
        rightprice1: "٦٠٠/ج.م",
        rightprice2: "١٤٩٩/ج.م",
        rightprice3: "١٩٩٩/ج.م",

        prisbr: "أساسي",
        prisbas: "توفير",
        prisbas2: "غير نشط حاليا",
        prisp1: "خطة تغذية مخصصة",
        prisp2: "كتاب تمارين مصحوب بشرح فيديوهات",
        prisp3: "كتاب الطهي",
        prisp4: "فحوصات وتغيير الخطط شهريًا عبر البريد الإلكتروني",
        prisp5: "لا متابعة",

        prisilv: "احترافي",
        pripr: "فضي",
        prisilvep1: "خطة تغذية مخصصة",
        prisilvep2: "كتاب تمارين مصحوب بشرح فيديوهات",
        prisilvep3: "كتاب الطهي",
        prisilvep4: "فحوصات وتغيير الخطط كل 14 يومًا",
        prisilvep5: "متابعة يوم بيوم مع الكابتن عاصم التميمي",

        prigold: "اسطوري",
        prient: " ذهبي",
        prisgold1: "خطة تغذية مخصصة",
        prisgold2: "كتاب تمارين مصحوب بشرح فيديوهات",
        prisgold3: "كتاب الطهي",
        prisgold4: "فحوصات وتغيير الخطط أسبوعيًا",
        prisgold5: "متابعة يومية مع الكابتن عاصم التميمي",
        prisgold6: "5 مكالمات هاتفية في الأسبوع مع الكابتن عاصم التميمي",
        tran: "تغيرات عملائنا",
        footp: "عاصم التميمي هو مدرب لياقة بدنية وخبير تغذية معتمد يمثل رمزاً للتحفيز والتغيير الإيجابي. بفضل خبرته الطويلة في مجال اللياقة البدنية والتغذية، يعمل عاصم  جاهداً على مساعدة الأشخاص في تحقيق أهدافهم الصحية واللياقية. برامجه المخصصة تتيح للعملاء فرصة تحسين صحتهم وتحقيق توازن أفضل في حياتهم. انضموا إليه واستعدوا لبناء نمط حياة أكثر صحة ونشاطًا",

        footh31: "القائمة الرئيسية",
        footha311: "الصفحة الرئيسية",
        footha312: "الفيديوهات",
        footah313: "الأسعار",
        footah314: "التحول",
        footah315: "التذييل",
        footh32: "المعلومات",
        footh321: "الأسئلة الشائعة",
        footh322: "حولنا",
        footh323: "البداية",
        footh324: "البرنامج",
        footh34: "قائمة التواصل الاجتماعي",
        clienth2: "ماذا يقول عملاؤنا عنا",
        clientp1: "بص اولا انا لو فضلت اشكر فيك من هنا للسنة اللي جيه مش هتاخد حقك بجد انا مش مصدقه ان كل ده في اول شهر بس انا كنت 89.5 دلوقتي في شهر و في البيت بقيت 80 بس انا والله مش مصدقه من كتر ما انا فرحانه ومش مصدقه وزنت نفسي في كل حته بجد انا بشكر اي حد وبشكر الظروف انها خلتني ابدأ معاك بجد مش عارفه ايه بس انا فرحانه اوييييييي بجد شكرا 🥺🥺🥺❤️❤️❤️❤️❤️❤️ ",
        clientp2: "كابتن عاصم انا اول ما صحيت وزنت نفسي زي ما قولتلي بقيت ٦٠ كيلو انا كنت بدأه ٤٩ مش مصدقه نفسي والله انا مكنتش بزيد نهائي مش عارفه اقولك ايه والله بجد والله اشطر كوتش اتعاملت معاه 😍💪🏻الفضل يرجع ليك بعد ربنا والله من غيرك مكنتش هوصل لاي حاجه لاني فعلا جربت كتير اوي و موصلتش لحاجه و كن فاقده الامل اصلا ان شاء الله نوصل لنتيجه احسن من دي",
        clientp3: "انا اول مره اتكلم كدا بس بصراحه بجد انا جسمي اتغير 180 درجه في اقل من اسبوع , بجد يا عاصم  انت غيرتلي حياتي و نفسيتي كانت متضمر جدا بسبب وزني ان شاء الله مع بعض هنعمل الاحسن انا بعيدا عن انك الكوتشي بتاعي بس انا بعزك وانت بجد شخص طيب جدا و جدا وربنا يوفقك انت بجد تستاهل كل خير ومش قادره كمان اوصف الكلام اللي اشكرك بي ❤️❤️❤️❤️❤️",
        clientspan1: "ساره",
        clientspan2: "سلمي",
        clientspan3: "احمد",
        see: "عرض المزيد",
        pric_title: "الأسعار والباقات",

        month1: "شهر",
        month3: "3 شهور",

        // CARD 1
        pack1_title: "برنامج تمرين فقط",
        pack1_price2: "3 شهور: 1500 جنيه",
        pack1_f1: "خطة تمارين مفصلة باستخدام أحدث الأساليب العلمية",
        pack1_f2: "فيديوهات شرح التمارين",
        pack1_f3: "متابعة شخصية معي (بدون فريق مساعد)",
        pack1_f4: "تمارين استرخاء بعد التمرين وتمارين كارديو",
        pack1_f5: "دعم 24 ساعة عبر واتساب",

        // CARD 2
        pack2_title: "برنامج تغذية فقط",
        pack2_price2: "3 شهور: 1500 جنيه",
        pack2_f1: "خطة غذائية مفصلة بالكامل",
        pack2_f2: "خطة مكملات غذائية مفصلة",
        pack2_f3: "متابعة شخصية معي (بدون فريق مساعد)",
        pack2_f4: "دعم 24 ساعة عبر واتساب",

        // CARD 3
        gold_title: "الباقة الذهبية",
        most_popular: "الأكثر طلباً",
        gold_f1: "خطة غذائية مخصصة حسب هدفك واحتياجاتك وتفضيلاتك",
        gold_f2: "فيديوهات وصفات أكل لتستمتع أثناء رحلتك",
        gold_f3: "خطة تدريب (من المنزل أو الجيم) حسب مستواك وتحت إشراف متخصص",
        gold_f4: "نظام مكملات مقترح في حال رغبت",
        gold_f5: "الرد على واتساب خلال 24 ساعة",
        free_gifts: "هدايا مجانية مع الباقة",

        // CARD 4
        vip_title: "باقة VIP",
        vip_desc: "للباحثين عن التميز، هذه الباقة توفر لك كل المميزات السابقة",
        vip_f1: "اجتماعات شهرية عبر زوم",
        vip_f2: "أولوية في تسليم البرنامج",
        vip_f3: "أولوية في الرد على الرسائل",

        // BUTTON
        subscr: "اشترك الآن",
        gold_f6: "كتب إلكترونية وفيديوهات حصرية تساعدك توصل لهدفك",
        gold_gift1: "كتاب وصفات يحتوي على أكثر من 100 وجبة صحية",
        gold_gift2: "تطبيق لتبديل الأطعمة واستبدال الوجبات كما تريد",

        vip_f4: "متابعة يومية عبر واتساب (أنا اللي هتابع معاك)",
        vip_f5: "مكالمة تليفونية في أي وقت",
        vip_f6: "إمكانية تجميد الاشتراك لمدة تصل إلى 60 يوم",
        vip_f7: "رعاية طبية كاملة من فريق أطباء متخصصين"
    },
    en: {
        subscribe: "-Discover Your Full Potential",
        subscrib: "Join Our Fitness Revolution",
        subscri: "Get ready to transform your life with Captain Assem altamimy, a certified fitness and nutrition expert. We'll help you build strong healthy habits and achieve your wellness goals",
        subscr: "Subscribe Now",
        home2h3: "-Unleash Your Inner Athlete",
        home2h1: "Join us for a healthier you",
        home2p: "Embark on a journey to a healthier you with Captain Gym Assem altamimy. With over 7 years of experience, he's here to guide you towards a fitter, more active lifestyle",
        questionh2: "Why Choose Captain Assem altamimy?",
        q1: "What is the importance of fitness in our lives?",
        q2: " How can I build lasting healthy habits?",
        q3: "Can I get a customized training plan for my individual goals?",
        q4: "How can I improve my dietary habits?",
        q5: "How does your dietary plan work, and what is the simple breakdown of it?",
        q6: "Who will be supporting me in my journey?",
        q7: "            Does the diet plan change regularly?        ",
        q8: "What are the success stories achieved by your clients?",
        q9: "What are Coach Assem altamimy's strategies for achieving fitness goals?",
        q10: " How can I join and get started?",
        a1: "Fitness contributes to improving overall health, increasing energy levels, and strengthening the body and mind",
        a2: "Through personal guidance and ongoing motivation, we'll help you develop healthy habits based on exercise and proper nutrition",
        a3: "Yes, we will provide you with a training plan tailored specifically to achieve your fitness goals",
        a4: "We will offer you tips and customized nutrition plans to ensure you consume healthy and suitable food items",
        a5: "We provide a customized and straightforward dietary plan tailored to your daily lifestyle. We'll be monitoring you daily to improve your relationship with food. You'll be able to enjoy your life and travel without worrying about your diet. We'll offer you healthy alternatives for eating, and we'll teach you how to prepare meals in a healthy way, so you can indulge in your favorite foods healthily",
        a6: "You can contact me directly via WhatsApp for any questions you have. I'll provide you with my number, and you can reach out to me at any time        ",
        a7: "            Yes, we offer a variety of programs, and the diet plan changes regularly, either weekly or every 14 days. This ensures that your diet adapts to your changing body, and we adjust it based on your progress, photos, weight, and measurements to achieve the desired results        ",
        a8: "We are proud of the success stories of our clients who have made significant improvements in their health and fitness through our programs",
        a9: " Coach Assem altamimy relies on a mix of diverse physical exercises while providing personalized training programs tailored to meet each individual's needs and objectives. He also offers continuous support and motivation to ensure the development of lasting healthy habits",
        a10: " Click on the 'Subscribe Now' button at the top of the page to start your journey towards fitness and health",
        meh2: "About Us",
        men1: "+7 Years",
        meex: "Experience",
        men2: "+5000",
        meov: "Over programs made",
        men3: "+4000",
        meclient: "clients",
        mehp: "Assem Eltamimy is not your typical fitness trainer and nutrition expert. With over Seven years of experience in the fitness industry and multiple certifications, he has become a leading figure in the world of health and wellness. Assem's journey is driven by his passion for helping individuals transform their lives through fitness and nutrition. Through personalized programs and a dedication to empowering his clients, Assem has earned a reputation as a motivator and mentor, inspiring people to live healthier and happier lives",
        serh2: "How can you start and change your life?",
        ser1: "Subscribe Now",
        ser2: "Register",
        ser3: "Diet & Workout Plan",
        ser4: "Cooking E-Book",
        ser5: "Progress Updates",
        ser6: "Daily Support",
        serp1: "Click 'Subscribe Now' and start your fitness journey",
        serp2: "Fill out the registration form with your information",
        serp3: "Receive a customized diet and workout plan tailored to your goals",
        serp4: "Receive a cooking e-book with healthy recipes",
        serp5: "Send your progress photos every 14 days for diet plan updates",
        serp6: "Receive daily support and guidance, with responses within 24 hours",
        proh1: "What Does the Program Include?",
        prop: "you'll receive a holistic approach to health and wellness. We prioritize regular updates and close monitoring to guide you effectively. Our nutrition plans focus on sustainable, gradual improvements. We provide supplements when necessary based on your specific needs. Our training strategies blend a long-term vision with detailed execution for your success",
        proh31: "Fitness Program",
        proh32: "Resistance Training Program",
        proh33: "Nutrition Program",
        proh34: "Cookbook",
        prop1: "Your physical fitness is one of the most significant factors influencing muscle recovery and overall health. Through a gradual program designed by fitness professionals, you will notice a remarkable improvement in your physical fitness",
        prop2: "Resistance training is the foundation of muscle building. With our scientific approach, you'll benefit from a personalized and well-thought-out system designed to help you achieve your maximum results in the shortest time possible. We offer daily WhatsApp support, ensuring that we're with you every step of the way and ready to address all your inquiries",
        prop3: "To reap the results of your efforts in all other aspects, nutrition is the most critical factor. Our nutrition program ensures a tailored approach that takes into account all factors, including your goals, dietary needs, food preferences, and daily routine",
        prop4: "Embark on a culinary adventure with our Cooking Book program. It's not just about what you eat, but how you enjoy it. Say hello to a world of delicious, healthy eating",
        poph2: "Client Success Stories",
        prih2: "Pricing & Plans",
        pris1: "£/750",
        pris2: "12/weeks",
        pris3: "£/2000",
        pris4: "12/weeks",
        pris5: "£/2500",
        pris6: "12/weeks",
        rightprice1: "£/600",
        rightprice2: "£/1499",
        rightprice3: "£/1999",
        prisbr: "Basic ",
        prisbas: "Saved",
        prisbas2: "currently inactive",
        prisp1: "Custom nutrition plan",
        prisp2: "Workout e-book explained by videos",
        prisp3: "Cooking e-book",
        prisp4: "Check ins & change plans monthly with email",
        prisp5: "No follow up",

        prisilv: "Professional ",
        pripr: "Silver",
        prisilvep1: "Custom nutrition plan",
        prisilvep2: "Workout e-book explained by videos",
        prisilvep3: "Cooking e-book",
        prisilvep4: "Check ins & change plans 14 days",
        prisilvep5: "Day by day follow up with Captain Assem",

        prigold: "legendary",
        prient: " Gold",
        prisgold1: "Custom nutrition plan",
        prisgold2: "Workout e-book explained by videos",
        prisgold3: "Cooking e-book",
        prisgold4: "Check ins & change plans weekly",
        prisgold5: "Daily follow up with captain Assem",
        prisgold6: "5 times per week phone call with captain Assem",
        tran: "Transforamtion",
        footp: "Meet Assem altamimy, a certified fitness trainer and nutrition expert who embodies motivation and positive change. With his extensive experience in the fitness and nutrition field, Qasim is dedicated to helping individuals achieve their health and fitness goals. His personalized programs offer clients the opportunity to improve their health and find better balance in their lives. Join him and get ready to build a healthier, more active lifestyle.",
        footh31: "Main Menu",
        footha311: "Home",
        footha312: "Videos",
        footah313: "Pricing",
        footah314: "Transforamtion",
        footah315: "Footer",
        footh32: "Information",
        footh321: "Faq",
        footh322: "About",
        footh323: "Start",
        footh324: "Program",
        footh34: "Socail Menu",
        clienth2: "What Our Client Say About Us",
        clientp1: "First, I want to say that if I continued to thank you for a year, I still wouldn't do justice to your help. I can't believe that all this progress happened in just one month. I was 89.5 kilograms, and now I'm down to 80 at home. I really can't believe it. I'm so happy, and I can't believe that I've noticed the change in myself in every way. I want to thank everyone and thank the circumstances that allowed me to start this journey with you. I don't know what to say, but I'm incredibly happy. Thank you so much. 🥺🥺🥺❤️❤️❤️❤️❤️❤️         ",
        clientp2: "Captain Asim, when I woke up and weighed myself as you told me, I found that I'm now 60 kilograms. I had started at 49 kilograms, and I can't believe it. I wasn't gaining weight at all. I don't know what to say. I swear, you are the best coach I've ever worked with. The credit goes to you and to God. Without you, I wouldn't have achieved anything. I've really tried so many times and never reached any results, and I had lost hope. Insha'Allah, we'll achieve even better results than this. 😍💪🏻",
        clientp3: "This is the first time I'm speaking like this, but honestly, my body has changed 180 degrees in less than a week. Asim, you've truly changed my life, and my self-esteem was deeply affected by my weight. Inshallah, together we will achieve even better. I might be far from being your official trainee, but I support you and you're genuinely a very kind person. May God bless you with all the best, and I can't express enough how thankful I am. ❤️❤️❤️❤️❤️",
        clientspan1: "SARA",
        clientspan2: "SALMA",
        clientspan3: "AHMED",
        see: "See More",
        pric_title: "PRICING & PLANS",

        month1: "1 Month",
        month3: "3 Months",

        // CARD 1
        pack1_title: "Workout Program Only",
        pack1_price2: "3 Months: 1500 EGP",
        pack1_f1: "Detailed workout plan using the latest scientific methods",
        pack1_f2: "Exercise explanation videos",
        pack1_f3: "Personal follow up with me (no assistant team)",
        pack1_f4: "Post workout stretching and cardio routines",
        pack1_f5: "24/7 support via WhatsApp",

        // CARD 2
        pack2_title: "Nutrition Program Only",
        pack2_price2: "3 Months: 1500 EGP",
        pack2_f1: "Fully detailed nutrition plan",
        pack2_f2: "Detailed supplement plan",
        pack2_f3: "Personal follow up with me (no assistant team)",
        pack2_f4: "24/7 support via WhatsApp",

        // CARD 3
        gold_title: "Golden Package",
        most_popular: "Most Popular",
        gold_f1: "Customized nutrition plan based on your goal, needs and preferences",
        gold_f2: "Cooking recipe videos to enjoy your journey",
        gold_f3: "Training plan (home or gym) designed for your level under physiotherapist supervision",
        gold_f4: "Suggested supplement system if needed",
        gold_f5: "Replies on WhatsApp within 24 hours",
        free_gifts: "Free Gifts Included",

        // CARD 4
        vip_title: "VIP Package",
        vip_desc: "For those who seek excellence, VIP gives you all previous benefits",
        vip_f1: "Monthly Zoom meetings",
        vip_f2: "Priority program delivery",
        vip_f3: "Priority message replies",

        // BUTTON
        subscr: "Subscribe Now",
        gold_f6: "Exclusive ebooks and videos to help you reach your goal",
        gold_gift1: "Recipe book with more than 100 healthy meals",
        gold_gift2: "Food swapping app to replace meals as you like",

        vip_f4: "Daily follow up via WhatsApp initiated by me",
        vip_f5: "Phone call anytime",
        vip_f6: "Ability to freeze subscription up to 60 days",
        vip_f7: "Full medical support from specialized doctors"
    }
};

let selector = document.getElementById('language-selector');

// استدعاء الدالة عند تغيير اللغة
selector.addEventListener('change', updateLanguage);

function updateLanguage() {
    let language = selector.value; // اللغة المختارة
    let nodes = document.querySelectorAll('[data-lang]');

    // تحديث نصوص العناصر باستخدام اللغة المناسبة
    nodes.forEach(node => {
        let key = node.getAttribute('data-lang');
        if (lang[language] && lang[language][key]) {
            node.textContent = lang[language][key];
        }
    });
}

// استدعاء الدالة لتعيين اللغة الافتراضية عند تحميل الصفحة
updateLanguage();

function updateLanguage() {
    let language = selector.value; // اللغة المختارة
    let nodes = document.querySelectorAll('[data-lang]');

    // تحديث نصوص العناصر وتبديل الفئات الخاصة بـ font-family
    nodes.forEach(node => {
        let key = node.getAttribute('data-lang');
        if (lang[language] && lang[language][key]) {
            node.textContent = lang[language][key];
        }

        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('arabic-font');
        } else {
            node.classList.remove('arabic-font');
            node.classList.add('english-font');
        }

        // إضافة الفئة الإضافية هنا (مثل 'second-arabic-font') إذا كان ذلك مطلوبًا
        // وتبديلها بناءً على اللغة المحددة بنفس الطريقة
        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('second-arabic-font');
        } else {
            node.classList.remove('second-arabic-font');
            node.classList.add('english-font');
        }
        if (language === 'ar') {
            node.classList.remove('english-font');
            node.classList.add('se-arab');
        } else {
            node.classList.remove('se-arab');
            node.classList.add('english-font');
        }
    });
}


/*=============== swiper ===============*/
// Define the background image paths
const backgroundImages = [];

// Configure Swiper
const homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function() {
            // Get the current slide index
            const currentSlideIndex = this.activeIndex;

            // Calculate the new background position based on the current slide
            const newBackgroundPosition = currentSlideIndex * 100;

            // Set the new background position for the ".try" section
            const trySection = document.querySelector('.try');
            trySection.style.backgroundPosition = `${newBackgroundPosition}% 50%`;
        },
    },
});
/*=============== FAQ ===============*/
const accordionItems = document.querySelectorAll('.questions__item')
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')
    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}



var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 4,
        },
    },
});





/*=============== DARK LIGHT THEME ===============*/
window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");
    if (loader) {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }
});


let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic");
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}
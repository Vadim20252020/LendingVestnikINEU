const translations = {
  ru: {
    title: "Вестник ИнЕУ",
    welcome: "Добро пожаловать на лендинг информационного журнала ИнЕУ",
    nav_about: "О журнале",
    nav_themes: "Тематика журнала",
    nav_rules: "Правила и критерии",
    nav_articles: "Последние статьи",
    nav_submit: "Подача заявки",
    nav_feedback: "Обратная связь",
    about_title: "О журнале",
    about_text: "Журнал «Вестник ИнЕУ» издается с целью распространения научных знаний, поддержки молодых ученых и формирования академического сообщества.Каждый выпуск проходит внутреннее рецензирование, что гарантирует качество и достоверность представленных исследований. Мы стремимся к тому, чтобы наши авторы чувствовали ценность своего труда, а читатели — находили вдохновение и полезную информацию.",
    themes_title: "Тематика журнала",
    themes_text: "Основные направления: экономика и управление, педагогика...",
    rules_title: "Правила и критерии публикации",
    rules_text: "Публикации принимаются при соответствии следующим критериям...",
    articles_title: "Последние опубликованные статьи",
    article1: "Инновационные подходы в обучении студентов",
    article2: "Роль цифровых технологий в науке",
    download: "Скачать PDF",
    submit_title: "Подача заявки на публикацию",
    form_name: "ФИО:",
    form_email: "Электронная почта:",
    form_phone: "Номер телефона:",
    form_login: "Логин:",
    form_file: "Ссылка на статью (например, Google Диск):",
    form_submit: "Отправить заявку",
    feedback_title: "Обратная связь",
    feedback_text: "Если у вас возникли вопросы, предложения или замечания, пожалуйста, напишите нам...",
    popular_title: "Популярные статьи",
    links_title: "Полезные ссылки"
  },
  kz: {
    title: "ИнЕУ Бюллетені",
    welcome: "ИнЕУ ақпараттық журналының лендингіне қош келдіңіз",
    nav_about: "Журнал туралы",
    nav_themes: "Журнал тақырыптары",
    nav_rules: "Жариялау ережелері",
    nav_articles: "Соңғы мақалалар",
    nav_submit: "Өтінім беру",
    nav_feedback: "Кері байланыс",
    about_title: "Журнал туралы",
   about_text: "«ИнЕУ Хабаршысы» журналы ғылыми білімді тарату, жас ғалымдарды қолдау және академиялық қауымдастықты қалыптастыру мақсатында жарық көреді. Әрбір шығарылым ішкі рецензиялаудан өтеді, бұл ұсынылған зерттеулердің сапасы мен шынайылығына кепілдік береді. Біз авторларымыз өз еңбектерінің маңыздылығын сезінгенін, ал оқырмандар шабыт пен пайдалы ақпарат тапқанын қалаймыз.",
    themes_title: "Журнал тақырыптары",
    themes_text: "Негізгі бағыттар: экономика, педагогика, IT, техника...",
    rules_title: "Жариялау ережелері",
    rules_text: "Мақалалар мына талаптарға сай болу керек: түпнұсқалық, стиль...",
    articles_title: "Соңғы жарияланған мақалалар",
    article1: "Студенттерді оқытудағы инновациялар",
    article2: "Ғылымдағы цифрлық технологиялар рөлі",
    download: "PDF жүктеу",
    submit_title: "Мақала жіберу",
    form_name: "Аты-жөні:",
    form_email: "Электрондық пошта:",
    form_phone: "Телефон нөмірі:",
    form_login: "Логин:",
    form_file: "Мақалаға сілтеме (Google Drive):",
    form_submit: "Жіберу",
    feedback_title: "Кері байланыс",
    feedback_text: "Сұрақтарыңыз болса, бізге хабарласыңыз...",
    popular_title: "Танымал мақалалар",
    links_title: "Пайдалы сілтемелер"
  },
};

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || el.textContent;
  });
}

document.querySelectorAll('.language-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    updateLanguage(btn.dataset.lang);
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

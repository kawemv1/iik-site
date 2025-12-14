export const createWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send/?phone=77081486845&text=${encodedMessage}&type=phone_number&app_absent=0`;
};

export const whatsAppMessages = {
  general: "Здравствуйте!\n\nЯ пишу вам с сайта InvestInKids\n\n",
  test: (score: number, total: number, level: string) => 
    `Здравствуйте!\n\nЯ прошел тест на вашем сайте.\n\nРезультат: ${score}/${total} баллов\nУровень: ${level}\n\nЯ хочу записаться на пробный урок.\n\n`,
  course: (courseName: string) =>
    `Здравствуйте!\n\nЯ пишу вам по поводу ${courseName} с сайта\n\n`,
  pricing: (planName: string) =>
    `Здравствуйте!\n\nЯ интересуюсь тарифом "${planName}" с сайта\n\n`,
  contact: "Здравствуйте!\n\nЯ хочу связаться с вами по поводу обучения\n\n",
};

export const whatsAppMessagesKZ = {
  general: "Сәлеметсіз бе!\n\nМен сізге InvestInKids сайтынан жазып отырмын\n\n",
  test: (score: number, total: number, level: string) => 
    `Сәлеметсіз бе!\n\nМен сіздің сайтыңызда тест тапсырдым.\n\nНәтиже: ${score}/${total} ұпай\nДеңгей: ${level}\n\nМен сынақ сабаққа жазылғым келеді.\n\n`,
  course: (courseName: string) =>
    `Сәлеметсіз бе!\n\nМен сізге ${courseName} туралы сайттан жазып отырмын\n\n`,
  pricing: (planName: string) =>
    `Сәлеметсіз бе!\n\nМен "${planName}" тарифіне қызығушылық танытамын\n\n`,
  contact: "Сәлеметсіз бе!\n\nМен оқу туралы сізбен байланысқа шығуға қызығушылық танытамын\n\n",
};


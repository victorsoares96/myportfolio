
export function getRepoLanguageImage(name) {
  var image = 'https://i.imgur.com/wgAPCH6.png';
  const language = [
    { language: 'JavaScript', img: 'https://i.imgur.com/N6kc2HK.png'},
    { language: 'HTML', img: 'https://i.imgur.com/WNRyunb.png?1'},
  ];
  language.map((item) => {
    if(item.language === name) return image = item.img;
  });
  return image;
}
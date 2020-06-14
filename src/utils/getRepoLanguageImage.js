
export function getRepoLanguageImage(name) {
  var image = 'https://i.imgur.com/gWg7XvL.png';
  const language = [
    { language: 'JavaScript', img: 'https://i.imgur.com/SIwlcXw.png'},
    { language: 'HTML', img: 'https://i.imgur.com/uQnfRrG.png'},
  ];
  language.map((item) => {
    if(item.language === name) return image = item.img;
  });
  return image;
}
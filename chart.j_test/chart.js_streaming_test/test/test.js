const getMywaifuImg = () => {
  return fetch('https://api.waifu.pics/sfw/waifu')
    .then((response) => response.json())
    .then((data) => data.url);
};

(async = async () => {
  const imgUrl = await getMywaifuImg();
  console.log(imgUrl);
})();

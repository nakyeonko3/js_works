export default (text) => {
  const div = document.createElement("div");
  div.innerText = `안녕하세요 ${text}님`;
  document.body.appendChild(div);
  console.log(import.meta.url);
};

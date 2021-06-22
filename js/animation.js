function spanWrap() {
  const target = document.querySelector('.js-span-text');
  const nodes = [...target.childNodes];

  let spanWrapText = ""

  nodes.forEach((node) => {
    if (node.nodeType == 3) { //テキストの場合
      const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
      //spanで囲んで連結
      spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {
        return acc + `<span>${v}</span>`
      }, "");
    } else { //テキスト以外
      //<br>などテキスト以外の要素をそのまま連結
      spanWrapText = spanWrapText + node.outerHTML
    }
  })

  target.innerHTML = spanWrapText
}

spanWrap();
setInterval(() => {
  spanWrap();
}, 10000)
function importAll(r) {
  let imgs = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item, index) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
}

const champImages = importAll(require.context('../imgs/champions', false, /\.jpg$/));

export { champImages };

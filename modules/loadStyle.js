const styles = new Set();

const loadStyle = (url, callback) => {
  if (styles.has(url)) {
    callback();
    return;
  }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  link.addEventListener('load', () => {
  });
  document.head.append(link);
};

export default loadStyle;
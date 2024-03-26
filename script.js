document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    } else {
      document.querySelector('.loader').style.display = 'block';
      document.querySelector('.content').style.display = 'none';
    }
  };
  
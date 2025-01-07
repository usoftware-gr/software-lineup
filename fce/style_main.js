window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header_main.style = 'margin: -8px; padding: 22px 50px 8px 27px;box-shadow: 0px 2px 5px #eee; display: inline-block; width: 100%; z-index: 4; background: #fff;top: 0; position: fixed; width: 100%';
      e_0.style.display = "none";
    } else {
        header_main.style = 'margin: -8px;padding: 12px 50px 8px 27px;box-shadow: 0px 2px 5px #eee;display: inline-block;position: absolute;width: 100%;z-index: 4;top: 56px;background: #fff;';
        e_0.style.display = "block";

    }
  });
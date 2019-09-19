function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }

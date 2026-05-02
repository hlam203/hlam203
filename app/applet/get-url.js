fetch('https://jumpshare.com/share/XGWM8aYijUSWuIAYAeKJ').then(r => r.text()).then(t => console.log(t.match(/https:\/\/[^"']*\.mp4[^"']*/g))).catch(e => console.error(e));

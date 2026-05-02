fetch('https://jumpshare.com/share/XGWM8aYijUSWuIAYAeKJ/download', {redirect: 'manual'}).then(r => console.log(r.status, r.headers.get('location'))).catch(e => console.error(e));

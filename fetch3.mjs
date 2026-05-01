const url = "https://cdn.jumpshare.com/preview/ceA5UyTXrdBqvhjD0pjxN_Rom-kUZXXWG2N-Pq9v_1hMi091HYaW-QtcglYG8z7f6t34DnJYaQUXptOwn0X_fuNpOB7H9Dm0xbewD-H6K7m5b2K0_bOSh2XeX9EzKKWSKsDOAqAJznl7SYmmtfWPym6yjbN-I2pg_cnoHs_AmgI.mp4";
fetch(url).then(res => console.log(res.status, res.statusText)).catch(console.error);

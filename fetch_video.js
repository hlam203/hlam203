const https = require("https");
const fs = require("fs");
if (!fs.existsSync("public")) fs.mkdirSync("public");
const url = "https://cdn.jumpshare.com/preview/ceA5UyTXrdBqvhjD0pjxN_Rom-kUZXXWG2N-Pq9v_1hMi091HYaW-QtcglYG8z7f6t34DnJYaQUXptOwn0X_fuNpOB7H9Dm0xbewD-H6K7m5b2K0_bOSh2XeX9EzKKWSKsDOAqAJznl7SYmmtfWPym6yjbN-I2pg_cnoHs_AmgI.mp4";
const dest = "public/bg-video.mp4";
const file = fs.createWriteStream(dest);
https.get(url, function(response) {
  response.pipe(file);
  file.on("finish", function() {
    file.close();
    console.log("Download complete!");
  });
}).on("error", function(err) {
  fs.unlinkSync(dest);
  console.error("Error downloading file.", err);
});

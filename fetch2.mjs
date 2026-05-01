const url = "https://jumpshare.com/share/abOMcxC1aYacEbAj3m2W";
fetch(url)
  .then(res => res.text())
  .then(text => {
    const lines = text.split('\n');
    lines.forEach(line => {
        if (line.includes('.mp4')) {
            console.log(line.trim());
        }
    });
  })
  .catch(err => console.error(err));

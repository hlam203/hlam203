import http from 'https';

async function getImageUrl(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    // Look for og:image
    const match = text.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
        console.log(match[1]);
    } else {
        // Try other image tags
        const match2 = text.match(/<img[^>]+src="([^"]+)"/g);
        if (match2) {
             console.log(match2.join('\n'));
        } else {
            console.log(text);
        }
    }
  } catch (error) {
    console.error(error);
  }
}

getImageUrl("https://pin.it/1RskXxGPk");

fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sonujose993')
   .then((res) => res.json())
   .then((data) => {
      //Do things
   });


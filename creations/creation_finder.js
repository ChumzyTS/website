jsonData = fetch('creations/creations.json')
    .then(results => results.json())
    .then(console.log);

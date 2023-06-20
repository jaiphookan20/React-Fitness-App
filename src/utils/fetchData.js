export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '599df9d80dmsh43b9588e5c7ac6cp17cc4ajsne6fbdececb0c'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '599df9d80dmsh43b9588e5c7ac6cp17cc4ajsne6fbdececb0c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async(url, options) => {
  
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}


const httpClient = new HttpClient();

class NewsService {
    /**
     *
     * @param {String} category
     * @param {String} country
     * @param {Function} callback
      */
    getTopHeadlinesNews(category = ENV.category, country = ENV.country, callback) {
        httpClient.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`, callback);
    }

    getEverythingNews(text, callback) {
        httpClient.get(`${ENV.apiUrl}/everything?q=${text}`, callback);
    }
}
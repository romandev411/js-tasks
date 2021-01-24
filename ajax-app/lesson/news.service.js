const httpClient = new HttpClient();

class NewsService {
    /**
     *
     * @param {String} category
     * @param {String} country
     * @param {Function} callback
      */
    getTopHeadlinesNews(category = ENV.category, country = ENV.country) {
        return httpClient.get(`${ENV.apiUrl}/top-headlines?country=${country}&category=${category}`);
    }

    getEverythingNews(text, callback) {
        return httpClient.get(`${ENV.apiUrl}/everything?q=${text}`);
    }
}
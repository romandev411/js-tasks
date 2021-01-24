const newsService = new NewsService();
const uiService = new NewsUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const categorySearch = form['search'];

/* function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
} */

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.log('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country)
        .then((response) => {
            const { totalResults, articles } = response;
            uiService.clearContainer();
            articles.forEach((article) => uiService.addArticle(article));
        })
        .catch(console.log);

};

function onInputChange(event) {
    const input = categorySearch.value;

    if (!input) return;

    newsService.getEverythingNews(input)
        .then((response) => {
            const { totalResults, articles } = response;

            uiService.clearContainer();
            articles.forEach((article) => uiService.addArticle(article));
        })
        .catch(console.log);
}


countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
categorySearch.addEventListener('input', onInputChange);


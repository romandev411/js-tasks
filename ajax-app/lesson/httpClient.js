class HttpClient {
    get(url) {
        return new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('X-Api-Key', ENV.apiKey);
            xhr.send();
            xhr.addEventListener('load', () => res(JSON.parse(xhr.responseText)));
            xhr.addEventListener('error', () => rej(JSON.parse(xhr.responseText)));
        })
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}
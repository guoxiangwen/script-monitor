(function() {
    if (typeof window === 'undefined') {
        throw new Error("please run script in broswer!");
    }
    window.onerror = (msg, url, row, col, error) => {
        let reportMsg = {
            msg: msg,
            url: url,
            row: row,
            col: col
        };
        report(reportMsg);
    }
    const report = (paramObj, level = `warning`) => {
        let reportUrl = `http://localhost:4000/api/v1/data`;
        let [paramArray, paramString] = [
            [], ''
        ];
        for (let key in paramObj) {
            paramArray.push(key + '=' + encodeURIComponent(paramObj[key]))
        }
        reportUrl += (reportUrl.indexOf('?') > -1 ? '&' : '?') + paramArray.join('&');
        new Image().src = reportUrl;
    }
    console.log('12321')
}())
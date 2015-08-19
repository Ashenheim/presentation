function markdownFtry() {
    return function(data) {
        var converter = new showdown.Converter(),
            text = data,
            html = converter.makeHtml(text);

        return html;
    }
}
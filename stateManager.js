function getStateManager(key) {
    return {
        getArray: function () {
            return new Promise(function (res) {
                chrome.storage.sync.get(key, function (answer) {
                    res(JSON.parse(answer[key] || '[]'));
                });
            });
        },
        setArray: function (value) {
            return new Promise(function (res, rej) {
                var setter = {};
                setter[key] = JSON.stringify(value || []);
                chrome.storage.sync.set(setter, function(err) {
                    if (err) {
                        rej(err);
                    } else {
                        res();
                    }
                });
            });
        }
    };
}
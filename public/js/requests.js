var requests = (function(){
    function req(method, server, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, server, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (callback !== undefined){
                    callback({ 'status': xhr.status, 'response': xhr.responseText });
                }
            }
        }

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    }

    function videos(callback){
        req('GET','/api/videos',null,callback);
    }

    return {
        videos
    };
})();
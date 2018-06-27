function init(){
    // request files to server
    requests.videos((x) => {
        if (x.status === 200){
            console.log('-- DONE: /api/videos');
            show_videos(JSON.parse(x.response));
        }
        else{
            alert('Error while getting files');
        }
    });
}

function show_videos(videos){
    var list = document.getElementById('media_list');
    videos.forEach(vid => {
        var a = document.createElement('a');
        a.setAttribute('href','/videos/'+ vid);
        a.innerText = vid;
        list.appendChild(a);
    });
}
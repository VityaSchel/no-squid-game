setInterval(() => {
    const template = new RegExp('(игра в кальмара)|(squid game)', 'i')
    const videos = document.querySelectorAll('ytd-video-renderer')
    videos.forEach(video => {
        const videoName = video.querySelector('.text-wrapper > #meta > #title-wrapper > h3 > a > yt-formatted-string').innerText
        template.test(videoName) && video.remove()
    })
}, 1000)

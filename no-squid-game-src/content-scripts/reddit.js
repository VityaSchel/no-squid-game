setInterval(() => {
    const template = new RegExp('(игра в кальмара)|(squid game)', 'i')
    let postsContainer = document.querySelector('[class][style="max-width:100%"]')
    if(!postsContainer) postsContainer = document.querySelector('[class][style="max-width: 100%;"]')
    const posts = Array.from(postsContainer.querySelector('div > div:nth-child(5)').children)
    posts.forEach(post => {
        const postTitle = post.querySelector('div > div > div:nth-child(3) > div:nth-child(2) > div h3')?.innerText
        template.test(postTitle) && post.remove()
    })
}, 1000)

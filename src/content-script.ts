function loadResponse(sourceURL: string) {
    return new Promise((resolve) => {
        const link = document.createElement('link')
        link.setAttribute('rel', 'import')
        link.setAttribute('href', sourceURL)
        link.addEventListener('onload', () => resolve(sourceURL))
        document.head.appendChild(link)
    })
}

(async function main() {

})()


type loadResponseParams = {
    content: string
    onload?: Function
}

async function loadDynamicResource({ content, onload }: loadResponseParams) {
    const element: HTMLElement = document.createElement('script')

    element.textContent = content;

    element.addEventListener('load', 
        () => {
            console.log('The file loaded')
            onload ? Promise.resolve(onload({ element })) : Promise.resolve(true)
        }
    )
    document.head.appendChild(element)
}

(async function main() {
    await loadDynamicResource({
        content: "!!!REPLACE_WITH_POLYFILL!!!",
        onload: ({ element }: { element: HTMLElement }) => console.log(element)
    })
    await loadDynamicResource({ content: "!!!REPLACE_WITH_WC!!!" })
    await loadDynamicResource({ content: "!!!REPLACE_WITH_TEST!!!" })
})()


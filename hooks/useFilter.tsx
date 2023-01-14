export const useFilter = (arr: any, album: any) => {
    const filter = [...arr.resources].filter((element: any) => {
        return element.folder.includes(`${album}`)
    })

    return filter
}
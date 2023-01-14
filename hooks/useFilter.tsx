export const useFilter = (arr: any, album: string) => {
    const filter = [...arr.resources].filter((element: any) => {
        return element.folder === `cookout23/${album}`
    })

    return filter
}
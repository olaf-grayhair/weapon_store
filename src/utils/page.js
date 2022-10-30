

export const pagination = (totalCount, perPage) => {
    const page = []
    const pageCount = Math.ceil(totalCount / perPage)

    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return page
}
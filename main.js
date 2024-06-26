const { crawlPage } = require("./crawl")
const { printReport } = require("./report")

async function main() {
    if (process.argv.length < 3) {
        console.log('no website provided')
    } else if (process.argv.length > 3) {
        console.log('too many arguments')
    }

    const baseURL = process.argv[2]

    console.log(`starting crawl of ${baseURL}`)

    const pages = await crawlPage(baseURL, baseURL, {})

    printReport(pages)
}

main()
require("../../config")

async function TERABOX_DL(TeraUrl) {
        const response = await axios.post(
            'https://apii.ambalzz.biz.id/api/downloader/terabox',
            {
                url: TeraUrl 
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )
        return response.data
}
module.exports = { TERABOX_DL }
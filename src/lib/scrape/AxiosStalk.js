require("../../config")

async function NPM_STALK(PackName) {
       return axios.post('https://apii.ambalzz.biz.id/api/stalker/npmstalk',
            {
                text: PackName,
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(response => response.data)
        .catch(e => {
            throw new Error(e)
        })
}

module.exports = { NPM_STALK }
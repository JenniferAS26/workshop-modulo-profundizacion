const URL = 'https://64d1bacbf8d60b174360d1ce.mockapi.io/users/'
import db from '../../data/db copy.json' assert { type: "json" }

const headers = {'content-type' : 'application/json'}

async function postDb (body) {
    await axios.post(URL, body, { headers })
}

async function deleteData (id) {
    await axios.delete(URL + id)
}


// postDb(JSON.stringify(db))




// const postData = {
//     description: 'My Gist',
//     public: true,
//     files: {
//         'example.json' : {
//             content: JSON.stringify({ key1: 'value1', key2: 'value2' }, null, 2)
//         }
//     }
// }

// const headers = {
//     Authorization: `Bearer ${TOKEN}`
// }

// axios.get(apiURL, postData, { headers })
// .then( res => console.log(res.data.files['workshop_axios_modules.json'].content))
// .catch(error => console.error(error))

// CREATE A BRAND NEW GIST AT THE URL
// const TOKEN = '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'
// const apiURL = 'https://api.github.com/gists/c1b607e8ef96a02f415f9825f5fc8596'


// const postData = {
//     description: 'My Gist',
//     public: true,
//     files: {
//         'example.json' : {
//             content: JSON.stringify({ key1: 'value1', key2: 'value2' }, null, 2)
//         }
//     }
// }

// const headers = {
//     Authorization: `Bearer ${TOKEN}`
// }

// axios.post(apiURL, postData, { headers })
// .then( res => console.log('Gist created:', res.data.html_url))
// .catch(error => console.error(error))


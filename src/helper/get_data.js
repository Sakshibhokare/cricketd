async function fetchJson(filePath){
    // console.log(filePath)
    return fetch(`/${filePath}.json`)
    .then(response => {
        // console.log(response)
        return response.json();
    }).then(data => {
        // console.log(data)

       return data
        // console.log(JSON.parse(json))

    }).catch((e) => {
        console.log(e);
    });
    }


export {fetchJson};
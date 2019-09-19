const BASE = 'http://localhost:3000'

let getCats = function() {
	return fetch(BASE + '/cats')
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let destroyCat = function(id) {
    return fetch(BASE + '/cats/' + id, {
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "DELETE"
    })
        // .then((resp) => {
        //     let json = resp.json()
        //     return json
        // })
        .then((resp) => {
            return getCats()
        })
}

let updateCat = function(id) {
    return fetch(BASE +'/cats/' + id, {
		body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PATCH"
    })
	.then((resp) => {
		return getCats()
	})
}

export  { getCats }
export { createCat }
export { destroyCat }
export { updateCat }

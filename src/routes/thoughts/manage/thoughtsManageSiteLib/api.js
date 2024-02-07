class API {
    constructor() {
        this.baseurl = "https://api.jcms.dev";
    }

    async authenticate(password) {
        const response = await fetch(`${this.baseurl}/auth`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pw: password
            })
        });

        const data = await response.json();
        return data;
    }

    async getTitlesAndDates(password) {
        const response = await fetch(`${this.baseurl}/getTitlesAndDates`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pw: password
            })
        });

        const data = await response.json();
        return data;
    }
}

export default API;

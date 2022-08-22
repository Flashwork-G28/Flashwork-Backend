let access_token = "Nothing";

const axios = require('axios').default;

var config = JSON.stringify({
    "client_id": "3Vzq0EAmYddInFVyRtJmW1dVMTLvQIlE",
    "client_secret": "bJYr1PEwMLmT5Oo8z2OXTilfs0SZAfWPPt_sUjNwqZS7BMR-cb3Amu5SdiRnfhiM",
    "audience": "https://flashwork.us.auth0.com/api/v2/",
    "grant_type": "client_credentials"
  });

const getAccessToken = ( callback ) => {
    const req = {
        method: 'post',
        url: 'https://flashwork.us.auth0.com/oauth/token',
        headers: {
            'content-type': 'application/json',
        },
        data : config
    };

    axios(req)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            access_token = response.data.access_token
            callback()
        })
        .catch(function (error) {
            console.log(error);
        });
}
exports.createAuthJobProvider = async (request, response ) => {
    console.log(request.body);
    getAccessToken(() => {
        // response.status(200).send(access_token)
        axios(
            {
                method: 'post',
                url: 'https://flashwork.us.auth0.com/api/v2/users',
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(
                    {
                        "email": request.body.email,
                        "blocked": false,
                        "email_verified": false,
                        "given_name": request.body.firstName,
                        "name": request.body.firstName + " " + request.body.lastName,
                        "nickname": request.body.firstName + " " + request.body.lastName,
                        "password": request.body.password,
                        "user_metadata": {
                            "type": "Job Provider"
                        },
                        "family_name": "JobProvider",
                        "connection": "Username-Password-Authentication",
                        "verify_email": true
                    })
            })
            .then(function (res) {
                console.log(res.data);
                // logging.info(NAMESPACE, 'User Auth Created: ', res.data);
                return response.status(res.status).json(res.data);
            })
            .catch(function (error) {
                console.log(error.message);
                // logging.error(NAMESPACE, 'Not Done', error.message);
                return response.status(error.code).json(error.message);
            })
    // response.send(access_token)
    })
}


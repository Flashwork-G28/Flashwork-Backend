const conn = require("./db");
const {INSET_PAY, PRO} = require("../querys/payment");


const stripe = require('stripe')('sk_test_51Lg6dfHV4pEFJsd7Sd0SPxg658tAKFbl2Tys5kJx6kdIKNODZTx1D8dqbfpIjHctBdXGMqobLrRg9rinqiR7wv2y00lkiTvZXT');
const YOUR_DOMAIN = 'http://localhost:3000';

exports.yearPayment = async (req, res) => {
    console.log(req.params);
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1LgpRJHV4pEFJsd7N8m1fyOu',
                quantity: 1,
            },
        ],

        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const end = new Date(year + 1, month, day);

    conn.query(INSET_PAY,[req.params.id,req.params.price,end], (err, data, fields) => {
        if(err) {
            // console.log(data);
            response.status(401).json({
                data: err
            })
        } else {
            console.log(data);

        }
    })
    res.redirect(303, session.url);
};



exports.monthPayment = async (req, res) => {
    console.log(req.params);
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1LgpUfHV4pEFJsd7Jk8qc1Fj',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const end = new Date(year , month +1, day);

    conn.query(INSET_PAY,[req.params.id,req.params.price,end], (err, data, fields) => {
        if(err) {
            // console.log(data);
            response.status(401).json({
                data: err
            })
        } else {
            console.log(data);

        }
    })

    res.redirect(303, session.url);
};


exports.pro = async (request, response ) => {
    // console.log(request.body);
    conn.query(PRO,[request.body.id], (err, data, fields) => {
        if(err) {
            // console.log(err);
            response.status(401).json({
                data: err
            })
        } else {
            // console.log(data);
            response.status(200).send(
                data
            )
        }
    })
}
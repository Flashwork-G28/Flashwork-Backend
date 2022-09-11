const conn = require("./db");

const stripe = require('stripe')('sk_test_51Lg6dfHV4pEFJsd7Sd0SPxg658tAKFbl2Tys5kJx6kdIKNODZTx1D8dqbfpIjHctBdXGMqobLrRg9rinqiR7wv2y00lkiTvZXT');
const YOUR_DOMAIN = 'http://localhost:3000';

exports.yearPayment = async (req, res) => {
    console.log("hello");
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

    res.redirect(303, session.url);
};


exports.monthPayment = async (req, res) => {
    console.log(req);
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

    res.redirect(303, session.url);
};
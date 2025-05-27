const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

function createLineItem(vehicle, date, rate, hours) {
  return {
    price_data: {
      currency: 'usd',
      product_data: {
        name: `${vehicle} Reservation on ${date}`,
        description: `Booking for ${hours} hour(s) at $${rate}/hr`,
      },
      unit_amount: rate * 100,
    },
    quantity: hours,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { vehicle, rate, hours, date, email } = req.body;

  if (!vehicle || !rate || !hours || !date || !email) {
    return res.status(400).json({ error: 'Missing required booking details' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      customer_creation: 'always',
      line_items: [createLineItem(vehicle, date, rate, hours)],
      custom_fields: [
        {
          key: 'telephone_number',
          label: { type: 'custom', custom: 'Telephone Number (e.g. 424-333-2293)' },
          type: 'text',
          optional: false,
        },
        {
          key: 'pickup_location',
          label: { type: 'custom', custom: 'Pickup Address (e.g. Main St)' },
          type: 'text',
          optional: false,
        },
        {
          key: 'dropoff_location',
          label: { type: 'custom', custom: 'Drop-off Address (e.g. LAX)' },
          type: 'text',
          optional: false,
        }
      ],
      metadata: {
        vehicle,
        date,
        rate: rate.toString(),
        hours: hours.toString(),
      },
        success_url: 'http://gmgtransportation.com/success',
        cancel_url: 'http://gmgtransportation.com/cancel',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

/*
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

function createLineItem(vehicle, date, rate, hours) {
  return {
    price_data: {
      currency: 'usd',
      product_data: {
        name: `${vehicle} Reservation on ${date}`,
        description: `Booking for ${hours} hour(s) at $${rate}/hr`,
      },
      unit_amount: rate * 100,
    },
    quantity: hours,
  };
}

router.post('/checkout', async (req, res) => {
  const { vehicle, rate, hours, date, email } = req.body;

  if (!vehicle || !rate || !hours || !date || !email) {
    return res.status(400).json({ error: 'Missing required booking details' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      customer_creation: 'always',
      line_items: [createLineItem(vehicle, date, rate, hours)],
      custom_fields: [
        {
          key: 'telephone_number',
          label: { type: 'custom', custom: 'Telephone Number (e.g. 424-333-2293)' },
          type: 'text',
          optional: false,
        },
        {
          key: 'pickup_location',
          label: { type: 'custom', custom: 'Pickup Address (e.g. Main St)' },
          type: 'text',
          optional: false,
        },
        {
          key: 'dropoff_location',
          label: { type: 'custom', custom: 'Drop-off Address (e.g. LAX)' },
          type: 'text',
          optional: false,
        },
      ],
      metadata: {
        vehicle,
        date,
        rate: rate.toString(),
        hours: hours.toString(),
      },
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Failed to create Stripe session' });
  }
});

module.exports = router;
*/

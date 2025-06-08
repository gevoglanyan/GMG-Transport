const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

function createLineItem(vehicle, date, rate, hours) {
  return {
    price_data: {
      currency: 'usd',
      product_data: {
        name: `${vehicle} Reservation on ${date}`,
        description: `Booking for ${hours} hour(s) at $${rate}/hr`,
        images: ['https://gmgtransportation.com/images/GMG.png'],
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

  const { vehicle, rate, hours, date, email, phone } = req.body;

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
      metadata: {
        vehicle,
        date,
        rate: rate.toString(),
        hours: hours.toString(),
        phone: phone || 'N/A',
      },
      success_url: 'https://gmgtransportation.com/success',
      cancel_url: 'https://gmgtransportation.com/cancel',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({
      error: err.message || 'Stripe Checkout session creation failed',
    });
  }
}

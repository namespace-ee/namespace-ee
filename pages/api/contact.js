import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { withSentry } from '@sentry/nextjs';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net',
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    mg.messages
      .create('namespace.ee', {
        from: 'Namespace koduleht <info@namespace.ee>',
        to: ['info@namespace.ee'],
        subject: 'Kontakt: ',
        text: `Nimi: ${req.body.name}
        E-post: ${req.body.email}
        Telefon: ${req.body.phone}
        
        ${req.body.message}`,
      })
      .then(msg => {
        console.log(msg);
        res.status(201).json({ message: 'success' });
      })
      .catch(err => {
        console.log(err, 'ERROR');
        res.status(500).json({ message: 'error' });
      });
  } else {
    res.status(400).json({ message: 'error' });
  }
};

export default withSentry(handler);

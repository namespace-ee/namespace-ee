import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { withSentry } from '@sentry/nextjs';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
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
        console.log(err);
        res.status(500).json({ message: 'error' });
      });
  } else {
    res.status(400).json({ message: 'error' });
  }
};

export default withSentry(handler);

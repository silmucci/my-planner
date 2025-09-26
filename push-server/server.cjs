const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

const app = express();
app.use(cors({ origin: ['https://TUO-FRONTEND', 'http://localhost:5173'] }));
app.use(express.json());

let subs = []; // demo in memoria (ok per partire)

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

app.get('/public-key', (_, res) => res.send(process.env.VAPID_PUBLIC_KEY));

app.post('/subscribe', (req, res) => {
  const { subscription } = req.body || {};
  if (!subscription) return res.status(400).json({ error: 'missing subscription' });
  if (!subs.find(s => s.endpoint === subscription.endpoint)) subs.push(subscription);
  res.json({ ok: true });
});

app.post('/notify', async (req, res) => {
  const payload = JSON.stringify(req.body || { title: 'My Planner', body: '🔔', url: '/' });
  const results = await Promise.allSettled(subs.map(s => webpush.sendNotification(s, payload)));
  subs = subs.filter((_, i) => !(results[i].status === 'rejected' && results[i].reason?.statusCode === 410));
  res.json({ sent: results.filter(r => r.status === 'fulfilled').length });
});

app.listen(process.env.PORT || 3000, () => console.log('Push server ready'));

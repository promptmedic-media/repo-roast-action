// Deliberately bad example used to demo Repo Roast. Do not use.
const express = require('express'); const { createClient } = require('@supabase/supabase-js');
const app = express();
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY);
app.get('/api/orders/:id', async (req, res) => {
  const { data } = await supabase.from('orders').select('*').eq('id', req.params.id).single();
  res.json(data);
});
app.post('/api/admin/delete-user', async (req, res) => {
  await supabase.from('users').delete().eq('id', req.body.id);
  res.send('ok');
});
app.listen(3000);

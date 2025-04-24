const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://einruealtwrhdpmpbaik.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbnJ1ZWFsdHdyaGRwbXBiYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjUwOTMsImV4cCI6MjA0NzUwMTA5M30.UrramI9NpG8fOTJsCnolizyJu1qVHWsFlQI7luQ0VRg')

const express = require('express')
const app = express()
const port = 3000

app.get('/admins', async (req, res) => {
  const { data, error } = await supabase
  .from('admins')
  .select()

  res.json(data)
})

app.get('/barbers', async (req, res) => {
  const { data, error } = await supabase
  .from('barbers')
  .select()

  res.json(data)
})

app.get('/barbershop', async (req, res) => {
  const { data, error } = await supabase
  .from('barbershop')
  .select()

  res.json(data)
})

app.get('/clients', async (req, res) => {
  const { data, error } = await supabase
  .from('clients')
  .select()

  res.json(data)
})

app.get('/orders', async (req, res) => {
  const { data, error } = await supabase
  .from('orders')
  .select()

  res.json(data)
})

app.get('/orders_receipts', async (req, res) => {
  const { data, error } = await supabase
  .from('orders_receipts')
  .select()

  res.json(data)
})

app.get('/receipts', async (req, res) => {
  const { data, error } = await supabase
  .from('receipts')
  .select()

  res.json(data)
})

app.get('/services', async (req, res) => {
  const { data, error } = await supabase
  .from('services')
  .select()

  res.json(data)
})

app.post('/admins', (req, res) => {
  res.send('所有的人都不是人 ты крутой')
})

app.delete('/admins/:id', async (req, res) => {
  const response = await supabase
  .from('admins')
  .delete()
  .eq('id', req.params.id)

  res.json('ты где то просчитался в ' + req.params.id)
})

app.put('/admins', (req, res) => {
  res.send('所有的人都不是人')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
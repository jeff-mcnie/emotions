import request from 'superagent'

export async function getEntriesApi() {
  const entries = await request.get('/v1/entries')
  return entries.body
}
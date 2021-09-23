const db = {
  'user': [
    { id: 1, name: "adranuz" },
    { id: 2, name: "adreanzoews" }
  ]
}

async function list(table) {
  return db[table]
}
async function get(table, id) {
  let col = await list(table)
  return col.find(item => item.id == id) || null
}
async function upsert(table, data) {
  let col = await list(table)
  let onlyIdsArray = await col.map(({ id }) => id)
  let biggerId = await Math.max.apply(null, onlyIdsArray)
  return db[table].push({ id: ++biggerId, ...data })
}
async function remove(table, id) {
  let col = await list(table)
  col = await col.filter(it => it.id != id)
  db[table] = [...col]
}
module.exports = {
  list,
  get,
  upsert,
  remove
}
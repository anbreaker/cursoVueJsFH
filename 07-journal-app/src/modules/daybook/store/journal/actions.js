import journalApi from "@/api/journalApi"
// export const myAction = async ({commit}) => {
// }

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json")

  if (!data) {
    commit("setEntries", [])
    return
  }

  const entries = []
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    })
  }

  commit("setEntries", entries)
}

export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry

  const dataToSave = { date, picture, text }

  const response = await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
  console.log(response)

  commit("updateEntry", { ...entry })
}

export const createEntry = async ({ commit }, { date, picture, text }) => {
  const dataToSave = { date, picture, text }

  const { data } = await journalApi.post("/entries.json", dataToSave)

  dataToSave.id = data.name

  commit("addEntry", dataToSave)

  return data.name
}

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`)

  commit("deleteEntry", id)

  return id
}

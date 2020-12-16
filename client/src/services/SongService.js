const baseURL = 'http://localhost:3001/api/songs/'

export default {
    getSongs() {
      return fetch(baseURL)
        .then(res => res.json())
    },
  
    postSong(payload) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
    },
  
    deleteSong(id) {
      return fetch(baseURL + id, {
        method: 'DELETE'
      })
    }
  }
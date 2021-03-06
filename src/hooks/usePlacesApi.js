import { useState } from 'react'
import http from '../services/http'

function usePlacesApi() {
  const [place, setPlace] = useState(null)
  const [places, setPlaces] = useState([])
  const [isLoading, setLoading] = useState(false)

  async function fetchAllPlaces() {
    setLoading(true)

    const { data } = await http.get('/places')

    setPlaces(data)
    setLoading(false)
  }

  async function fetchOnePlace(id) {
    setLoading(true)

    const { data } = await http.get(`/places/${id}`)

    setPlace(data)
    setLoading(false)
  }

  async function deletePlace(id) {
    setLoading(true)
    await http.delete(`/places/${id}`)
    setLoading(false)
  }

  async function savePlace({ id, ...placeData }) {
    setLoading(true)

    const { data } = id
      ? await http.put(`/places/${id}`, placeData)
      : await http.post('/places', placeData)

    setPlace(data)
    setLoading(false)
  }

  return {
    place,
    places,
    isLoading,
    fetchAllPlaces,
    fetchOnePlace,
    deletePlace,
    savePlace,
  }
}

export default usePlacesApi

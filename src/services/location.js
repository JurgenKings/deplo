// Dependencies
import axios from "axios"

const detectLocation = async (data) => {
  try {
    const resp = await axios.get("https://ipapi.co/json/")
    return { data: resp.data }
  } catch (res) {
    return {
      error: res?.response?.data?.error || "Hubo un error detectando su ubicacion"
    }
  }
}

export {
  detectLocation
}
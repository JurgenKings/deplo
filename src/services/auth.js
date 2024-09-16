// Dependencies
import axios from "axios"

const login = async (data) => {
  try {
    const resp = await axios.post("auth/login", data)
    return { data: resp.data }
  } catch (res) {
    return {
      error: res?.response?.data?.error || "Hubo un error en el inicio de sesion"
    }
  }
}

const register = async (data) => {
  try {
    const resp = await axios.post("auth/register", data)
    return { data: resp.data }
  } catch (res) {
    return {
      error: res?.response?.data?.error || "Hubo un error en el registro del usuario"
    }
  }
}


const forgetMyPassword = async (data) => {
  try {
    const res = await axios.post("/api/auth/recovery-password", data)
    return res.data
  } catch (error) {
    return { error: error.response.data.error || "Hubo un error en el envio del correo de recuperacion" }
  }
}

const changePassword = async (data, id) => {
  try {
    const res = await axios.patch(`api/auth/change-password/${id}`, data)
    return res.data
  } catch (res) {
    return { error: res?.response?.data?.error || "Hubo un error al intentar cambiar la contraseña" }
  }
}

export {
  login,
  forgetMyPassword,
  changePassword,
  register
}

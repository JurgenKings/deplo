import axios from "axios"

const getProducts = async () => {
  try {
    const res = await axios.get("products")
    return { data: res.data }
  } catch (res) {
    return {
      error: true,
      data: []
    }
  }
}

const getProduct = async (id) => {
  try {
    const res = await axios.get(`products/${id}`)
    return { data: res.data }
  } catch (res) {
    return {
      error: true,
      data: []
    }
  }
}

const deleteProduct = async (id) => {
  try {
    await axios.delete(`products/${id}`)
    return true
  } catch (res) {
    return false
  }
}

const editProduct = async (data, id) => {
  try {
    await axios.patch(`products/${id}`, data)
    return true
  } catch (res) {
    return false
  }
}

export {
  getProducts,
  getProduct,
  deleteProduct,
  editProduct
}

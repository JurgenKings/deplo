import React from "react"

const validateFullName = (name) => {
  return name === "" || name.length <= 50
}

const validateEmail = (email) => {
  if (email === "") return true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 100
}

const validatePassword = (password) => {
  if (password === "") return true
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,20})/
  return passwordRegex.test(password)
}

const validateAge = (birthDate) => {
  if (birthDate === "") return true
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const m = today.getMonth() - birthDateObj.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--
  }
  return age >= 18
}

const validatePhoneNumber = (num) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,20})/
  return re.test(num)
}

export { validateFullName, validateEmail, validatePassword, validateAge, validatePhoneNumber }
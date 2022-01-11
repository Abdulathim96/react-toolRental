import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import ToolRentelContext from "./utils/ToolRentelContext"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { toast, ToastContainer } from "react-toastify"
import AllOffers from "./pages/AllOffers"
import AllRequests from "./pages/AllRequests"
import OneOffer from "./pages/OneOffer"
import OneRequests from "./pages/OneRequests"

function App() {
  const [offers, setOffers] = useState([])
  const [requests, setRequests] = useState([])
  const [categorys, setCategorys] = useState([])
  const [subCategories, setsubCategories] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()
  /* GET */
  const getOffers = async () => {
    const response = await axios.get("http://localhost:5000/api/offers")
    setOffers(response.data)
  }

  const getRequests = async () => {
    const response = await axios.get("http://localhost:5000/api/requests")
    setRequests(response.data)
  }

  const getCategorys = async () => {
    const response = await axios.get("http://localhost:5000/api/categorys")
    setCategorys(response.data)
  }

  const getProfile = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: localStorage.tokenOffers,
      },
    })
    setProfile(response.data)
  }
  /* GET */

  useEffect(() => {
    getOffers()
    getRequests()
    getCategorys()
    if (localStorage.tokenOffers) getProfile()
  }, [])

  /**OFFER */
  const addOffer = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })
      const subCategories = []
      form.elements.subCategories.forEach(subCategory => {
        if (subCategory.checked) {
          subCategories.push(subCategory.value)
        }
      })


      const offerBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        price: form.elements.price.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
        subCategories: subCategories,
      }
      await axios.post(`http://localhost:5000/api/offers`, offerBody, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      getOffers()
      toast.success("add offer success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editOffer = async (e, offerId) => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })

      const offerBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        price: form.elements.price.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
        subCategories: subCategories,
      }
      await axios.put(`http://localhost:5000/api/offers/${offerId}`, offerBody, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      getOffers()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteOffer = async offerId => {
    try {
      await axios.delete(`http://localhost:5000/api/offers/${offerId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardOffers,
        },
      })
      toast.success("offer deleted")
      getOffers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /**OFFER */
  //________________________________________________________________________________________________________________________.
  /**REQuESTS */
  const addRequest = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })

      const requestBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
      }
      await axios.post(`http://localhost:5000/api/requests`, requestBody, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      getRequests()
      toast.success("add request success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editRequests = async (e, requestId) => {
    e.preventDefault()
    try {
      const form = e.target

      const categorys = []
      form.elements.categorys.forEach(category => {
        if (category.checked) {
          categorys.push(category.value)
        }
      })

      const requestBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        photo: form.elements.photo.value,
        phoneNumber: form.elements.phoneNumber.value,
        categorys: categorys,
      }
      await axios.put(`http://localhost:5000/api/requests/${requestId}`, requestBody, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      getRequests()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteRequests = async requestId => {
    try {
      await axios.delete(`http://localhost:5000/api/requests/${requestId}`, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      toast.success("request deleted")
      getOffers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /**REQuESTS */

  /**Comment */

  const addComments = async (e, offerId) => {
    e.preventDefault()
    try {
      const form = e.target
      const commentBody = {
        comment: form.elements.comment.value,
      }

      form.reset()
      await axios.post(`http://localhost:5000/api/offers/${offerId}/comments`, commentBody, {
        headers: {
          Authorization: localStorage.tokenOffers,
        },
      })
      getOffers()
      toast.success("Comment added")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

      const token = response.data
      localStorage.tokenOffers = token

      getProfile()
      console.log("login success")

      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenOffers")
    console.log("logout success")
  }

  const store = {
    offers,
    addOffer,
    editOffer,
    deleteOffer,
    requests,
    addRequest,
    editRequests,
    deleteRequests,
    categorys,
    addComments,
    signup,
    login,
    logout,
    profile,
  }

  return (
    <ToolRentelContext.Provider value={store}>
      <ToastContainer />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:offerId" element={<OneOffer />} />
        <Route path="/request/:requestId" element={<OneRequests />} />
        <Route path="/offers" element={<AllOffers />} />
        <Route path="/requests" element={<AllRequests />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ToolRentelContext.Provider>
  )
}

export default App

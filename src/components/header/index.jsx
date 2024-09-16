import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";
import RecoveryPasswordModal from "../RecoveryPasswordModal";
import Loading from "../Loading";
import Notifications from "../Notifications";
import { detectLocation } from "../../services/location"
import "./Header.css"
import { BranchIcon, LocationIcon } from "../CustomIcons";

const fakeData = [
  {
    name: "Ofertas Especiales",
    link: "shop_grid_3c_sidebar.html",
    subCategories: []
  },
  {
    name: "Más Vendidas",
    link: "shop_grid_3c_sidebar.html",
    subCategories: []
  },
  {
    name: "Nuevas llegadas",
    link: "shop_grid_3c_sidebar.html",
    subCategories: []
  },
  {
    name: "Vitaminas y Suplementos",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Vitamins A-E",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby Food1", link: "#" },
          { name: "Sub Sub Baby AFood2", link: "#" },
          { name: "Sub Sub Baby a3", link: "#" },
          { name: "Sub Sub Baby Food4", link: "#" },
          { name: "Sub Sub Baby AFood5", link: "#" },
          { name: "Sub Sub Baby a6", link: "#" },
          { name: "Sub Sub Baby Food7", link: "#" },
          { name: "Sub Sub Baby AFood8", link: "#" },
          { name: "Sub Sub Baby a9", link: "#" },
          { name: "Sub Sub Baby Food10", link: "#" },
          { name: "Sub Sub Baby AFood11", link: "#" },
          { name: "Sub Sub Baby a12", link: "#" },
        ]
      },
      {
        name: "Multivitaminas y Minerales",
        link: "#",
        subSubCategorias: []
      },
      {
        name: "Salud de los Huesos",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby Food13", link: "#" },
          { name: "Sub Sub Baby AFood14", link: "#" },
          { name: "Sub Sub Baby a15", link: "#" },
          { name: "Sub Sub Baby Food16", link: "#" },
        ]
      },
    ]
  },
  {
    name: "Belleza y Cuidado Personal",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Skincare",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby Food17", link: "#" },
          { name: "Sub Sub Baby AFood18", link: "#" },
          { name: "Sub Sub Baby a19", link: "#" },
          { name: "Sub Sub Baby Food20", link: "#" },
          { name: "Sub Sub Baby AFood21", link: "#" },
          { name: "Sub Sub Baby a22", link: "#" },
        ]
      },
      {
        name: "Haircare",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby AFood23", link: "#" },
          { name: "Sub Sub Baby a24", link: "#" },
        ]
      },
      {
        name: "Makeup",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby Food25", link: "#" },
          { name: "Sub Sub Baby AFood26", link: "#" },
          { name: "Sub Sub Baby a27", link: "#" },
        ]
      }
    ]
  },
  {
    name: "Nutrición Deportiva",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Protein Powders",
        link: "#"
      },
      {
        name: "Pre-Workout Supplements",
        link: "#",
        subSubCategorias: [
          { name: "Sub Sub Baby Food28", link: "#" },
          { name: "Sub Sub Baby AFood29", link: "#" },
          { name: "Sub Sub Baby a30", link: "#" },
          { name: "Sub Sub Baby Food31", link: "#" },
          { name: "Sub Sub Baby AFood32", link: "#" },
          { name: "Sub Sub Baby a33", link: "#" },
          { name: "Sub Sub Baby Food34", link: "#" },
          { name: "Sub Sub Baby AFood35", link: "#" },
          { name: "Sub Sub Baby a36", link: "#" },
          { name: "Sub Sub Baby Food37", link: "#" },
          { name: "Sub Sub Baby AFood38", link: "#" },
          { name: "Sub Sub Baby a39", link: "#" },
        ]
      },
      {
        name: "BCAAs",
        link: "#"
      }
    ]
  },
  {
    name: "Suplementos Herbarios",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Turmeric40",
        link: "#"
      },
      {
        name: "Ashwagandha41",
        link: "#"
      },
      {
        name: "Ginseng42",
        link: "#"
      }
    ]
  },
  {
    name: "Control de Peso",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Fat Burners43",
        link: "#"
      },
      {
        name: "Appetite Suppressants44",
        link: "#"
      },
      {
        name: "Meal Replacements45",
        link: "#"
      }
    ]
  },
  {
    name: "Bebes y Niños",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Category titlr46",
        subSubCategorias: [
          { name: "Sub Sub Baby Food47", link: "#" },
          { name: "Sub Sub Baby AFood48", link: "#" },
          { name: "Sub Sub Baby a49", link: "#" },
        ]
      },
      {
        name: "Baby Food50",
        link: "#",
        subSubCategorias: [
          { name: "Sub Su3aweb Baby Food51", link: "#" },
          { name: "Sub Sudsab Baby AFood52", link: "#" },
          { name: "Sub Sudsab Baby a53", link: "#" },
        ]
      },
      { name: "Sub Kids Multivitamins54", link: "#" },
    ]
  },
  {
    name: "Organico y Natural55",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "Organic Snacks",
        link: "#",
        subSubCategorias: [
          { name: "Sub Su3aweb Baby Food56", link: "#" },
          { name: "Sub Sudsab Baby AFood57", link: "#" },
          { name: "Sub Sudsab Baby a58", link: "#" },
        ]
      },
      {
        name: "Natural Sweeteners59",
        link: "#"
      },
    ]
  },
  {
    name: "Suministros Médicos60",
    link: "shop_filter_drawer.html",
    subCategories: [
      {
        name: "First Aid61",
        link: "#"
      },
      {
        name: "Mobility Aids62",
        link: "#"
      },
      {
        name: "Wound Care63",
        link: "#"
      }
    ]
  }
]

const fakeProduct = [
  {
    id: 1,
    name: "Twisse Ultiboost Vitamin C Chewable Natural Orange",
    category: "Multivitamins & Minerals",
    imagen: "images/439x440_img1.jpg",
    precio: 9.95,
    rating: 5,
    stockLevel: 20
  },
  {
    id: 2,
    name: "Redmores Vitamin C 1000, Echinacea + Zinc Effervescent Tab X 10",
    category: "Vitamins A-E",
    imagen: "images/439x440_img2.jpg",
    precio: 6.99,
    rating: 4,
    stockLevel: 15
  },
  {
    id: 3,
    name: "South Naturals Complete Omega Lemon Soft Gels X 60",
    category: "Fish Oil & Omega 3, 6, 9",
    imagen: "images/439x440_img3.jpg",
    precio: 46.59,
    rating: 5,
    stockLevel: 75
  },
  {
    id: 4,
    name: "Vostelin Vitamin D3 (1000IU) Cap X 130",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img4.jpg",
    precio: 20.65,
    rating: 5,
    stockLevel: 40
  },
  {
    id: 5,
    name: "Twisse Ultiboost Magnesium Tab X 60",
    category: "Magnesium",
    imagen: "images/439x440_img5.jpg",
    precio: 22.35,
    rating: 4,
    stockLevel: 40
  },
  {
    id: 6,
    name: "Pharmacy Action Vitamin D 1000IU Cap X 250",
    category: "Vitamins A-E",
    imagen: "images/439x440_img6.jpg",
    precio: 9.95,
    rating: 4.5,
    stockLevel: 75
  },
  {
    id: 7,
    name: "Life Space Broad Spectrum Probiotic Value Pack Cap X 90",
    category: "Probiotics",
    imagen: "images/439x440_img7.jpg",
    precio: 41.59,
    rating: 5,
    stockLevel: 10
  },
  {
    id: 8,
    name: "Natures Way Kids Smart Vita Gummies Omega + Multi X 50",
    category: "Multivitamins & Minerals",
    imagen: "images/439x440_img8.jpg",
    precio: 14.45,
    rating: 4,
    stockLevel: 40
  },
  {
    id: 9,
    name: "Blackmores Bio C 1000mg Tab X 150",
    category: "Vitamins A-E",
    imagen: "images/439x440_img1.jpg",
    precio: 24.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 10,
    name: "Swisse Ultiboost High Strength Cranberry 25,000mg Cap X 30",
    category: "Herbal Supplements",
    imagen: "images/439x440_img2.jpg",
    precio: 17.99,
    rating: 4,
    stockLevel: 55
  },
  {
    id: 11,
    name: "Ostelin Vitamin D3 1000IU Cap X 250",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img3.jpg",
    precio: 19.95,
    rating: 5,
    stockLevel: 70
  },
  {
    id: 12,
    name: "Blackmores Glucosamine Sulfate 1500 One-A-Day Tab X 180",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img4.jpg",
    precio: 39.99,
    rating: 4.5,
    stockLevel: 45
  },
  {
    id: 13,
    name: "Natures Own Mega B Complex Tab X 125",
    category: "Vitamins A-E",
    imagen: "images/439x440_img5.jpg",
    precio: 15.99,
    rating: 4,
    stockLevel: 65
  },
  {
    id: 14,
    name: "Swisse Ultiboost Calcium + Vitamin D Tab X 150",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4.5,
    stockLevel: 50
  },
  {
    id: 15,
    name: "Blackmores CoQ10 150mg Cap X 30",
    category: "Heart Health",
    imagen: "images/439x440_img7.jpg",
    precio: 29.99,
    rating: 5,
    stockLevel: 40
  },
  {
    id: 16,
    name: "Natures Way Complete Daily Multivitamin Tab X 200",
    category: "Multivitamins & Minerals",
    imagen: "images/439x440_img8.jpg",
    precio: 34.95,
    rating: 4.5,
    stockLevel: 55
  },
  {
    id: 17,
    name: "Swisse Ultiboost Hair Skin Nails+ Tab X 60",
    category: "Beauty Supplements",
    imagen: "images/439x440_img1.jpg",
    precio: 19.99,
    rating: 4,
    stockLevel: 70
  },
  {
    id: 18,
    name: "Blackmores Omega Triple Concentrated Fish Oil Cap X 150",
    category: "Fish Oil & Omega 3, 6, 9",
    imagen: "images/439x440_img2.jpg",
    precio: 44.99,
    rating: 5,
    stockLevel: 60
  },
  {
    id: 19,
    name: "Natures Own Liver Tonic Tab X 70",
    category: "Herbal Supplements",
    imagen: "images/439x440_img3.jpg",
    precio: 14.95,
    rating: 4,
    stockLevel: 45
  },
  {
    id: 20,
    name: "Swisse Ultiboost Sleep Tab X 60",
    category: "Sleep Aid",
    imagen: "images/439x440_img4.jpg",
    precio: 21.99,
    rating: 4.5,
    stockLevel: 50
  },
  {
    id: 21,
    name: "Blackmores Bio Zinc Tab X 84",
    category: "Minerals",
    imagen: "images/439x440_img5.jpg",
    precio: 11.99,
    rating: 4,
    stockLevel: 75
  },
  {
    id: 22,
    name: "Natures Way Kids Smart Vita Gummies Calcium + Vit D3 X 60",
    category: "Childrens Health",
    imagen: "images/439x440_img6.jpg",
    precio: 13.95,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 23,
    name: "Swisse Ultiboost Liver Detox Tab X 120",
    category: "Detox & Cleanse",
    imagen: "images/439x440_img7.jpg",
    precio: 26.99,
    rating: 4,
    stockLevel: 55
  },
  {
    id: 24,
    name: "Blackmores Pregnancy & Breast-Feeding Gold Cap X 120",
    category: "Womens Health",
    imagen: "images/439x440_img8.jpg",
    precio: 39.95,
    rating: 5,
    stockLevel: 40
  },
  {
    id: 25,
    name: "Natures Own Glucosamine 1500 One-A-Day Tab X 180",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img1.jpg",
    precio: 34.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 26,
    name: "Swisse Ultiboost Prostate Tab X 50",
    category: "Mens Health",
    imagen: "images/439x440_img2.jpg",
    precio: 23.95,
    rating: 4,
    stockLevel: 50
  },
  {
    id: 27,
    name: "Blackmores Probiotics+ Dairy Free Cap X 30",
    category: "Probiotics",
    imagen: "images/439x440_img3.jpg",
    precio: 24.99,
    rating: 4.5,
    stockLevel: 70
  },
  {
    id: 28,
    name: "Natures Way Complete Daily Multivitamin for 50+ Years Tab X 100",
    category: "Multivitamins & Minerals",
    imagen: "images/439x440_img4.jpg",
    precio: 29.95,
    rating: 5,
    stockLevel: 55
  },
  {
    id: 29,
    name: "Swisse Ultiboost Immune Tab X 60",
    category: "Immune Support",
    imagen: "images/439x440_img5.jpg",
    precio: 18.99,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 30,
    name: "Blackmores Vitamin B12 Tab X 75",
    category: "Vitamins A-E",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4,
    stockLevel: 75
  },
  {
    id: 31,
    name: "Natures Own Mega Magnesium Tab X 60",
    category: "Magnesium",
    imagen: "images/439x440_img7.jpg",
    precio: 19.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 32,
    name: "Swisse Ultiboost Stress Relief Tab X 60",
    category: "Stress & Anxiety Relief",
    imagen: "images/439x440_img8.jpg",
    precio: 22.95,
    rating: 4,
    stockLevel: 50
  },
  {
    id: 33,
    name: "Blackmores Folate Tab X 90",
    category: "Womens Health",
    imagen: "images/439x440_img1.jpg",
    precio: 12.99,
    rating: 5,
    stockLevel: 70
  },
  {
    id: 34,
    name: "Natures Way Kids Smart Vita Gummies Multivitamin for Fussy Eaters X 60",
    category: "Childrens Health",
    imagen: "images/439x440_img2.jpg",
    precio: 14.95,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 35,
    name: "Swisse Ultiboost High Strength Cranberry 30,000mg Cap X 30",
    category: "Womens Health",
    imagen: "images/439x440_img3.jpg",
    precio: 19.99,
    rating: 4,
    stockLevel: 55
  },
  {
    id: 36,
    name: "Blackmores Bio Magnesium Tab X 100",
    category: "Magnesium",
    imagen: "images/439x440_img4.jpg",
    precio: 21.95,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 37,
    name: "Natures Own High Strength Ginkgo 6000mg Cap X 60",
    category: "Brain Health",
    imagen: "images/439x440_img5.jpg",
    precio: 29.99,
    rating: 4,
    stockLevel: 50
  },
  {
    id: 38,
    name: "Swisse Ultiboost Calcium + Vitamin D Chewable Tab X 60",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4.5,
    stockLevel: 70
  },
  {
    id: 39,
    name: "Blackmores Evening Primrose Oil 1000mg Cap X 100",
    category: "Womens Health",
    imagen: "images/439x440_img7.jpg",
    precio: 24.99,
    rating: 5,
    stockLevel: 55
  },
  {
    id: 40,
    name: "Natures Way Metabolift with Garcinia Cambogia Tab X 90",
    category: "Weight Management",
    imagen: "images/439x440_img8.jpg",
    precio: 34.95,
    rating: 4,
    stockLevel: 45
  },
  {
    id: 41,
    name: "Swisse Ultiboost Odourless Fish Oil 1500mg Cap X 200",
    category: "Fish Oil & Omega 3, 6, 9",
    imagen: "images/439x440_img1.jpg",
    precio: 29.99,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 42,
    name: "Blackmores Celery 3000 Tab X 50",
    category: "Herbal Supplements",
    imagen: "images/439x440_img2.jpg",
    precio: 15.95,
    rating: 4,
    stockLevel: 60
  },
  {
    id: 43,
    name: "Natures Own Glucosamine 750mg + Chondroitin 400mg Tab X 90",
    category: "Bone & Joints Health",
    imagen: "images/439x440_img3.jpg",
    precio: 26.99,
    rating: 4.5,
    stockLevel: 55
  },
  {
    id: 44,
    name: "Swisse Ultiboost Grape Seed 14,250mg Tab X 60",
    category: "Antioxidants",
    imagen: "images/439x440_img4.jpg",
    precio: 19.95,
    rating: 4,
    stockLevel: 70
  },
  {
    id: 45,
    name: "Blackmores Digestive Bio Balance Cap X 30",
    category: "Digestive Health",
    imagen: "images/439x440_img5.jpg",
    precio: 22.99,
    rating: 4.5,
    stockLevel: 50
  }
]

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  const [isRecoveryModalOpen, setIsRecoveryModalOpen] = useState(false)
  const [isUserLoguedIn, setisUserLoguedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedCity, setSelectedCity] = useState("")
  const [branches, setBranches] = useState([])
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase()
    setSearchText(text)

    const filteredSuggestions = fakeProduct.filter(
      (product) =>
        product.name.toLowerCase().startsWith(text) ||
        product.category.toLowerCase().startsWith(text)
    )
    setSuggestions(filteredSuggestions)
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex === null ? 0 : Math.min(prevIndex + 1, suggestions.length - 1)
      )
    } else if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex === null ? suggestions.length - 1 : Math.max(prevIndex - 1, 0)
      )
    } else if (e.key === "Enter" && selectedSuggestionIndex !== null) {
      const selectedProduct = suggestions[selectedSuggestionIndex]
      navigate(`/detalle/${selectedProduct.name}`)
      setSearchText("")
    }
  }

  const handleMouseEnter = (index) => {
    setSelectedSuggestionIndex(index)
  }

  const highlightText = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase())
    if (index === 0) {
      return (
        <>
          <span style={{ backgroundColor: "yellow" }}>
            {text.substring(0, query.length)}
          </span>
          {text.substring(query.length)}
        </>
      )
    }
    return text
  }

  useEffect(() => {
    const detectLocationEffect = async () => {
      try {
        const response = await detectLocation()
        setSelectedCity(response.data.city)
      } catch (error) {
        console.error("Error al detectar la ubicación:", error)
        setSelectedCity("No se pudo detectar la ubicación")
      }
    }
    detectLocationEffect()
  }, [])

  // Aquí guardaríamos la preferencia en la sesión del usuario
  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  useEffect(() => {
    // Simular obtención de sucursales basadas en la ciudad seleccionada
    // Esto sera una llamada a la API
    const fetchBranches = async () => {
      const branchesByCity = {
        "Nueva Esparta": ["Porlamar", "Juan griego"],
        "Maracay": ["Centro", "Este"],
        "Caracas": ["Chacao", "Sabana Grande", "La Candelaria"]
      }
      setBranches(branchesByCity[selectedCity] || [])
    }

    if (selectedCity) {
      fetchBranches()
    }
  }, [selectedCity])

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  const goRegisterFromLogin = () => {
    setIsModalOpen(false)
    setIsRegisterModalOpen(true)
  }

  const goRecoverPasswordFromLogin = () => {
    setIsModalOpen(false)
    setIsRecoveryModalOpen(true)
  }

  return (
    <>
      <header id="mad-header" className="mad-header">
        <div className="mad-pre-header">
          <div className="container">
            <div className="mad-header-items">
              <div className="mad-header-item">
                <div className="mad-our-info">
                  <div className="mad-info">
                    Servicio al cliente: <span>+58412-1968978</span>
                  </div>
                  <div className="mad-info">
                    Contactanos: <span>info@megafarma.com</span>
                  </div>
                </div>
              </div>
              <div className="mad-header-item">
                <div className="mad-quick-links">
                  <span>&nbsp;|&nbsp;</span>
                  <a href="/preguntas-frecuentes" className="mad-link">
                    FAQ
                  </a>
                  <span>&nbsp;|&nbsp;</span>
                  <a href="/nosotros" className="mad-link">
                    Nosotros
                  </a>
                  <span>&nbsp;|&nbsp;</span>
                  <a href="/contacto" className="mad-link">
                    Contacto
                  </a>
                  {!isUserLoguedIn ? (
                    <>
                      <span>&nbsp;|&nbsp;</span>
                      <a className="mad-link"
                        onClick={() => {
                          setIsModalOpen(true)
                        }}>
                        Iniciar sesión
                      </a>
                    </>
                  ) : (
                    <>
                      <span>&nbsp;|&nbsp;</span>
                      <a className="mad-link"
                        onClick={() => {
                          setisUserLoguedIn(false)
                        }}>
                        Cerrar sesión
                      </a>
                    </>
                  )}

                  {!isUserLoguedIn && (
                    <>
                      <span>&nbsp;|&nbsp;</span>
                      <a className="mad-link"
                        onClick={() => {
                          setIsRegisterModalOpen(true)
                        }}>
                        Registrarse
                      </a>
                    </>
                  )}
                </div>

                <div className="mad-config">
                  <div className="mad-dropdown mad-lang">
                    <a href="#" className="mad-dropdown-title">
                      {selectedCity || "Seleccionar Ciudad"}
                    </a>
                    <ul className="mad-dropdown-element">
                      <li>
                        <a
                          style={{
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            gap: "4px"
                          }}
                          href="#"
                          onClick={() => handleCityChange("Margarita")}
                        >
                          <LocationIcon />
                          Nueva Esparta
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px"
                          }}
                          href="#"
                          onClick={() => handleCityChange("Maracay")}
                        >
                          <LocationIcon />
                          Maracay
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px"
                          }}
                          href="#"
                          onClick={() => handleCityChange("Caracas")}
                        >
                          <LocationIcon />
                          Caracas
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mad-dropdown mad-price">
                    <a href="#" className="mad-dropdown-title">
                      Sucursales
                    </a>
                    <ul className="mad-dropdown-element">
                      {branches.map((branch, index) => (
                        <li key={index}>
                          <a
                            style={{
                              display: "flex",
                              alignItems: "center",
                              whiteSpace: "nowrap",
                              gap: "4px"
                            }}
                            href="#">
                            <BranchIcon />
                            {branch}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mad-header-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2 col-sm-6">
                <a href="/" className="mad-logo">
                  <img src="/public/images/logo2.png" alt="" />
                </a>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="mad-search-section" style={{ border: "2px solid #003f82", backgroundColor: 'bslue' }}>
                  <div className="jorge-input-container-suggestion">
                    <div className="mad-col">
                      <input
                        type="text"
                        placeholder="Busca un producto"
                        value={searchText}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                      />
                    </div>

                  </div>
                  {
                    searchText && (
                      <div className="suggestions">
                        {suggestions.map((product, index) => (
                          <div
                            key={index}
                            className={index === selectedSuggestionIndex ? "suggestion selected" : "suggestion"}
                            onClick={() => {
                              setSearchText("")
                              navigate(`/detalle/${product.name}`)
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                          >
                            <p>
                              {highlightText(product.name, searchText)}
                              {" - "}
                              {highlightText(product.category, searchText)}
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  <div className="mad-col">
                    <div className="mad-custom-select">
                      <select data-default-text="Todas las categorias">
                        <option>Vitamins & Supplements</option>
                        <option>Personal Care & Beauty</option>
                        <option>Medicines</option>
                        <option>Health & First Aids</option>
                        <option>Sexual Health</option>
                        <option>Weight Loss & Fitness</option>
                        <option>Mum & Baby</option>
                        <option>Organic & Gluten Free</option>
                        <option>Home & Pets</option>
                        <option>Travel</option>
                        <option>Parfumes & Gifts</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit">
                    <i className="material-icons" style={{ color: "#003f82" }}>search</i>
                  </button>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="mad-actions">
                  <div className="mad-col">
                    {/* <a href="/favoritos"> */}
                    <Link to="/favoritos">
                      <i className="material-icons">favorite_border</i>
                      <span>5</span>
                    </Link>
                  </div>

                  <div className="mad-col mad-dropdown-cart">
                    <button className="mad-dropdown-title" id="mad-filter-toggle-canvas">
                      <i className="material-icons-outlined"> notifications
                        <span>2</span>
                      </i>
                    </button>
                    <Notifications />
                  </div>

                  <div className="mad-col mad-dropdown-cart">
                    <a href="/carrito" className="mad-dropdown-title">
                      <i className="material-icons-outlined">shopping_bag
                        <span>3</span>
                      </i>
                      <span className="price-text">{ }</span>
                    </a>
                    <div className="shopping-cart mad-dropdown-element">
                      <div className="mad-products hr-type style-2">
                        <div className="mad-product">
                          <button className="mad-close-item">
                            <i className="material-icons-outlined">close</i>
                          </button>
                          <div className="mad-product-image">
                            <img src="/images/96x96_product1.jpg" alt="" />
                          </div>
                          <div className="mad-col">
                            <div className="mad-product-description">
                              <h6 className="mad-product-title">
                                <a href="shop_layout_boxed.html" className="mad-link">
                                  John Plunkett SuperFade Face Cream ...
                                </a>
                              </h6>
                            </div>
                            <div className="mad-product-info">
                              <div className="mad-info-item">
                                <div className="mad-product-price">
                                  1 x $17.99
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mad-product">
                          <button className="mad-close-item">
                            <i className="material-icons-outlined">close</i>
                          </button>
                          <div className="mad-product-image">
                            <img src="/images/96x96_product2.jpg" alt="" />
                          </div>
                          <div className="mad-col">
                            <div className="mad-product-description">
                              <h6 className="mad-product-title">
                                <a href="shop_layout_boxed.html" className="mad-link">
                                  Minea For Men Extra Moisturising...
                                </a>
                              </h6>
                            </div>
                            <div className="mad-product-info">
                              <div className="mad-info-item">
                                <div className="mad-product-price">
                                  1 x $7.95
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mad-product">
                          <button className="mad-close-item">
                            <i className="material-icons-outlined">close</i>
                          </button>
                          <div className="mad-product-image">
                            <img src="/images/96x96_product3.jpg" alt="" />
                          </div>
                          <div className="mad-col">
                            <div className="mad-product-description">
                              <h6 className="mad-product-title">
                                <a href="shop_layout_boxed.html" className="mad-link">
                                  Posken Intensive Moisture Body...
                                </a>
                              </h6>
                            </div>
                            <div className="mad-product-info">
                              <div className="mad-info-item">
                                <div className="mad-product-price">
                                  1 x $12.99
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sc-footer">
                        <div className="subtotal">
                          Subtotal: $38.93
                        </div>
                        <div className="btn-set">
                          <a href="#" className="btn btn-small btn-style-7">
                            Ver Carrito
                          </a>
                          <a href="shop_checkout.html" className="btn btn-small">
                            Procesar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mad-col">
                    {/* <a href="/mi-cuenta"> */}
                    <Link to="/mi-cuenta">
                      <i className="material-icons">person_outline</i>
                    </Link>
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mad-header-section--sticky-xl">
          <div className="container">
            <div className="mad-header-items">
              <div className="mad-header-item">
                <div id="mad-browse-cat" className="mad-browse-cat">
                  <button id="mad-cat-toggle" className="mad-cat-toggle">
                    Categorías
                  </button>
                  <ul className="mad-cat-menu">
                    {
                      loading && <Loading />
                    }
                    {
                      !loading && (
                        fakeData?.map((item) => (
                          item?.subCategories?.length !== 0
                            ? (
                              <li className="with-sub-menu" key={item.name}>
                                <a href="shop_filter_drawer.html">
                                  {item.name}
                                </a>
                                <ul className="sub-menu" data-bg-image-src="/template/images/suppliments.png">
                                  {
                                    item?.subCategories?.map((subSubCategoria) => (
                                      <li key={subSubCategoria.name}>
                                        <ul>
                                          {
                                            subSubCategoria?.subSubCategorias?.length !== 0 ? (
                                              <div className="sub-title">
                                                <b>
                                                  {subSubCategoria.name}
                                                </b>
                                              </div>
                                            ) : (
                                              subSubCategoria.name
                                            )
                                          }
                                          {
                                            subSubCategoria?.subSubCategorias?.length !== 0 && (
                                              subSubCategoria?.subSubCategorias?.map((subSubSubCategoria) => (
                                                <li key={subSubSubCategoria.name}>
                                                  <a href="#">
                                                    {subSubSubCategoria.name}
                                                  </a>
                                                </li>
                                              ))
                                            )
                                          }
                                        </ul>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </li>
                            )
                            : (
                              <li key={item.name}>
                                <a href="shop_grid_3c_sidebar.html">
                                  <b>
                                    {item.name}
                                  </b>
                                </a>
                              </li>
                            )
                        ))
                      )
                    }
                    {
                      !loading && (
                        <li>
                          <a id="mad-show-cat" href="#">
                            Mostrar Más
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
              {/* <!--================ Navigation ================--> */}
              <nav className="mad-navigation-container">
                <ul className="mad-navigation mad-navigation--vertical-sm">
                  <li className="menu-item menu-item-has-children home-menu mega-menu current-menu-item">
                    <a href="#">
                      Home
                    </a>
                    {/* <!--================ Sub Menu ================--> */}
                    <ul className="sub-menu">
                      <li className="mad-home-title">
                        <div className="mad-home-menu-title">
                          Choose Your Demo
                        </div>
                      </li>
                      <li className="menu-item current-menu-item">
                        <a href="index.html">
                          <div className="home-menu-img">
                            <img src="/images/197x200_home1.jpg" alt="" />
                          </div>
                          Home v1
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="home_2.html">
                          <div className="home-menu-img">
                            <img src="/images/197x200_home1.jpg" alt="" />
                          </div>
                          Home v2
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="home_3.html">
                          <div className="home-menu-img">
                            <img src="/images/197x200_home1.jpg" alt="" />
                          </div>
                          Home v3
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="home_4.html">
                          <div className="home-menu-img">
                            <img src="/images/197x200_home1.jpg" alt="" />
                          </div>
                          Home v4
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="pages_coming_soon.html">
                          <div className="home-menu-img">
                            <img src="/images/197x200_home1.jpg" alt="" />
                          </div>
                          Coming soon
                        </a>
                      </li>
                    </ul>
                    {/* <!--================ End of Sub Menu ================--> */}
                  </li>
                  <li className="menu-item menu-item-has-children mega-menu">
                    <a href="#">
                      Tienda
                    </a>
                    {/* <!--================ Sub Menu ================--> */}
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="sub-title">
                          With Sidebar Layouts
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="shop_grid_2c_sidebar.html">
                              2 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_3c_sidebar.html">
                              3 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c_sidebar.html">
                              4 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_list_sidebar.html">
                              List View
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_3c_full_sidebar.html">
                              3 Column Full Width Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c_full_sidebar.html">
                              4 Column Full Width Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_5c_full_sidebar.html">
                              5 Column Full Width Grid
                            </a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="sub-title">
                          No Sidebar Layouts
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="shop_grid_3c.html">
                              3 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c.html">
                              4 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_5c.html">
                              5 Column Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c_full.html">
                              4 Column Full Width Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_5c_full.html">
                              5 Column Full Width Grid
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_6c_full.html">
                              6 Column Full Width Grid
                            </a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="sub-title">
                          Category Layouts
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="shop_category.html">
                              Only Categories
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c.html">
                              Icon Categories
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c_full.html">
                              Image Categories
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_5c.html">
                              Background Image
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_3c_sidebar.html">
                              Image Slider
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_4c_sidebar.html">
                              Category Banner
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_grid_5c_full.html">
                              Special Deal Section
                            </a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="sub-title">
                          Filter Positions
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="shop_grid_3c_sidebar.html">
                              Visible Filter
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_filter_drawer.html">
                              Filter Drawer
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_filter_toggle.html">
                              Toggle Filter
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_filter_canvas.html">
                              Filter Off Canvas
                            </a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                        <a href="#" className="sub-title">
                          Pagination Variations
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="shop_loading.html">
                              Loading Infinity
                            </a>
                          </li>
                          <li className="menu-item">
                            <a href="shop_buttons.html">
                              Load More Button
                            </a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#" className="sub-title">
                          Product Layouts
                        </a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="shop_layout_default.html">Default</a></li>
                          <li className="menu-item"><a href="shop_layout_boxed.html">Boxed With Sidebar</a></li>
                          <li className="menu-item"><a href="shop_layout_info.html">Extended Info</a></li>
                          <li className="menu-item"><a href="shop_layout_gallery.html">Gallery</a></li>
                          <li className="menu-item"><a href="shop_layout_sticky_info.html">Sticky Info</a></li>
                          <li className="menu-item"><a href="shop_layout_full_sidebar.html">Full Width With Sidebar</a></li>
                          <li className="menu-item"><a href="shop_layout_full_grid.html">Full Width Grid</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Product Types</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="shop_layout_default.html">Simple</a></li>
                          <li className="menu-item"><a href="shop_layout_sticky_info.html">Grouped</a></li>
                          <li className="menu-item"><a href="shop_layout_boxed.html">Variable</a></li>
                          <li className="menu-item"><a href="shop_layout_full_sidebar.html">External/Affiliate</a></li>
                          <li className="menu-item"><a href="shop_layout_gallery.html">On Sale</a></li>
                          <li className="menu-item"><a href="shop_layout_full_grid.html">Out Of Stock</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Shop Pages</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="shop_cart.html">Cart</a></li>
                          <li className="menu-item"><a href="shop_checkout.html">Checkout</a></li>
                          <li className="menu-item"><a href="shop_wishlist.html">Wishlist</a></li>
                          <li className="menu-item"><a href="shop_account.html">My Account</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                    </ul>
                    {/* <!--================ End of Sub Menu ================--> */}
                  </li>
                  <li className="menu-item menu-item-has-children"><a href="#">Paginas</a>
                    {/* <!--================ Sub Menu ================--> */}
                    <div className="sub-menu with-aside">
                      <ul>
                        <li className="menu-item"><a href="pages_about_v1.html">About v1</a>
                        </li>
                        <li className="menu-item"><a href="pages_about_v2.html">About v2</a>
                        </li>
                        <li className="menu-item"><a href="pages_contact_v1.html">Contact v1</a>
                        </li>
                        <li className="menu-item"><a href="pages_contact_v2.html">Contact v2</a>
                        </li>
                        <li className="menu-item"><a href="pages_faq.html">FAQs</a>
                        </li>
                        <li className="menu-item"><a href="pages_coming_soon.html">Coming Soon Page</a>
                        </li>
                        <li className="menu-item"><a href="pages_404.html">404 Page</a></li>
                      </ul>
                      <div className="sub-menu-aside">
                        <div className="mad-banners">
                          <a href="https://themeforest.net/user/monkeysan/portfolio" className="banner-link"
                            target="_blank"></a>
                          <div className="mad-banner" data-bg-image-src="/template/images/584x320_img1.jpg">
                            <div className="content-element-4">
                              <div className="content-element-3"><img src="/images/life_ext.png" alt="" /></div>
                              <h6 className="mad-title color-red style-3">Save Up To</h6>
                              <h2 className="mad-title color-red style-3 big-title">25% OFF</h2>
                              <h3 className="mad-title style-2">On Selected
                                Products</h3>
                            </div>
                            <div className="content-element-4">
                              <a href="#" className="btn btn-style-4">Shop Now!</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--================ End of Sub Menu ================--> */}
                  </li>
                  <li className="menu-item menu-item-has-children mega-menu"><a href="#">Elementos</a>
                    {/* <!--================ Sub Menu ================--> */}
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">General Elements <span
                        className="no-title">1</span></a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="elements_accordions_toggles.html">Accordions
                            &amp; Toggles</a></li>
                          <li className="menu-item"><a href="elements_alert_boxes_buttons.html">Alert Boxes
                            &amp; Buttons</a></li>
                          <li className="menu-item"><a href="elements_banners.html">Banners and Sliders</a></li>
                          <li className="menu-item"><a href="elements_call_to_actions.html">Call to Actions</a></li>
                          <li className="menu-item"><a href="elements_counters.html">Counters & Countdowns</a></li>
                          <li className="menu-item"><a href="elements_icon_boxes.html">Icon With Text</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title no-title">General Elements
                        2</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="elements_image_boxes.html">Image With Text</a></li>
                          <li className="menu-item"><a href="elements_pricing.html">Pricing Tables</a></li>
                          <li className="menu-item"><a href="elements_tables.html">Tables & Progress Bars</a></li>
                          <li className="menu-item"><a href="elements_tabs.html">Tabs & Tour Sections</a></li>
                          <li className="menu-item"><a href="elements_team.html">Team Members & Partners</a></li>
                          <li className="menu-item"><a href="elements_testimonials.html">Testimonials</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Shop Elements</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="elements_categories.html">Product Categories</a></li>
                          <li className="menu-item"><a href="elements_carousels.html">Product Carousels</a></li>
                          <li className="menu-item"><a href="elements_lists.html">Product Lists</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#" className="sub-title">Typography</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="elements_dropcaps_blockquotes.html">Dropcaps
                            &amp; Blockquotes</a></li>
                          <li className="menu-item"><a href="elements_headings_and_paragraphs.html">Headings
                            &amp; Paragraphs</a></li>
                          <li className="menu-item"><a href="elements_highlights_tooltips_listings.html">Highlights, Tooltips
                            and
                            Listings</a></li>
                          <li className="menu-item"><a href="rtl/index.html">RTL Version</a></li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children sub-wrap"><a href="#" className="sub-title">Header and
                        Footer
                        Layouts</a>
                        <div className="sub-menu">
                          <ul>
                            <li className="menu-item"><a href="index.html">Header v1</a></li>
                            <li className="menu-item"><a href="home_2.html">Header v2</a></li>
                            <li className="menu-item"><a href="home_3.html">Header v3</a></li>
                            <li className="menu-item"><a href="home_4.html">Header v4</a></li>
                          </ul>
                          <ul>
                            <li className="menu-item"><a href="index.html">Footer v1</a></li>
                            <li className="menu-item"><a href="home_2.html">Footer v2</a></li>
                            <li className="menu-item"><a href="home_3.html">Footer v3</a></li>
                            <li className="menu-item"><a href="home_4.html">Footer v4</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    {/* <!--================ End of Sub Menu ================--> */}
                  </li>
                  <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                    {/* <!--================ Sub Menu ================--> */}
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children"><a href="#">classNameic Blog</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="blog_classNameic_sidebar.html">With Right Sidebar</a>
                          </li>
                          <li className="menu-item"><a href="blog_classNameic.html">Without Sidebar</a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="blog_masonry.html">Masonry Blog</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="blog_masonry_sidebar.html">With Right Sidebar</a>
                          </li>
                          <li className="menu-item"><a href="blog_masonry.html">Without Sidebar</a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                      <li className="menu-item menu-item-has-children"><a href="#">Single Blog Post</a>
                        {/* <!--================ Sub Menu ================--> */}
                        <ul className="sub-menu">
                          <li className="menu-item"><a href="blog_single_sidebar.html">With Right Sidebar</a>
                          </li>
                          <li className="menu-item"><a href="blog_single.html">Without Sidebar</a>
                          </li>
                        </ul>
                        {/* <!--================ End of Sub Menu ================--> */}
                      </li>
                    </ul>
                    {/* <!--================ End of Sub Menu ================--> */}
                  </li>
                </ul>
              </nav>
              {/* <!--================ End of Navigation ================--> */}
              <div className="mad-header-item">
                <div className="mad-shipping">
                  <i className="material-icons-outlined">local_shipping</i>
                  <span>Envio gratis</span> en pedidos mayores a $49
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        goRecoverPasswordFromLogin={goRecoverPasswordFromLogin}
        goRegisterFromLogin={goRegisterFromLogin}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <RecoveryPasswordModal
        isOpen={isRecoveryModalOpen}
        onClose={() => setIsRecoveryModalOpen(false)}
      />
    </>
  )
}

export default Header
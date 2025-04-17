"use client"; // Ensures useState works in a Next.js app

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import products from "./Data/Products";
import styles from "./page.module.css";
import Footer from "./components/Footer";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Slide1.jpg",
      text: "Discover Premium Tiles",
    },
    {
      image: "/images/Slide2.jpg",
      text: "Elevate your home with our finest selection!",
    },
    {
      image: "/images/Slide5.jpg",
      text: "Timeless Designs for Modern Spaces",
    },
    {
      image: "/images/Slide6.jpg",
      text: "Transform Your Interiors with Style",
    },
    {
      image: "/images/Slide7.jpg",
      text: "Unmatched Durability and Beauty",
    },
    {
      image: "/images/Slide8.jpg",
      text: "Crafted for Elegance and Excellence",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.png" // Update with your actual logo path
            alt="Company Logo"
            width={100}
            height={50}
            priority
          />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.menu}>
            {[
              { title: "Our Brands", submenu: ["Johnson", "Porselano", "Marbonite", "Endura"] },
              { title: "Category", submenu: ["Ceramic Tiles", "Glazed Vitrified Tiles", "Vitrified Tiles", "Industrial Tiles"] },
              { title: "Select by Spaces", submenu: ["Kitchen", "Bathroom", "Terrace", "Elevation", "Residential Flooring", "Commercial Flooring", "Industrial Flooring", "Parking & Exterior Floor"] },
              { title: "Special Tiles", submenu: ["Tac Tiles", "Anti Static", "Cool Roof (SRI)", "Countertops", "Staircase Solution", "Swimming Pool", "Landscaping", "Radiation Shielding Tile"] },
              { title: "Application", submenu: ["Wall Only | Floor & Wall"] },
              { title: "Size", submenu: ["Large", "Medium", "Small"] },
              { title: "Other Product Categories", submenu: ["Bath Fittings", "Sanitaryware", "Marble & Quartz"] },
            ].map((item, index) => (
              <li key={index} className={styles.menuItem} onMouseEnter={() => setOpenDropdown(index)} onMouseLeave={() => setOpenDropdown(null)}>
                <span>{item.title}</span>
                {openDropdown === index && (
                  <ul className={styles.dropdown}>
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link href={`#`}>{sub}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Slideshow Header Section */}
      <div className={styles.header}>
        <div className={styles.slideshow}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            >
              <Image src={slide.image} alt={slide.text} width={1200} height={500} className={styles.slideImage} />
              <div className={styles.slideText}>{slide.text}</div>
            </div>
          ))}
          <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
          <button className={styles.next} onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} width={350} height={200} className={styles.image} />
              {product.bestSeller && <span className={styles.bestSeller}>Best Seller</span>}
            </div>

            <div className={styles.details}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.bookedInfo}>{product.booked}% of stock already reserved!</p>

              <div className={styles.productDetails}>
                <h3 className={styles.detailsHeader}>Product Specifications</h3>
                <div className={styles.specifications}>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Size:</span>
                    <span className={styles.specValue}>{product.size}</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Packing:</span>
                    <span className={styles.specValue}>{product.packing}</span>
                  </div>
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Weight:</span>
                    <span className={styles.specValue}>{product.weight}</span>
                  </div>
                </div>
              </div>

              <Link href={`/product/${product.id}`} className={styles.viewButton}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

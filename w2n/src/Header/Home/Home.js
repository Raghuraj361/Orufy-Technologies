import React, { useState } from "react";
import Products from "../../Products/Products";
import Header from "../Header";
import "./Home.css";
import ListIcon from "@material-ui/icons/List";

// Hardcoded JSON data
const productData = [
  {
    id: 1,
    name: "Elegant designed fiber plant...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6LYZ7uZlGgUuVOEpycuzNp3puBP0fSwLQsbiWjPPlZ00qNaivSuoqEZslYwQIy2A3AA&usqp=CAU",
    brand: "Number A",
    category: "Number A",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 13.5,
  },
  {
    id: 2,
    name: "Coffee powder better morni...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSoUe5gTnM53BILWxg86DZ1o3XsBPEbfT_QmW3xIrXEi9i0ohguWqxCJ4K-wuvXjpMCw&usqp=CAU",
    brand: "Brand 2",
    category: "Brand 2",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 43.5,
  },
  {
    id: 3,
    name: "Decorative insta camera toy...",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/canon_1500D.jpeg",
    brand: "Brand C",
    category: "Brand C",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 31.5,
  },
  {
    id: 4,
    name: "Bag pack - Travel unlimited w...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rC5beold61a2MjMVKpJKn3NG2dgydILZuGky-oW2z1FdB7INooceXMLB4OK-nVovZlQ&usqp=CAU",
    brand: "Miracle",
    category: "Miracle",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 19,
  },
  {
    id: 5,
    name: "Decorative insta camera toy...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPqKrAtlftWknB7nP5wTF-0_EsCAM0zGW-72V1-R0s7Y4kbYiiMZHtbZJX9Z-aH97EWU&usqp=CAU",
    brand: "Brand C",
    category: "Brand C",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 999.4,
  },
  {
    id: 6,
    name: "Coffee powder better morni...",
    image:
      "https://5.imimg.com/data5/MY/TH/MY-3122741/nescafe-coffee-pouch-1000x1000.jpg",
    brand: "Brand 2",
    category: "Brand 2",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 33.6,
  },
  {
    id: 7,
    name: "Elegant designed fiber plant...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6cVu1KwxNq3xd0w9uGpm4Po28-VPfUwhuw&usqp=CAU",
    brand: "Number A",
    category: "Number A",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 10.8,
  },
  {
    id: 8,
    name: "Bag pack - Travel unlimited w...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8P0Ge4PQs1Q2xXbOs93-cvaBwUUzohAiYjQ&usqp=CAU",
    brand: "Miracle",
    category: "Miracle",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 48.3,
  },
  {
    id: 9,
    name: "Elegant designed fiber plant...",
    image:
      "https://img.freepik.com/premium-photo/ai-generated-photo-illustration-growing-mint-plant-green-pot-with-loamy-soil-placed-table_812649-761.jpg?w=2000",
    brand: "Number A",
    category: "Number A",
    description: "Decoration",
    rating: "⭐⭐⭐⭐⭐",
    price: 210.2,
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]);
  const [selectedSort, setSelectedSort] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  // Handle search by name
  const handleSearch = (query) => {
    setSearchQuery(query);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle filter by brand
  const handleFilterBrand = (brand) => {
    setSelectedBrand(brand);

    const filtered = productData.filter(
      (product) => brand === "" || product.brand === brand
    );
    setFilteredProducts(filtered);
  };

  // Handle filter by category
  const handleFilterCategory = (category) => {
    setSelectedCategory(category);

    const filtered = productData.filter(
      (product) => category === "" || product.category === category
    );
    setFilteredProducts(filtered);
  };

  // Handle filter by price range
  const handleFilterPriceRange = (value) => {
    setSelectedPriceRange(value);

    let filtered;
    if (value === "1-100") {
      filtered = productData.filter((product) => product.price < 100);
    } else if (value === "200-599") {
      filtered = productData.filter(
        (product) => product.price >= 200 && product.price <= 599
      );
    } else if (value === "500-799") {
      filtered = productData.filter(
        (product) => product.price >= 600 && product.price <= 999
      );
    } else {
      filtered = productData;
    }
    setFilteredProducts(filtered);
  };

  // Handle sorting
  const handleSort = (option) => {
    setSelectedSort(option);

    let sorted;
    if (option === "priceHighToLow") {
      sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (option === "priceLowToHigh") {
      sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else {
      sorted = productData;
    }
    setFilteredProducts(sorted);
  };

  return (
    <div>
      {/* Header */}
      <Header handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="home">
        <div className="brand_category_price">
          <div>
            <h4>
              Filter <ListIcon />
            </h4>
          </div>

          {/* Brand sectiion */}
          <div
            value={selectedBrand}
            onChange={(e) => handleFilterBrand(e.target.value)}
          >
            <div value="" className="value">
              All Brands
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Number A"
                  checked={selectedBrand === "Number A"}
                  onChange={(e) => handleFilterBrand(e.target.value)}
                />
                Number A
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Brand 2"
                  checked={selectedBrand === "Brand 2"}
                  onChange={(e) => handleFilterBrand(e.target.value)}
                />
                Brand 2
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Brand C"
                  checked={selectedBrand === "Brand C"}
                  onChange={(e) => handleFilterBrand(e.target.value)}
                />
                Brand C
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Miracle"
                  checked={selectedBrand === "Miracle"}
                  onChange={(e) => handleFilterBrand(e.target.value)}
                />
                Miracle
              </label>
              <label>
                <input
                  type="checkbox"
                  value="empty"
                  checked={selectedBrand === "empty"}
                  onChange={(e) => handleFilterBrand(e.target.value)}
                />
                empty
              </label>
            </div>
          </div>
          {/* end Brand sectiion */}
          {/* Category sectiion */}
          <div
            value={selectedCategory}
            onChange={(e) => handleFilterCategory(e.target.value)}
          >
            <div value="" className="value1">
              All Categories
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Number A"
                  checked={selectedCategory === "Number A"}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                />
                Number A
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Brand 2"
                  checked={selectedCategory === "Brand 2"}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                />
                Brand 2
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Brand C"
                  checked={selectedCategory === "Brand C"}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                />
                Brand C
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Miracle"
                  checked={selectedCategory === "Miracle"}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                />
                Miracle
              </label>
              <label>
                <input
                  type="checkbox"
                  value="empty"
                  checked={selectedCategory === "empty"}
                  onChange={(e) => handleFilterCategory(e.target.value)}
                />
                empty
              </label>
            </div>
          </div>
          {/* end Category sectiion */}
          {/* price section */}
          <div
            value={selectedPriceRange}
            onChange={(e) => handleFilterPriceRange(e.target.value)}
          >
            <div value="" className="value">
              All Price
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="1-100"
                  checked={selectedPriceRange === "1-100"}
                  onChange={(e) => handleFilterPriceRange(e.target.value)}
                />
                1-100
              </label>
              <label>
                <input
                  type="checkbox"
                  value="200-599"
                  checked={selectedPriceRange === "200-599"}
                  onChange={(e) => handleFilterPriceRange(e.target.value)}
                />
                200-599
              </label>
              <label>
                <input
                  type="checkbox"
                  value="600-999"
                  checked={selectedPriceRange === "600-999"}
                  onChange={(e) => handleFilterPriceRange(e.target.value)}
                />
                600-999
              </label>
              <label>
                <input
                  type="checkbox"
                  value="1000"
                  checked={selectedPriceRange === "1000"}
                  onChange={(e) => handleFilterPriceRange(e.target.value)}
                />
                1000
              </label>
            </div>
          </div>
          {/* end price section */}
        </div>

        <div className="home_product_sort">
          {/* sort sectiion */}
          <div className="uper_sort">
            <div className="h_decorate">Home/Home Decoration/Artificial</div>
            <select
              className="sort"
              value={selectedSort}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="priceHighToLow">Price High to Low</option>
              <option value="priceLowToHigh">Price Low to High</option>
            </select>
          </div>
          {/* end sort sectiion */}
          {/* Product Listing */}
          <div className="home_product">
            {filteredProducts.map((item) => {
              return <Products {...item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

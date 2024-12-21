import { useEffect, useState } from 'react';

// added breeds to the array
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Sphynx' },
  { name: 'Shadow', age: '1', breed: 'Abyssinian' },
  { name: 'Pumpkin', age: '3', breed: 'Bengal' },
  { name: 'Asta', age: '4', breed: 'Siamese' },
  { name: 'Sanji', age: '2', breed: 'Birman' },
  { name: 'Jimbe', age: '5', breed: 'Persian' },
  { name: 'Usopp', age: '3', breed: 'Sphynx' },
  { name: 'Shanks', age: '1', breed: 'Bengal' },
  { name: 'Condoriano', age: '4', breed: 'Abyssinian' },
  { name: 'Chopper', age: '2', breed: 'Siamese' },
  { name: 'Law', age: '3', breed: 'Birman' },
  { name: 'Garp', age: '1', breed: 'Persian' },
  { name: 'Aokiji', age: '4', breed: 'Sphynx' },
];

// for drop down box
const breeds = ['All', 'Sphynx', 'Peterbald', 'Birman', 'Abyssinian', 'Persian', 'Bengal', 'Siamese'];  

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [filteredCats, setFilteredCats] = useState([]); // this ensures thast after clicking the submit button the page changes accordingly

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithDetails = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithDetails);
        setFilteredCats(catsWithDetails); // Default all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };
    fetchCatImages();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const handleSearch = () => {
    const result = cats.filter((cat) => {
      const matchesName = cat.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesBreed = selectedBreed === 'All' || cat.breed === selectedBreed;
      return matchesName && matchesBreed;
    });
    setFilteredCats(result);  
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {/* Input field for search menu */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid black',
          }}
        />
        {/* drop down menu for breeds */}
        <select
          value={selectedBreed}
          onChange={handleBreedChange}
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid grey',
          }}
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 15px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: 'blue',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4" style={{ marginBottom: '20px' }}>
            <div
              className="cat-card"
              style={{
                border: '1px solid grey',
                borderRadius: '8px',
                padding: '15px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              />
              <div className="cat-info" style={{ textAlign: 'left' }}>
                <h3 className="h5 mb-1" style={{ marginBottom: '10px' }}>
                  {cat.name}
                </h3>
                <p className="mb-0" style={{ fontSize: '14px' }}>
                  Age: {cat.age}
                </p>
                <p className="mb-0" style={{ fontSize: '14px' }}>
                  Breed: {cat.breed}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

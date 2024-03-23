import { useState } from 'react';
import './App.css';
import mobil from './car.js';

function App() {
  const [cars, setCars] = useState(mobil);
  const [allCars] = useState(mobil);

  const setFilteredCar = (name, thing) => {
    const filteredCars = allCars.filter((car) => {
      const getCar = car[thing].toUpperCase();
      return getCar.includes(name.toUpperCase());
    });
    setCars(filteredCars);
  };

  const getCarBySearch = (e) => {
    const data = e.target.value;
    setFilteredCar(data, "nama");
  };

  const getCarBySelect = (e, thing) => {
    const data = e.target.value;
    setFilteredCar(data, thing);
  };

  return (
    <div className='body'>
      <div className='all-container'>
        <header>
          <div className='logo-zilla'>
            <img className='logo' src="/images/logoZilla.png" alt="logo-zilla" />
            <h1 className='zilla-title'>
              Zilla Showroom
            </h1>
          </div>
          <div className='top-bar'>
            <div className='title-bar'>
              <h2 className='text'>
                Cari Mobil Impian Anda
              </h2>
            </div>
            <div className='search-container'>
              <div className='search-bar'>
                <input type="text" placeholder='Search' onChange={getCarBySearch} />
              </div>
              <div className='button-search'>
                <i>
                  <img src="/images/search.png" alt="search" />
                </i>
              </div>
            </div>
            <div className='list-car'>
              <div className='name-car'>
                <select onChange={(e) => getCarBySelect(e, "merek")}>
                  <option>Merek</option>
                  {allCars.map((car, index) => (
                    <option key={index}>{car.merek}</option>
                  ))}
                </select>
              </div>
              <div className='type-car'>
                <select onChange={(e) => getCarBySelect(e, "tipe")}>
                  <option>Tipe</option>
                  {allCars.map((car, index) => (
                    <option key={index}>{car.tipe}</option>
                  ))}
                </select>
              </div>
              <div className='color-car'>
                <select onChange={(e) => getCarBySelect(e, "warna")}>
                  <option>Warna</option>
                  {allCars.map((car, index) => (
                    <option key={index}>{car.warna}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>
        <div className='main-section'>
          {cars.map((car, index) => (
            <div className='card' key={index}>
              <div className="image-car">
                <img src={`images/${car.path}`} alt="" />
              </div>
              <div className='info-car'>
                <div className='car-brand'>
                  <h3>{car.nama}</h3>
                </div>
                <div className='detail-car'>
                  <p><b>Merek:</b> {car.merek}</p>
                  <p><b>Warna:</b> {car.warna}</p>
                  <p><b>Tipe:</b> {car.tipe}</p>
                </div>
                <div className='button-detail'>
                  <a href={`detail/${car.id}`}>Lihat detail</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

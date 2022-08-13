import "./App.css";
import { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormLogin from "./components/Form/FormLogin";
import FormRegistro from "./components/Form/FormRegistro";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ReservaExito from "./components/ConfirmationMessages/ReservaExito";
import ReservaCreada from "./components/ConfirmationMessages/ReservaCreada"
import { useEffect } from "react";
import ProductReservation from "./components/ProductReservation/ProductReservation.jsx";
import Snackbar from "./components/Snackbar/Snackbar";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Reservations from "./components/Reservations/Reservations";

const SnackbarType = {
  success: "success",
  fail: "fail",
};
function App() {
  const snackbarRef = useRef(null);
  const [user, setUser] = useState(null)
  const [snackbar, setSnackbar] = useState({
    ref:{snackbarRef},
    message: "",
    type: "",
  });
  const [token, setToken] = useState(null)
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function handleChangeCheckInDate(value) {
    setCheckInDate(value)
  };

  function handleChangeCheckOutDate(value) {
    setCheckOutDate(value)
  };



  console.log(checkInDate)
  return (
    <div className="App">
      <Snackbar
        ref={snackbarRef}
        message={snackbar.message}
        type={snackbar.type} />
      <BrowserRouter>

        <div className="header">
          <Header user={user} setUser={setUser} isLogged={estaLogueado} setIsLogged={setEstaLogueado}></Header>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route

            path="/home/"
            element={
              <div>
                <Home dateRange={dateRange} setDateRange={setDateRange} />
              </div>
            }
          ></Route>
          <Route exact path="/login" element={<FormLogin snackbarRef={snackbarRef} setSnackbar={setSnackbar} user={user} setUser={setUser} isLogged={estaLogueado} setIsLogged={setEstaLogueado} />} />
          <Route exact path="/registro" element={<FormRegistro snackbarRef={snackbarRef} setSnackbar={setSnackbar} user={user} setUser={setUser} isLogged={estaLogueado} setIsLogged={setEstaLogueado} />} />
          <Route path="/producto/:id" element={<ProductDetail snackbarRef={snackbarRef} setSnackbar={setSnackbar} checkInDate={checkInDate} checkOutDate={checkOutDate} handleChangeCheckInDate={handleChangeCheckInDate} handleChangeCheckOutDate={handleChangeCheckOutDate} />} />
          <Route path="/ciudad/:idCiudad" element={
            <div>
              <Home dateRange={dateRange} setDateRange={setDateRange} />
            </div>
          } />
          <Route path="/ciudad/:idCiudad/fecha/:date1/:date2" element={
            <div>
              <Home dateRange={dateRange} setDateRange={setDateRange} />
            </div>
          } />
          <Route path="/categoria/:idCategoria" element={
            <div>
              <Home dateRange={dateRange} setDateRange={setDateRange} />
            </div>
          } />
          <Route path="/fecha/:date1/:date2" element={
            <div>
              <Home dateRange={dateRange} setDateRange={setDateRange} />
            </div>
          } />
          <Route path="/producto/:id/reservas" element={
            <div>
              <ProductReservation checkInDate={checkInDate} checkOutDate={checkOutDate} handleChangeCheckInDate={handleChangeCheckInDate} handleChangeCheckOutDate={handleChangeCheckOutDate} />
            </div>
          } />
          <Route path="/confirmacionReserva" element={<ReservaExito />} />
          <Route path="/reservaCreada" element={<ReservaCreada />} />
          <Route path ="/crearProducto" element={<CreateProduct />}/>
          <Route path ="/:userid/usuario" element={<Reservations />}/>
        </Routes>
        <main>
        </main>
        <div className="footer">
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

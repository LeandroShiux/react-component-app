import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import usePersistedState from "./usePersistedState.js";

const AppState = (props) => {
  const data = props.data;
  const [cart, setCart] = usePersistedState(data.localStorageKey, []);
  const [showSidebar, setShowSidebar] = useState(false);
  const [pokes, setPokes] = useState([]);
  const [pagePokes, setPagePokes] = useState([]);
  const [currentPokes, setCurrentPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentTerm, setCurrentTerm] = useState("");
  const pokesPerPage = 12;
  

  const apiUrl = "https://pokeapi.co/api/v2";

  const getPrice = (id) => {
    return ((id % 5) + 1) * 80;
  };

  const formatPrice = (id) => {
    return getPrice(id).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatCurrency = (price) => {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const getQuantity = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return cart[i].quantity;
      }
    }
    return 0;
  };

  const getPokes = useCallback(() => {
    let tempPokes = [];
    let pokesThisPage =
      page === totalPages ? currentPokes.length % pokesPerPage : pokesPerPage;
    for (let i = 0; i < pokesThisPage; i++) {
      tempPokes.push(currentPokes[(page - 1) * pokesPerPage + i]);
    }
    setPagePokes(tempPokes);
  },[page,totalPages, currentPokes])

  const getPokeName = (id) => {
    for (let i = 0; i < pokes.length; i++) {
      if (pokes[i].id === id) {
        return pokes[i].name;
      }
    }
    return undefined;
  };

  const cartAdd = (id) => {
    let hasProduct = false;
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          hasProduct = true;
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }, hasProduct)
    );
    if (!hasProduct) {
      setCart([
        ...cart,
        { id, name: getPokeName(id), price: getPrice(id), quantity: 1 },
      ]);
    }
  };

  const cartSub = (id) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity !== 0)
    );
  };

  const cartRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  const getTotalItems = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].quantity;
    }
    return count;
  };

  const pokeImgUrl = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  const pokeListUrl = () => {
    return `${apiUrl}/type/${data.type}`;
  };

  const processPokes = (pokemon) => {
    let pokes = [];
    for (let i = 0; i < pokemon.length; i++) {
      let urlSplit = pokemon[i].pokemon.url.split("/");
      pokes.push({
        id: urlSplit[urlSplit.length - 2],
        name: pokemon[i].pokemon.name,
      });
    }
    return pokes;
  };

  const handleSearch = (searchTerm) => {
    let nextPokes = pokes.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    });
    setCurrentTerm(searchTerm);
    setCurrentPokes(nextPokes);
    setTotalPages(Math.ceil(nextPokes.length / pokesPerPage));
    setPage(1);
  };

  const clearSearch = () =>{

    setCurrentTerm("");
    setCurrentPokes(pokes);
    setTotalPages(Math.ceil(pokes.length / pokesPerPage));
    setPage(1);
      
  }

  

  useEffect(() => {
    const fetchPokes = async () => {
      setLoading(true);
      const {
        data: { pokemon },
      } = await axios.get(pokeListUrl());
      let tempPokes = processPokes(pokemon);
      setPokes(tempPokes);
      setCurrentPokes(tempPokes);
      setTotalPages(Math.ceil(tempPokes.length / pokesPerPage));
      setLoading(false);
    };
    fetchPokes();
  }, []);


  useEffect(() => {

    getPokes();

  }, [getPokes])

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        pokes,
        setPokes,
        loading,
        setLoading,
        page,
        setPage,
        pokesPerPage,
        pokeListUrl,
        pokeImgUrl,
        getPrice,
        formatPrice,
        cartAdd,
        cartSub,
        cartRemove,
        getQuantity,
        getTotal,
        getTotalItems,
        formatCurrency,
        getPokes,
        totalPages,
        handleSearch,
        pagePokes,
        clearSearch,
        currentTerm,
        showSidebar, 
        setShowSidebar,
        data,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

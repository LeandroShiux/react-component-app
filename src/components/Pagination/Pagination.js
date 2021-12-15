import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container, Button } from "./style";

export default function Pagination() {
  const appContext = useContext(AppContext);
  const { page, totalPages, setPage } = appContext;
  const pageNumbers = [];
  var start = page < 3 ? 1 : page - 2;
  var end = start + 4 < totalPages ? start + 4 : totalPages;
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  const paginate = (e, n) => {
    e.preventDefault();
    setPage(n);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Container>
      <ul>
        {page >= 4 && (
          <>
            <li>
              <Button onClick={(e) => paginate(e, 1)}>1</Button>
            </li>
            <li>
              <Button>-</Button>
            </li>
          </>
        )}
        {pageNumbers.map((n) => (
          <li key={n}>
            <Button onClick={(e) => paginate(e, n)} current={n === page}>
              {n}
            </Button>
          </li>
        ))}
        {page <= totalPages - 3 && totalPages >5 && (
          <>
            <li>
              <Button>-</Button>
            </li>
            <li>
              <Button onClick={(e) => paginate(e, totalPages)}>
                {totalPages}
              </Button>
            </li>
          </>
        )}
      </ul>
    </Container>
  );
}

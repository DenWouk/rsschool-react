import { useRouter } from "next/router";
import "./PageSizeBtns.css";

export function PageSizeBtns() {
  const router = useRouter();

  const cardsPerPage = ["10", "20", "50"];

  function handleCardsPerPage(value: string) {
    router.push({
      query: {
        search: router.query.search || "news",
        limit: value,
        page: "1",
      },
    });
  }

  return (
    <div className="cards-qty-btns" data-testid="page-size-btns">
      <span className="cards-qty-title">Quantity per page:</span>
      {cardsPerPage.map((el) => (
        <button
          className="cards-qty-btn"
          key={el}
          onClick={() => handleCardsPerPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}

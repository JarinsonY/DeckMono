
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <li key={i} className={i === currentPage ? 'active' : ''}>
        <button onClick={() => onPageChange(i)}>{i}</button>
      </li>
    );
  }

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li>
          <button onClick={() => onPageChange(currentPage - 1)}>&lt;</button>
        </li>
      )}
      {pages}
      {currentPage < totalPages && (
        <li>
          <button onClick={() => onPageChange(currentPage + 1)}>&gt;</button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;

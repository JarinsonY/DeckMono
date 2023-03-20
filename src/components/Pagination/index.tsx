
import { useState } from 'react';
interface PaginationProps {
    page: number;
    prevPage: string;
    nextPage: string;
    onPageChange: (url: string) => Promise<void>;
}

const Pagination: React.FC<PaginationProps> = ({
    page,
    prevPage,
    nextPage,
    onPageChange,
}) => {
    const handlePrevPage = () => {
        onPageChange(prevPage);
    };
    const handleNextPage = () => {
        onPageChange(nextPage);
    };

    return (
        <ul className="pagination">
            {prevPage !== null && (
                <li>
                    <button onClick={handlePrevPage}>&lt;</button>
                </li>
            )}
            {page}
            {nextPage !== null && (
                <li>
                    <button onClick={handleNextPage}>&gt;</button>
                </li>
            )}
        </ul>
    );
};

export default Pagination;

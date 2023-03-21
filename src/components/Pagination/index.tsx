
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { PaginationButton, PaginationContainer } from './styled';
interface PaginationProps {
    total: number;
    page: number;
    prevPage: string;
    nextPage: string;
    onPageChange: (url: string) => Promise<void>;
}

const Pagination: React.FC<PaginationProps> = ({
    total,
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
        <PaginationContainer>
            {prevPage !== null && (
                <PaginationButton position={0} onClick={handlePrevPage}>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </PaginationButton>
            )}
            <PaginationButton position={1}>{page} of {Math.round(total / 10)}</PaginationButton>
            {nextPage !== null && (
                <PaginationButton position={2} onClick={handleNextPage}>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </PaginationButton>
            )}
        </PaginationContainer>
    );
};

export default Pagination;

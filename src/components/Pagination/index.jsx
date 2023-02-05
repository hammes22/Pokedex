import React from 'react';
import { PaginationButton, PaginationContainer, PaginationItem } from './styled';
import {AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / limit); i++) {
        pageNumbers.push(i);
    }

    const first = Math.max(currentPage - MAX_LEFT, 1);
    return (
        <PaginationContainer>
            <PaginationButton>
                {currentPage > 1 && (
                    <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                         {<AiOutlineLeft/>}
                    </PaginationItem>
                )}
                {Array.from({ length: Math.min(MAX_ITEMS, pageNumbers.length) })
                    .map((_, index) => index + first)
                    .map((number) => (
                        number <= Math.ceil(total / limit) &&
                        <PaginationItem
                            isSelect={number === currentPage}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </PaginationItem>


                    ))}
                {currentPage < pageNumbers.length && (
                    <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                        {<AiOutlineRight />}
                    </PaginationItem>
                )}
            </PaginationButton>
        </PaginationContainer>
    );
};

export default Pagination;
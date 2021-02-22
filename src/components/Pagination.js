import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginations = (props) => {
    // const { pages, page } = props.page
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            {/* <PaginationItem>
                <PaginationLink href="#">
                    1
        </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">
                    2
        </PaginationLink>
            </PaginationItem> */}
            <PaginationItem>
                <PaginationLink last href="#" />
            </PaginationItem>
        </Pagination>
    );
}

export default Paginations;
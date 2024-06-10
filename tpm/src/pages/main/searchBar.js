import React from 'react';
import { Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar () {

    return (

        <Nav className="ms-auto">
              <Form className="d-flex position-relative">
                <FormControl
                  type="search"
                  placeholder="검색어를 입력하세요"
                  className="search-Bar"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </Form>
              <style jsx>{`
                .search-Bar {
                    background-color: white;
                    width: 300px;
                    height: 40px;
                    border: None;
                    border-radius: 13px 13px 13px 13px;
                    padding-right: 40px;
                    color: #D9D9D9; /* 기본 글자색 */
                }

                .search-icon {
                    position: absolute;
                    right: 10px; /* 아이콘의 오른쪽 여백 */
                    top: 50%;
                    transform: translateY(-50%);
                    color: #3B6EF1;
                }

                .search-Bar:focus {
                    background-color: white;
                    color: black; /* 포커스됐을 때 글자색 */
                    outline: none;
                }
            `}</style>
        </Nav>

    );
}

export default SearchBar
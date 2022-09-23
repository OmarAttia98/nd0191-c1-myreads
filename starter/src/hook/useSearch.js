import { useState, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'



export default function useSearch(search) {

    const [searchBooks, setSearchBooks] = useState([]);
    const value = search;

    useEffect(() => {

        let isActive = true;
        if (value) {
            BooksAPI.search(value).then(data => {
                if (data.error) {
                    setSearchBooks([])
                } else {
                    if (isActive) {
                        setSearchBooks(data);
                    }
                }
            })
        }

        return () => {
            isActive = false;
            setSearchBooks([])
        }

    }, [value])


    return [searchBooks, setSearchBooks];

}
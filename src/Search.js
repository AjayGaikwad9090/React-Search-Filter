import React, { useState } from 'react';
import './search.css';
import { Users } from './utils';
import Table from "./Table";


export default function Search() {
    const [query, setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"]
    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)));
    }
    // const search = (data) => {
    //     return data.filter((item) => item.first_name.toLowerCase().includes(query) ||
    //         item.last_name.toLowerCase().includes(query) ||
    //         item.email.toLowerCase().includes(query));

    // }
    // console.log(query)
    // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")))
    return (
        <div className='searchFilter'>
            <h2 className='heading'>React Search Filter</h2>
            <div className="container">
                <input type="text" placeholder='Search...' onChange={(e) => setQuery(e.target.value)} className='search' />
                {/* <ul className="userList">
                    {Users.filter((user) => (user.first_name.toLowerCase().includes(query))).map((user) => (
                        <li key={user.id} className='userListItem'>{user.first_name}</li>
                    ))}
                </ul> */}
                <Table data={search(Users)} />
            </div>
        </div>
    )
}

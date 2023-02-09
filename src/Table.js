import React from 'react'

export default function Table({ data }) {
    return (
        <div>
            <table style={{ marginTop: "40px" }} className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

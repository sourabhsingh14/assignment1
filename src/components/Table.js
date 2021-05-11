import React from 'react'
import '../components/css/Table.css'

function Table() {

    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users?per_page=10");
      
      const json = await res.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);
    return (
        <div className="mainscreen_data">
                <table className="data__table">
                    <tr className="table__detail">
                        <td id="_td">Owner</td>
                        <td>End date</td>
                        <td>Profit</td>
                        <td>Loses</td>
                        <td>Phone</td>
                    </tr>
                    {users.length &&
          users.map((user) => {
            return (
                    <tr className="table__data" 
                    key={user.id} >
                        <td id="_td"> <img src={user.avatar}/>
                            {user.first_name}</td>
                        <td>1/15/12</td>
                        <td className="profit" > $ 382.85</td>
                        <td className="loss">$ 880.25</td>
                        <td>(603) 555-0123</td>
                    </tr>
            )})}

     
             
                </table>
            </div>
    )
}

export default Table

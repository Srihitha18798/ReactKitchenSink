import React,{useEffect,useState} from 'react';
import axios from 'axios';

const WS = () => {

  console.log("render")
  const [users,setUsers]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState();

  useEffect(()=>{
    axios.get("https://reqres.in/api/users").then((result)=>{
      setUsers(result.data.data);
      setIsLoading(false);
    })
    .catch((error)=>{
      setError(error);
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return(
      <div className="spinner-border text-primary" role="status">
			<span className="sr-only">Loading...</span>
		  </div>
    );
  }
  if(error){
    return <p className="text-error">{error.message}</p>
  }

  return (
    <>
    <div>WS call with Axios</div>
    <h4>useEffect-[] dependency</h4>

    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avater</th>

        </tr>
      </thead>

      <tbody>
        {users.map((user)=>{
          return(
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} className="img-thumbnail" alt={`Use avater for ${user.first_name}`}></img>
              </td>
            </tr>
          );

        })}
      </tbody>
    </table>
    </>
  )
}

export default WS
import React from 'react';
import { useNavigate } from 'react-router-dom';

const JSXExpressions = () => {
  const navigate=useNavigate();
  const TITLE="Expressions in JSX";
  let hasLoggedIn=true;
  let user={
    firstName:"Srihitha",
    lastName:"Tadiparthi"
  };

  const skills=[
    {id:1,name:"React"},
    {id:2,name:"ANgular"},
    {id:3,name:"Java"},
    {id:4,name:"JS"},
    {id:5,name:"React Native"},
    {id:6,name:"Android"},

  ]

  let skillTable=skills.map((skill,index)=>{
    return(
      <tr key={skill.id}>
        <td>{index}</td>
        <td>{skill.id}</td>
        <td>{skill.name}</td>
      </tr>
    );
  })

  let skillList=skills.map((skill,index)=>{
    return(
      <li key={skill.id}>
        {index}. {skill.name}
      </li>
    );
  })

  return (
    <>
    <h2>JSXExpressions</h2>

    <article>
      <h3>{TITLE}</h3>
      <p>4*4={4*4}</p>
      <p>
        {hasLoggedIn?(
          <span>Welcone {user.firstName}</span>
        ):(
          <span>Welcome Guest</span>
        )}
      </p>
    </article>
    <article>
      <h3>Iterations through map</h3>
      <ul>{skillList}</ul>
    </article>
    <article>
    <table className="table table-bordered table-hover">
      <thead className="thead-light">
        <th>Index</th>
        <th>Skill Id</th>
        <th>SKill Name</th>
      </thead>
      <tbody>
        {skillTable}
      </tbody>
    </table>
    </article>
    <button className="btn btn-primary btn-sm" onClick={()=>navigate("/home")}>
      Go Home
    </button>
    </>
  )
}

export default JSXExpressions
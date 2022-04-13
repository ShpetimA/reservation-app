import React from 'react'

const CompanyItems = (props) => {
  const {companys} = props;

  return (
    companys.map((company)=>{
      return (
          <li>
              <h3>{company.name}</h3>
          </li>
      )
    }
      
    )
  )
}

export default CompanyItems
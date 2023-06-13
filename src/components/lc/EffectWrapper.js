import React, { useEffect } from 'react'
import CdmCdu from './CdmCdu'
import CdmCduSalary from './CdmCduSalary'
import Cdm from './Cdm'

const EffectWrapper = () => {

    useEffect(() => {
		return () => console.log("component will unmount");
	  });

  return (
    <>
    <h3>Useeffect hook</h3>
    <article className="m-1 border border-secondary rounded">
        <CdmCdu/>
    </article>
    <article className="m-1 border border-secondary rounded">
        <CdmCduSalary/>
    </article>
    <article className="m-1 border border-secondary rounded">
        <Cdm/>
    </article>
    </>
  )
}

export default EffectWrapper
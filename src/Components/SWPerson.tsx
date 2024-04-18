import { UseFetch } from "../Hooks/UseFetch"

type SWPerson = {
    [key: string]: string;
}


const SWPerson = ({ url }:{url: string}) => {    
    const { data, loading, error } = UseFetch<SWPerson>(url)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    if(data)        
  return (
    <>
       <h1>{data?.name}</h1> 
       <p>Height: {data.height}</p>
       <p>Skin color: {data.skin_color}</p>
       <p>Birth year: {data.birth_year}</p>
       <p>Gender: {data.gender}</p>
        
    </>
  )
}

export default SWPerson
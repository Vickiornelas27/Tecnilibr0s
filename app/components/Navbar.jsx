import Link from 'next/link'
import React from 'react'

const rutas =[

    {
        ruta: "/",
        label : "inicio"
    },
    { ruta : "/",
    label : "acerca de "

    }
];


const Navbar = () => {
  return (
    <div>
        <ul className="flex flex-row gap-3 bg-black text-white  text-1xl p-10">

            {rutas.map(({ruta,label})=>(
                <li key={ruta}>
                <Link href={ruta}>{label}</Link></li>
            ))}
           
            <li>acerca de </li>
            <li>creditos</li>
          
        </ul>
      
    </div>
  )
}

export default Navbar

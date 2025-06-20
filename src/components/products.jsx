import React from 'react'
import Product from './product'

function Products() {
    var products = [
       
        {title: "arquite" ,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." ,
            live:true,
            case: false },

            {title: "TTR" ,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." ,
                live:true,
                case: false },
            
                {title: "Yahoo" ,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." ,
                    live:true,
                    case: false },
            
                    
                    {title: "YIR" ,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." ,
                        live:true,
                        case: false },
                        
            
      
        

       
    ]
  return (
    <div className='w-full'>
        {products.map((val , index) => 
            <Product key={index} val={val} />
        )}
        
    </div>
  )
}

export default Products
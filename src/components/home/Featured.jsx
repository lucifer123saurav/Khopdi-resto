import React from 'react'
import decItems from './DecItems'
import { Fcard } from './Fcard'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
export const Featured = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (itemnum) => {

   switch (itemnum) {
      case 1:
       dispatch({type : "cheeseBurgerIncrement"});
       dispatch({type: "calculatePrice"});
       toast.success("Added To Cart");
       break;
     case 2:
       dispatch({type : "specialPizzaIncrement"});
       dispatch({type: "calculatePrice"});
       toast.success("Added To Cart");
       break;
     case 3:
       dispatch({type : "regularPizzaIncrement"});
       dispatch({type: "calculatePrice"});
       toast.success("Added To Cart");
       break;
     case 4:
       dispatch({type : "regularBurgerIncrement"});
       dispatch({type: "calculatePrice"});
       toast.success("Added To Cart");
       break;
       default:
       break;
   }

  };

  return <section id='featured'>
  <h2>Menu</h2>
  <div className='cntnr'>
      
      {
        decItems.map((item,index)=>{
          return <Fcard 
              key={item.itemno}
              dl={index/15}
              itemnum={item.itemno}
              imgsrc={item.src}
              price={item.price}
              des={item.description}
              handler = {addToCartHandler}

          />
        })
      }
      </div>
     
      </section>
}

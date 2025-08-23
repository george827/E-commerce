import React from 'react'
import './NewCollection.css'
import new_collections from '../assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  const [new_collections, setNewCollections] = React.useState([]);
  React.useEffect(() => {
    const fetchNewCollections = async () => {
      const response = await fetch("http://localhost:4000/newcollections");
      const data = await response.json();
      setNewCollections(data);
    };
    fetchNewCollections();
  }, []);
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item, i) => (
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </div>
    </div>
  )
}

export default NewCollection

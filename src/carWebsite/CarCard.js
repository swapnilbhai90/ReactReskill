import "../carWebsite/carProfile.css";
const ProfileCard=(props)=> { 

  const hanldeImageError = (event) => {
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s'; // Or replace with your desired default image
  }

    return <>
    <div>
      <img
        height={250}
        width={310}
        src={props.url}
        alt="No Name"
        class="center_img"
        onError={hanldeImageError}
       
     
      />
        
      <div class="textOwnerName"><b>Product :</b>{props.name}</div>
      <div class="textOwnerName"><b>category :</b>{props.email}</div>
      <div class="textOwnerName"><b>Stock :</b>{props.stock}</div>
      <div class="textOwnerName"><b>Price :</b>{props.price}</div>
      <div class="textRatingGood"><b>Rating  :</b>{props.rating}</div>
      </div>
   </>
  }
  
export default ProfileCard
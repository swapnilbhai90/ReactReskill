import "../carWebsite/carProfile.css";
const ProfileCard=(props)=> { 
    return <>
    <div>
      <img
        height={250}
        width={310}
        src={props.url}
        alt="Mercedes-Benz"
        class="center_img"
       
     
      />
        
      <div class="textOwnerName"><b>Product :</b>{props.name}</div>
      <div class="textOwnerName"><b>category :</b>{props.email}</div>
      <div class="textOwnerName"><b>Stock :</b>{props.stock}</div>
      <div class="textOwnerName"><b>Price :</b>{props.price}</div>

      </div>
   </>
  }
  
export default ProfileCard
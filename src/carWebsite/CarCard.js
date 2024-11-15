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
        
      <div class="textOwnerName"><b>Onwer Name :</b>{props.name}</div>
      <div class="textOwnerName"><b>Email Id :</b>{props.email}</div>
    

      </div>
   </>
  }
  
export default ProfileCard
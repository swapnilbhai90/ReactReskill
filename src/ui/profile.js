import './profile.css';
const ProfileCard=(props)=> { 
    return <>
    <div>
      <img
        height={250}
        width={250}
        src={props.url}
        alt="Mercedes-Benz"
      />
        
      <br></br> {props.text} 
      <h1>{props.number}</h1>
      </div>
   </>
  }
  
  export default function Gallery() {
    return (
      <div class="flex-container">
        <ProfileCard number="1" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard number="2" text="Porche " url="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F5%2F3213321%2F2024_Porsche_911_GTS_T_Hybrid_d028ae6919.jpg&w=750&q=75"/>
        <ProfileCard number="3" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard number="4" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard number="5" text="Porche " url="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F5%2F3213321%2F2024_Porsche_911_GTS_T_Hybrid_d028ae6919.jpg&w=750&q=75"/>
        <ProfileCard number="6" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard number="7" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard number="9" text="Porche " url="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F5%2F3213321%2F2024_Porsche_911_GTS_T_Hybrid_d028ae6919.jpg&w=750&q=75"/>
        <ProfileCard number="10 s" text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard text="Porche " url="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F5%2F3213321%2F2024_Porsche_911_GTS_T_Hybrid_d028ae6919.jpg&w=750&q=75"/>
        <ProfileCard text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
      </div>
    );
  }
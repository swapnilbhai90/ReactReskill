const ProfileCard=(props)=> {
    return <>
      <img
        height={250}
        width={250}
        className="rounded-full"
        src={props.url}
        alt="Mercedes-Benz"
      />
      <h1>{props.text}</h1>
   </>
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Top Cars</h1>
        <ProfileCard text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <ProfileCard text="Porche " url="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F5%2F3213321%2F2024_Porsche_911_GTS_T_Hybrid_d028ae6919.jpg&w=750&q=75"/>
        <ProfileCard text="Mercedes" url="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
      </section>
    );
  }
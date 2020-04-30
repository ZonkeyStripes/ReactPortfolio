import React from "react";
import SimpleSlider from "../components/Slides";

function Home() {
    
    return (
        <div className="holder">
            <p className="text">
            My name is Harley and I am currently a burger representative at a local Tucson, Az restaraunt <a href="https://www.divinebovineburgers.com/">Divine Bovine</a>. I have taken a full stack MERN course at the Univerity of Arizona and plan on furthering my knowledge in progamming and development by tackling side projects and continuing my journey of education through college. You can checkout some of my projects at my github page in the link provided!
            </p>
        <div className="container bodyC">
            <SimpleSlider />
        </div>
        </div>
    )
};

export default Home;
6
import { useNavigate, useParams } from "react-router-dom";

export default function FrontEnd(){
   const navigate=useNavigate();
   const params=useParams();
   function ToCheckUpdates(){
    navigate("/realtime");
   };
   return (
        <div style={{ position: "relative" }}>
            <img
                src="https://wallpaperaccess.com/full/3949082.png"
                alt="FrontEnd Wallpaper"
                style={{ width: "100%", height: "auto" }}
            />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                <h1>Hello Welcome to FrontEnds Images</h1>
                <button type="submit" onClick={ToCheckUpdates}>updated rate</button>
            </div>
        </div>
    );
}
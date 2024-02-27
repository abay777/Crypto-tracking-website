import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchCryptoById } from "../api config/cryptoSlice";
import { AppDispatch } from "../store";
import './styles/coindetails.css';
import { Navbar } from ".";

interface CryptoData {
    // Define the structure of your CryptoData object
    symbol: string;
    name: string;
    priceUsd: number;
    changePercent24Hr: number;
    marketCapUsd: number;
    id:string
    explorer:string

  }
  

interface RootState {
    crypto :{
        cryptoData:CryptoData[];
        error:null | string | undefined;
        selectedCrypto: CryptoData | null;
        status:null|string;

    }
}


export const CoinDetails:React.FC = () => {

    const dispatch:AppDispatch = useDispatch()
    const coinId=useParams<string>().id;    
    const coinDetail = useSelector((state:RootState)=> state.crypto?.selectedCrypto)
    


    useEffect(()=>{
        if(coinId){
            dispatch(fetchCryptoById(coinId))  
        }

    },[dispatch])
    
    
  return (
    
    <>
    <Navbar/>
     <section className="coinContainer">
        <img loading="lazy" src={`http://source.unsplash.com/600x600?${coinDetail?.name}`} alt="" />
        <div className="coinDiscription">
            <div className="Panel">
            
            <div className="top">
                <span>24h-change</span>
                <span>price</span>
                <span>symbol</span>
            </div>
            <div className="bottom">
               <span className={Number(coinDetail?.changePercent24Hr)>0?'green'
                :'red'}>{Number(coinDetail?.changePercent24Hr).toFixed(2)}%</span>
                <span className="price">$ {Number(coinDetail?.priceUsd).toFixed(2)}</span>
                <span>{coinDetail?.symbol}</span>
            </div>
                
            </div>

            <p className="atag"><a href={coinDetail?.explorer}>FOR FURTHER DETAILS PLEASE VISIT THIS WEBSITE</a></p>
                        
        </div>
        
     </section>
    </>
    
  )
}

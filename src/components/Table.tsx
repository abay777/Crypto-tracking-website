import './styles/table.css';
import {  motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import sample from '../assets/sample img.png';
import { useSelector } from 'react-redux';
import { useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData } from '../api config/cryptoSlice';
import { AppDispatch } from '../store';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { Loader } from './';


interface CryptoData {
  // Define the structure of your CryptoData object
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
  marketCapUsd: number;
  id:string;
  // Add other properties as needed
}

interface RootState {
  crypto: {
    cryptoData: CryptoData[];
    error: string | undefined | null;
    status:null|string
  };
}


export const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const dispatch: AppDispatch = useDispatch();
  const ref =useRef(null)
  const inview = useInView(ref)
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);
 
  
  

  const cryptoData = useSelector((state: RootState) => state.crypto.cryptoData);
  const status = useSelector((state:RootState)=>state.crypto.status);

  const totalPages:number = Math.ceil(cryptoData.length/itemsPerPage)
  // Calculate the indexes of the items to display on the current page
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentCryptoData: CryptoData[] = cryptoData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="TableContainer" id="market">
      <h3>Live Market </h3>
      <table>
        <thead>
          <tr>
            <th>coin</th>
            <th>price</th>
            <th>change(24h)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>

          <AnimatePresence>
          {status === 'loading' ? (
            <tr>
              <td colSpan={4} className="loading-cell">
               <Loader/>
              </td>
            </tr>
          ) : status === 'error' ? (
            <tr>
              <td colSpan={4}>
                <h1>
                  <strong>Sorry something went wrong in the server</strong>
                </h1>
              </td>
            </tr>
          ) : status === 'success' ? (
            currentCryptoData.map((crypto,index) => (
              <motion.tr
              ref={ref}
              initial={{opacity:0,x:-100}}
              animate={{opacity:1,x:0}}
              exit={inview?{ opacity: 0, x: -100 }:{opacity:1,x:0}}
              transition={{duration:1, delay: index*.9}}
              key={crypto.symbol + currentPage} >

                <td className="coin-cell">
                  <img className="coin-image" loading='lazy'  src={sample} alt="" />
                  <Link  className='links' to={`/${crypto.id}`}>{crypto.name}</Link>
                </td>

                <td>${crypto.priceUsd ? Number(crypto.priceUsd).toFixed(2) : 'N/A'}</td>

                <td className={crypto.changePercent24Hr > 0 ? 'green' : 'red'}>
                  
                  {`${Number(crypto.changePercent24Hr).toFixed(2)}%`}
                </td>
                <td>${Number(crypto.marketCapUsd).toFixed(2)}</td>
              </motion.tr>
            ))
          ) : null}


          </AnimatePresence>



        
        </tbody>
      </table>


      {/* Pagination buttons */}
      <div className='pagination'>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className='pageIndicator'> Page {currentPage} of {totalPages} </span>
        {[...Array(totalPages)].map((_, index) =>
          index + 1 <= 5 && (
            <button key={index + 1} className='pageButton' onClick={() => handlePageClick(index + 1)}>
              {index + 1}
            </button>
         )
        )}
        
        
          
          
          
      
        <button onClick={handleNextPage} disabled={indexOfLastItem >= cryptoData.length}>
          Next
        </button>
      </div>
    </section>
  );
};



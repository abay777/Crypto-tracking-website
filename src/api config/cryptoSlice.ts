import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface CryptoData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: number;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: string;
  explorer: string;
}

interface ResponseData {
  data: CryptoData[];
}

interface responseData2 {
  data:CryptoData
}

interface CryptoState {
  cryptoData: CryptoData[];
  selectedCrypto: CryptoData | null;
  error: string | null | undefined;
  status: 'loading' | 'success' | 'error' | null;
}

export const fetchCryptoData = createAsyncThunk<CryptoData[]>(
  'crypto/fetchCrypto',
  async () => {
    try {
      const apiUrl = 'https://api.coincap.io/v2/assets';
      const response: AxiosResponse<ResponseData> = await axios.get(apiUrl);
      return response.data.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

export const fetchCryptoById = createAsyncThunk<CryptoData | null,
string,{rejectValue:string}>(
  'crypto/fetchCryptoById',
  async (id, {rejectWithValue}) => {
    try {
      const apiUrl = `https://api.coincap.io/v2/assets/${id}`;
      const response: AxiosResponse<responseData2> = await axios.get(apiUrl);
      return response.data.data;
    } catch (error:any|null) {
      return rejectWithValue(error.message);
    }
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    cryptoData: [],
    selectedCrypto: null,
    error: null,
    status: null,
  } as CryptoState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.cryptoData = action.payload;
        state.status = 'success';
        state.error = null;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.cryptoData = [];
        state.error = (action.error as Error).message ?? 'An error occurred';
        state.status = 'error';
      })
      .addCase(fetchCryptoById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCryptoById.fulfilled, (state, action) => {
        state.selectedCrypto  = action.payload;
        state.error = null;
        state.status = 'success';
      })
      .addCase(fetchCryptoById.rejected, (state, action) => {
        state.selectedCrypto = null;
        state.error = action?.payload ;
        state.status = 'error';
      });
  },
});

export default cryptoSlice.reducer;

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`cur_live_2W3CvkRkoAWoAjSEf2l83B1n6tkp75Y9LZkdpWszhttps://api.currencyapi.com/v3/latest?apikey=cur_live_2W3CvkRkoAWoAjSEf2l83B1n6tkp75Y9LZkdpWsz.jsonhttps://api.currencyapi.com/v3/latest?apikey=YOUR_API_KEY&base_currency=${currency}.JSON`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency,])
    console.log(data);
    return data
}

export default useCurrencyInfo;
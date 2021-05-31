/* eslint-disable no-undef */
import { useEffect, useContext } from 'react'
import { Platform } from 'react-tv'
import GlobalContext from '../context/GlobalContext'

const useNetworkConnection = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext)

    useEffect(() => {
        if(Platform('webos')){
            // Subscription
            const subscriptionHandle
            
            subscriptionHandle = webOS.service.request("luna://com.palm.connectionmanager", {
                method: "getStatus",
                parameters: { "subscribe": true },
                onSuccess: function (inResponse) {
                    if (typeof(inResponse.subscribed) != 'undefined') {
                        if (!inResponse.subscribed) {
                            console.log("Failed to subscribe network state")
                            return
                        }
                    }
                    
                    globalDispatch({ type: 'setNetworkConnection', payload: inResponse })
                    console.log("Result: " + JSON.stringify(inResponse))
                    // To-Do something
                },
                onFailure: function (inError) {
                    console.log("Failed to get network state")
                    console.log("[" + inError.errorCode + "]: " + inError.errorText)
                    // To-Do something
                    return
                }
            });
            
            // If you need to unsubscribe the data, use cancel() method as below
            // subscriptionHandle.cancel()
        }
    
        if(Platform('tizen')){
            resolve('Samsung Smart TV')
        }
    }, [input])
}
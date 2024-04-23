import {useParams} from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    
    const {roomId} = useParams()

    const meeting = async (element)=>{
        const appID =966570353;
        const serverSecret = "1ac73176ab3fb7390abb779e6b7f2855";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), 'tingku');

        const z = ZegoUIKitPrebuilt.create(kitToken)
        z.joinRoom({

            sharedLinks:[{
                  name:'copy the url',
                //   url:'http://thevideocall.surge.sh' 
            }],

            container:element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    } 

    return (
        <div ref={meeting} >
            
        </div>
    );
};

export default Room;
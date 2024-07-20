import { useEffect, useState } from "react";
import { connectToSupabaseChannel, unsubscribeFromSupabaseChannel } from "../utilities/supabaseMethods";
import { supabase } from "../utilities/supabaseClient";
import { RealtimeChannel } from "@supabase/supabase-js";


const GetStartedForm = () => {
    const [otp, setOtp] = useState('');
    const [channel, setChannel] = useState<RealtimeChannel | null>(null);

    const handleCreateRoom = () => {
        const channel = supabase.channel(otp);
        otp && setChannel(channel);
    };

    useEffect(() => {
        if (!channel) return;

        connectToSupabaseChannel(channel, (payload) => {
            console.log(payload)
        });
        
        return () => unsubscribeFromSupabaseChannel(channel);
    }, [channel]);

    return (
        <>
            <h1>Hi there, want to play a Pokémon card game with your friend? Please press the button below to get started.</h1>
            <h2>Please provide a one-time password to let your friend connect to the game.</h2>
            <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
            />
            <button onClick={handleCreateRoom}>Create Room</button>
        </>
    )
}

export default GetStartedForm
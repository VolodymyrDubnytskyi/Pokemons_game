import { REALTIME_LISTEN_TYPES, RealtimeChannel } from "@supabase/supabase-js";

export const connectToSupabaseChannel = (channel: RealtimeChannel, callback: (payload: {
    [key: string]: any;
    type: `${REALTIME_LISTEN_TYPES.BROADCAST}`;
    event: string;
}) => void) => {
    channel
        .on('broadcast', { event: 'test' }, (payload) => callback(payload))
        .subscribe();
};

export const sendMessageToSupabaseChannel = (channel: RealtimeChannel, message: string) => {
    channel.send({
        type: 'broadcast',
        event: 'test',
        payload: { message: message },
    });
};

export const unsubscribeFromSupabaseChannel = (channel: RealtimeChannel) => {
    channel.unsubscribe();
};
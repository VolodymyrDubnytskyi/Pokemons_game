import { useQuery } from '@apollo/client';
import './App.css';
import { GET_ALL_POKEMON } from './graphql/getAllPokenons';
import { supabase } from './utilities/supabaseClient';
import { useState, useEffect } from 'react';
import GetStartedForm from './components/GetStartedForm';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_POKEMON);
  // const [otp, setOtp] = useState('');
  // const [channel, setChannel] = useState(null);

  console.log({ loading, error, data });

  // useEffect(() => {
  //   if (channel) {
  //     // Simple function to log any messages we receive
  //     function messageReceived(payload) {
  //       console.log(payload);
  //     }

  //     // Subscribe to the Channel
  //     channel
  //       .on('broadcast', { event: 'test' }, (payload) => messageReceived(payload))
  //       .subscribe();

  //     // Cleanup function to unsubscribe on unmount
  //     return () => {
  //       channel.unsubscribe();
  //     };
  //   }
  // }, [channel]);


  // const handleSendMessage = () => {
  //   if (channel) {
  //     // Send a message
  //     channel.send({
  //       type: 'broadcast',
  //       event: 'test',
  //       payload: { message: 'hello, world' },
  //     });
  //   }
  // };

  return (
    <>
      <GetStartedForm/>
      {/* <button onClick={handleSendMessage} disabled={!channel}>Send Message</button> */}
    </>
  );
}

export default App;

import React from 'react';
import Polipop from 'polipop';

// Default implementation, that you can customize
export default function Root({children}) {

//   var polipop = new Polipop('mypolipop', {
//       layout: 'popups',
//       position: 'bottom-right',
//       progressbar: true,
//       sticky: true,
//
//   });
//
//   polipop.add({
//     content: 'Please be aware that Shardeum Liberty may be reset within the next 24 hours for performance updates. If there is some data that you want to pull from your DApps, we suggest doing it now to make sure your data is not lost in the event of a full network re-launch.',
//     title: 'Upcoming Reset',
//     type: 'default',
// });

  return <>{children}</>;

}

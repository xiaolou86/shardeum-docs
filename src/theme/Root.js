import React from 'react';
import Polipop from 'polipop';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Default implementation, that you can customize
// export default function Root({children}) {
//
//   if (ExecutionEnvironment.canUseDOM) {
//     var polipop = new Polipop('mypolipop', {
//       layout: 'popups',
//       position: 'bottom-right',
//       progressbar: true,
//       sticky: true
//     });
//
//     polipop.add({content: `<b>Reminder:</b> The Liberty Testnet will be rebooted at 11:00 AM Central Time. The reboot will take about 4 hours. All data will be preserved`, title: 'Liberty 1.1 Reboot', type: 'default'});
//   }

  return <> {
    children
  }</>;

}

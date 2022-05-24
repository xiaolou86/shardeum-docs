import React from 'react';
import Polipop from 'polipop';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Default implementation, that you can customize
export default function Root({children}) {

  if (ExecutionEnvironment.canUseDOM) {
    var polipop = new Polipop('mypolipop', {
      layout: 'popups',
      position: 'bottom-right',
      progressbar: true,
      sticky: true
    });

    polipop.add({content: `<b>Reminder:</b> Shardeum Liberty 1.1 will launch on May 25th, 2022 at 2:00 PM UTC.
    <br>
  <br>
    *Liberty 1.0 will be retired, and all account data may be lost. Accounts that received SHM from the Faucet through a tweet will automatically be given funds on Liberty 1.1.`, title: 'Liberty 1.1 Launch', type: 'default'});
  }

  return <> {
    children
  }</>;

}

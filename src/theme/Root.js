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

    polipop.add({content: `<b>Reminder:</b> The Liberty 1.0 network will be reset on May 5th, 2022 at 3:00 PM UTC.
    <br>
    <br>
    Accounts that received SHM from the Faucet through a tweet will be automatically given funds after the reset.`, title: 'Upcoming Reset', type: 'default'});
  }

  return <> {
    children
  }</>;

}

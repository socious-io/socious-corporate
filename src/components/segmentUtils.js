// This file defines utils functions to track events with Segment 

// track Button Click Event
export const trackButtonClick = (event, eventName=null) => {
  if (!eventName){
    eventName = `Clicked - ${event.target.innerText}`;
  };
  window.analytics.track(eventName)
};

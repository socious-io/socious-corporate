// This file defines utils functions to track events with Segment 

// track Button Click Event
export const trackButtonClick = (event) => {
  window.analytics.track(`Clicked - ${event.target.innerText}`);
};

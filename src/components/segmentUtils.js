// This file defines utils functions to track events with Segment 

// track Button Click Event
export const trackButtunClick = (event) => {
  window.analytics.track(`Clicked - ${event.target.innerText}`);
};

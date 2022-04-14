export const  formatTime = (time) =>{
  const [weekDay] = [new Date(time).toLocaleString('en-US', { hour: 'numeric', hour12: true })]
  return weekDay;
}
module.exports = function toReadable (number) {
    let nums = ['' , 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', ,'twenty' , 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let Tens = Math.trunc(number % 100 / 10);
    
    if (number == 0) {
      result = 'zero';
    }
    if (number > 0 && number < 20) {
      result = nums[number];
    }
    if (number >= 20 && number < 100) {
      result = (tens[Math.trunc(number / 10)] + " " + nums[number % 10]).trim();
    }
  
  if (number > 99) {
    if (Tens === 0) {
    result = (nums[Math.trunc(number / 100)] + " hundred " + nums[number % 10]).trim();
    }
    if (Tens ===1) {
      result = nums[Math.trunc(number / 100)] + " hundred" + " " + nums[Math.trunc(number % 10) + 10];
    }
     else if (Tens > 1) {
      result = (nums[Math.trunc(number / 100)] + " hundred" + " " + tens[Tens] + " " + nums[number % 10]).trim();
    }
   }
  return result;
  }
  
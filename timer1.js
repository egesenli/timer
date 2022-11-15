// For this app, we can think of at least these three:

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const args = process.argv.slice(2).map(Number)

const timer = function(args) {
  if (args.length > 0) {
    console.log("This will make it beep at:")
  }
  args.forEach(num => {
    if (num > 0 && num ) {
      setTimeout(() => console.log(`${num} seconds`, `\x07`), num * 1000);
    }
  });
};

timer(args);



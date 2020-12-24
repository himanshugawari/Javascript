let log = console.log;

log(parseInt('234'));
log(parseInt('234.234'));
log(parseInt('asd234.234'));
log(parseInt('234 asd'));
log(parseInt('234', 10)); // base 2 to 36; default is base 10
log(parseInt('F', 16));
log(parseInt('FF', 16));
log(parseInt('101', 2));

log(Number.parseInt(234.234234));
log(Number.parseInt('234.234234'));

log((234.234234).toFixed(2));

log(Math.round(234.234234));
log(Math.floor(234.234234));
log(Math.ceil(234.234234));
log(Math.random());
log(Math.floor(Math.random() * 3) + 1);
log(Math.max(1, 77, 88, 99, 6, 5, 41, 101, 55));
log(Math.min(1, 77, 88, 99, 6, 5, 41, 101, 55));

log(Number('123'));
log(Number('123') === 123); //true
log(Number('unicorn')); // NaN
log(Number(undefined)); // NaN
log(Number.MAX_SAFE_INTEGER);
log(Number.MAX_VALUE);
log(Number.MIN_SAFE_INTEGER);
log(Number.MIN_VALUE);
log(Number.EPSILON);
log(Number.POSITIVE_INFINITY);
log(Number.NEGATIVE_INFINITY);
log(Number.NaN);

let d = new Date('December 17, 2020 03:24:00');
log(Number(d));

log(Math.abs(-127.222));

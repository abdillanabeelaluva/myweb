;/*FB_PKG_DELIM*/

__d("useThrottledComet",["CometThrottle","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useLayoutEffect,k=b.useRef;function a(a,b){b===void 0&&(b=100);var d=k(a);j(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},b)});i(function(){return function(){e.cancel()}},[]);return e}g["default"]=a}),98);
__d("useThrottledImpl",["cr:1708227"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1708227")}),98);
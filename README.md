# DHEOS (Disable Hover Events On Scroll)

Simple jQuery plugin to disable hover events while scrolling

# Usage

On document ready, call the method on your root element (body on most
cases)

```
$('body').dheos();
```

you can pass a configuration object. the only paramenter that right now
accepts is the timeout. default is `132 ms` you can pass any number.

```
$('body').dheos({
  timeout: 500
});

```

`timeout` is the time before enable hover events after the scroll has
stopped

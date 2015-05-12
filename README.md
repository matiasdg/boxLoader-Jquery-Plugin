Note: I made this plugin just for fun, and to learn how to make a jquery plugin. So, it's not perfect (and my english either).


What you need
--------------

1. Download Jquery.
2. Download Jquery.boxLoader.

How to use
--------------

After you downloaded the files, put the scripts before the ```</body>``` tag:

```
<script src="jquery.js"></script>
<script src="jquery.boxloader.min.js"></script>
```

If you don't put the scripts before the ```</body>```, it might doesn't work correctly.

Example:
```
$('.myDiv').boxLoader({
    direction:"x",
    position: "100%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%"
});
```

Parameters
--------------

```
direction
```

The direction you want move the element.

X (Default).

Y.

None.

```
position
```
The value you want to move the element.

Example: 
If you want the element appear from the Left but with a little movement to the original position, you might try to set: ```direction:"x"``` and ```position:"-10%"```.

Values:
-100% to 100%. 50% by default.


```
effect
```

Values:

FadeIn (Default).

None.


```
duration
```

Duration fo the animation.
Values:
Any you want. 1s by default.

```
windowarea
```

The window area where the element will appear when you are scrolling.

Example:
If you set ```windowarea:100%``` the element will appear at the bottom of the window.

Values:
0% to 100%. 50% default.


```
container
```
If you want to use it when you scroll inside of other container, you need to add:

```
$('.myDiv').boxLoader({
    direction:"x",
    position: "100%",
    effect: "fadeIn",
    duration: "1s",
    windowarea: "50%",
    container: '#your_container_scrollable'.
});
```

Warnings:
---------

Depending of your css, the plugin could present some issues:

1.Some elements produce overflow of the parent element.

You need to set ```overflow-x:hidden``` to the parent element in your css.

Example:
```
.container { 
	overflow-x:hidden; 
}
```

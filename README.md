# scheduled-content-plugin

A JQuery plugin to show or hide content based on date and time.

## Installation

Download and include the plugin **after** including JQuery, at the bottom of your HTML file:

``` html
<!-- Include JQuery -->

<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<!-- Include Plugin -->

<script src="js/scheduled-content.js"></script>
```

## Usage

Using the plugin, you can specify a start date, and end date, or both.

### Start Date Only:

This will show the content only after a certain date.

``` javascript
<script>
	$('#selector').scheduleContent({
	start:'12/26/2014'
	});
</script>
```

### End Date Only:

This will show the content only before a certain date.

``` javascript
<script>
	$('#selector').scheduleContent({
	end:'12/26/2014'
	});
</script>
```

### Start And End Date:

This will show the content between two dates.

``` javascript
<script>
	$('#selector').scheduleContent({
	start:'12/26/2014',
	end:'12/31/2014'
	});
</script>
```

### Date format

You can enter dates in any format accepted by [javascript](http://msdn.microsoft.com/en-us/library/ie/ff743760%28v=vs.94%29.aspx)

**Please see [demo.html](https://github.com/55sketch/scheduled-content-plugin/blob/master/demo.html) for a fully worked up example based on The Twelve Days Of Christmas**

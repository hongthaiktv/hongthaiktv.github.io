tmenu - Linux Bash terminal menu generation
-------------------------------------------

```sh
Syntax: tmenu [default] [option 1] [option 2]... [option n]
        tmenu --color -s [OPTION SELECTED ARROW] color code.
```

`--color` : Set color option for tmenu.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (--color with no argument to set default color).

`-s`	: Silent - Do not echo message to terminal.

`--help` : This help screen.

> ***Exp:*** `tmenu` 'tmenu' 'tmenu' 'so' 'cool'<br>
> Will generate menu with 3 option and select 'tmenu' option as default.<br>
> If no default argument, first option will be set as default.<br>
> Press `'q'` to quit tmenu.

Variable:<br>
`TMENU_RESULT`: Get selected result.

Using `'source /path/tmenu.sh'` to add to your script before call tmenu.


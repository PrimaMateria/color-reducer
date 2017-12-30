# Color Reducer

React based application. Input is a list of hex colors and maximal deltaE distance.
Colors are clustered together if the deltaE distance between them is less than specified maximal distance.
Then the obtained clusters consisting or several colors are averaged to one color.
The final result is reduced palette of colors.

It's good idea to visually verify how the colors are merged and therefore application displays calculation steps.

For more details about deltaE: http://www.colorwiki.com/wiki/Delta_E:_The_Color_Difference.

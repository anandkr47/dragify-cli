<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## CanvasSpot



Canvas spots are elements drawn on top of the canvas. They can be used to represent anything you
might need but the most common use case of canvas spots is rendering information and managing
components rendered in the canvas.
Read here for more information about [Canvas Spots][1]

[Component]: component.html

### Properties

*   `id` **[String][2]** Spot ID.
*   `type` **[String][2]** Spot type.
*   `component` **[Component]?** Component to which the spot will be attached.
*   `componentView` **ComponentView?** ComponentView to which the spot will be attached.
*   `boxRect` **[Object][3]?** Fixed box rect of the spot, eg. `{ width: 100, height: 100, x: 0, y: 0 }`.

### getBoxRect

Get the box rect of the spot.

#### Parameters

*   `opts` **[Object][3]**  (optional, default `{}`)

#### Examples

```javascript
canvasSpot.getBoxRect();
// { width: 100, height: 50, x: 0, y: 0 }
```

Returns **[Object][3]** The box rect object

### getStyle

Get the style object of the spot.

#### Parameters

*   `opts` **[Object][3]**  (optional, default `{}`)

#### Examples

```javascript
canvasSpot.getStyle();
// { width: '100px', height: '...', ... }
```

Returns **CSSStyleDeclaration** \[opts]

### isType

Check the spot type.

#### Parameters

*   `type` **[String][2]**&#x20;

#### Examples

```javascript
canvasSpot.isType('select');
```

Returns **[Boolean][4]**&#x20;

[1]: https://dragifyjs.com/docs/modules/Canvas.html#canvas-spots

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

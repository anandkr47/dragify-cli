<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Panels

You can customize the initial state of the module from the editor initialization, by passing the following [Configuration Object][1]

```js
const editor = dragifyjs.init({
 panels: {
   // options
 }
})
```

Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance

```js
const panelManager = editor.Panels;
```

*   [addPanel][2]
*   [addButton][3]
*   [getButton][4]
*   [getPanel][5]
*   [getPanels][6]
*   [getPanelsEl][7]
*   [removePanel][8]
*   [removeButton][9]

## getPanels

Returns the collection of panels

Returns **Collection** Collection of panel

## getPanelsEl

Returns panels element

Returns **[HTMLElement][10]**&#x20;

## addPanel

Add new panel to the collection

### Parameters

*   `panel` **([Object][11] | Panel)** Object with right properties or an instance of Panel

### Examples

```javascript
const newPanel = panelManager.addPanel({
 id: 'myNewPanel',
 visible: true,
 buttons: [...],
});
```

Returns **Panel** Added panel. Useful in case passed argument was an Object

## removePanel

Remove a panel from the collection

### Parameters

*   `panel` **(Panel | [String][12])** Panel instance or panel id

### Examples

```javascript
const somePanel = panelManager.getPanel('somePanel');
const removedPanel = panelManager.removePanel(somePanel);

// or by id
const removedPanel = panelManager.removePanel('myNewPanel');
```

Returns **Panel** Removed panel

## getPanel

Get panel by ID

### Parameters

*   `id` **[string][12]** Id string

### Examples

```javascript
const myPanel = panelManager.getPanel('myPanel');
```

Returns **(Panel | null)**&#x20;

## addButton

Add button to the panel

### Parameters

*   `panelId` **[string][12]** Panel's ID
*   `button` **([Object][11] | Button)** Button object or instance of Button

### Examples

```javascript
const newButton = panelManager.addButton('myNewPanel',{
  id: 'myNewButton',
  className: 'someClass',
  command: 'someCommand',
  attributes: { title: 'Some title'},
  active: false,
});
// It's also possible to pass the command as an object
// with .run and .stop methods
...
command: {
  run: function(editor) {
    ...
  },
  stop: function(editor) {
    ...
  }
},
// Or simply like a function which will be evaluated as a single .run command
...
command: function(editor) {
  ...
}
```

Returns **(Button | null)** Added button. Useful in case passed button was an Object

## removeButton

Remove button from the panel

### Parameters

*   `panelId` **[String][12]** Panel's ID
*   `button` **any**&#x20;
*   `buttonId` **[String][12]** Button's ID

### Examples

```javascript
const removedButton = panelManager.addButton('myNewPanel',{
  id: 'myNewButton',
  className: 'someClass',
  command: 'someCommand',
  attributes: { title: 'Some title'},
  active: false,
});

const removedButton = panelManager.removeButton('myNewPanel', 'myNewButton');
```

Returns **(Button | null)** Removed button.

## getButton

Get button from the panel

### Parameters

*   `panelId` **[string][12]** Panel's ID
*   `id` **[string][12]** Button's ID

### Examples

```javascript
const button = panelManager.getButton('myPanel', 'myButton');
```

Returns **(Button | null)**&#x20;

[1]: https://github.com/dragifyJS/dragifyjs/blob/master/src/panels/config/config.ts

[2]: #addpanel

[3]: #addbutton

[4]: #getbutton

[5]: #getpanel

[6]: #getpanels

[7]: #getpanelsel

[8]: #removepanel

[9]: #removebutton

[10]: https://developer.mozilla.org/docs/Web/HTML/Element

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

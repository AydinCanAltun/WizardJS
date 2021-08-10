# WizardJS

## Usage

Import wizard.css and wizard.js to your html page and then

    var wizard = new Wizard({
	    contents: [
			{
				selector: "#_1",
				title: "Title",
				content: "Content",
				position: "top-left"
			},
			{
				selector: "#_2",
				title: "Title 2",
				content: "Content 2",
				position: "top-right"
			},
		]
    });
    wizard.start();

|  |  |
|--|--|
| selector | css selector of the target element |
| title |  string |
| content | string |
| position | top(default), top-left, top-right, bottom, bottom-left, bottom-right |



